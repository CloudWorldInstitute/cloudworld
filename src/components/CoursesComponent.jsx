import React from 'react';
import coursesData from "../data/courses.json";
import { Link } from 'react-router-dom';

const CoursesComponent = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-oranfge-50 via-ambfer-100 to-oranfge-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-orange-600 mb-4 drop-shadow-md">
            Our Courses
          </h2>
          <p className="text-lg text-orange-800/80 max-w-3xl mx-auto">
            Choose from our expertly designed programs that ignite your tech career dreams.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {coursesData.courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 border border-orange-100 group overflow-hidden">
      
      {/* Card Top Header */}
      <div className="bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-500 p-6 text-emerald-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_80%,white,transparent_70%)]"></div>

        <div className="flex items-start space-x-4 relative z-10">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
            <img src={course.icon} alt="Course Icon" className="w-6 h-6 filter invert" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-100 transition-colors">
              {course.title}
            </h3>

            <div className="flex items-center space-x-4 text-xs text-orange-200">
              <span className="flex items-center bg-white/20 px-2 py-1 rounded-full">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 
                  0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>{course.duration}
              </span>
              <span className="flex items-center bg-white/20 px-2 py-1 rounded-full">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0..." />
                </svg>{course.enrolledStudents}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>

        {/* Highlights */}
        <h4 className="text-orange-600 font-semibold mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>Highlights
        </h4>
        <ul className="space-y-2 mb-6">
          {course.highlights.slice(0, 4).map((highlight, index) => (
            <li key={index} className="text-gray-700 text-sm flex items-start">
              <svg className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1..." clipRule="evenodd" />
              </svg>{highlight}
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="flex justify-between items-center pt-4 border-t border-orange-100">
          <div>
            <span className="text-2xl font-bold text-orange-600">
              {course.price.currency}{course.price.discounted.toLocaleString()}
            </span>
            <span className="block text-sm text-gray-400 line-through">
              {course.price.currency}{course.price.original.toLocaleString()}
            </span>
          </div>

          <Link to={`/course/${course.id}`}>
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg">
              View Details →
            </button>
          </Link>
        </div>
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-orange-300 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default CoursesComponent;
