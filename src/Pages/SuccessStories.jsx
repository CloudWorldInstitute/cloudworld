import React, { useState } from "react";
import { FaUserGraduate, FaBriefcase, FaChartBar, FaEdit, FaSearch } from 'react-icons/fa';

const SuccessStories = () => {
  // Data
  const stories = [
    {
      id: 1,
      name: "Priya S.",
      role: "AWS Developer at TechCorp",
      course: "AWS Certification Program",
      year: "2023",
      story: "After completing CloudWorld's AWS training, I landed my dream job in just 3 months. The hands-on projects and placement support were invaluable!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Rajesh K.",
      role: "Cloud Architect at Innovate Solutions",
      course: "Cloud Migration Consulting",
      year: "2022",
      story: "CloudWorld's consulting helped me optimize my skills for cloud migration. Their 98% placement rate is no joke—I got placed with a 40% salary hike!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      name: "Amit M.",
      role: "Azure Expert at Global Tech",
      course: "Azure Fundamentals",
      year: "2023",
      story: "From beginner to pro in Azure, CloudWorld's programs transformed my career. The personalized coaching led to my current role in record time.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 4,
      name: "Neha R.",
      role: "DevOps Engineer at Cloud Innovations",
      course: "DevOps and CI/CD Training",
      year: "2024",
      story: "CloudWorld's DevOps course equipped me with practical skills that helped me secure a high-paying job. The real-world simulations were a game-changer!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 5,
      name: "Vikram P.",
      role: "Senior IT Consultant at Enterprise Solutions",
      course: "Advanced Cloud Strategy",
      year: "2023",
      story: "Thanks to CloudWorld's strategic consulting, I advanced from a junior role to a senior position. The networking events opened doors I never knew existed!",
      image: "https://images.unsplash.com/photo-1507003219385-8c53f0e1eee9?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 6,
      name: "Sneha T.",
      role: "Google Cloud Engineer at Tech Giants",
      course: "Google Cloud Professional",
      year: "2024",
      story: "CloudWorld's Google Cloud training was comprehensive and up-to-date. I passed my certification and got a job offer within weeks—highly recommended!",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80",
    },
  ];

  // State for filtering stories
  const [filter, setFilter] = useState('all');

  // Filtered stories based on state
  const filteredStories = filter === 'all'
    ? stories
    : stories.filter(story => story.course.toLowerCase().includes(filter.toLowerCase()));

  // Function for spotlight stories (3 random)
  const getSpotlightStories = () => {
    const shuffled = [...stories].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };
  const spotlightStories = getSpotlightStories();

  // Scroll to stories section
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('stories');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-white">

     {/* Hero Section */}
<section
  className="relative flex items-center justify-center text-center text-white 
             py-10 pt-10 md:py-60 bg-center bg-no-repeat bg-cover"
  style={{
    backgroundImage: "url('successStory1.webp')",
  }}
>
  {/* Optional gradient overlay */}
  <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

  <div className="relative z-10 pt- max-w-6xl mx-auto px-10">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
      Success Stories
    </h1>
    <p
      className="text-base font-semibold sm:text-lg md:text-2xl  mb-4 max-w-2xl mx-auto animate-fade-in"
      style={{ animationDelay: '200ms' }}
    >
      Discover how CloudWorld has transformed lives and careers. Our alumni are shaping the
      future of IT — read their inspiring journeys and get motivated!
    </p>
    <button
      onClick={handleScroll}
      className="bg-white text-primary px-5 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold 
                 hover:bg-gray-100 shadow-md hover:shadow-lg animate-fade-in transition"
      aria-label="Scroll to success stories"
      style={{ animationDelay: '400ms' }}
    >
      View All Stories
    </button>
  </div>
</section>


      {/* Statistics Section */}
      <section className="py-12 bg-white text-center">
        <div className=" mx-auto px-4 max-w-7xl">
          <h2 className="text-5xl font-extrabold text-gradient mb-6 flex items-center justify-center">
             Why CloudWorld Success Stories Matter
          </h2>
          <p className="text-sub mb-8 max-w-4xl mx-auto">
            At CloudWorld, we're proud of our track record. Over 1,000 professionals have graduated from our programs, with a 98% placement rate. Here's a snapshot:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {[
              { value: "1,000+", label: "Alumni Trained", color: "text-green-600" },
              { value: "98%", label: "Placement Success", color: "text-indigo-600" },
              { value: "50+", label: "Partner Companies", color: "text-rose-600" },
              { value: "7+", label: "Years of Excellence", color: "text-amber-600" },
              { value: "35%", label: "Average Salary Hike", color: "text-purple-600" },
            ].map(({ value, label, color }, idx) => (
              <div
                key={idx}
                className={`p-4 bg-blue-100 rounded-lg shadow-md border-blue-600 hover:shadow-md transition ${color.replace('text-', 'bg-').replace('-600', '-100')}`}
              >
                <h3 className={`text-3xl  font-bold ${color}`}>{value}</h3>
                <p className={color}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Spotlight Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-6">Alumni Spotlight</h2>
          <p className="text-gray-800 text-center mb-8 max-w-2xl mx-auto">
            Quick highlights from our top alumni—see how they're making an impact!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlightStories.map((story) => (
              <div
                key={story.id}
                className="bg-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={`Profile of ${story.name}`}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-400"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">{story.name}</h3>
                    <p className="text-blue-700 text-sm">{story.role} ({story.year})</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic border-l-4 border-blue-400 pl-4">
                  "{story.story.substring(0, 100)}..."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid Section with Filter */}
      <section className="py-16" id="stories">
        <div className="container mx-auto px-4 rounded-2xl max-w-7xl">
          <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-6">Featured Alumni Stories</h2>
          <div className="mb-8 text-center flex justify-center items-center">
            <FaSearch className="mr-2 text-blue-600" />
            <select
              className="px-4 py-2 border border-blue-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              aria-label="Filter success stories"
            >
              <option value="all">All Courses</option>
              <option value="AWS">AWS Certification</option>
              <option value="Azure">Azure Fundamentals</option>
              <option value="DevOps">DevOps and CI/CD</option>
              <option value="Google">Google Cloud Professional</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                className="bg-gradient-to-br from-blue-50 to-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${story.id * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={`Profile of ${story.name}`}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-300"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">{story.name}</h3>
                    <p className="text-blue-700 text-sm flex items-center gap-1">
                      <FaBriefcase className="mr-1" /> {story.role} | {story.course} ({story.year})
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic border-l-4 border-blue-400 pl-4">
                  "{story.story}"
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Story Section */}
<section className="py-12 sm:py-16 bg-cover bg-center" style={{ backgroundImage: "url(/formBg.webp)" }}>
        <div className="container bg-backdrop-blur-3xl mx-auto px-4  max-w-md text-center rounded-2xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold text-white mb-6 flex justify-center items-center gap-2">
            <FaEdit /> Share Your Success Story
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Have a story to share? Tell us how CloudWorld helped you succeed, and inspire others!
          </p>
          <form className="max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 mb-4 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
              aria-label="Your Name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mb-4 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
              aria-label="Your Email"
              required
            />
            <textarea
              placeholder="Your Story"
              className="w-full px-4 py-2 mb-6 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 h-32"
              aria-label="Your Story"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              aria-label="Submit your story"
            >
              Submit Story
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20  text-blue-700 text-center">
        <div className="container bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 text-white">
            Join thousands of professionals who've advanced their careers with CloudWorld. Enroll today and take the first step!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#enroll"
              className="bg-white text-blue-500 px-8 py-4 rounded-xl font-bold hover:bg-blue-700 shadow-md hover:shadow-lg transition"
              aria-label="Enroll now"
            >
              Enroll Now
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition"
              aria-label="Contact us for more info"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
