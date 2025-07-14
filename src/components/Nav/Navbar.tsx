import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import unravlLogo from '/src/assets/unravlorg-high-resolution-logo-transparent.svg'

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav className="bg-white/95 backdrop-blur-sm m-3 shadow-xl rounded-2xl dark:bg-gray-800/95 
                        fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <a href="/" className="flex items-center space-x-3 group">
                        <img src={unravlLogo} alt="Unravl Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
                        <div className="hidden md:block">
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Unravl</h1>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Unraveling the complexity of STEM
                            </p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                           dark:hover:text-unravl-accent transition-all duration-300 font-medium 
                                           relative group">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-unravl 
                                           group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                             dark:hover:text-unravl-accent transition-all duration-300 font-medium 
                                             relative group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-unravl 
                                           group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="/courses" className="text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                               dark:hover:text-unravl-accent transition-all duration-300 font-medium 
                                               relative group">
                            Courses
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-unravl 
                                           group-hover:w-full transition-all duration-300"></span>
                        </a>
                        
                        {/* STEM Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={toggleDropdown}
                                className="text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                         dark:hover:text-unravl-accent transition-all duration-300 font-medium 
                                         flex items-center gap-1 relative group"
                            >
                                STEM
                                <FaChevronDown className={`text-sm transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-unravl 
                                               group-hover:w-full transition-all duration-300"></span>
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 
                                               rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 overflow-hidden
                                               animate-fade-in">
                                    <a href="/stem/science" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 
                                                                      hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                                                                      dark:hover:from-gray-700 dark:hover:to-gray-600 
                                                                      transition-all duration-300">
                                        <span className="mr-3 text-2xl">🧪</span>
                                        <div>
                                            <div className="font-medium">Science</div>
                                            <div className="text-sm text-gray-500">Physics, Chemistry, Biology</div>
                                        </div>
                                    </a>
                                    <a href="/stem/technology" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 
                                                                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                                                                        dark:hover:from-gray-700 dark:hover:to-gray-600 
                                                                        transition-all duration-300">
                                        <span className="mr-3 text-2xl">💻</span>
                                        <div>
                                            <div className="font-medium">Technology</div>
                                            <div className="text-sm text-gray-500">Programming, Data Science</div>
                                        </div>
                                    </a>
                                    <a href="/stem/engineering" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 
                                                                         hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                                                                         dark:hover:from-gray-700 dark:hover:to-gray-600 
                                                                         transition-all duration-300">
                                        <span className="mr-3 text-2xl">⚙️</span>
                                        <div>
                                            <div className="font-medium">Engineering</div>
                                            <div className="text-sm text-gray-500">Circuit Design, Mechanics</div>
                                        </div>
                                    </a>
                                    <a href="/stem/mathematics" className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 
                                                                         hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                                                                         dark:hover:from-gray-700 dark:hover:to-gray-600 
                                                                         transition-all duration-300">
                                        <span className="mr-3 text-2xl">📊</span>
                                        <div>
                                            <div className="font-medium">Mathematics</div>
                                            <div className="text-sm text-gray-500">Calculus, Statistics, Algebra</div>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                             dark:hover:text-unravl-accent transition-all duration-300 font-medium 
                                             relative group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-unravl 
                                           group-hover:w-full transition-all duration-300"></span>
                        </a>

                        {/* CTA Button */}
                        <button className="bg-gradient-unravl hover:shadow-lg text-white px-6 py-2 rounded-xl 
                                         font-medium transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                 transition-colors duration-300 p-2"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                        <div className="space-y-4">
                            <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                               dark:hover:text-unravl-accent transition-all duration-300 font-medium py-2">
                                Home
                            </a>
                            <a href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                                 dark:hover:text-unravl-accent transition-all duration-300 font-medium py-2">
                                About
                            </a>
                            <a href="/courses" className="block text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                                   dark:hover:text-unravl-accent transition-all duration-300 font-medium py-2">
                                Courses
                            </a>
                            <a href="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-unravl-primary 
                                                   dark:hover:text-unravl-accent transition-all duration-300 font-medium py-2">
                                Contact
                            </a>
                            <div className="pt-4">
                                <button className="w-full bg-gradient-unravl text-white px-6 py-3 rounded-xl 
                                                 font-medium transition-all duration-300">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
