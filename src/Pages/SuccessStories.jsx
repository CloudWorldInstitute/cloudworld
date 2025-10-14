import React, { useState } from "react";
import { FaUserGraduate, FaBriefcase, FaChartBar, FaEdit } from 'react-icons/fa'; // Added more icons for stats and form

const SuccessStories = () => {
  // Sample data for success stories (expanded with 2 more)
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
  ];

  // State for filtering stories (e.g., by course)
  const [filter, setFilter] = useState('all'); // Options: 'all', 'AWS', 'Azure', etc.

  // Filtered stories based on state
  const filteredStories = filter === 'all' ? stories : stories.filter(story => story.course.includes(filter));

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section for Success Stories */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover how CloudWorld has transformed lives and careers. Our alumni are shaping the future of IT—read their journeys!
          </p>
          <button
            className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-shadow shadow-md hover:shadow-lg"
            aria-label="View all success stories"
          >
            View All Stories
          </button>
        </div>
      </section>

      {/* Statistics Section - New Addition */}
      <section className="py-12 bg-gray-100 text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center justify-center">
            <FaChartBar className="mr-2" /> Why CloudWorld Success Stories Matter
          </h2>
          <p className="text-gray-700 mb-8 max-w-4xl mx-auto">
            At CloudWorld, we're proud of our track record. Over 1,000 professionals have graduated from our programs, with a 98% placement rate. Here's a snapshot:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-primary">1,000+</h3>
              <p className="text-gray-600">Alumni Trained</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-secondary">98%</h3>
              <p className="text-gray-600">Placement Success</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-primary">50+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-3xl font-bold text-secondary">7+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid Section with Filter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Featured Alumni Stories</h2>
          <div className="mb-8 text-center">
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
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-primary">{story.name}</h3>
                    <p className="text-secondary flex items-center text-sm">
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

      {/* Submit Your Story Section - New Addition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center justify-center">
            <FaEdit className="mr-2" /> Share Your Success Story
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Have a story to share? Tell us how CloudWorld helped you succeed, and inspire others!
          </p>
          <form className="max-w-sm mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Your Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Story"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"
                aria-label="Your Story"
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
