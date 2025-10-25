import React, { useState } from "react";
import { FaChevronDown } from 'react-icons/fa';
import blogData from "../data/blogData.json";

const BlogSection = () => {
    const { categories, blogs } = blogData;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const blogsPerPage = 6;

    // Find category name helper
    const findCategory = (id) => categories.find((c) => c.id === id)?.name || "Unknown";

    // Filter blogs by category
    const filteredBlogs = selectedCategory === 'All Categories'
        ? blogs
        : blogs.filter(blog => findCategory(blog.categoryId) === selectedCategory);

    // Pagination logic
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const startIdx = (currentPage - 1) * blogsPerPage;
    const currentBlogs = filteredBlogs.slice(startIdx, startIdx + blogsPerPage);

    const handlePageClick = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleCategorySelect = (categoryName) => {
        setSelectedCategory(categoryName);
        setCurrentPage(1);
        setIsDropdownOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-100 text-gray-900 py-16 px-6">

            {/* Sticky Category Dropdown - Only button width */}
            <div className="sticky top-20 ml-20 z-20 my-5 flex justify-">
                <nav className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white font-semibold shadow-md transition hover:scale-105 hover:shadow-lg flex items-center gap-2 min-w-[220px] justify-between"
                    >
                        <span>{selectedCategory}</span>
                        <FaChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <>
                            <div className="absolute top-full mt-2 left-0 w-64 bg-white rounded-xl shadow-xl border border-teal-100 overflow-hidden z-30">
                                <button
                                    onClick={() => handleCategorySelect('All Categories')}
                                    className={`w-full px-6 py-3 text-left transition-colors ${selectedCategory === 'All Categories'
                                            ? 'bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-600 font-semibold'
                                            : 'text-gray-700 hover:bg-teal-50'
                                        }`}
                                >
                                    All Categories
                                </button>

                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategorySelect(category.name)}
                                        className={`w-full px-6 py-3 text-left border-t border-gray-100 transition-colors ${selectedCategory === category.name
                                                ? 'bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-600 font-semibold'
                                                : 'text-gray-700 hover:bg-teal-50'
                                            }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>

                            {/* Backdrop to close dropdown */}
                            <div
                                className="fixed inset-0 z-20"
                                onClick={() => setIsDropdownOpen(false)}
                            />
                        </>
                    )}
                </nav>
            </div>


            {/* Blog Grid */}
            <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {currentBlogs.map((blog) => (
                    <article
                        key={blog.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden border border-teal-100 group transition-transform duration-300 hover:-translate-y-2"
                    >
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                        <div className="p-6">
                            <div className="flex justify-between items-center text-sm text-emerald-600 font-medium mb-3">
                                <span>{findCategory(blog.categoryId)}</span>
                                <time dateTime={blog.createdAt}>
                                    {new Date(blog.createdAt).toLocaleDateString()}
                                </time>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-3">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 line-clamp-4 mb-4">{blog.content}</p>

                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    ❤️ {blog.likes} Likes
                                </span>
                                <span className="flex items-center gap-1">
                                    💬 {blog.comments.length} Comments
                                </span>
                            </div>
                        </div>

                        {/* Comments Section */}
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 px-6 py-4 border-t border-emerald-200 max-h-32 overflow-y-auto">
                            {blog.comments.map((c, i) => (
                                <div key={i} className="border-b border-emerald-300/50 py-1 last:border-0">
                                    <p className="text-sm text-gray-700 italic truncate">"{c.text}"</p>
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
            <div className="flex justify-center items-center gap-3 mt-16 text-emerald-700 font-medium max-w-6xl mx-auto">
                <button
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md border border-teal-400 ${currentPage === 1
                        ? "opacity-40 cursor-not-allowed"
                        : "bg-gradient-to-r from-teal-400 to-emerald-500 text-white hover:shadow-md transition"
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
                            className={`px-4 py-2 rounded-lg border border-teal-400 ${pageNum === currentPage
                                ? "bg-teal-500 text-white shadow-md"
                                : "hover:bg-emerald-400 hover:text-white transition"
                                }`}
                        >
                            {pageNum}
                        </button>
                    );
                })}

                <button
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md border border-teal-400 ${currentPage === totalPages
                        ? "opacity-40 cursor-not-allowed"
                        : "bg-gradient-to-r from-emerald-400 to-teal-500 text-white hover:shadow-md transition"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BlogSection;
