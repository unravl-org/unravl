import React from 'react';
import { FaRocket, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-down">
            About <span className="bg-gradient-unravl bg-clip-text text-transparent">Unravl</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            We're on a mission to make STEM education accessible, engaging, and transformative for learners worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="bg-gradient-feature w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To democratize STEM education by creating interactive, engaging, and accessible learning experiences 
                that inspire curiosity and foster deep understanding of science, technology, engineering, and mathematics.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="bg-gradient-feature w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaLightbulb className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                A world where every learner has the tools and confidence to explore STEM fields, 
                breaking down barriers and unlocking human potential through innovative education technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-unravl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Making quality STEM education available to everyone, regardless of background or location.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-unravl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLightbulb className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously pushing the boundaries of educational technology to create better learning experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-unravl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building a supportive community of learners, educators, and innovators working together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl text-center">
              <div className="w-24 h-24 bg-gradient-unravl rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">UN</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Unravl Team</h3>
              <p className="text-unravl-primary font-medium mb-3">Education Innovators</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                A passionate team of educators, developers, and designers working to revolutionize STEM education.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl text-center">
              <div className="w-24 h-24 bg-gradient-feature rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ST</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">STEM Experts</h3>
              <p className="text-unravl-primary font-medium mb-3">Subject Matter Specialists</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Leading experts in science, technology, engineering, and mathematics creating world-class content.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl text-center">
              <div className="w-24 h-24 bg-gradient-unravl rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">CO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-unravl-primary font-medium mb-3">Open Source Contributors</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Amazing community members contributing to making STEM education better for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;