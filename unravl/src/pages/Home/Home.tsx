import React from 'react';
import Welcome from './Welcome';
import Topic from './Topic';

const Home: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 min-w-screen">
            <Welcome />
            <Topic />
        </section>
    );
}

export default Home;