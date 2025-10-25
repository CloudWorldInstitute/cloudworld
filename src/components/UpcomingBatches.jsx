import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import batchesData from '../data/upcomingBatches.json';

const UpcomingBatches = () => {
  const [filter, setFilter] = useState('all');

  const filteredBatches = filter === 'all' 
    ? batchesData.batches 
    : batchesData.batches.filter(batch => batch.mode.toLowerCase().includes(filter));

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-teal-50 to-emerald-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-200 text-teal-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🚀 Join Our Next Cohort
          </span>
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-600 mb-4">
            Upcoming Batches
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Limited seats available. Secure your future in tech today!
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <span className="text-gray-600 font-medium">Filter by:</span>
          {['all', 'online', 'offline'].map((mode) => (
            <button
              key={mode}
              onClick={() => setFilter(mode)}
              className={`px-5 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                filter === mode
                  ? 'bg-gradient-to-r from-teal-500 to-teal-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {mode === 'all' ? '🌐 All' : mode === 'online' ? '💻 Online' : '🏢 Offline'}
            </button>
          ))}
        </div>

        {/* Batches List - Alternative Layout */}
        <div className="max-w-5xl mx-auto space-y-6">
          {filteredBatches.map((batch, index) => (
            <div
              key={batch.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-teal-500 overflow-hidden group"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left Section - Course Info */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                        {batch.courseName}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            batch.status === 'Filling Fast'
                              ? 'bg-red-100 text-red-600 animate-pulse'
                              : 'bg-green-100 text-green-600'
                          }`}
                        >
                          {batch.status === 'Filling Fast' ? '🔥 ' : '✅ '}
                          {batch.status}
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          {batch.availableSeats} seats available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-teal-500">📅</span>
                      <div className="text-sm">
                        <p className="font-semibold">Start Date</p>
                        <p className="text-gray-600">{batch.displayDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-teal-500">⏱️</span>
                      <div className="text-sm">
                        <p className="font-semibold">Duration</p>
                        <p className="text-gray-600">{batch.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-emerald-500">🎓</span>
                      <div className="text-sm">
                        <p className="font-semibold">Mode</p>
                        <p className="text-gray-600">{batch.mode}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-500">⏰</span>
                      <div className="text-sm">
                        <p className="font-semibold">Timing</p>
                        <p className="text-gray-600">{batch.timing}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - CTA */}
                <div className="lg:w-64 bg-gradient-to-br from-teal-50 to-teal-50 p-6 flex flex-col justify-center gap-3 border-t lg:border-t-0 lg:border-l border-teal-100">
                  <Link to={`/course/${batch.courseId}`}>
                    <button className="w-full bg-gradient-to-r from-teal-500 to-teal-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-teal-600 hover:to-teal-600 transition-all hover:scale-105 shadow-md text-sm">
                      📖 View Course
                    </button>
                  </Link>
                  
                  <a
                    href="https://wa.me/917498539362"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center border-2 border-teal-500 text-teal-600 py-3 px-4 rounded-lg font-semibold hover:bg-white transition-all text-sm"
                  >
                    💬 Enroll Now
                  </a>
                  
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Instructor: {batch.instructor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBatches.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 text-lg font-medium">No batches found for this filter</p>
            <p className="text-gray-500 text-sm mt-2">Try selecting a different mode</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 via-teal-500 to-teal-600 rounded-2xl p-8 max-w-4xl mx-auto text-white shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-3">
              Can't Find a Suitable Batch?
            </h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              We offer flexible schedules and corporate training programs tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917498539362"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                <span>💬</span> Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                <span>📧</span> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
