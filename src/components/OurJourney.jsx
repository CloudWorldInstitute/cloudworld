import React from 'react';
import { FaSeedling, FaRocket, FaTrophy, FaMagic } from 'react-icons/fa';

const journeyData = [
  {
    year: "2022",
    title: "The Beginning of a Dream",
    subtitle: "Laying the Foundation of Cloud World Institute",
    description:
      "In 2022, Cloud World Institute was founded with a clear goal — to make quality IT education accessible to everyone, even for students from non-IT backgrounds. With a small but passionate team of industry experts, we began our journey to build India's next generation of cloud professionals through practical, job-focused learning.",
    icon: <FaSeedling className="w-8 h-8 text-green-500" />,
    color: "from-green-50 to-emerald-50",
  },
  {
    year: "2023",
    title: "Expanding Horizons",
    subtitle: "From Classrooms to Careers",
    description:
      "Our focus on hands-on training and real-world projects helped hundreds of learners secure their first IT jobs. We launched our flagship Cloud + DevOps Combo Program, which quickly became one of the most popular and trusted career-building courses. To make opportunities accessible to all, we introduced our unique 'Pay After Placement' model — allowing students to start their journey with just ₹5000.",
    icon: <FaRocket className="w-8 h-8 text-indigo-500" />,
    color: "from-blue-50 to-indigo-50",
  },
  {
    year: "2024",
    title: "Building Trust, Creating Impact",
    subtitle: "Transforming Lives Across India",
    description:
      "By 2024, Cloud World Institute had become a nationally recognized training brand. We strengthened corporate tie-ups and helped students get placed in top tech companies with impressive salary packages. With upgraded AI-powered labs, personalized mentorship, and placement-driven training, Cloud World Institute became a synonym for career success in Cloud and DevOps.",
    icon: <FaTrophy className="w-8 h-8 text-pink-500" />,
    color: "from-purple-50 to-pink-50",
  },
  {
    year: "2025",
    title: "The Future is Here",
    subtitle: "Scaling New Heights with New Opportunities",
    description:
      "In 2025, Cloud World Institute expanded its horizon by launching new-age technology programs in Data Science, Data Analytics, and Full Stack Development. These additions empower learners to explore multiple IT domains and stay ahead in the evolving tech industry. With continuous innovation, updated curriculum, and global learning standards, Cloud World Institute continues its mission — to help every learner Learn, Grow, and Get Placed.",
    icon: <FaMagic className="w-8 h-8 text-emerald-500" />,
    color: "from-emerald-50 to-red-50",
    programs: ["Data Science", "Data Analytics", "Full Stack Development"],
  },
];

const JourneySection = () => {
  return (
    <section className="py-20 bg-white">

       <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-center text-gradient mb-10 drop-shadow-md">
          Our Journey Through the Years
        </h2>
        <p className="text-lg sm:text-xl text-center text-sub max-w-4xl mx-auto leading-relaxed">
      A look back at the milestones, achievements, and growth that have shaped our path to success.
    </p>
      <div className="container mx-auto mt-5 p-10 max-w-6xl px-6 sm:px-12 rounded-3xl bg-gradient-to-r from-blue-200 to-violet-200 shadow-lg">
       

        <div className="relative border-l-4 border-red-400 pl-8 sm:pl-12">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className="mb-16 relative animate-fade-in-up"
              style={{ animationDelay: `${index * 250}ms` }}
            >
              {/* Icon */}
              <span
                className={`absolute -left-12 top-2 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg`}
              >
                {item.icon}
              </span>

              {/* Content */}
              <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h3 className="text-3xl font-bold text-indigo-700 leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-xl font-bold text-gray-700 md:ml-6 mt-2 md:mt-0">
                    {item.year}
                  </span>
                </div>
                <h4 className="text-lg text-gray-700 mb-4 tracking-wide font-medium">
                  {item.subtitle}
                </h4>
                <p className="text-gray-800 leading-relaxed mb-4">{item.description}</p>

                {item.programs && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {item.programs.map((prog, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-700 font-semibold text-sm px-4 py-1 rounded-full drop-shadow-sm"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default JourneySection;
