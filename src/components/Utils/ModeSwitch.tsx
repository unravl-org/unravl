import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ModeSwitch: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(() => {
        // Ensure proper initialization of dark mode state
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    React.useEffect(() => {
        // Update the document's class and localStorage when the theme changes
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <button
            className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 dark:hover:bg-primary-dark/80 transition-colors duration-300 focus:outline-none flex items-center justify-center cursor-pointer"
            type="button"
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? (
                <FaMoon className="text-gray-800 dark:text-gray-200" size={24} />
            ) : (
                <FaSun className="text-yellow-500" size={24} />
            )}
        </button>
    );
};

export { ModeSwitch };