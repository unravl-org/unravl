import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-down">
            Get In <span className="bg-gradient-unravl bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Have questions about our platform? Want to contribute to making STEM education better? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:ring-2 focus:ring-unravl-primary focus:border-transparent
                               transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               focus:ring-2 focus:ring-unravl-primary focus:border-transparent
                               transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-unravl-primary focus:border-transparent
                             transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="courses">Course Information</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="contribution">Contributing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-unravl-primary focus:border-transparent
                             transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-unravl hover:shadow-lg text-white px-8 py-4 rounded-lg 
                           font-medium transition-all duration-300 flex items-center justify-center gap-2
                           transform hover:scale-105"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-unravl w-12 h-12 rounded-full flex items-center justify-center">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">hello@unravl.org</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-unravl w-12 h-12 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">Global - Remote First</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-unravl w-12 h-12 rounded-full flex items-center justify-center">
                      <FaGithub className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Open Source</h3>
                      <p className="text-gray-600 dark:text-gray-300">github.com/unravl-org</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Us</h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/unravl-org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 hover:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center
                             transition-all duration-300 transform hover:scale-110"
                  >
                    <FaGithub className="text-white" />
                  </a>
                  <a
                    href="https://twitter.com/unravl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center
                             transition-all duration-300 transform hover:scale-110"
                  >
                    <FaTwitter className="text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/company/unravl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center
                             transition-all duration-300 transform hover:scale-110"
                  >
                    <FaLinkedinIn className="text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Links</h2>
                <div className="space-y-3">
                  <a href="/about" className="block text-unravl-primary hover:text-unravl-secondary transition-colors">
                    About Unravl
                  </a>
                  <a href="/courses" className="block text-unravl-primary hover:text-unravl-secondary transition-colors">
                    Browse Courses
                  </a>
                  <a href="https://github.com/unravl-org/unravl" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block text-unravl-primary hover:text-unravl-secondary transition-colors">
                    Contribute to Unravl
                  </a>
                  <a href="/faq" className="block text-unravl-primary hover:text-unravl-secondary transition-colors">
                    Frequently Asked Questions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;