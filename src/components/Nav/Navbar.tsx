import React from 'react';

import unravlLogoLight from '/src/assets/unravlorg-high-resolution-logo-light-transparent.svg';
import unravlLogoDark from '/src/assets/unravlorg-high-resolution-logo-dark-transparent.svg';
import { ModeSwitch } from '../Utils/ModeSwitch';
import Logo from '../Utils/logo';
import {
    FaAtom,
    FaFlask,
    FaCalculator,
    FaLeaf,
    FaLaptopCode,
    FaGraduationCap,
    FaBars,
    FaTimes
} from 'react-icons/fa';
import type { IconType } from 'react-icons';

const NavbarLinks = [
    { name: 'Home', href: '/#/' },
    { name: 'About', href: '/#/about' },
    { name: 'Topics', subLinks: [
        { name: 'Physics', href: '/#/topics/phy', icon: FaAtom },
        { name: 'Chemistry', href: '/#/topics/chem', icon: FaFlask },
        { name: 'Mathematics', href: '/#/topics/math', icon: FaCalculator },
        { name: 'Biology', href: '/#/topics/bio', icon: FaLeaf },
        { name: 'Computer Science', href: '/#/topics/cs', icon: FaLaptopCode },
    ], icon: FaGraduationCap },
    { name: 'Contact', href: '/#/contact' },
];

interface NavItemProps {
    name: string;
    href?: string;
    icon?: IconType;
    subLinks?: { name: string; href: string; icon?: IconType }[];
}

const NavItem: React.FC<NavItemProps> = ({ name, href, icon: Icon, subLinks }) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false); // Close dropdown if clicked outside
        }
    };

    const handleScroll = () => {
        setIsDropdownOpen(false); // Close dropdown on scroll
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <a
                href={href}
                className="block px-4 py-2 text-primary dark:text-primary-dark hover:bg-primary/20 dark:hover:bg-primary-dark/80 hover:text-accent 
                dark:hover:text-accent-dark transition-colors duration-300 rounded-lg"
                onClick={(e) => {
                    if (subLinks && subLinks.length > 0) {
                        e.preventDefault(); // Prevent default link behavior if there are sublinks
                        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
                    }
                }}
            >
                {Icon && <Icon className="inline-block mr-2" />}
                {name}
            </a>
            {subLinks && subLinks.length > 0 && (
                <div
                    className={`
                    lg:absolute top-full mt-2 bg-secondary/70 backdrop-blur-lg dark:bg-secondary/70 lg:rounded-2xl shadow-lg z-10 w-full lg:w-48
                    lg:border lg:border-accent dark:lg:border-accent-dark text-nowrap
                    flex flex-col 
                    transition-all duration-300 ease-in-out
                    ${isDropdownOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 lg:hidden'}
                    lg:opacity-100 lg:max-h-none`}
                >
                    {subLinks.map((subLink) => (
                        <a
                            key={subLink.name}
                            href={subLink.href}
                            className="px-4 py-2 text-primary dark:text-primary-dark hover:bg-secondary/20 dark:hover:bg-primary-dark/80 hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
                        >
                            {subLink.icon && <subLink.icon className="inline-block mr-2" />}
                            {subLink.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

const Navbar: React.FC = () => {
    const [isTop, setIsTop] = React.useState(true);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const isSpecialPage = document.querySelector('.special-page') !== null;

    const handleScroll = () => {
        setIsTop(window.scrollY === 0);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // if menu is open and later the screen is resized to large, close the menu
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <nav
            className={`
            top-0 left-0 right-0 z-50 fixed mx-5 p-1
            ${(isTop || isMenuOpen) && isSpecialPage ?
                'bg-secondary/0 dark:bg-secondary/0 border-0 md:py-10 md:px-20 shadow-none' :
            'bg-secondary/70 backdrop-blur-lg dark:bg-secondary/70  shadow-lg border-x-2 border-b-2 hover:shadow-xl border-accent dark:border-accent-dark'}
            text-secondary dark:text-secondary-dark rounded-b-2xl
            transition-all duration-300
            `}
        >
            <div className="px-4 py-2 flex items-center justify-between">
                <a href="/" className="flex items-center space-x-3">
                    {/* <img src={unravlLogoLight} alt="Unravel Logo Light" className="h-7 dark:hidden" /> */}
                    {/* <img src={unravlLogoDark} alt="Unravel Logo Dark" className="h-7 hidden dark:block" /> */}
                    <Logo />
                </a>
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-primary dark:text-secondary-dark focus:outline-none"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div
                    className={`
                    absolute top-full left-0 w-full lg:static lg:flex lg:items-center lg:space-x-4 lg:w-auto
                    transition-all duration-300 ease-in-out rounded-2xl  mt-2
                    ${isMenuOpen ? 'opacity-100 max-h-screen bg-secondary/10 dark:bg-primary-dark backdrop-blur-lg border-2 border-accent dark:border-accent-dark' : 'opacity-0 max-h-0'}
                    lg:opacity-100 lg:max-h-none`}
                >
                    {NavbarLinks.map((link) => (
                        <NavItem key={link.name} {...link} />
                    ))}
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    <ModeSwitch />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;