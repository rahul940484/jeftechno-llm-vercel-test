'use client';

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from 'next/navigation';


gsap.registerPlugin(ScrollTrigger);

function MainFooter() {


    useEffect(() => {
        // Select all elements with the 'X-axis-anm' class and apply staggered animation
        gsap.fromTo(
            gsap.utils.toArray('.X-axis-card-anm-footer'),
            { opacity: 0, x: 100 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2, // 0.3s delay between each card animation
                scrollTrigger: {
                    trigger: '.card-slider-footer',
                    start: 'top 80%',
                    end: 'top 100%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);



    const itemsAbout = [
        { name: 'Who we are', path: '/about-us' },

        { name: 'Careers', path: '/careers' },
        { name: 'Contact us', path: '/get-in-touch' },
    ];

    const itemsLocation = [
        { name: 'India', path: 'https://www.jeftechno.com/' },
        { name: 'UAE', path: 'https://www.jeftechno.com/', newTab: true },

    ];

    const itemsBusiness = [
        { name: 'Products', path: '/Products/clps-products' },
        { name: 'Audit Services', path: '/audit-services/earthing-health-assessment' },
        { name: 'Consulting Services', path: '/power-system-studies' },
    ];

    const itemNews = [
        { name: 'All Blogs', path: '/blogs' },
        { name: "Resources", path: "/coming-soon" },
        { name: 'Events', path: "/coming-soon" },

    ];
    const itemInternalUse = [
        { name: 'Employee Login', path: 'https://jef.greythr.com', newTab: true }
    ];
    const pathname = usePathname() || "";
    
    // Construct dynamic FAQ path
    let faqPath = "/faq";
    if (pathname && pathname !== "/") {
        // Exclude specific pages that do not have their own nested /faq routes
        const noNestedFaqRoutes = ["/coming-soon", "/contact"];
        
        if (noNestedFaqRoutes.includes(pathname)) {
            faqPath = "/faq"; // Fallback to global FAQ
        } else {
            // If we are already on a faq page, keep it as is. Otherwise append /faq
            faqPath = pathname.endsWith("/faq") ? pathname : `${pathname}/faq`;
        }
    }

    const itemJefShield = [
        { name: 'FAQ', path: faqPath }
    ];



    return (
        <main className="flex overflow-hidden flex-col items-center lg:pt-24 bg-[#2D2E30]">

            {/* FIRST ROW */}
            {/* <div className="section-container hidden lg:flex flex-row tracking-wider justify-between">
            <Section title="About" items={itemsAbout} />
            <Section title="Locations" items={itemsLocation} />
            <Section title="Our Businesses" items={itemsBusiness} />
            <Section title="News" items={itemNews} />
        </div>

        
        <div className="section-container hidden lg:flex mt-10 gap-70">
            <Section title="Internal Use" items={itemInternalUse} />
            <Section title="Internal Links" items={itemJefShield} />
        </div> */}
            {/* SECOND ROW */}


            {/* FIRST ROW */}
            {/* UNIFIED CONTAINER (Handles both horizontal columns and vertical rows) */}
            <div className="section-container hidden lg:grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-14 tracking-wider">

                {/* FIRST ROW ITEMS */}
                <Section title="About" items={itemsAbout} />
                <Section title="Locations" items={itemsLocation} />
                <Section title="Our Businesses" items={itemsBusiness} />
                <Section title="News" items={itemNews} />

                {/* SECOND ROW ITEMS */}
                <Section title="Internal Use" items={itemInternalUse} />
                <Section title="Internal Links" items={itemJefShield} />

            </div>

            {/* MOBILE FAQ */}
            <div className="lg:hidden w-full">
                <FAQComponent />
            </div>

            <Footer />
        </main>
    );
}


function Footer() {

    return (
        <footer className="card-slider-footer flex flex-col items-center pt-10 bg-[#2D2E30] w-full">
            <hr className="section-conxtainer hidden lg:block shrink-0 mt-2 border border-solid border-neutral-400 max-md:mt-8" />
            <div className="section-container flex X-axis-card-anm-footer-footer flex-row gap-10 justify-center lg:justify-between items-start mt-5 py-6 bg-[#2D2E30]">
                <div className="hidden  card-slider-footer X-axis-card-anm-footer lg:block text-xl tracking-widest text-white uppercase max-md:max-w-full">
                    FOLLOW jef ON SOCIAL MEDIA
                </div>
                <div className="flex X-axis-card-anm-footer flex-row items-center h-full space-x-12 lg:space-x-6">
                    <a href="https://www.youtube.com/@JEFgroup" target="_blank" className="object-contain card-slider-footer text-[#FF0000] hover:text-white transition-colors duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/JEFTECHNO/" target="_blank" className="object-contain card-slider-footer text-[#FF0000] hover:text-white transition-colors duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/jefgroup/" target="_blank" className="object-contain card-slider-footer text-[#FF0000] hover:text-white transition-colors duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="https://x.com/JeftechnoIndia" target="_blank" className="object-contain card-slider-footer text-[#FF0000] hover:text-white transition-colors duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="flex overflow-hidden flex-col justify-center items-center py-7 mt-6 w-screen text-white bg-stone-900">
                <div className="section-container flex flex-col lg:flex-row items-center lg:items-center justify-between gap-5">

                    {/* LEFT */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 text-[10px] sm:text-xs font-light tracking-widest text-center">
                        <Link href="/privacypolicy">Privacy Policy</Link>
                        <Link href="/termsandconditions">· Terms of Use</Link>
                        <Link href="/cookiepolicy">· Cookie Policy</Link>
                        <span> © 2026 JEF</span>
                    </div>

                    {/* CENTER */}
                    <div className="flex flex-wrap justify-center items-center gap-2 text-center">
                        <p className="text-white text-xs sm:text-sm">
                            Production company · Obrive
                        </p>

                        <a
                            className="ml-[2px]"
                            href="https://obrive.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="../FooterLogo/obrive-footer-logo.png"
                                alt="ObnovLogo"
                                className="h-4 object-contain"
                             loading="lazy" />
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-auto text-center lg:text-right">
                        <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">
                            This site is protected by reCaptcha and the Google{" "}
                            <Link
                                href="/privacypolicy"
                                className="text-white transition text-[10px] sm:text-xs"
                            >
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/termsandconditions"
                                className="text-white transition text-[10px] sm:text-xs"
                            >
                                Terms of Use
                            </Link>{" "}
                            apply
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}



function Section({ title, items }) {
    return (
        <section className="flex card-slider-footer X-axis-card-anm-footer flex-col min-h-[234px] w-full sm:w-[219px]">

            <header className="w-full text-xl font-bold tracking-widest text-[#FF0000] uppercase whitespace-nowrap">
                {title}
            </header>

            <ul className="flex overflow-hidden font-light flex-col mt-4 w-full text-base leading-none text-gray-300">
                {items.map((item, index) => (
                    <li key={index} className="flex flex-col justify-center items-start py-2.5 w-full">
                        <div className="flex items-center">

                            <Link href={item.path} target={item.newTab ? "_blank" : undefined} rel={item.newTab ? "noopener noreferrer" : undefined}>
                                <div className="self-stretch my-auto transition-colors duration-300 hover:text-[#FF0000]">
                                    {item.name}
                                </div>
                            </Link>

                        </div>
                    </li>
                ))}
            </ul>

        </section>
    );
}






// -----------------------------------------------------------------------------------------------------


const FAQComponent = () => {
    const [faqData, setFaqData] = useState([
        {
            question: "ABOUT",
            content: [
                { label: 'Who we are', path: '/about-us' },

                { label: 'Career', path: '/careers' },
                { label: 'Contact Us', path: '/contact' }
            ],
            isOpen: false
        },
        {
            question: "Our Business",
            content: [
                { label: 'Products', path: '/Products/clps-products' },
                { label: 'Audit Services', path: '/audit-services/earthing-health-assessment' },
                { label: 'Consulting Services', path: '/power-system-studies' },
            ],
            isOpen: false
        },
        {
            question: "Locations",
            content: [
                { label: 'India', path: '' },
                { label: "UAE", path: "https://www.jeftechno.com/", newTab: true },
                { label: 'USA', path: '' },
            ],
            isOpen: false
        },

        {
            question: "News",
            content: [
                { label: 'All Blogs', path: '/blogs' },
                { label: 'Resources', path: '/resources' },
                { label: 'Events', path: '/events' },
            ],
            isOpen: false
        },
        {
            question: "Jef Shield",
            content: [
                { label: 'Risk Assesment Tool', path: '/coming-soon' },
            ],
            isOpen: false
        },
        {
            question: "Internal Links",
            content: [
                { label: 'FAQ', path: '/faq' },
            ],
            isOpen: false
        },
        {
            question: "Internal Use",
            content: [
                { label: "Employee login", path: "https://jef.greythr.com", newTab: true },
            ],
            isOpen: false
        },
    ]);

    const pathname = usePathname() || "";
    useEffect(() => {
        let faqPath = "/faq";
        if (pathname && pathname !== "/") {
            const noNestedFaqRoutes = ["/coming-soon", "/contact"];
            if (noNestedFaqRoutes.includes(pathname)) {
                faqPath = "/faq";
            } else {
                faqPath = pathname.endsWith("/faq") ? pathname : `${pathname}/faq`;
            }
        }
        setFaqData(prev => prev.map(section => {
            if (section.question === "Internal Links") {
                return {
                    ...section,
                    content: section.content.map(c => c.label === 'FAQ' ? { ...c, path: faqPath } : c)
                };
            }
            return section;
        }));
    }, [pathname]);

    const toggleFAQ = (index) => {
        setFaqData(
            faqData.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : false // Close other items
            }))
        );
    };

    const FAQItem = ({ question, content, isOpen, onToggle }) => {
        const contentRef = useRef(null);
        const [height, setHeight] = useState(0);

        useEffect(() => {
            if (contentRef.current) {
                if (isOpen) {
                    setHeight(contentRef.current.scrollHeight);
                } else {
                    setHeight(0);
                }
            }
        }, [isOpen]);

        useEffect(() => {
            // Select all elements with the 'X-axis-anm' class and apply staggered animation
            gsap.fromTo(
                gsap.utils.toArray('.X-axis-card-anm-footer'),
                { opacity: 0, x: 100 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2, // 0.3s delay between each card animation
                    scrollTrigger: {
                        trigger: '.card-slider-footer',
                        start: 'top 80%',
                        end: 'top 100%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, []);

        return (
            <div className="flex flex-col justify-center p-px self-center border-b w-full px-5 border-solid bg-transparent bg-opacity-70 max-md:max-w-full">
                <div onClick={onToggle} className="flex gap-10 justify-between items-start py-5 md:py-10 w-full max-md:max-w-full">
                    <h2 className="self-stretch py-px leading-relaxed my-auto font-semibold text-lg md:text-xl tracking-wider uppercase text-[#FF0000]">
                        {question}
                    </h2>
                    <div className="flex flex-col items-start self-stretch my-auto min-h-[40px]">
                        <button
                            className="flex flex-col justify-center p-3 w-10 min-h-[40px]"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? "Close answer" : "Open answer"}
                        >
                            <img
                                loading="lazy"
                                src={
                                    isOpen
                                        ? "../AboutUs/DropUpArr.png"
                                        : "../AboutUs/DropDownArr.png"
                                }
                                
                                className="object-contain flex-1 w-full aspect-square"
                             alt="Image"/>
                        </button>
                    </div>
                </div>
                <div
                    ref={contentRef}
                    className="overflow-hidden transition-[max-height] duration-500 ease-in-out w-full"
                    style={{ maxHeight: `${height}px` }}
                >
                    <div className="px-5 py-5">
                        {/* Render content based on whether it's an array or a string */}
                        {Array.isArray(content) ? (
                            <ul>
                                {content.map((item, idx) => (
                                    <li key={idx} className="mb-2">
                                        <Link href={item.path}
                                            target={item.newTab ? "_blank" : undefined}
                                            rel={item.newTab ? "noopener noreferrer" : undefined}
                                        >
                                            <div className="text-stone-300 hover:text-[#FF0000] transition-colors duration-300">
                                                {item.label}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='text-gray-500'>{content}</p>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="flex overflow-hidden relative flex-col">
            <div className="flex absolute inset-0 z-0 flex-col py-0.5 w-full max-md:max-w-full"></div>
            <div className="flex z-0 flex-col self-center w-[95%] xl:w-[70%] lg:w-[80%]">

                <div className="flex max-md:flex-col justify-between items-start w-full max-md:max-w-full">
                    <div className="flex flex-col pt-5 min-w-[240px] w-full lg:w-[48%] max-md:max-w-full">
                        {faqData.slice(0, 7).map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                content={item.content} // Pass dynamic content
                                isOpen={item.isOpen}
                                onToggle={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

};

export default MainFooter;