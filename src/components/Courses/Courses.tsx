import React, { useState } from 'react';
import { FaPlay, FaClock, FaUsers, FaStar, FaFilter } from 'react-icons/fa';

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  level: string;
  image: string;
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    description: "Learn the fundamentals of Python programming with hands-on projects and real-world applications.",
    category: "Technology",
    duration: "8 weeks",
    students: 1250,
    rating: 4.8,
    price: "Free",
    level: "Beginner",
    image: "🐍"
  },
  {
    id: 2,
    title: "Calculus Fundamentals",
    description: "Master the core concepts of differential and integral calculus with interactive visualizations.",
    category: "Mathematics",
    duration: "12 weeks",
    students: 890,
    rating: 4.7,
    price: "$49",
    level: "Intermediate",
    image: "📊"
  },
  {
    id: 3,
    title: "Physics: Mechanics & Motion",
    description: "Explore the laws of motion, energy, and forces through interactive simulations and experiments.",
    category: "Science",
    duration: "10 weeks",
    students: 670,
    rating: 4.9,
    price: "$39",
    level: "Beginner",
    image: "⚡"
  },
  {
    id: 4,
    title: "Introduction to Circuit Design",
    description: "Learn electronic circuit design principles and build your own circuits in our virtual lab.",
    category: "Engineering",
    duration: "6 weeks",
    students: 540,
    rating: 4.6,
    price: "$59",
    level: "Intermediate",
    image: "🔌"
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    description: "Master essential computer science concepts with visual learning and coding practice.",
    category: "Technology",
    duration: "14 weeks",
    students: 980,
    rating: 4.8,
    price: "$79",
    level: "Advanced",
    image: "💻"
  },
  {
    id: 6,
    title: "Chemistry: Molecular Interactions",
    description: "Understand chemical bonds, reactions, and molecular behavior through 3D visualizations.",
    category: "Science",
    duration: "8 weeks",
    students: 430,
    rating: 4.5,
    price: "$45",
    level: "Intermediate",
    image: "🧪"
  }
];

const categories = ["All", "Science", "Technology", "Engineering", "Mathematics"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = mockCourses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-down">
            Explore <span className="bg-gradient-unravl bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Discover engaging STEM courses designed to help you master complex concepts through interactive learning.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-unravl-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-unravl-primary focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-unravl-primary focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden 
                                           hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 
                                           animate-fade-in">
                {/* Course Image/Icon */}
                <div className="bg-gradient-unravl h-48 flex items-center justify-center">
                  <span className="text-6xl">{course.image}</span>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-unravl-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{course.level}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{course.description}</p>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Price and Enroll Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-unravl-primary">{course.price}</span>
                    <button className="bg-gradient-unravl hover:shadow-lg text-white px-6 py-2 rounded-lg 
                                     font-medium transition-all duration-300 flex items-center gap-2">
                      <FaPlay className="text-sm" />
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No courses found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;