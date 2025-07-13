import unravlLogo from '/src/assets/unravlorg-high-resolution-logo-transparent.svg'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white m-3 shadow-md rounded-lg dark:bg-gray-800 absolute top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <a href="/" className="flex-items-center space-x-3">
                    <img src={unravlLogo} alt="Unravl Logo" className="h-10 w-auto mr-3" />
                    <p className="text-xs pt-2 text-gray-800 dark:text-gray-200">
                        Unraveling the complexity of STEM
                    </p>
                </a>
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</a>
                    <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</a>
                    <div className="relative">
                        <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none"
                            onClick={() => document.querySelector('.dropdown-menu')?.classList.toggle('hidden')}>
                            STEM
                            <svg className="inline-block ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 hidden dropdown-menu ring-1">
                            <a href="/stem/engineering" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg">Engineering</a>
                            <a href="/stem/science" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg">Science</a>
                            <a href="/stem/technology" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg">Technology</a>
                            <a href="/stem/mathematics" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg">Mathematics</a>
                        </div>
                    </div>
                    <a href="/contribute" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contribute</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
