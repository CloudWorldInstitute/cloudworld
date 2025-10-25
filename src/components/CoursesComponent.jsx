import React from 'react';
import coursesData from "../data/courses.json";
import { Link } from 'react-router-dom';

const CoursesComponent = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-teal-50 via-emerald-100 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-teal-600 mb-4 drop-shadow-md">
            Find the Course Right for Your Goals!
          </h2>
          <p className="text-lg text-teal-800/80 max-w-3xl mx-auto">
            Choose from our expertly designed programs that ignite your tech career dreams.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {coursesData.courses.map(course => (
            <CourseCard key={course.courseId} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 border border-teal-100 group overflow-hidden flex flex-col h-full">
      
      {/* Card Top Header */}
      <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-500 p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_80%,white,transparent_70%)]"></div>

        <div className="flex items-start space-x-4 relative z-10">
          <div className="w-30 h-30 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
            <span className="text-2xl">Image</span>
           
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-100 transition-colors">
              {course.courseName}
            </h3>

            <div className="flex items-center space-x-4 text-xs text-teal-200">
              <span className="flex items-center bg-white/20 px-2 py-1 rounded-full">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {course.duration}
              </span>
              <span className="flex items-center bg-white/20 px-2 py-1 rounded-full">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                {course.projects} Projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content - flex-grow makes it expand */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-4 line-clamp-3">{course.shortDescription}</p>

        {/* Level Badge */}
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            course.level === 'Beginner' ? 'bg-teal-100 text-teal-700' :
            course.level === 'Intermediate' ? 'bg-teal-100 text-teal-700' :
            'bg-purple-100 text-purple-700'
          }`}>
            {course.level}
          </span>
          <span className="ml-2 text-sm text-gray-500">{course.totalHours} hours</span>
        </div>

        {/* Technologies */}
        <h4 className="text-teal-600 font-semibold mb-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-teal-400 rounded-full"></div>Technologies
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {course.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index} 
              className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-medium border border-teal-200"
            >
              {tech}
            </span>
          ))}
          {course.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              +{course.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>

        {/* CTA Button - stays at bottom */}
        <div className="mt-auto">
          <Link to={`/course/${course.courseId}`}>
            <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-5 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-lg">
              View Details →
            </button>
          </Link>
        </div>
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-teal-300 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default CoursesComponent;
