import React from "react";
import {
  Briefcase,
  TrendingUp,
  Globe,
  Award,
  Code,
  Cloud,
  Shield,
  Palette,
  BarChart,
  Smartphone,
  Rocket,
} from "lucide-react";

const NonITCareerSection = () => {
  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "High-Paying Jobs",
      desc: "IT offers some of the most lucrative and stable career paths.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Unlimited Growth",
      desc: "From web development to data analytics — the opportunities are endless.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Global Demand",
      desc: "Skilled IT professionals are needed everywhere, in every industry.",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Skill over Degree",
      desc: "Companies value practical skills and real-world projects more than degrees.",
      color: "from-blue-500 to-red-500",
    },
  ];

  const careerPaths = [
    { name: "Full Stack Web Development", icon: <Code className="w-7 h-7 text-amber-600" /> },
    { name: "Data Science & Analytics", icon: <BarChart className="w-7 h-7 text-blue-600" /> },
    { name: "Cloud Computing", icon: <Cloud className="w-7 h-7 text-purple-600" /> },
    { name: "Cybersecurity", icon: <Shield className="w-7 h-7 text-blue-900" /> },
    { name: "UI/UX Design", icon: <Palette className="w-7 h-7 text-green-600" /> },
    { name: "Digital Marketing", icon: <Smartphone className="w-7 h-7 text-rose-600" /> },
  ];

  const handleEnrollClick = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section id="non-it-section" className="relative py-10 md:py-15  overflow-hidden">
       
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-gradient bg-clip-text  leading-tight">
              Turn Your Non-IT Background<br />into an IT Success Story!
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              <span className="text-rose-500 font-bold">Don’t Have an IT Degree?</span> No problem — you already have what it takes to succeed in tech.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="group bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-400"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-5 rounded-xl bg-gradient-to-br ${item.color} shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-gradient">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bridge Section */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-10 md:p-14 text-center shadow-2xl text-white mb-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">We Help You Bridge the Gap</h3>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4">
              At <span className="font-bold">CloudWorld</span>, we transform non-IT students into confident IT professionals.
            </p>
            <p className="text-base md:text-lg opacity-90 max-w-3xl mx-auto">
              Our programs start from zero — <span className="font-bold underline">no coding experience required!</span> Learn with hands-on projects, expert mentors, and real career training.
            </p>
          </div>

          {/* Career Paths */}
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gradient">
              Career Paths You Can Explore
            </h3>
            <div className="grid grid-cols-1 bg-blue-100 p-5 rounded-2xl md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {careerPaths.map((path, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center border border-gray-100 hover:border-blue-400"
                >
                  <div className="flex justify-center mb-3">{path.icon}</div>
                  <p className="font-semibold text-gradient">{path.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call To Action */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gradient">
              Take the First Step Today
            </h3>
            <button
              onClick={handleEnrollClick}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 via-indigo-700 to-blue-600 text-white font-bold text-lg md:text-xl rounded-full shadow-2xl hover:shadow-blue-500/40 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shimmer"></span>
              <span className="relative flex items-center justify-center gap-3">
                <Rocket className="w-5 h-5 animate-bounce" />
                Enroll Now
                <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 text-xl">
                  →
                </span>
              </span>
            </button>

            <blockquote className="mt-10 text-lg md:text-xl font-medium text-gray-700 italic leading-relaxed max-w-2xl mx-auto">
              “You don’t need an IT background to shine in tech — you just need the <span className="text-gradient font-bold not-italic">courage to begin</span>.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Shimmer Animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
    </>
  );
};

export default NonITCareerSection;
