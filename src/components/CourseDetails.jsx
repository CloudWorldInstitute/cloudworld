import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../data/courseDetails.json';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Find the course by ID
  const course = coursesData.courses.find(course => course.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="min-h-screen bg-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-4"
          >
            ← Back to Courses
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="bg-teal-100 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{course.icon}</span>
                <div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {course.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">⏱️</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">👥</span>
                  <span>{course.enrolledStudents}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">⭐</span>
                  <span>{course.rating} Rating ({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 mr-2">🎯</span>
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-600 mr-2">💼</span>
                  <span>{course.mode.join(' + ')}</span>
                </div>
              </div>

              {/* Course Highlights */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">What You'll Get:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {course.highlights.slice(0, 6).map((highlight, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Pricing & Enrollment */}
            <div className="bg-blue-50 rounded-xl p-6 min-w-80 sticky top-4">
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  {course.price.currency} {course.price.discounted.toLocaleString()}
                </span>
                <span className="text-gray-500 line-through ml-2 block">
                  {course.price.currency} {course.price.original.toLocaleString()}
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 mb-3">
                Enroll Now
              </button>
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Download Syllabus
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>💳 EMI Options Available</p>
                <p>🎯 100% Placement Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="bg-sky-100 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Course Curriculum
          </h2>
          
          <div className="space-y-8">
            {course.curriculum.map((month, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{month.month}</h3>
                <ul className="space-y-3">
                  {month.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600 leading-relaxed">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-fuchsia-100 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Real-World Projects
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
            Build an impressive portfolio with industry-relevant projects that showcase your skills to employers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 text-lg">💥</span>
                  <div>
                    <span className="text-gray-700 font-medium">{project}</span>
                    <p className="text-sm text-gray-600 mt-1">Hands-on project with real-world application</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Methodology */}
          <div className="mt-12 bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              How You'll Learn & Succeed
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-3">👨‍💻</div>
                <h4 className="font-semibold text-gray-800 mb-2">Hands-On Learning</h4>
                <p className="text-gray-600 text-sm">Practical, project-based approach with real-world scenarios</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Mentorship</h4>
                <p className="text-gray-600 text-sm">Guidance from industry professionals with live support</p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-800 mb-2">Career Focused</h4>
                <p className="text-gray-600 text-sm">100% placement support with interview preparation</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-8 text-center">
            <p className="text-xl text-gray-700 mb-6 font-semibold">
              Ready to transform your career with {course.title}?
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;