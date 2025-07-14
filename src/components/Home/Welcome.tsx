
import React from 'react';
import { FaRocket, FaUsers, FaBolt, FaGraduationCap, FaPlay, FaStar, FaQuoteLeft, FaArrowRight, FaEnvelope } from 'react-icons/fa';

const Welcome: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left animate-fade-in-up">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                Unravel the 
                                <span className="block bg-gradient-unravl bg-clip-text text-transparent">
                                    Complexity of STEM
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                                Interactive learning platform designed to make science, technology, engineering, 
                                and mathematics accessible and engaging for everyone.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="bg-gradient-unravl hover:shadow-2xl text-white px-8 py-4 rounded-xl 
                                                 font-semibold transition-all duration-300 transform hover:scale-105 
                                                 flex items-center justify-center gap-2">
                                    <FaPlay className="text-sm" />
                                    Start Learning Free
                                </button>
                                <button className="border-2 border-unravl-primary text-unravl-primary hover:bg-unravl-primary 
                                                 hover:text-white px-8 py-4 rounded-xl font-semibold 
                                                 transition-all duration-300 flex items-center justify-center gap-2">
                                    Explore Courses
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                        
                        <div className="relative animate-fade-in">
                            <div className="bg-gradient-hero rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 
                                          transition-transform duration-500">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-unravl rounded-full flex items-center justify-center">
                                            <span className="text-white text-2xl">🚀</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">Interactive Learning</h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">Hands-on experiments</p>
                                        </div>
                                    </div>
                                    <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg 
                                                  flex items-center justify-center animate-float">
                                        <span className="text-white text-6xl">📊</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Why Choose <span className="bg-gradient-unravl bg-clip-text text-transparent">Unravl?</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            We're revolutionizing STEM education with innovative features designed for modern learners.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="bg-gradient-feature w-20 h-20 rounded-2xl flex items-center justify-center 
                                          mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                <FaRocket className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Interactive Simulations</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Engage with complex concepts through immersive 3D simulations and virtual experiments.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gradient-feature w-20 h-20 rounded-2xl flex items-center justify-center 
                                          mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                <FaUsers className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Collaborative Learning</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Learn together with peers, share insights, and get help from our vibrant community.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gradient-feature w-20 h-20 rounded-2xl flex items-center justify-center 
                                          mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                <FaBolt className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Adaptive Learning</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Personalized learning paths that adapt to your pace and learning style.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gradient-feature w-20 h-20 rounded-2xl flex items-center justify-center 
                                          mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                <FaGraduationCap className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expert-Led Content</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Learn from industry experts and leading educators in STEM fields.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Preview Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Popular <span className="bg-gradient-unravl bg-clip-text text-transparent">Courses</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Discover our most loved courses that are helping students master STEM concepts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Python Programming", category: "Technology", students: "1.2k", rating: 4.8, emoji: "🐍" },
                            { title: "Calculus Fundamentals", category: "Mathematics", students: "890", rating: 4.7, emoji: "📊" },
                            { title: "Physics: Motion & Energy", category: "Science", students: "670", rating: 4.9, emoji: "⚡" }
                        ].map((course, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden 
                                                      hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <div className="bg-gradient-unravl h-32 flex items-center justify-center">
                                    <span className="text-4xl">{course.emoji}</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="bg-unravl-primary text-white px-3 py-1 rounded-full text-sm">
                                            {course.category}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-500 text-sm" />
                                            <span className="text-sm text-gray-600 dark:text-gray-300">{course.rating}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {course.students} students enrolled
                                    </p>
                                    <button className="w-full bg-gradient-unravl text-white py-2 rounded-lg font-medium 
                                                     hover:shadow-lg transition-all duration-300">
                                        Start Learning
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gradient-unravl hover:shadow-xl text-white px-8 py-4 rounded-xl 
                                         font-semibold transition-all duration-300 transform hover:scale-105">
                            View All Courses
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Student <span className="bg-gradient-unravl bg-clip-text text-transparent">Success Stories</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            See how Unravl is helping students achieve their STEM learning goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Computer Science Student",
                                content: "Unravl's interactive Python course helped me grasp programming concepts that I struggled with in traditional classes. The visual approach makes everything click!",
                                rating: 5
                            },
                            {
                                name: "Marcus Chen",
                                role: "High School Student",
                                content: "The physics simulations are incredible! I can actually see how forces work in real-time. This platform made physics my favorite subject.",
                                rating: 5
                            },
                            {
                                name: "Emily Rodriguez",
                                role: "Engineering Student",
                                content: "The circuit design course gave me hands-on experience without needing expensive equipment. Perfect for learning complex concepts at my own pace.",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 
                                                      rounded-2xl p-6 shadow-xl">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500" />
                                    ))}
                                </div>
                                <FaQuoteLeft className="text-unravl-primary text-2xl mb-4" />
                                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 px-4 bg-gradient-unravl">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Stay Updated with Unravl
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Get the latest updates on new courses, features, and STEM education insights delivered to your inbox.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-4 focus:ring-white/20 
                                     text-gray-900 font-medium"
                        />
                        <button className="bg-white text-unravl-primary px-8 py-4 rounded-xl font-semibold 
                                         hover:shadow-xl transition-all duration-300 transform hover:scale-105 
                                         flex items-center justify-center gap-2">
                            <FaEnvelope />
                            Subscribe
                        </button>
                    </div>
                    
                    <p className="text-blue-100 text-sm mt-4">
                        No spam, unsubscribe at any time. We respect your privacy.
                    </p>
                </div>
            </section>

            {/* Development Warning - Updated */}
            <section className="py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <FaBolt className="text-yellow-600 dark:text-yellow-400 text-xl" />
                            <h3 className="text-yellow-800 dark:text-yellow-300 font-semibold text-lg">
                                🚧 Currently in Development
                            </h3>
                        </div>
                        <p className="text-yellow-700 dark:text-yellow-300">
                            Unravl is in active development. Features are being added regularly, and this beautiful new interface 
                            showcases our vision for the future of STEM education. 
                            <strong className="block mt-2">Stay tuned for exciting updates and new learning experiences!</strong>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Welcome;
