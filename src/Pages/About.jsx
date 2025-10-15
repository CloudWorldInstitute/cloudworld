

import React from 'react';

const AboutPage = () => {
  return (
    <section className="py-20 pt-30 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <img
                src="https://t4.ftcdn.net/jpg/03/83/66/45/360_F_383664523_k7SpSAq9Q5atIYfayRvKyprZIGQoyz0Y.jpg"
                alt="Cloud World Institute team helping students"
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Students Trained</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm font-medium opacity-90">Placement Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                About Us
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r content-center from-teal-500 to-cyan-500 rounded-full mb-6"></div>
            </div>

            {/* Mission Statement */}
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At <span className="font-semibold text-teal-600">Cloud World Institute</span>, our mission is simple — to make every student job-ready for the tech-driven future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We bridge the gap between learning and earning through skill-based, practical IT training focused on <span className="font-semibold text-cyan-600">Cloud</span>, <span className="font-semibold text-purple-600">DevOps</span>, and <span className="font-semibold text-green-600">AI tools</span>.
              </p>
            </div>

            {/* Founder Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Founded by <span className="font-semibold text-teal-600">industry experts</span> with years of corporate experience, CWI has successfully helped <span className="font-semibold text-green-600">hundreds of students from non-IT backgrounds</span> land jobs in top companies.
              </p>
            </div>




          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 mt-15 md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                💡
              </div>
              <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed pl-16">
              To become India's most trusted institute for Cloud & DevOps education.
            </p>
            <div className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Mission Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                💪
              </div>
              <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed pl-16">
              To empower learners with real skills, confidence, and career growth — not just certifications.
            </p>
            <div className="w-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>


        {/* Key Highlights */}
        <div className="mt-18 grid bg-indigo-100 px-15 pt-5 pb-5 grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              label: "Job-Focused",
              color: "text-teal-600",
              bgColor: "bg-teal-50"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
              label: "Practical Training",
              color: "text-cyan-600",
              bgColor: "bg-cyan-50"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              label: "Career Growth",
              color: "text-purple-600",
              bgColor: "bg-purple-50"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              label: "Expert Mentors",
              color: "text-green-600",
              bgColor: "bg-green-50"
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
              <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <span className={item.color}>
                  {item.icon}
                </span>
              </div>
              <span className={`text-sm font-semibold ${item.color}`}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 shadow-2xl text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your IT Career?</h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful students who transformed their careers with Cloud World Institute.
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;