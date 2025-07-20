import React from 'react';
import { SuperIcons } from '../../components/Utils/SuperIcons';
import { TopicSection } from '../../components/TopicSection/TopicSection';
import index from '../../assets/data/index.json';
import { Index } from '../../types/Index';

const Topic: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <h2 className="text-2xl font-bold text-secondary dark:text-secondary-dark mb-4">
                Topics
            </h2>
            <p className="text-lg text-secondary dark:text-secondary-dark mb-8">
                Explore a variety of topics, from Physics to Computer Science.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {index.map((topic: Index, index: number) => (
                    <TopicSection
                        key={index}
                        name={topic.topic}
                        description={topic.description}
                        icon={topic.icon}
                        applications={topic.applications}
                        className="bg-secondary dark:bg-primary hover:shadow-xl transition-shadow duration-300"
                    />
                ))}
            </div>
        </div>
    );
}

export default Topic;