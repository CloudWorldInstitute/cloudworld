import React, { useState } from "react";
import blogData from "../data/blogData.json";

const BlogSection = () => {
  const { categories, blogs } = blogData;
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const findCategory = (id) =>
    categories.find((c) => c.id === id)?.name || "Unknown";

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIdx = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIdx, startIdx + blogsPerPage);

  const handlePageClick = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 text-gray-900 py-16 px-6">
      {/* Sticky Categories */}
      <nav className="sticky top-20 z-10 bg-white bg-opacity-90 backdrop-blur-md py-4 mb-12 max-w-6xl mx-auto rounded-2xl shadow-lg flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold shadow-md transition hover:scale-105 hover:shadow-lg"
          >
            {category.name}
          </button>
        ))}
      </nav>

      {/* Blog Grid */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {currentBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden border border-orange-100 group transition-transform duration-300 hover:-translate-y-2"
          >
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="p-6">
              <div className="flex justify-between items-center text-sm text-amber-600 font-medium">
                <span>{findCategory(blog.categoryId)}</span>
                <time dateTime={blog.createdAt}>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </time>
              </div>

              <h2 className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-3 line-clamp-4">{blog.content}</p>

              <div className="flex justify-between items-center mt-5 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  ❤️ {blog.likes} Likes
                </span>
                <span className="flex items-center gap-1">
                  💬 {blog.comments.length} Comments
                </span>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 px-6 py-4 border-t border-amber-200 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-amber-200">
              {blog.comments.map((c, i) => (
                <div
                  key={i}
                  className="border-b border-amber-300/50 py-1 last:border-0"
                >
                  <p className="text-sm text-gray-700 italic truncate">
                    “{c.text}”
                  </p>
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    - {c.user}, {new Date(c.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-3 mt-16 text-amber-700 font-medium max-w-6xl mx-auto">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md border border-orange-400 ${
            currentPage === 1
              ? "opacity-40 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-400 to-amber-500 text-white hover:shadow-md transition"
          }`}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, idx) => {
          const pageNum = idx + 1;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              className={`px-4 py-2 rounded-lg border border-orange-400 ${
                pageNum === currentPage
                  ? "bg-orange-500 text-white shadow-md"
                  : "hover:bg-amber-400 hover:text-white transition"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md border border-orange-400 ${
            currentPage === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:shadow-md transition"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
