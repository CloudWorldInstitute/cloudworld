import React, { useState } from "react";
import { FaUserGraduate, FaBriefcase, FaChartBar, FaEdit, FaSearch } from 'react-icons/fa';

const SuccessStories = () => {
  // Expanded sample data for success stories (added one more)

   const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('stories');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
  const [filter, setFilter] = useState('all'); // Options: 'all', 'AWS', 'Azure', etc.

  // Filtered stories based on state
  const filteredStories = filter === 'all' ? stories : stories.filter(story => story.course.toLowerCase().includes(filter.toLowerCase()));

  // Function to get random spotlight stories (e.g., 3 random ones)
  const getSpotlightStories = () => {
    const shuffled = stories.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3); // Show 3 random stories
  };

  const spotlightStories = getSpotlightStories();

  return (
    <div className="bg-accent min-h-screen font-sans " >
      {/* Hero Section */}
     <section
      className="relative py-24 flex items-center justify-center bg-cover bg-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20221226/pngtree-background-of-rapid-development-of-blue-technology-image_1494603.jpg')",
      }}
    >
      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-70"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Success Stories
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Discover how CloudWorld has transformed lives and careers. Our alumni are shaping the future of IT—read their inspiring journeys and get motivated!
        </p>
        <button
          onClick={handleScroll}
          className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-shadow shadow-md hover:shadow-lg animate-fade-in"
          aria-label="Scroll to success stories"
          style={{ animationDelay: '400ms' }}
        >
          View All Stories
        </button>
      </div>
    </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gray-100 text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center justify-center">
            <FaChartBar className="mr-2" /> Why CloudWorld Success Stories Matter
          </h2>
          <p className="text-gray-700 mb-8 max-w-4xl mx-auto">
            At CloudWorld, we're proud of our track record. Over 1,000 professionals have graduated from our programs, with a 98% placement rate. Here's a snapshot:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-bold text-primary">1,000+</h3>
              <p className="text-gray-600">Alumni Trained</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-bold text-secondary">98%</h3>
              <p className="text-gray-600">Placement Success</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-bold text-primary">50+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-bold text-secondary">7+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-3xl font-bold text-primary">35%</h3>
              <p className="text-gray-600">Average Salary Hike</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Spotlight Section - New Addition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Alumni Spotlight</h2>
          <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
            Quick highlights from our top alumni—see how they're making an impact!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlightStories.map((story) => (
              <div
                key={story.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={`Profile of ${story.name}`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-primary">{story.name}</h3>
                    <p className="text-secondary text-sm">{story.role} ({story.year})</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{story.story.substring(0, 100)}..." {/* Shortened for spotlight */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid Section with Filter */}
      <section className="py-16 bg-gray-50" id="stories">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Featured Alumni Stories</h2>
          <div className="mb-8 text-center flex justify-center items-center">
            <FaSearch className="mr-2" />
            <select
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
              <div
                key={story.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${story.id * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={`Profile of ${story.name}`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-primary">{story.name}</h3>
                    <p className="text-secondary text-sm flex items-center">
                      <FaBriefcase className="mr-1" /> {story.role} | {story.course} ({story.year})
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic border-l-4 border-primary pl-4">
                  "{story.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center justify-center">
            <FaEdit className="mr-2" /> Share Your Success Story
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Have a story to share? Tell us how CloudWorld helped you succeed, and inspire others!
          </p>
          <form className="max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Story"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"
                aria-label="Your Story"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary transition-shadow shadow-md hover:shadow-lg"
              aria-label="Submit your story"
            >
              Submit Story
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who've advanced their careers with CloudWorld. Enroll today and take the first step!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#enroll"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-shadow shadow-md hover:shadow-lg"
              aria-label="Enroll now"
            >
              Enroll Now
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all"
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
  