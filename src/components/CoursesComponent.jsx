import React from 'react';
import coursesData from "../data/courses.json";
import { Link } from 'react-router-dom';

const CoursesComponent = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our industry-leading programs designed to launch your tech career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Course Card Component
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
      {/* Course Header with Gradient */}
      <div className="bg-gradient-to-r from-indigo-500 to-violet-600 p-6 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 bg-white rounded-full"></div>
        </div>
        
        <div className="flex items-start space-x-4 relative z-10">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
            <img src={course.icon} alt="Course Icon" className="w-6 h-6 filter brightness-0 invert" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
              {course.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-cyan-100">
              <span className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{course.duration}</span>
              </span>
              <span className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                <span>{course.enrolledStudents}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Course Highlights */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
            <span className="text-teal-700">Course Highlights</span>
          </h4>
          <ul className="space-y-2">
            {course.highlights.slice(0, 4).map((highlight, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600 group/highlight">
                <svg className="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0 group-hover/highlight:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="group-hover/highlight:text-gray-700 transition-colors">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Course Meta Info */}
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="flex items-center space-x-1 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full border border-teal-200">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="font-medium">{course.level}</span>
          </span>
          <div className="flex items-center space-x-1 text-gray-600">
            <div className="flex items-center space-x-0.5">
              <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium text-gray-800">{course.rating}</span>
            </div>
            <span className="text-gray-500">({course.reviews})</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-teal-600">
              {course.price.currency} {course.price.discounted.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through">
              {course.price.currency} {course.price.original.toLocaleString()}
            </span>
          </div>

          <Link to={`/course/${course.id}`}>
            <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-200 group/btn">
              <span className="flex items-center space-x-2">
                <span>View Details</span>
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center space-x-1">
            <svg className="w-3 h-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Certificate Included</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-3 h-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Mentor Support</span>
          </span>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-200 rounded-2xl pointer-events-none transition-colors duration-300"></div>
    </div>
  );
};

export default CoursesComponent;