import React from "react";
import { FaCloud, FaRocket, FaTools, FaLaptop, FaUserTie, FaUserMd } from 'react-icons/fa'; // Font Awesome icons
import TypewriterText from "../components/TypewriterText";
import OurJourney from "../components/OurJourney";
import CoursesComponent from "../components/CoursesComponent";
import TestComponent from "../components/TestComponent";
import StudentsWorkingIn from "../components/StudentsWorkingIn";
import AlumniTestimonials from "../components/AlumniTestimonials";
import NonITCareerSection from "../components/NonItCareerSerction";
import HeroImageSection from "../components/HeroImageSection";
import SlidingImageSection from "../components/HeroImageSection";

const Home = () => {
  return (
    <div className="">

      <section
        id="home"
        className="relative min-h-screen pt-20 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
        aria-labelledby="hero-title"
      >

        {/* Content Section */}
        <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left animate-fade-in-up">
          <div className="animate-fade-in-up animation-delay-200">
            {/* Badge */}
            <div className="inline-flex items-center px-2 py-1 bg-accent text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              India's Leading Cloud Training Platform
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient leading-tight"
            >
              <TypewriterText
                texts={[
                  "Welcome to Cloud World Institute",
                  "We are Turning Aspirations into IT Careers."
                ]}
                speed={50}
                delay={1000}
              />
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
              India's leading platform for mastering <span className="font-semibold text-primary">Cloud Computing, AWS, Azure, and DevOps</span>.
              We don't just teach — we transform beginners into industry-ready professionals with <span className="font-semibold text-green-600">100% placement support</span> and real-world training.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-1000">
              <button
                onClick={() => {
                  const element = document.getElementById('non-it-section');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="relative overflow-hidden group border-2 border-blue-300 bg-gradient-to-r from bg-primary to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-600/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 animate-pulse-slow"
                aria-label="Start your journey with CloudWorld"
              >
                {/* Shimmer Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shimmer"></span>

                {/* Button Text */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Non-IT background?

                </span>

                {/* Glow Effect */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from bg-primary to-emerald-400 blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></span>
              </button>



              <button
                onClick={() => {
                  const element = document.getElementById('core-services');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-200 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Explore our services"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative z-10 w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in-up animation-delay-400">
          <SlidingImageSection />
        </div>



      </section>


      <NonITCareerSection />

      <CoursesComponent />

      <OurJourney />



      {/* Services Section - Card hover effects */}
      <section id="core-services" className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gradient ">

              Our Core Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-sub max-w-3xl mx-auto leading-relaxed px-4">
              Tailored solutions to propel your IT career and business forward with confidence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl md:rounded-3xl shadow-xl">
            {[
              {
                icon: <FaCloud className="text-4xl sm:text-5xl" />,
                title: "Cloud Training",
                desc: "Master AWS, Azure, and Google Cloud through hands-on, certified programs designed for real-world success.",
                color: "from-blue-500 to-cyan-500",
                hoverColor: "hover:from-blue-600 hover:to-cyan-600"
              },
              {
                icon: <FaTools className="text-4xl sm:text-5xl" />,
                title: "IT Consulting",
                desc: "Strategic guidance for cloud migration, optimization, and scalable infrastructure that drives efficiency.",
                color: "from-purple-500 to-pink-500",
                hoverColor: "hover:from-purple-600 hover:to-pink-600"
              },
              {
                icon: <FaRocket className="text-4xl sm:text-5xl" />,
                title: "Career Placement",
                desc: "Exclusive access to top IT roles with personalized coaching and a 98% placement success rate.",
                color: "from bg-primary to-red-500",
                hoverColor: "hover:from bg-primary hover:to-red-600"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-accent animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl md:rounded-2xl`}></div>

                {/* Icon with Gradient Background */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gradient group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 min-h-[80px] sm:min-h-[100px]">
                  {service.desc}
                </p>



                {/* Decorative Corner Element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-200 to-transparent opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      </section>


      {/* Testimonials Section - New addition for credibility */}

      <AlumniTestimonials />

      {/* Stats Section - Enhanced Design */}
  <section className="relative py-12 md:py-24 bg-white text-primary overflow-hidden">
  <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">

    {/* Heading */}
    <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-gradient px-2">
      Our Achievements at a Glance
    </h2>

    {/* Subheading */}
    <p className="text-lg sm:text-base md:text-lg text-sub mb-12 px-4 max-w-2xl mx-auto">
      Celebrating milestones that highlight our dedication, growth, and success in delivering outstanding outcomes.
    </p>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
      {[
        { num: "1,000+", label: "Trained Professionals", color: "red" },
        { num: "100+", label: "Partner Companies", color: "yellow" },
        { num: "98%", label: "Placement Success", color: "pink" },
        { num: "7+", label: "Years of Excellence", color: "green" }
      ].map((stat, index) => (
        <div
          key={index}
          className="bg-blue-100 backdrop-blur-md rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2 leading-tight text-${stat.color ? stat.color : "green"}-500`}
          >
            {stat.num}
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 leading-snug break-words text-center px-1">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

  </div>

  {/* Decorative Background Element */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.2)_0%,_rgba(0,0,0,0)_70%)]"></div>
</section>






      {/* Final CTA Section */}
      <section className="py-24 bg-zinc-950 text-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-whites rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Elevate Your Career?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Don't wait for opportunities—create them with CloudWorld. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-primary text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-light transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Contact Us Now
            </a>
            <a
              href="https://cloudworld.co.in/"
              className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              target="_blank" rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
      <StudentsWorkingIn />

    </div>
  );
};

export default Home;
