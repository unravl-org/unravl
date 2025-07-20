const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 min-w-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-9xl font-extrabold text-blue-500 dark:text-blue-600 leading-tight mb-4 animate__animated animate__fadeIn">404</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
                    Oops! The page you are looking for could not be found.
                </p>
                <a href="/#"
                     className="cursor-pointer text-blue-500 dark:text-blue-400 hover:underline animate__animated animate__fadeIn animate__delay-2s"
                     style={{ textDecoration: 'none' }}
                     onClick={() => window.history.back()}>
                    <span className="inline-block mr-2">←</span>
                    Go back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
