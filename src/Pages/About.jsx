import React from 'react';
import { FaLightbulb, FaHandHoldingHeart } from 'react-icons/fa';

const visionImg = "https://images.unsplash.com/photo-1503676382389-4809596c7abe?auto=format&fit=crop&w=400&q=80";
const missionImg = "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section with Image and Stats */}
      <section className="py-20 pt-30 bg-gradient-to-br from-indigo-100 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-400 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src="https://t4.ftcdn.net/jpg/03/83/66/45/360_F_383664523_k7SpSAq9Q5atIYfayRvKyprZIGQoyz0Y.jpg"
                alt="Cloud World Institute team helping students"
                className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-bounce-slow">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Students Trained</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-6 shadow-2xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm font-medium opacity-90">Placement Support</div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                About Us
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-6 mx-auto"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At <span className="font-semibold text-teal-600">Cloud World Institute</span>, our mission is simple — to make every student job-ready for the tech-driven future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We bridge the gap between learning and earning through skill-based, practical IT training focused on <span className="font-semibold text-cyan-600">Cloud</span>, <span className="font-semibold text-purple-600">DevOps</span>, and <span className="font-semibold text-green-600">AI tools</span>.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 mt-10">
                <p className="text-gray-700 leading-relaxed">
                  Founded by <span className="font-semibold text-teal-600">industry experts</span> with years of corporate experience, CWI has successfully helped <span className="font-semibold text-green-600">hundreds of students from non-IT backgrounds</span> land jobs in top companies.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 group hover:scale-105 transition-all duration-300">
              <img src={visionImg} alt="Vision" className="w-full h-36 object-cover rounded-xl mb-4 opacity-90" />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaLightbulb />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed pl-16 mb-3">
                To become the most trusted and innovative institute for Cloud, DevOps, and emerging IT domains—shaping the future of India’s tech talent for a connected world.
              </p>
              <ul className="text-gray-600 text-sm pl-16 mb-2 list-disc">
                <li>Inclusivity for all backgrounds</li>
                <li>Cutting-edge curriculum</li>
                <li>National and global recognition</li>
              </ul>
              <div className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 group hover:scale-105 transition-all duration-300">
              <img src={missionImg} alt="Mission" className="w-full h-36 object-cover rounded-xl mb-4 opacity-90" />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaHandHoldingHeart />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed pl-16 mb-3">
                To empower every learner with practical skills, confidence, and lifelong career growth—focusing on employability and personal transformation, not just certifications.
              </p>
              <ul className="text-gray-600 text-sm pl-16 mb-2 list-disc">
                <li>Hands-on and job-oriented training</li>
                <li>Personalized mentorship</li>
                <li>Placement and career support</li>
              </ul>
              <div className="w-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Key Highlights Section */}
          <section className="bg-gradient-to-bl mt-10 from-indigo-200 via-indigo-50 to-cyan-100 py-16 px-6 rounded-2xl shadow-xl">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-12">
                Key Highlights of Our Institute
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    icon: (
                      <svg className="w-7 h-7 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    ),
                    label: "Job-Focused Curriculum",
                    description: "Courses tailored for real IT careers, not just exams or theory — helping students land their dream roles.",
                    bgColor: "bg-teal-50",
                    textColor: "text-teal-600"
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    ),
                    label: "Practical Training",
                    description: "Project-driven lessons, labs, and mentoring that bridge the gap between learning and real-world execution.",
                    bgColor: "bg-cyan-50",
                    textColor: "text-cyan-600"
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    ),
                    label: "Career Growth",
                    description: "Guided pathways and mentorship to help students scale from entry roles to senior industry experts.",
                    bgColor: "bg-purple-50",
                    textColor: "text-purple-600"
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    ),
                    label: "Expert Mentors",
                    description: "Personalized guidance from industry veterans who bring real-world experience to every classroom.",
                    bgColor: "bg-green-50",
                    textColor: "text-green-600"
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 21h8m2-8a6 6 0 00-12 0v3h12v-3z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    ),
                    label: "Placement Support",
                    description: "Dedicated placement team and partnerships with top IT companies to support successful careers.",
                    bgColor: "bg-pink-50",
                    textColor: "text-pink-600"
                  },
                  {
                    icon: (
                      <svg className="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 11c0-4.97 4.03-9 9-9h-9v9zM3 3l18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    ),
                    label: "Inclusive Community",
                    description: "A supportive, inclusive learning space encouraging innovation and collaboration among peers.",
                    bgColor: "bg-indigo-50",
                    textColor: "text-indigo-600"
                  }
                ].map(({ icon, label, description, bgColor, textColor }, idx) => (
                  <div key={idx} className={`flex flex-col items-center text-center p-8 bg-white bg-opacity-80 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group`}>
                    <div className={`${bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className={textColor}>{icon}</span>
                    </div>
                    <span className={`text-lg font-bold mb-2 ${textColor}`}>{label}</span>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="py-16 bg-gray-100 min-h-[60vh]">
            <div className="container mx-auto px-4 text-center animate-fade-in-up animation-delay-500 max-w-7xl">
              <h2 className="text-4xl font-extrabold mb-8 text-primary">
                Our Values
              </h2>
              <p className="text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture of excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Excellence", color: "text-purple-600", svgPath: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.82 4.159c0 5.523-4.477 10-10 10S2 20.26 2 14.738a12.083 12.083 0 01.82-4.159L12 14z", description: "We strive for excellence in every aspect—from our curriculum and teaching to student support and career services." },
                  { title: "Community", color: "text-teal-600", svgPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.657-.126-1.284-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.657.126-1.284.356-1.857m0 0a5.002 5.002 0 019.288 0 M12 7a4 4 0 110 8 4 4 0 010-8z", description: "Building a supportive network of cloud professionals who collaborate, learn together, and uplift one another." },
                  { title: "Trust", color: "text-orange-600", svgPath: "M12 11c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7-8-3.134-8-7z M12 19l7 7m0 0l-7-7m7 7V11", description: "Earning and maintaining trust through transparency, honesty, and consistent delivery of quality education." },
                  { title: "Innovation", color: "text-indigo-600", svgPath: "M9 19V6h6v13 M12 19v3", description: "Continually evolving our teaching techniques and course material to stay ahead of technology trends." }
                ].map(({ title, color, svgPath, description }, idx) => (
                  <div key={idx} className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in-up hover:scale-105 transform transition duration-300">
                    <div className="flex justify-center mb-4">
                      <svg className={`w-12 h-12 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={svgPath} />
                      </svg>
                    </div>
                    <h3 className={`text-2xl font-semibold mb-4 text-secondary`}>{title}</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

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
    </>
  );
};

export default AboutPage;
