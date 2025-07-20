import React from 'react';

interface IconProps {
    name: string;
    shouldBlink?: boolean;
    delay?: number;
    rotation?: number;
    href?: string;
}

interface BackgroundProps {
    iconNames: IconProps[];
    layout?: 'CLUTTERED' | 'SPACED';
    blink?: boolean;
    className?: string;
}

const Background: React.FC<BackgroundProps> = ({ iconNames, layout = 'CLUTTERED', blink = false, className }) => {
    return (
        <div className={`relative ${className}`}>
            {iconNames.map((icon, index) => (
                <div
                    key={index}
                    className={`absolute ${layout === 'CLUTTERED' ? 'top-0 left-0' : 'flex justify-center items-center'} transition-transform duration-300`}
                    style={{
                        animation: icon.shouldBlink && blink ? `blink ${icon.delay}s infinite` : 'none',
                        transform: `rotate(${icon.rotation}deg)`,
                    }}
                >
                    <a href={icon.href}>
                        <i className={`fa ${icon.name}`}></i>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Background;