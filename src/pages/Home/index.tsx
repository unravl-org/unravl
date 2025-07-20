import { Background } from "../../components/Utils/Background";
import { SuperIcons } from "../../components/Utils/SuperIcons";
import index from "../../assets/data/index.json";
import type { Application, Index } from "../../Types";
import React, { useEffect, useState, useRef } from 'react';

// Welcome Component
  const Welcome: React.FC = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
  
    // Parallax effect for the entire container based on mouse movement
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setOffset({ x, y });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    // Create animated waving text
    const title = 'Learn By Doing.';
    const chars = title.split('');
  
    return (
      <Background
        iconNames={[
          { name: 'atom:fa' },
          { name: 'flask:fa' },
          { name: 'calculator:fa' },
          { name: 'leaf:fa' },
          { name: 'laptop-code:fa' },
        ]}
        layout="CLUTTERED"
        rotate="RANDOM"
        blink={true}
        className="bg-gradient-to-t from-accent to-secondary dark:from-accent-dark dark:to-secondary-dark w-screen h-screen top-0 left-0 flex items-center justify-center text-gray-100 dark:text-white relative overflow-hidden select-none"
      >
        {/* dark translucent overlay */}
        <div className="absolute top-0 left-0 w-full h-full  rounded-2xl pointer-events-none"></div>
  
        <div
          ref={containerRef}
          className="relative z-10 text-center"
          style={{
            transform: `translate3d(${offset.x * 15}px, ${offset.y * 15}px, 0)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <h1 className="text-5xl font-extrabold text-accent dark:text-accent-dark flex justify-center space-x-1 select-text">
            {chars.map((char, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  animation: `wave 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
  
        {/* Add some custom keyframe animations */}
        <style>{`

        `}</style>
      </Background>
    );
  };
  
  
// Interactive Application Box Component
const InteractiveApplicationBox: React.FC<{ name: string; description: string; image?: string; tags?: string[]; link?: string; status?: 'active' | 'inactive' | string; className?: string }> = ({
    name,
    image,
    description,
    tags,
    link,
    status,
    className,
}) => {
    return (
        <div
            className={`rounded-2xl shadow-lg bg-secondary/70 backdrop-blur-xl dark:bg-secondary/60 ${className}
                max-w-sm cursor-pointer h-[400px] overflow-hidden transition-transform transform hover:scale-105
                hover:shadow-2xl border border-secondary dark:border-secondary-dark
                text-primary dark:text-primary-dark p-1
                relative flex flex-col
                ` +
                (status === 'inactive' ? ' opacity-50 cursor-not-allowed' : '')}
            onClick={() => {
                if (status !== 'inactive' && link) {
                    window.open(link, '_blank');
                }
            }}
        >
            {image ? (
                <img src={image} alt={name} className="w-full h-40 object-cover rounded-t-2xl text-transparent" />
            ) : (
                <SuperIcons name="question-circle" size="2xl" className="m-4 mx-auto" />
            )}
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p className="">{description}</p>
                {tags && tags.length > 0 && (
                    <div className="bottom-0 left-0 absolute px-2 pb-2 pt-5 flex flex-wrap gap-2 rounded-b-2xl w-full bg-gradient-to-t from-white/60 dark:from-black/50 to-transparent via-transparent">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-slate-600 dark:bg-slate-700 text-white rounded-full text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

// Topic Section Component
const TopicSection: React.FC<{ name: string; description: string; icon: string; applications: Application[]; className?: string }> = ({
    name,
    description,
    icon,
    applications,
    className,
}) => {
    return (
        <Background
            iconNames={[
                { name: '' + icon + ':fa' },
            ]}
            layout="CLUTTERED"
            rotate="RANDOM"
            blink={true}
            className={`p-8 rounded-2xl shadow-lg bg-primary dark:bg-primary ${className}
            flex flex-col transition-all duration-300`}
        >
            <div className="text-center  text-gray-100 dark:text-white">
                <SuperIcons name={icon} size="3xl" className="mb-6" />
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-center">{description}</p>
                <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {applications.map((app, index) => (
                        <InteractiveApplicationBox
                            key={index}
                            name={app.name}
                            description={app.description}
                            image={app.image}
                            tags={app.tags}
                            link={app.link}
                            status={app.status}
                            className="bg-secondary dark:bg-primary hover:shadow-xl transition-shadow duration-300"
                        />
                    ))}
                </div>
            </div>
        </Background>
    );
};

// Topic Component
const Topic: React.FC = () => {
    const [showUnavailable, setShowUnavailable] = useState(false);
    const [filteredIndex, setFilteredIndex] = useState<Index[]>([]);

    useEffect(() => {
        // Filter the index based on the showUnavailable state
        const updatedIndex = index.map((topic) => ({
            ...topic,
            applications: showUnavailable
                ? topic.applications
                : topic.applications.filter((app) => app.status !== 'inactive'),
        }));
        setFilteredIndex(updatedIndex);
    }, [showUnavailable]);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 my-10">

            <h2 className="text-3xl font-extrabold text-primary dark:text-primary-dark mb-6">Topics</h2>
            <p className="text-lg text-primary dark:text-primary-dark text-center">
                Explore a variety of topics, from Physics to Computer Science.
            </p>
            <div className="
                flex items-center justify-center space-x-4 mt-6
                 max-w-2xl p-4 bg-accent dark:bg-accent-dark
                rounded-lg shadow-lg
                border border-accent dark:border-accent-dark
                transition-all duration-300
                hover:shadow-xl
                hover:bg-secondary/80 dark:hover:bg-primary/80
                dark:hover:border-accent-dark/80
                text-primary dark:text-primary-dark
                text-center
                "
            >
                <div className="flex items-center justify-center space-x-">
                    <form className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="showUnavailable"
                            className="cursor-pointer h-5 w-5 text-accent dark:text-accent-dark focus:ring-accent dark:focus:ring-accent-dark"
                            onClick={() => setShowUnavailable(!showUnavailable)}
                            checked={showUnavailable}
                        />
                        <label htmlFor="showUnavailable" className="text-secondary dark:text-secondary-dark cursor-pointer">
                            Show Unavailable Applications
                        </label>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mt-10 w-full px-6">
                {filteredIndex.map((topic: Index, index: number) => (
                    <TopicSection
                        key={index}
                        name={topic.topic}
                        description={topic.description}
                        icon={topic.icon}
                        applications={topic.applications}
                        className={`bg-secondary dark:bg-primary hover:shadow-xl transition-shadow duration-300 ${topic.style}`}
                    />
                ))}
            </div>
        </div>
    );
};

// Home Component
const Home: React.FC = () => {
    return (
        <section className="flex special-page flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 min-w-screen">
            <Welcome />
            <Topic />
        </section>
    );
};

export default Home;

