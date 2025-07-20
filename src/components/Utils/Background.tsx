import { useState, useEffect, useMemo, useCallback, type ReactNode, memo } from 'react';
import { SuperIcons } from './SuperIcons';
import clsx from 'clsx';

const StyleOptions = {
  GRID: 'grid opacity-10 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7',
  STACK: 'flex flex-col items-center justify-center opacity-10 space-y-4',
  CLUTTERED: 'flex flex-wrap opacity-10 -m-20 relative overflow-hidden align-center justify-center',
} as const;

interface BackgroundProps {
  iconNames: IconData[];
  rotate?: number | 'RANDOM';
  layout?: keyof typeof StyleOptions;
  className?: string;
  children?: ReactNode;
  blink?: boolean;
  iconCount?: number;
}

interface IconData {
  name: string;
  shouldBlink?: boolean;
  delay?: number;
  rotation?: number;
  href?: string;
}

interface ProcessedIcon extends IconData {
  id: string; // Stable key for React
}

// Memoized icon component to prevent unnecessary re-renders
const BackgroundIcon = memo<{
  iconData: ProcessedIcon;
  onIconClick: (href?: string) => void;
}>(({ iconData, onIconClick }) => {
  const handleClick = useCallback(() => {
    onIconClick(iconData.href);
  }, [iconData.href, onIconClick]);

  return (
    <div
      className="relative group"
      style={{
        transform: `rotate(${iconData.rotation}deg)`,
        willChange: 'transform', // Optimize for animations
      }}
    >
      <SuperIcons
        name={iconData.name}
        className={clsx(
          'opacity-50 transition-all duration-300 p-5',
          'hover:opacity-75 hover:scale-110',
          'group-hover:transition-transform group-hover:duration-300',
          'ease-in-out transform group-hover:opacity-100',
          { 'animate-twinkle': iconData.shouldBlink }
        )}
        style={{
          animationDelay: iconData.shouldBlink ? `${iconData.delay}s` : undefined,
        }}
        size="5xl"
        useNativeColors={true}
        onClick={handleClick}
      />
    </div>
  );
});

BackgroundIcon.displayName = 'BackgroundIcon';

const Background: React.FC<BackgroundProps> = ({
  iconNames,
  rotate,
  layout = 'GRID',
  className = '',
  children,
  blink = false,
  iconCount = 128, // Reduced default for better performance
}) => {
  const [isMounted, setIsMounted] = useState(false);

  // Stable reference for icon click handler
  const handleIconClick = useCallback((href?: string) => {
    if (href) {
      window.open(href, '_blank');
    }
  }, []);

  // Generate stable icons with consistent keys
  const icons = useMemo(() => {
    if (iconNames.length === 0) return [];
    
    // Use a seed for consistent randomization
    const seed = iconNames.map(icon => icon.name).join('|');
    let seedValue = 0;
    for (let i = 0; i < seed.length; i++) {
      seedValue = (seedValue << 5) - seedValue + seed.charCodeAt(i);
      seedValue = seedValue & seedValue; // Convert to 32bit integer
    }
    
    // Simple seeded random function for consistent results
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: iconCount }, (_, index) => {
      const randomIndex = Math.floor(seededRandom(seedValue + index) * iconNames.length);
      const icon = iconNames[randomIndex];
      
      return {
        id: `${icon.name}-${index}`, // Stable key
        name: icon.name,
        shouldBlink: blink && seededRandom(seedValue + index + 1000) < 0.1,
        delay: blink ? seededRandom(seedValue + index + 2000) * 5 : 0,
        rotation: rotate === 'RANDOM' 
          ? Math.floor(seededRandom(seedValue + index + 3000) * 360) 
          : (typeof rotate === 'number' ? rotate : 0),
        href: icon.href || undefined,
      };
    });
  }, [iconNames, blink, rotate, iconCount]);

  useEffect(() => {
    // Use RAF for smoother mounting animation
    const timeoutId = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(timeoutId);
  }, []);

  // Early return optimization
  if (iconNames.length === 0) return children || null;

  const containerStyle = useMemo(() => ({
    opacity: isMounted ? 1 : 0,
    willChange: 'opacity', // Optimize for opacity changes
  }), [isMounted]);

  return (
    <div
      className={clsx(
        'relative transition-opacity duration-1000 ease-in-out overflow-hidden',
        className
      )}
      style={containerStyle}
    >
      {/* Background icons */}
      <div className="absolute inset-0">
        <div className={clsx(StyleOptions[layout], 'animate-spin-slow')}>
          {icons.map((iconData) => (
            <BackgroundIcon
              key={iconData.id}
              iconData={iconData}
              onIconClick={handleIconClick}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export { Background };

// USAGE:

// <Background
//   iconNames={['circle-exclamation', 'bug', 'beer-mug-empty']}
//   layout="CLUTTERED" | "GRID"
//   rotate="RANDOM"
// >
//   <p>Your content here</p>
//   <div>More content</div>
// </Background>