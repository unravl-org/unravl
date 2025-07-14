import React, { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope, FaRocket, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Connected with Unravl</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new courses, features, and STEM education insights delivered directly to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 
                         text-white placeholder-gray-400 focus:ring-2 focus:ring-unravl-primary 
                         focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-gradient-unravl hover:shadow-lg px-8 py-3 rounded-lg font-medium 
                         transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaRocket className="text-unravl-primary" />
              Unravl
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Making STEM education accessible, engaging, and transformative for learners worldwide through 
              interactive learning experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/unravl-org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center
                         transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaGithub />
              </a>
              <a 
                href="https://twitter.com/unravl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center
                         transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://linkedin.com/company/unravl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-700 w-10 h-10 rounded-lg flex items-center justify-center
                         transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">About Us</a></li>
              <li><a href="/courses" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">Courses</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* STEM Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">STEM Subjects</h3>
            <ul className="space-y-3">
              <li><a href="/stem/science" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">Science</a></li>
              <li><a href="/stem/technology" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">Technology</a></li>
              <li><a href="/stem/engineering" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">Engineering</a></li>
              <li><a href="/stem/mathematics" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">Mathematics</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/unravl-org/unravl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">
                  Contribute
                </a>
              </li>
              <li><a href="/support" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">Support</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">FAQ</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>&copy; {new Date().getFullYear()} Unravl.org</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <FaHeart className="text-red-500 text-xs" /> for STEM education
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-unravl-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;