import { useState, useEffect, type ReactNode } from 'react';
import {SuperIcons} from './SuperIcons';

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
}

interface IconData {
  name: string;
  shouldBlink?: boolean;
  delay?: number;
  rotation?: number;
  href?: string;
}

const Background: React.FC<BackgroundProps> = ({ iconNames, rotate, layout = 'GRID', className = '', children, blink = false }) => {
  const [icons, setIcons] = useState<IconData[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  if (iconNames.length === 0) return children || null;

  useEffect(() => {
    const generateIcons = (): IconData[] => {
      return Array.from({ length: 256 }).map(() => {
        const randomIndex = Math.floor(Math.random() * iconNames.length);
        return {
          name: iconNames[randomIndex].name,
          shouldBlink: blink && Math.random() < 0.1, // 10% chance to blink
          delay: blink ? Math.random() * 5 : 0, // Random delay between
          rotation: rotate === 'RANDOM' ? Math.floor(Math.random() * 360) : (typeof rotate === 'number' ? rotate : 0),
          href: iconNames[randomIndex].href ? iconNames[randomIndex].href : undefined,
        };
      });
    };
    setIcons(generateIcons());
    setIsMounted(true);
  }, [blink, rotate]);

  return (
    <div 
      className={`relative transition-opacity duration-1000 ease-in-out overflow-hidden ${className}`}
      style={{ opacity: isMounted ? 1 : 0 }}
    >
      {/* Background icons */}
      <div className="absolute inset-0">
        <div className={`${StyleOptions[layout]} animate-spin-slow`}>
          {icons.map((iconData, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                transform: `rotate(${iconData.rotation}deg)`,
              }}
            >
              <SuperIcons
                name={iconData.name}
                className={`opacity-50 transition-all duration-300 p-5
                hover:opacity-75 hover:scale-110 
                group-hover:transition-transform group-hover:duration-300
                  ease-in-out transform group-hover:opacity-100 ${iconData.shouldBlink ? 'animate-twinkle' : ''}`}
                style={{
                  animationDelay: iconData.shouldBlink ? `${iconData.delay}s` : undefined
                }}
                size="5xl"
                useNativeColors={true}
                onClick={() => {
                  if (iconData.href) {
                    window.open(iconData.href, '_blank');
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
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