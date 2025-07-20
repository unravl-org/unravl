import React from 'react';

interface SuperIconsProps {
    name: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    className?: string;
}

const iconSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
};

const SuperIcons: React.FC<SuperIconsProps> = ({ name, size = 'md', className }) => {
    const iconClass = iconSizes[size] || iconSizes.md;

    return (
        <i className={`${iconClass} ${className} icon-${name}`}></i>
    );
};

export default SuperIcons;