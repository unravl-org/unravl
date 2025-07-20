import { SuperIcons } from "./SuperIcons";

const Logo: React.FC = () => {
    return (
        <div className="flex items-center space-x-2 group logo text-primary dark:text-primary-dark
        hover:scale-105 transition-transform duration-300">
            {/* Unravel Logo */}
            {/* Cat Icon */}
            <SuperIcons
                name="cat"
                size="2xl"
                className="h-8 w-8"
                useNativeColors={true}
                style={{ marginRight: '8px' }}
            />

            {/* Yarn Ball Icon */}
            <SuperIcons
                name="box-open"
                size="lg"
                className="h-8 w-8 mt-9 -translate-x-5 group-hover:rotate-45 
                hover:translate-x-0 transition-transform duration-300 group-hover:translate-x-0"
                useNativeColors={true}
                style={{ marginLeft: '8px' }}
            />

            {/* Brand Name */}
            <span className="text-3xl font-bold hidden lg:inline-block">
                Unravel
            </span>
        </div>
    );
};

export default Logo;
