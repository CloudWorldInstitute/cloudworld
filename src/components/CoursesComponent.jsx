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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Course Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start space-x-4">
<img src={course.icon} alt="Course Icon" className="w-10 h-10" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                ⏱️ {course.duration}
              </span>
              <span className="flex items-center">
                👥 {course.enrolledStudents}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Description */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>

        {/* Course Highlights */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Course Highlights
          </h4>
          <ul className="space-y-2">
            {course.highlights.slice(0, 4).map((highlight, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Course Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {course.level}
          </span>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span>{course.rating} ({course.reviews} reviews)</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              {course.price.currency} {course.price.discounted.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through ml-2">
              {course.price.currency} {course.price.original.toLocaleString()}
            </span>
          </div>

          <Link to={`/course/${course.id}`}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              View Course Details
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CoursesComponent;