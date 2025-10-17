import React from 'react';
import { FaLightbulb, FaHandHoldingHeart } from 'react-icons/fa';
import SectionDivider from '../components/SectionDivider';

const visionImg = "data:image/jpeg;base64,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";
const missionImg = "data:image/jpeg;base64,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";

const AboutPage = () => {
  return (
    <>
                

      {/* Hero Section with Image and Stats */}
      <section className="py-20 pt-30 bg-gradient-to-br from-indigo-100 to-indigo-100 relative overflow-hidden">
         <SectionDivider src="/public/sectionDivider.svg" position="top" />
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
          <section className="py-16 bg-indigo-300 mt-2 rounded-3xl min-h-[60vh]">

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
                                 <SectionDivider src="/public/sectionDivider.svg" position="bottom" />

      </section>
    </>
  );
};

export default AboutPage;
