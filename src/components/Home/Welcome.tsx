
const Welcome: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-800 mt-40 m-3 rounded-lg shadow-lg">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Welcome to Unravl!</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Unravel is an open-source interactive platform designed to make STEM subjects accessible and engaging for everyone. Whether you're a student, educator, or just curious about science, technology, engineering, and mathematics, Unravl has something for you.
                </p>
                {/* warning message */}
                <div className="mt-8 p-4 bg-yellow-100 dark:bg-yellow-700 rounded-lg">
                    <p className="text-yellow-800 dark:text-yellow-200">
                        Please note that we are currently in the early stages of development.
                        <br />
                        <strong className="text-yellow-900 dark:text-yellow-300">Features are being added regularly, so stay tuned for updates!</strong>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Welcome;
