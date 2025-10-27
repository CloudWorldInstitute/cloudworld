import React from 'react';
import { FaLightbulb, FaHandHoldingHeart } from 'react-icons/fa';


const AboutPage = () => {
  return (
    <>

      {/* Hero Section */}
      <section className="relative pt-40 pb-10 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-36 h-36 bg-teal-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-12 left-16 w-40 h-40 bg-emerald-300 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="aboutUs.jpg"
              alt="Cloud World Institute team"
              className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-emerald-100">
              <h3 className="text-3xl font-bold text-blue-600">5000+</h3>
              <p className="text-sm text-gray-700 font-medium">Students Trained</p>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white text-lime-500 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm font-medium opacity-95">Placement Support</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h1 className="text-5xl font-extrabold  text-teal-600 mb-5 text-center lg:text-left">
              About Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At <span className="font-semibold text-teal-600">Cloud World Institute</span>, our mission is simple — to make every student job-ready for the
              digital era of technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We bridge the gap between learning and earning through practical skill-based IT training in
              <span className="font-semibold text-emerald-600"> Cloud</span>,
              <span className="font-semibold text-emerald-600"> DevOps</span>, and
              <span className="font-semibold text-teal-600"> AI</span> programs driven by real-world projects.
            </p>
            <div className="bg-white/70 backdrop-blur-sm border-l-4 border-emerald-400 rounded-xl p-6 shadow-md mt-8">
              <p className="text-gray-800">
                Founded by <span className="font-semibold text-emerald-600">industry-certified mentors</span> with global experience,
                Cloud World Institute is leading the path for learners from <span className="text-teal-600 font-semibold">non-IT to IT</span> success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-3 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
         

          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl border border-emerald-100 shadow-xl p-5 hover:shadow-2xl transition-all duration-300">
            {/* Image block - You can replace /mission-image.webp with your actual image path */}
            <div className="w-full   md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img
                src="/vision.webp"
                alt="vision illustration"
                className="rounded-xl object-cover h-48 md:h-64 w-full max-w-xs shadow-md"
              />
            </div>

            {/* Vision Content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                  <FaLightbulb />                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-teal-600">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed pl-1">
                To be India’s most trusted institute for Cloud & DevOps education, empowering aspiring professionals with world-class learning and innovation.
              </p>
              <ul className="text-gray-600 text-sm mt-4 list-disc list-inside">
                <li>Accessible learning for all backgrounds</li>
                <li>Always evolving with industry trends</li>
                <li>Global standards, national excellence</li>
              </ul>
            </div>
          </div>


          {/* Mission Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/80 rounded-2xl border border-emerald-100 shadow-xl p-5 hover:shadow-2xl transition-all duration-300">
            {/* Image block - You can replace /mission-image.webp with your actual image path */}
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img
                src="/mission.webp"
                alt="Mission illustration"
                className="rounded-xl object-cover h-48 md:h-64 w-full max-w-xs shadow-md"
              />
            </div>

            {/* Mission Content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-400 rounded-xl flex items-center justify-center text-white text-2xl mr-4">
                  <FaHandHoldingHeart />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-emerald-700">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed pl-1 mb-2">
                To equip learners with the technical expertise, confidence, and support to launch successful IT careers—with real skills, not just certifications.
              </p>
              <ul className="text-gray-600 text-sm mt-4 list-disc list-inside space-y-1">
                <li>Hands-on labs, real-world training</li>
                <li>Dedicated mentorship and guidance</li>
                <li>Reliable placement assistance</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-white rounded-3xl shadow-inner">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-teal-600 bg-clip-text bg-white">
          Why Choose Cloud World Institute
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "Job-Ready Curriculum",
              desc: "Our courses are structured for students to become employable directly post-training.",
              color: "teal",
            },
            {
              title: "Practical Hands-On Projects",
              desc: "Work on real-use cases directly aligned with today’s enterprise cloud environments.",
              color: "teal",
            },
            {
              title: "Mentorship-Based Learning",
              desc: "Engage with industry veterans for career coaching and personalized mentoring.",
              color: "teal",
            },
          ].map(({ title, desc, color }, idx) => (
            <div
              key={idx}
              className={`p-8 bg-white/80 rounded-2xl shadow-md hover:shadow-xl border-l-4 border-${color}-500 transition-all duration-300`}
            >
              <h3 className={`text-2xl font-semibold text-${color}-600 mb-3`}>{title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <h2 className="text-5xl font-extrabold text-center text-teal-600 mb-8">Our Core Values</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12">
          Our values define who we are and guide every step of our mission to educate and inspire the next-gen IT professionals of India.
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {[
            {
              title: "Excellence",
              color: "blue",
              desc: "We pursue excellence through world-class teaching, innovation, and dedication.",
            },
            {
              title: "Integrity",
              color: "red",
              desc: "Ethical practices and transparency form the foundation of our operations.",
            },
            {
              title: "Community",
              color: "green",
              desc: "Fostering a supportive environment for collaboration and growth.",
            },
            {
              title: "Innovation",
              color: "cyan",
              desc: "Adapting to change and leveraging technology to stay ahead in the IT era.",
            },
          ].map(({ title, desc, color }, idx) => (
            <div
              key={idx}
              className={`p-8 bg-teal-50 rounded-xl shadow-lg border border-teal-600 hover:shadow-teal-300 transition-transform hover:scale-105`}
            >
              <h3 className={`text-2xl font-bold text-${color}-600 mb-4`}>{title}</h3>
              <p className="text-gray-800">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 via-cyan-800 to-teal-600 text-white text-center rounded-t-3xl shadow-xl">
        <h3 className="text-4xl font-bold mb-4">Ready to Begin Your IT Career?</h3>
        <p className="mb-8 max-w-2xl mx-auto">
          Join thousands of Cloud World graduates who advanced their careers through our job-ready cloud and DevOps programs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-emerald-700 px-8 py-3 font-bold rounded-xl hover:bg-emerald-50 transition duration-300 shadow-lg">
            Enroll Today
          </button>
          <button className="border-2 border-white px-8 py-3 font-bold rounded-xl hover:bg-white hover:text-teal-600 transition duration-300">
            Talk to Us
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
