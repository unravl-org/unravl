import React, { useMemo, memo, useCallback } from 'react';
import * as Fa from 'react-icons/fa';
import * as Fa6 from 'react-icons/fa6';
import * as Md from 'react-icons/md';
import * as Si from 'react-icons/si';
import * as Di from 'react-icons/di';
import * as Gi from 'react-icons/gi';
import * as Pi from 'react-icons/pi';

interface SuperIconsProps {
  name: string;
  isSelected?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  useNativeColors?: boolean;
}

// Cache for icon lookups to avoid repeated parsing
const iconCache = new Map<string, React.ComponentType<any> | null>();

// Pre-computed size map
const SIZE_MAP: { [key: string]: number } = {
  sm: 10,
  base: 16,
  lg: 32,
  xl: 48,
  '2xl': 64,
  '3xl': 80,
  '4xl': 96,
  '5xl': 128
} as const;

// Optimized icon name normalization with caching
const iconNameCache = new Map<string, string>();

const normalizeIconName = (name: string): string => {
  if (iconNameCache.has(name)) {
    return iconNameCache.get(name)!;
  }
  
  const normalized = name
    .toLowerCase()
    .trim()
    .split(/[-_\s]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
  
  iconNameCache.set(name, normalized);
  return normalized;
};

// Optimized icon component lookup
const getIconComponent = (iconName: string, library: string): React.ComponentType<any> | null => {
  const cacheKey = `${iconName}:${library}`;
  
  if (iconCache.has(cacheKey)) {
    return iconCache.get(cacheKey)!;
  }
  
  const capitalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
  let IconComponent: React.ComponentType<any> | null = null;
  
  switch (library) {
    case 'devicon':
      IconComponent = (Si as any)[`Si${capitalizedName}`] || (Di as any)[`Di${capitalizedName}`];
      break;
    
    case 'fontawesome':
    case 'fa':
      IconComponent = (Fa as any)[`Fa${capitalizedName}`] || (Fa6 as any)[`Fa${capitalizedName}`];
      break;
    
    case 'material':
      IconComponent = (Md as any)[`Md${capitalizedName}`];
      break;
    
    case 'grommet':
      IconComponent = (Gi as any)[`Gi${capitalizedName}`];
      break;

    case 'pixelart':
      IconComponent = (Pi as any)[`Pi${capitalizedName}`];
      break;
    
    default:
      IconComponent = (Si as any)[`Si${capitalizedName}`] ||
                     (Di as any)[`Di${capitalizedName}`] ||
                     (Fa as any)[`Fa${capitalizedName}`] ||
                     (Fa6 as any)[`Fa${capitalizedName}`] ||
                     (Gi as any)[`Gi${capitalizedName}`] ||
                     (Md as any)[`Md${capitalizedName}`] ||
                     (Pi as any)[`Pi${capitalizedName}`];
  }
  
  iconCache.set(cacheKey, IconComponent);
  return IconComponent;
};

const SuperIcons: React.FC<SuperIconsProps> = memo(({
  name,
  className,
  size = 'base',
  style,
  onClick,
  useNativeColors = false,
}) => {
  const { IconComponent } = useMemo(() => {
    const nameParts = name.split(':');
    let rawIconName = '';
    let providedLibrary = 'fontawesome';

    if (nameParts.length > 1) {
      rawIconName = nameParts[nameParts.length - 2];
      providedLibrary = nameParts[nameParts.length - 1];
    } else {
      rawIconName = name;
    }

    const normalizedIconName = normalizeIconName(rawIconName);
    const component = getIconComponent(normalizedIconName, providedLibrary.toLowerCase());

    return {
      iconName: normalizedIconName,
      library: providedLibrary,
      IconComponent: component
    };
  }, [name]);

  const iconSize = SIZE_MAP[size] || SIZE_MAP.base;

  // Memoized container style
  const containerStyle = useMemo(() => ({
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    width: iconSize,
    height: iconSize,
    transition: 'all 0.2s ease-in-out',
    cursor: onClick ? 'pointer' : 'default',
    fontSize: iconSize,
    color: useNativeColors ? 'inherit' : style?.color,
    willChange: onClick ? 'transform' : 'auto', // Optimize for interactions
    ...style,
  }), [iconSize, onClick, useNativeColors, style]);

  // Memoized click handler
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  if (!IconComponent) {
    return null;
  }
  return (
    <div
      onClick={handleClick}
      className={className}
      style={containerStyle}
    >
      <IconComponent 
        size={iconSize} 
        color={useNativeColors ? 'currentColor' : undefined}
      />
    </div>
  );
});

SuperIcons.displayName = 'SuperIcons';

export { SuperIcons };


// Usage Example:
// <SuperIcons name="react" size="xl" onClick={() => console.log('Icon clicked!')} />
// <SuperIcons name="devicon:javascript" size="2xl" useNativeColors={true} />
// <SuperIcons name="fontawesome:coffee" size="lg" className="text-brown-500" />
// <SuperIcons name="material:home" size="base" style={{ color: 'blue' }} />
// <SuperIcons name="grommet:circle" size="3xl" />
// <SuperIcons name="pixelart:heart" size="4xl" className="text-red-500" />


// <SuperIcons />
// name: string
//    - The name of the icon, which can include a library prefix (e.g., "devicon:javascript").
//    - Options include:
//      - devicon: for Devicons
//      - fontawesome: for FontAwesome icons
//      - material: for Material Icons
//      - grommet: for Grommet Icons
//      - pixelart: for Pixelart Icons
//      - No prefix for Simple Icons or other libraries

// isSelected: boolean
//    - Optional. If true, applies a selected style to the icon.

// onChange: function
//    - Optional. Callback function for when the icon is clicked or selected.

// onRemove: function
//    - Optional. Callback function for when the icon is removed.

// onClick: function
//    - Optional. Callback function for when the icon is clicked.

// className: string
//    - Optional. Additional CSS classes to apply to the icon container.

// style: object
//    - Optional. Inline styles to apply to the icon container.

// size: string
//    - Optional. Size of the icon, can be 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', or '5xl'.
//    - Defaults to 'base'.

// useNativeColors: boolean
//    - Optional. If true, uses the icon's native colors instead of the style color.
//    - Defaults to false, meaning it will use the color defined in the style prop or the className.