"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogsSection() {
  const blogData = [
    {
      id: 2,
      title: "Ram Mandir Lightning Protection System | 200kA Lightning Protection | JEF Techno",
      imageSrc: "/BlogImg/HomePageBlog4.png",
      description:
        "Discover how JEF built the world's first complete sequentially type-tested 200kA lightning protection system for the Shree Ram Janmabhoomi Temple in Ayodhya.",
      path: "/blogs/ram-mandir-lightning-protection",
    },
    {
      id: 1,
      title:
        "EARTHING AND LIGHTNING PROTECTION FOR RELIGIOUS STRUCTURES",
      imageSrc: "/BlogImg/blog-1.png",
      path:"/blogs/earthing-lightning-protection-for-religious-structures"
      
    },
    {
      id: 3,
      title: "MEASUREMENT, SIMULATION, VALIDATION – THE 3 KEY STEPS OF POWER SYSTEM STUDIES",
      imageSrc: "/BlogImg/blog-5.png",
      path:"/blogs/3-key-steps-of-power-system-studies"
    
    },
    {
      id: 4,
      title:
        "CHALLENGES FOR ELECTRICAL SYSTEM DESIGN AND ENGINEERING IN GREENFIELD PROJECTS",
      imageSrc: "/BlogImg/blog-3.png",
      path:"/blogs/electrical-safety-for-greenfield-projects"
    
    },
  ];

  return (
    <section className="py-[60px] md:py-[80px] overflow-hidden bg-[#232427]">
      
      {/* TOP SECTION */}
      <main className="section-container w-full">
        <div className="flex flex-col w-full">
          
          {/* HEADER */}
          <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0 w-full">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
            >
              <h1
                className="
                  text-[26px]
                  sm:text-[32px]
                  font-bold
                  leading-none
                  tracking-[3.36px]
                  uppercase
                  text-[#FF0000]
                "
              >
                Latest Blogs
              </h1>

              <p
                className="
                  mt-[18px]
                  sm:mt-[28px]
                  text-[18px]
                  sm:text-[24px]
                  leading-[150%]
                  font-light
                  text-white
                "
              >
                Discover the latest news, updates and insights
              </p>
            </motion.div>

            {/* EXPLORE MORE BUTTON */}
            <motion.button
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
              onClick={()=>{
                window.location.href = `/blogs`
              }}
              className="
                relative
                overflow-hidden
                group
                w-[200px]
                sm:w-[209px]
                h-[42px]
                rounded-full
                border
                border-[#D0D0D0]
                px-[18px]
                flex
                items-center
                justify-center
                gap-[10px]
                uppercase
                text-white
                tracking-[2px]
                transition-colors
                duration-300
                hover:bg-[#FF0000]
                hover:border-[#FF0000]
              "
            >
              <span
                className="
                  relative
                  z-10
                  text-[13px]
                  sm:text-[14px]
                  uppercase
                  tracking-[1px]
                  text-white
                  font-montserrat
                "
              >
                Explore More
              </span>

              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 w-[18px] transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </motion.button>
          </header>

          {/* FEATURED BLOG */}
          <div className="mt-[50px] md:mt-[64px] flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] xl:gap-[120px]">
            
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
              className="w-full lg:w-[60%] h-[250px] sm:h-[400px] lg:h-[500px] overflow-hidden "
            >
              <img
                src={blogData[0].imageSrc}
                alt={blogData[0].title}
                className="
                  w-full
                  h-full
                  object-contain
                  transform-gpu
                  transition-transform
                  duration-500
                  hover:scale-105
                "
               loading="lazy" />
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
              className="w-full lg:w-[35%] lg:pt-[50px] flex flex-col"
            >
              <span
                className="
                  text-[11px]
                  sm:text-[12px]
                  uppercase
                  font-light
                  text-[#8B8B8B]
                "
              >
                ARTICLE
              </span>

              <h2
                className="
                  mt-[20px]
                  sm:mt-[32px]
                  text-[24px]
                  sm:text-[32px]
                  lg:text-[25px]
                  leading-[140%]
                  sm:leading-[35px]
                  uppercase
                  text-white
                  font-normal
                "
              >
                {blogData[0].title}
              </h2>

              <p
                className="
                  mt-[20px]
                  sm:mt-[32px]
                  text-[15px]
                  sm:text-[18px]
                  leading-[170%]
                  text-[#666666]
                "
              >
                {blogData[0].description}
              </p>

              <span
                className="
                  mt-[28px]
                  sm:mt-[20px]
                  text-[11px]
                  sm:text-[12px]
                  font-light
                  text-[#8B8B8B]
                "
              >
                April 2026
              </span>
               <Link href={blogData[0].path}>
          <div
            className="
              mt-[23px]
              flex
              items-center
              gap-[10px]
              cursor-pointer
              group
            "
          >
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF0000] transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        </Link>
            </motion.div>
          </div>
        </div>
      </main>

      {/* LOWER BLOG CARDS */}
      <section className="section-container mt-[50px] md:mt-[64px] overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
          className="
            grid
            max-w-full
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-[32px]
            md:gap-[48px]
            xl:gap-[64px]
          "
        >
          {blogData.slice(1, 4).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
            >
              <BlogCard
                imageSrc={blog.imageSrc}
                title={blog.title}
                path={blog.path}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
}

function BlogCard({ imageSrc, title, path }) {
  return (
    <article className="w-full flex flex-col">
      {/* IMAGE */}
      <div className="w-full h-[290px] overflow-hidden">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="
            w-full
            h-full
            object-contain
            transform-gpu
            transition-transform
            duration-500
            hover:scale-105
            
          "
         />
      </div>

      {/* CONTENT */}
      <div className="mt-[18px]">
        {/* CATEGORY */}
        <span
          className="
            text-[12px]
            uppercase
            font-light
            text-white
          "
        >
          ARTICLE
        </span>

        {/* TITLE */}
        <h2
          className="
            mt-[14px]
            text-[18px]
            leading-[150%]
            h-15
            text-ellipsis
            overflow-hidden
            uppercase
            text-white
            font-normal
          "
        >
          {title}
        </h2>

        {/* DATE */}
        <p
          className="
            mt-[18px]
            text-[12px]
            font-light
            text-white
          "
        >
          April 2026
        </p>

        {/* READ MORE */}
        <Link href={path}>
          <div
            className="
              mt-[18px]
              flex
              items-center
              gap-[10px]
              cursor-pointer
              group
            "
          >
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF0000] transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
}
