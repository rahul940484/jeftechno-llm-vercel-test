'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { blogData } from './blogData';



const blogPosts = Object.keys(blogData).map(id => ({
  id,
  ...blogData[id],
  path: `/blogs/${id}`
}));

const NewsCard = ({ category, title, date, imageUrl, path, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col w-full group cursor-pointer"
  >
    <Link href={path}>
      <div className="overflow-hidden aspect-[16/9]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
           loading="lazy" />
      </div>
      <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col gap-3">
        <span className="text-white text-[10px] md:text-xs tracking-[2px] uppercase">
          {category}
        </span>
        <h3 className="text-white text-sm md:text-[15px]  tracking-[2px] leading-[1.4] uppercase tracking-wide group-hover:text-[#FF0000] transition-colors">
          {title}
        </h3>
        <span className="text-gray-400 text-xs md:text-sm font-light">
          April 2026
        </span>
      </div>
    </Link>
  </motion.div>
);

const MainBlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogPosts.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="bg-[#1D1F22] min-h-screen font-montserrat pt-[100px] md:pt-[120px] lg:pt-[140px]">
      {/* Hero Banner */}
      <div className="w-full bg-[#1B1818] py-12 sm:py-16 md:py-16">
        <div className="section-container px-4 sm:px-6 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-white text-4xl md:text-4xl tracking-[3px] uppercase"
          >
            All Resources
          </motion.h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="w-full bg-[#2D2E30] py-4 border-t border-white/5">
        <div className="section-container px-4 sm:px-6 lg:px-0 flex flex-wrap items-center gap-2 text-[8px] sm:text-[10px] md:text-xs tracking-tight md:tracking-[1px] uppercase">
          <Link href="/" className="text-white/40 hover:text-[#FF0000]">Home</Link>
          <span className="text-white/20">›</span>
          <Link href="/blogs" className="text-[#FF0000] hover:text-[#FF0000]">Our Blogs</Link>
          
          
        </div>
      </div>

      {/* Main Content */}
      <main className="section-container px-4 sm:px-6 lg:px-0 py-12 sm:py-16 md:py-24">
        <div className=" sm:px-6 lg:px-0">
          <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#FF0000] text-2xl md:text-3xl font-bold tracking-[2px] uppercase mb-10 sm:mb-12"
        >
          All BLOGS
        </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {currentBlogs.map((post, index) => (
            <NewsCard key={post.path} {...post} index={index} />
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-16 md:mt-20 flex justify-center items-center gap-3 sm:gap-4"
        >
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all ${
              currentPage === 1 ? 'opacity-20 cursor-not-allowed' : 'hover:border-white hover:text-white'
            }`}
          >
            <ChevronLeft size={20} className="text-[#FF0000]" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  page === currentPage 
                  ? 'bg-transparent border border-[#FF0000] text-[#FF0000]' 
                  : 'text-white/40 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all ${
              currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : 'hover:border-white hover:text-white'
            }`}
          >
            <ChevronRight size={20} className="text-[#FF0000]" />
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default MainBlogPage;
