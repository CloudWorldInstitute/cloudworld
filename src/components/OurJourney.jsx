import React from 'react';

const OurJourney = () => {
  const journeyData = [
    {
      year: "2022",
      title: "The Beginning of a Dream",
      subtitle: "Laying the Foundation of Cloud World Institute",
      description: "In 2022, Cloud World Institute was founded with a clear goal — to make quality IT education accessible to everyone, even for students from non-IT backgrounds. With a small but passionate team of industry experts, we began our journey to build India's next generation of cloud professionals through practical, job-focused learning.",
      icon: "🌱",
      color: "from-green-500 to-emerald-600"
    },
    {
      year: "2023",
      title: "Expanding Horizons",
      subtitle: "From Classrooms to Careers",
      description: "Our focus on hands-on training and real-world projects helped hundreds of learners secure their first IT jobs. We launched our flagship Cloud + DevOps Combo Program, which quickly became one of the most popular and trusted career-building courses. To make opportunities accessible to all, we introduced our unique 'Pay After Placement' model — allowing students to start their journey with just ₹5000.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-600"
    },
    {
      year: "2024",
      title: "Building Trust, Creating Impact",
      subtitle: "Transforming Lives Across India",
      description: "By 2024, Cloud World Institute had become a nationally recognized training brand. We strengthened corporate tie-ups and helped students get placed in top tech companies with impressive salary packages. With upgraded AI-powered labs, personalized mentorship, and placement-driven training, Cloud World Institute became a synonym for career success in Cloud and DevOps.",
      icon: "🏆",
      color: "from-purple-500 to-pink-600"
    },
    {
      year: "2025",
      title: "The Future is Here",
      subtitle: "Scaling New Heights with New Opportunities",
      description: "In 2025, Cloud World Institute expanded its horizon by launching new-age technology programs in Data Science, Data Analytics, and Full Stack Development. These additions empower learners to explore multiple IT domains and stay ahead in the evolving tech industry. With continuous innovation, updated curriculum, and global learning standards, Cloud World Institute continues its mission — to help every learner Learn, Grow, and Get Placed.",
      icon: "🔮",
      color: "from-orange-500 to-red-500",
      programs: ["Data Science", "Data Analytics", "Full Stack Development"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 rounded-full animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a small vision to becoming India's most trusted Cloud & DevOps training institute.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-orange-500 h-full hidden lg:block"></div>

          {journeyData.map((item, index) => (
            <div key={index} className={`relative flex flex-col lg:flex-row items-center mb-16 lg:mb-24 ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Year Card */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                <div className={`bg-gradient-to-r ${item.color} text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{item.icon}</div>
                    <div>
                      <div className="text-2xl font-bold">{item.year}</div>
                      <div className="text-xl font-semibold opacity-90">{item.title}</div>
                    </div>
                  </div>
                  <div className="text-white/90 leading-relaxed">
                    {item.description}
                  </div>
                  
                  {/* Programs for 2025 */}
                  {item.programs && (
                    <div className="mt-4">
                      <div className="font-semibold mb-2">New Programs:</div>
                      <div className="flex flex-wrap gap-2">
                        {item.programs.map((program, progIndex) => (
                          <span 
                            key={progIndex}
                            className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-current rounded-full z-10 hidden lg:flex items-center justify-center">
                <div className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full`}></div>
              </div>

              {/* Subtitle */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12 text-left' : 'lg:pr-12 text-right'} lg:text-left`}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.subtitle}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.year === "2023" && (
                      <>
                        <span className="font-semibold text-green-600">Pay After Placement</span> model launched
                      </>
                    )}
                    {item.year === "2024" && (
                      <>
                        Became a <span className="font-semibold text-purple-600">nationally recognized</span> training brand
                      </>
                    )}
                    {item.year === "2025" && (
                      <>
                        Expanded into <span className="font-semibold text-orange-600">new technology domains</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Our Mission Continues
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            To help every learner <span className="font-semibold text-blue-600">Learn</span>,{" "}
            <span className="font-semibold text-green-600">Grow</span>, and{" "}
            <span className="font-semibold text-purple-600">Get Placed</span> in the ever-evolving tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;