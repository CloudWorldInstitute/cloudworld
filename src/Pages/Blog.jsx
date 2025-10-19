import React, { useState } from "react";
import blogData from "../data/blogData.json";

const BlogSection = () => {
    const { admin, categories, blogs } = blogData;

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const findCategory = (id) =>
        categories.find((c) => c.id === id)?.name || "Unknown";

    // Pagination logic
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const startIdx = (currentPage - 1) * blogsPerPage;
    const currentBlogs = blogs.slice(startIdx, startIdx + blogsPerPage);

    const handlePageClick = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white py-12 px-6">
            {/* Sticky Categories */}
            <nav className="sticky top-19 z-10 bg-slate-900 bg-opacity-90 backdrop-blur-sm py-4 mt-15 mb-8 max-w-6xl mx-auto rounded-xl shadow-lg flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className="px-3 py-2 mt- rounded-full bg-indigo-600/30 text-indigo-200 border border-indigo-700 hover:bg-indigo-600 hover:text-white cursor-pointer transition"
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
                        className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:scale-[1.03] transition-transform duration-300"
                    >
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="w-full h-56 object-cover"
                            loading="lazy"
                        />
                        <div className="p-6">
                            <div className="flex justify-between items-center text-sm text-indigo-300 font-mono">
                                <span>{findCategory(blog.categoryId)}</span>
                                <time dateTime={blog.createdAt}>
                                    {new Date(blog.createdAt).toLocaleDateString()}
                                </time>
                            </div>
                            <h2 className="mt-3 text-2xl font-semibold text-white leading-tight">
                                {blog.title}
                            </h2>
                            <p className="text-slate-300 mt-3 line-clamp-4">{blog.content}</p>
                            <div className="flex justify-between items-center mt-5 text-indigo-300 text-sm font-medium">
                                <span>{blog.likes} Likes</span>
                                <span>{blog.comments.length} Comments</span>
                            </div>
                        </div>

                        <div className="bg-slate-800/40 px-6 py-4 border-t border-slate-700/50 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-indigo-900">
                            {blog.comments.map((c, i) => (
                                <div key={i} className="border-b border-slate-600/50 py-1 last:border-0">
                                    <p className="text-sm text-slate-300 italic truncate">“{c.text}”</p>
                                    <p className="text-xs text-slate-400 mt-1 truncate">
                                        - {c.user}, {new Date(c.date).toLocaleDateString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </section>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-3 mt-12 text-indigo-300 font-mono max-w-6xl mx-auto">
                <button
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md border border-indigo-500 ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-indigo-600"
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
                            className={`px-4 py-2 rounded-md border border-indigo-500 ${pageNum === currentPage
                                ? "bg-indigo-600 text-white"
                                : "hover:bg-indigo-600 hover:text-white"
                                }`}
                        >
                            {pageNum}
                        </button>
                    );
                })}

                <button
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md border border-indigo-500 ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-indigo-600"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BlogSection;
