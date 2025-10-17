import React, { useRef } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const AlumniTestimonials = () => {
  const testimonials = [
    // Add/repeat testimonials to reach 9
    {
      name: 'Siddhesh Kasle',
      img: 'https://via.placeholder.com/80',
      text: `Even coming from a non-IT background, IT Vedant Institute provides a welcoming and effective learning environment. I am particularly grateful for the outstanding support I received from Ekwinder Ma’am and Parinita Ma’am. All instructors understand diverse backgrounds and excel at breaking down complex topics.`
    },
    {
      name: 'Riya Chavan',
      img: 'https://via.placeholder.com/80',
      text: `I have enrolled at Itvedant for a Data Science course. It’s a solid option, especially if you’re looking for a job-oriented program with practical exposure. The curriculum is designed to cover key topics like Python, SQL, Excel, and Power BI.`
    },
    {
      name: 'Surendra Potphode',
      img: 'https://via.placeholder.com/80',
      text: `I’ve worked with KPO; however, I decided to switch into IT as it’s my dream to work in this sector. I enrolled in IT Vedant after suggestions from reputed industry experts and gained valuable knowledge.`
    },
    {
      name: 'Priya Sharma',
      img: 'https://via.placeholder.com/80',
      text: `I loved the teachers and the community at IT Vedant. Would recommend to anyone serious about getting into the IT field!`
    },
    {
      name: 'Arjun Patel',
      img: 'https://via.placeholder.com/80',
      text: `Excellent support throughout the course and lots of real-world practice opportunities.`
    },
    {
      name: 'Neha Mehta',
      img: 'https://via.placeholder.com/80',
      text: `The projects, mentorship, and placement prep are top-notch. I got a job right after graduating!`
    },
    {
      name: 'Kunal Singh',
      img: 'https://via.placeholder.com/80',
      text: `I am happy with the personalized learning approach and the easy-to-follow curriculum.`
    },
    {
      name: 'Sneha Rao',
      img: 'https://via.placeholder.com/80',
      text: `Instructors took the time to clarify my doubts and guide me on my career path. Truly grateful!`
    },
    {
      name: 'Rahul Nair',
      img: 'https://via.placeholder.com/80',
      text: `Highly interactive sessions, skilled mentors, and fantastic outcomes.`
    }
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320; // Adjust based on card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'right' ? cardWidth : -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-teal-50 via-teal-100 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-4">
            Hear From Our Proud Alumni
          </h2>
          <p className="text-indigo-600 max-w-2xl mx-auto">
            Transforming careers and empowering learners to achieve their IT dreams.
          </p>
        </div>

        

        {/* Horizontal Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto no-scrollbar pb-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-xs flex-shrink-0 snap-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border-t-4 border-cyan-400"
            >
              <div className="flex flex-col items-center -mt-12 mb-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                />
                <h3 className="text-lg font-semibold text-cyan-700 mt-4 mb-2">{item.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                “{item.text.length > 120 ? item.text.slice(0, 120) + '...' : item.text}”
              </p>
              <button className="text-cyan-600 font-semibold hover:underline text-sm flex items-center justify-center gap-1">
                Learn More
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          ))}
          
        </div>

        {/* Arrows */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => scroll('left')}
            className="p-3 w-12 h-12 rounded-full border border-cyan-400 text-cyan-600 hover:bg-cyan-600 hover:text-white transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 w-12 h-12 rounded-full border border-cyan-400 text-cyan-600 hover:bg-cyan-600 hover:text-white transition"
          >
            <FaArrowRight />          </button>
        </div>


      </div>
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default AlumniTestimonials;
