import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br mt-10 from-green-50 to-cyan-100 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-600 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            About CloudWorld
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Empowering IT Careers, Shaping the Future through cutting-edge cloud technologies and professional training solutions.
          </p>
          
          {/* Animated Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-cyan-300/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-8">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At <span className="font-semibold text-green-600">CloudWorld Institute</span>, we're more than an institution—we're a movement. Dedicated to advancing education and career development, we equip individuals to thrive in the dynamic IT sector with cutting-edge programs in DevOps and Cloud Technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your journey to innovation starts here with comprehensive training solutions designed for the modern tech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-12">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🕒",
                title: "Flexible Classes",
                description: "Learn at your own pace with our flexible scheduling options tailored to fit your lifestyle.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: "💻",
                title: "Online & Offline Modes",
                description: "Choose from online sessions for convenience or offline classes for hands-on experience and networking.",
                gradient: "from-cyan-500 to-cyan-600"
              },
              {
                icon: "👨‍🏫",
                title: "Expert Educator Support",
                description: "Get personalized guidance from industry-experienced educators throughout your learning journey.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: "🎯",
                title: "Post-Course Support",
                description: "We continue to support you even after completion to help with career placement and professional growth.",
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className="w-0 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Students Trained" },
              { number: "50+", label: "Industry Experts" },
              { number: "95%", label: "Placement Rate" },
              { number: "24/7", label: "Learning Support" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-cyan-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful IT professionals who started their career transformation with CloudWorld.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-green-700 hover:to-cyan-700">
              🚀 Enroll Now
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300">
              📞 Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed bottom-10 right-10 w-6 h-6 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="fixed top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default AboutPage;