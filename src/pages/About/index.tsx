
const About = () => {
  return (
    <div className=" mx-2 justify-center items-center flex flex-col min-h-screen relative overflow-hidden">
      {/* Decorative blurred radial gradient background */}
      <div
        className="
          absolute inset-0 flex items-center justify-center pointer-events-none
        "
        aria-hidden="true"
      >
        <div className="
          w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] min-w-[400px] min-h-[400px]
          bg-gradient-radial from-primary/80 via-accent/30 to-transparent
          dark:from-primary-dark/70 dark:via-accent-dark/20 dark:to-transparent
          rounded-full blur-3xl opacity-60 transition-all duration-300
          animate-spin-slow
        " />
      </div>

      <div className="
        flex flex-col items-center z-10 justify-center text-secondary dark:text-secondary-dark 
        p-8 bg-primary/20 dark:bg-primary-dark/20 rounded-3xl shadow-2xl backdrop-blur-lg
        animate__animated animate__fadeIn
        transition-all duration-300 max-w-3xl w-full text-center
        gap-4 
      ">
        <h1 className="text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-primary to-accent dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent drop-shadow-lg">
          About Unravl
        </h1>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-2">
          Welcome to <span className="font-semibold text-accent dark:text-accent-dark">Unravl</span>! 
          This is a lovingly <i>overengineered</i> project that aims to make complex STEM interesting and Interactive. The website consists of various sections covering different "applications" such as
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="/#/topics/chemistry/periodic-table" className="px-4 py-2 rounded-lg bg-accent/20 dark:bg-accent-dark/20 text-accent dark:text-accent-dark font-medium hover:bg-accent/40 hover:underline transition">
            🧪 Periodic Table
          </a>
          <a href="/#/topics/physics/solar-system" className="px-4 py-2 rounded-lg bg-accent/20 dark:bg-accent-dark/20 text-accent dark:text-accent-dark font-medium hover:bg-accent/40 hover:underline transition">
            🌌 Solar System
          </a>
          <a href="/#/topics/biology/cell" className="px-4 py-2 rounded-lg bg-accent/20 dark:bg-accent-dark/20 text-accent dark:text-accent-dark font-medium hover:bg-accent/40 hover:underline transition">
            🧬 Cell Model
          </a>
            <a href="/#/" className="px-4 py-2 rounded-lg bg-accent/20 dark:bg-accent-dark/20 text-accent dark:text-accent-dark font-medium hover:bg-accent/40 hover:underline transition">
            and more!
          </a>
        </div>
        <p className="text-base max-w-2xl text-center mb-4">
            This project is a work in progress, and I am constantly adding new features and content.
        </p>
        <p className="text-base max-w-2xl text-center mb-4">
          Have suggestions, ideas for new features, or want to say hi? Don’t hesitate to <a href="mailto:unravl@rubenlopes.uk" className="text-accent dark:text-accent-dark hover:underline font-semibold">email me</a>!
        </p>
        <div className="mt-2 text-xs text-secondary/60 dark:text-secondary-dark/60 select-none">
          Made with <span className="animate-pulse text-accent p-2 dark:text-accent-dark">♥ </span> by Ruben Lopes
        </div>
      </div>
    </div>
  );
};

export default About;