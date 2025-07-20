
const About = () => {
    return (
        <div className="justify-center items-center flex flex-col min-h-screen">
            {/* Round blur background with radial gradient from red to transparent */}
            <div className="
                absolute inset-0 bg-gradient-to-r from-primary to-transparent
                rounded-full blur-2xl opacity-50 pointer-events-none
                transition-all duration-300
                dark:from-primary-dark dark:to-transparent
                align-items-center justify-center
            ">
            </div>
            <div className="flex flex-col items-center z-10 justify-center text-secondary dark:text-secondary-dark 
             p-6 bg-primary/10 dark:bg-primary-dark/10 rounded-3xl shadow-lg backdrop-blur-lg
             border-4 border-accent dark:border-accent-dark
             animate__animated animate__fadeIn
             transition-all duration-300 max-w-3xl w-full text-center">
             <h1 className="text-4xl font-bold mb-4">About Us</h1>
             <p className="text-lg max-w-2xl text-center">
                 Welcome to Unravel, your go-to platform for exploring the wonders of science and technology. Our mission is to make complex topics accessible and engaging for everyone.
                 We believe in the power of knowledge and strive to create a community where curiosity thrives. Join
             </p>
             </div>
             </div>
    );
};

export default About;