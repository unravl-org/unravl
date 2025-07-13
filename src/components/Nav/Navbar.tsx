import unravlLogo from '/src/assets/unravlorg-high-resolution-logo-transparent.svg'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        <a href="/" className="flex items-center space-x-2">
                            <img src={unravlLogo} alt="Unravl.org Logo" className="h-8" />
                        </a>
                    </div>
                    <div className="space-x-4">
                        <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">
                            Home
                        </a>
                        <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">
                            About
                        </a>
                        <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
