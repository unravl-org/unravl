import React from 'react';
import SuperIcons from '../Utils/SuperIcons';
import InteractiveApplicationBox from './InteractiveApplicationBox';

type Application = {
    name: string;
    description: string;
    image?: string;
    tags?: string[];
    link?: string;
    status?: 'active' | 'inactive' | string;
};

type TopicSectionProps = {
    name: string;
    description: string;
    icon: string;
    applications: Application[];
    className?: string;
};

const TopicSection: React.FC<TopicSectionProps> = ({ name, description, icon, applications, className }) => {
    return (
        <div className={`rounded-2xl shadow-lg p-6 flex flex-col items-center ${className}`}>
            <SuperIcons name={icon} size="3xl" className="text-primary dark:text-primary-dark mb-4" />
            <h3 className="text-xl font-semibold text-secondary dark:text-secondary-dark mb-2">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {applications.map((app, index) => (
                    <InteractiveApplicationBox
                        key={index}
                        name={app.name}
                        description={app.description}
                        icon={app.image || 'default-icon'}
                        className="bg-secondary dark:bg-primary hover:shadow-xl transition-shadow duration-300"
                    />
                ))}
            </div>
        </div>
    );
};

export default TopicSection;