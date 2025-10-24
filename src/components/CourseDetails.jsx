import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import coursesData from "../data/courseDetails.json";

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Find course by courseId string
  const course = coursesData.courses.find(c => c.courseId === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-700 mb-4">Course Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-10 shadow-md">
        <div className="mt-20 container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-orange-600 hover:text-emerald-600 font-semibold"
          >
            ← Back to Courses
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Course Header */}
        <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-emerald-50 rounded-3xl shadow-xl p-8 mb-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🎓</span>
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.category || "Category"}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-emerald-800 mb-4">
                {course.courseName}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{course.shortDescription || "No description."}</p>

              {/* Course Info */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                <span className="flex items-center gap-2">
                  <span className="text-orange-500">⏱️</span> {`${course.duration.months} Months (${course.duration.weeks} Weeks)`}
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500">🔢</span> {course.totalHours} Hours Total
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-amber-500">📁</span> {course.projects} Projects
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-yellow-500">🌟</span> {course.level}
                </span>
                {course.technologies && (
                  <span className="flex items-center gap-2">
                    <span className="text-orange-400">🛠️</span> {course.technologies.join(", ")}
                  </span>
                )}
              </div>

              {/* Career Outcomes */}
              {course.careerOutcomes && course.careerOutcomes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Career Outcomes</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {course.careerOutcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills Gained */}
              {course.skillsGained && course.skillsGained.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">Skills Gained</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {course.skillsGained.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 max-w-150 rounded-2xl p-6 shadow-md text-center h-fit">
              {course.price ? (
                <>
                  <span className="text-3xl font-bold text-orange-700">
                    {course.price.currency} {course.price.discounted.toLocaleString()}
                  </span>
                  <span className="block text-sm text-gray-500 line-through mt-1">
                    {course.price.currency} {course.price.original.toLocaleString()}
                  </span>
                </>
              ) : (
                <span className="text-lg font-semibold  text-orange-700">For course pricing and payment options, please contact our admissions office directly.</span>
              )}

              <button className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 text-white py-3 rounded-lg mt-6 font-semibold hover:scale-105 transition-transform">
                Enroll Now
              </button>
              <button className="w-full mt-3 border-2 border-amber-400 text-amber-600 py-3 rounded-lg font-semibold hover:bg-amber-50">
                Download Syllabus
              </button>

              <div className="mt-4 text-sm text-gray-700">
                <p>💳 EMI Options Available</p>
                <p>🎯 100% Placement Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        {course.modules && course.modules.length > 0 && (
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-10 border-l-4 border-orange-300">
            <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">Course Curriculum</h2>
            <div className="space-y-8">
              {course.modules.map((month, index) => (
                <div key={index} className="border-l-4 border-amber-400 pl-6 relative">
                  <div className="absolute -left-3 w-6 h-6 bg-amber-500 text-white font-bold flex items-center justify-center rounded-full">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold text-orange-700 mb-4">{month.title}</h3>
                  <p className="mb-3 font-semibold italic">{month.goal}</p>
                  <ul className="space-y-2 text-gray-700">
                    {month.weeks.map((week, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">{`Week ${week.week}:`}</span>
                        <span>
                          <strong>{week.topic}</strong> - {week.hours} hours - Project: {week.project}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {course.projects && (
          <div className="bg-gradient-to-br from-emerald-50 via-yellow-50 to-orange-50 rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-emerald-700 mb-4">Real-World Projects</h2>
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              Apply what you've learned with hands-on projects that strengthen your confidence and resume.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.projects.map((p, i) => (
                <div
                  key={i}
                  className="bg-white border-l-4 border-emerald-400 rounded-xl p-4 shadow-md hover:shadow-amber-200 transition"
                >
                  <h4 className="text-orange-700 font-semibold">{p}</h4>
                  <p className="text-sm text-gray-600 mt-1">Practical project using industry tools</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning & CTA */}
        <div className="mt-10 bg-white border-t-4 border-amber-400 rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-orange-700 mb-8">How You'll Learn & Grow</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "👨‍💻",
                title: "Hands-On Learning",
                desc: "Learn through projects that simulate real-world IT scenarios.",
              },
              {
                icon: "🤝",
                title: "Guided Mentorship",
                desc: "Receive dedicated coaching from industry-certified experts.",
              },
              {
                icon: "🎯",
                title: "Career-Oriented",
                desc: "Get placement assistance and build a strong professional portfolio.",
              },
            ].map(({ icon, title, desc }, idx) => (
              <div key={idx} className="p-6 hover:scale-105 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-sm transition">
                <div className="text-4xl mb-3">{icon}</div>
                <h4 className="text-xl font-semibold text-emerald-700 mb-2">{title}</h4>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xl text-gray-800 mb-6 font-semibold">
              Ready to transform your career with {course.courseName}?
            </p>
            <button className="bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
