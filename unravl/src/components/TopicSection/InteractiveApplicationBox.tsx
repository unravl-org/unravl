import React from 'react';
import { SuperIcons } from '../Utils/SuperIcons';

interface InteractiveApplicationBoxProps {
    name: string;
    description: string;
    icon: string;
    className?: string;
}

const InteractiveApplicationBox: React.FC<InteractiveApplicationBoxProps> = ({ name, description, icon, className }) => {
    return (
        <div className={`p-4 rounded-lg shadow-lg bg-secondary dark:bg-primary transition-transform transform hover:scale-105 ${className}`}>
            <SuperIcons name={icon} size="3xl" className="text-primary dark:text-primary-dark mb-4" />
            <h2 className="text-xl font-semibold text-secondary dark:text-secondary-dark mb-2">{name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    );
}

export default InteractiveApplicationBox;