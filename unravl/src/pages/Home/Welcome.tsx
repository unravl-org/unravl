import { Background } from "../../components/Utils/Background";
import { SuperIcons } from "../../components/Utils/SuperIcons";

const Welcome: React.FC = () => {
    return (
        <Background 
            iconNames={[
                { name: 'home:fa', shouldBlink: false, delay: 0, rotation: 0, href: '/home' },
                { name: 'user:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'settings:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'info:fa', shouldBlink: true, delay: 0, rotation: 0 },
                { name: 'help:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'search:fa', shouldBlink: false, delay: 0, rotation: 50 },
                { name: 'star:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'heart:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'bell:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'comment:fa', shouldBlink: true, delay: 0, rotation: 0 },
                { name: 'share:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'thumbs-up:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'thumbs-down:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'flag:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'lock:fa', shouldBlink: false, delay: 0, rotation: 0 },
                { name: 'unlock:fa', shouldBlink: false, delay: 0, rotation: 0 }
            ]}
            layout={'CLUTTERED'}
            blink={true}
            className="bg-gradient-to-t from-accent to-primary dark:from-primary-dark dark:to-secondary-dark
            w-screen h-screen
            top-0 left-0 flex items-center justify-center
            text-gray-100 dark:text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <h1 className="text-center text-4xl font-bold
                text-accent dark:text-accent-dark
                transition-colors duration-300">
                Welcome to Unravel!
            </h1>
        </Background>
    );
}

export default Welcome;