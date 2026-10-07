'use client';

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
import { AnimatePresence,motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const IES = () => {


  useEffect(() => {
    gsap.utils.toArray('.Y-axis-text-Title-Service1').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            stagger: 0.6,
            start: 'top 100%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-Testimonials'),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.Testimonials',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  // For Key Components

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-card-anm'),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.card-slider',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  // Key Check Points

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-Slider-anm'),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.slider-anm',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  // Our Services Animation 

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray('.Y-axis-Service-anm'),
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.circle-slider',
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);




  useEffect(() => {

    gsap.utils.toArray('.ContactUsAnimation').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);
const services = useMemo(() => [
  {
    image: './HomePageImg/WhatWeDoSection/Earthing Studies 2.png',
    text: 'Earthing studies',
    path: '/earthing-studies',
  },
  {
    image: './HomePageImg/WhatWeDoSection/Lightning Protection 2.png',
    text: 'Lightning protection system studies',
    path: '/lightning-protection-studies',
  },
  {
    image: './HomePageImg/WhatWeDoSection/Power System Studies 2.png',
    text: 'Power system studies',
    path: '/power-system-studies',
  },
  {
    image: './HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png',
    text: 'Power quality & root cause analysis',
    path: '/power-quality-studies',
  },
  {
    image: './HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png',
    text: 'Instrumentation earthing',
    path: '/instrumentation-earthing-studies',
  },
], []);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const serviceRefs = useRef([]);
  const service2Refs = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      gsap.fromTo(img,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2.5,
          ease: 'power2.inOut'
        }
      );
    }
  }, [imgRef]);

  const handleMouseEnter = (index, image) => {
    setHoveredIndex(index);
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setBackgroundImage('');
  };

  useEffect(() => {
    serviceRefs.current = serviceRefs.current.slice(0, services.length);
  }, [services]);

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === hoveredIndex && services[index]?.text !== '') {
          gsap.to(ref, { scale: 1.3, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.5 : 1,
            // border: hoveredIndex !== null && services[index]?.text === '' ? '1px solid white' : '',
            backgroundColor: hoveredIndex !== null && services[index]?.text === '' ? 'transparent' : '',
            duration: 0.2,
            ease: 'power2.inOut'
          });
        }
      }
    });
  }, [hoveredIndex, services]);

 



  const navItems = [
    { label: 'HOME', isActive: true },
    { label: 'SERVICES', isActive: true },
    { label: 'INSTRUMENTATION EARTHING STUDIES', isActive: false },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const benefitItems = [
    "ABOUT Earthing studies",
    'What is an Earthing/Grounding System Studies',
    'Earthing/Grounding System Studies',
    'Our Certifications and Expertise',
    'Detailed Study Reports and Analysis',
    'Benefits of Professional Earthing/Grounding System Studies',
  ];

  const components = [

    {
      imageSrc: './SerivePage/01.png',
      title: 'Riser Integrity Testing',
      description: 'Evaluating the condition of risers to detect faulty connections/joints with above & below ground.',
    },
    {
      imageSrc: './SerivePage/02.png',
      title: 'Grid Integrity Testing',
      description: 'Checking the continuity and integrity of the grounding grid using advanced impedance measurement techniques.',
    },
    {
      imageSrc: './SerivePage/03.png',
      title: 'Soil Resistivity Testing',
      description: 'Conducting tests to measure soil resistivity and design effective grounding systems.',
    },
    {
      imageSrc: './SerivePage/04.png',
      title: 'Touch and Step Potential Measurement',
      description: 'Assessing the potential differences that can occur on the surface of the ground to ensure personnel safety.',
    },
    {
      imageSrc: './SerivePage/05.png',
      title: 'Simulation',
      description: 'Earthing grid in CDEGS software.',
    },
    {
      imageSrc: './SerivePage/06.png',
      title: 'Earth Electrode Resistance Testing',
      description: 'Measuring the resistance of earth electrodes using both Fall of Potential and Stake less methods.',
    },
  ]

  const buttons = [
    { text: 'CONTACT US', className: 'bg-[#FF0000]' }
  ];


  return (
    <>

      {/* Landing Img Section */}

      <section className="flex overflow-hidden h-screen flex-col bg-white">
        <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
          <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
            <source src="/SerivePage/Instrumrntation Earthing Banner videos.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex Y-axis-text-Title-Service1 inset-y-3/4 lg:-mt-[2%] 2xl:mt-0 lg:inset-x-20 p-4 relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full mb-0 mx-40 max-w-full max-md:mb-2.5">
            <h1 className=" lg:text-5xl md:text-4xl text-3xl font-bold my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
              INSTRUMENTATION EARTHING 
            </h1>
            <div className="flex gap-6 items-center self-start mt-8 text-lg uppercase text-neutral-900  max-md:mt-10">
              <Link href={'/get-in-touch'}>
                <button className="uppercase px-5 lg:px-10 self-stretch  py-2 lg:py-3 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-lg hover:bg-[#FF0000] hover:text-white 2xl:min-h-[64px] rounded-[50px]">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Us section */}



      <section className="flex h-auto -mb-11 md:mb-0 overflow-hidden flex-col bg-stone-900">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full" />
        <nav className="flex flex-col justify-center py-6 px-24 w-full bg-zinc-800 min-h-[64px] max-md:px-5 max-md:max-w-full">
          <div className="flex w-full max-md:max-w-full">
            <div className="flex items-center h-full min-w-[240px]">
              {navItems.map((item, index) => (
                <div key={index} className="flex items-center self-stretch my-auto">
                  <div className={`self-stretch my-auto text-xs tracking-wide leading-none uppercase whitespace-nowrap ${item.isActive ? 'text-[#FF0000]' : 'text-neutral-300'}`}>
                    {item.label}
                  </div>
                  {item.isActive && (
                    <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
                      <div className="flex items-center w-[7px]">
                        <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98403646f26f29fd8d19e6e57b2e9f8b5de2f748795475a0d9039378b1786404?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="98403646F26F29Fd8D19E6E57B2E9F8B5De2F748795475A0D9039378B1786404?Placeholderifabsent=True&Apikey=7904Fd7Afaaf4Ee2B0837Ab86D91B244" className="object-contain flex-1 w-full aspect-square" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
        <div className="flex ContactUsAnimation justify-center items-end self-center px-80 mt-24 max-w-full min-h-[80px] w-[770px] max-md:px-5 max-md:mt-10">
          <img loading="lazy" src="/SerivePage/Earthingicon.png" alt="Earthing Studies Logo" className="object-contain w-16 aspect-square" />
        </div>
        <header className="flex p-4 ContactUsAnimation flex-col items-center self-center mt-10 w-full text-base text-center text-white max-w-[1391px] max-md:mt-10 max-md:max-w-full">
         <div className="w-full text-3xl max-md:max-w-full">
  WHY INSTRUMENTATION SYSTEMS FAIL IN WELL-MAINTAINED PLANTS
</div>

<p className="ContactUsAnimation self-stretch mt-12 w-[80%] lg:w-[60%] text-center mx-auto font-light max-md:mt-10 max-md:max-w-full">
  Process plants and industrial facilities invest significantly in their instrumentation and control infrastructure — DCS systems, PLCs, 4–20 mA signal loops, Foundation Field Bus, HART protocols, transmitters, junction boxes, and field instruments. These systems are carefully designed, commissioned, and regularly maintained.
</p>

<p className="ContactUsAnimation self-stretch mt-12 w-[80%] lg:w-[60%] text-center mx-auto font-light max-md:mt-10 max-md:max-w-full">
  Yet across industries and geographies, the familiar pattern of problems recurs unexplained trips, nuisance alarms, signal drifts, communication failures, and intermittent malfunctions that are not only difficult to diagnose but more challenging to eliminate.
</p>

<p className="ContactUsAnimation self-stretch mt-12 w-[80%] lg:w-[60%] text-center mx-auto font-light max-md:mt-10 max-md:max-w-full">
  In the majority of cases, the root cause is not the instrument by itself. It is the earthing system that underpins it.
</p>

        </header>
        <div className="flex ContactUsAnimation flex-col self-center mt-3 max-w-full text-sm md:text-base leading-6 text-center text-[#FF0000]  w-[770px] max-md:mt-10">
          <p className="px-56 w-full max-md:px-5 max-md:max-w-full">
            Get in touch for any queries and real-life case-studies
          </p>
          <div className="flex mt-2.5 w-full min-h-[24px] max-md:max-w-full" />
        </div>
        <Link href='/get-in-touch' className="ContactUsAnimation flex gap-3.5 justify-center items-center self-center py-4 px-10 max-w-full text-sm tracking-wider leading-none text-center text-white uppercase border border-white border-solid rounded-[60px]">
          <span className="self-stretch my-auto">CONTACT US</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33562234bc92238f0281eafa23a9b3c49a837f5ae8d3662c67bc1d8b919e14?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="Ad33562234Bc92238F0281Eafa23A9B3C49A837F5Ae8D3662C67Bc1D8B919E14?Placeholderifabsent=True&Apikey=7904Fd7Afaaf4Ee2B0837Ab86D91B244" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </Link>
      </section>




      {/* 
      <section>
          < VerticalCarousel />
      </section> */}

      <section>
        < QuestionSection/>
      </section>

<section>
  <BenefitsSection />
</section>



      {/* <section>
        < CarouselSection components={components} />
      </section> */}


     
    <section className="hidden sm:block">
  <div className={` h-full bg-slate-900`}>
    <div className=" w-full h-full py-20 mainSection bg-stone-900 overflow-hidden relative">
      
      {backgroundImage && (
        <div className="absolute inset-0 w-full h-full ">
          <img
            ref={imgRef}
            src={backgroundImage}
            
            className="absolute inset-0 w-full h-full object-cover"
           loading="lazy"  alt="Image"/>
        </div>
      )}

      <section className="flex overflow-hidden flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
        
        <h2 className="self-center text-3xl font-semibold leading-none text-[#FF0000] tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
          Our Services
        </h2>

        <div className="circle-slider flex flex-col items-center mt-20 max-md:mt-10 w-full h-full">

          {/* 🔴 TOP ROW (3 items) */}
          <div className="flex Y-axis-Service-anm gap-x-6 md:gap-x-10 lg:gap-x-16 circleChild mb-10">
            {services.slice(0, 3).map((service, index) => (
              <ServiceItem
                key={index}
                text={service.text}
                path={service.path}
                image={service.image}
                ref={(el) => (serviceRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index, service.image)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>

          {/* 🔴 BOTTOM ROW (2 items centered) */}
          <div className="flex Y-axis-Service-anm gap-x-6 md:gap-x-10 lg:gap-x-16 justify-center">
            {services.slice(3).map((service, index) => (
              <ServiceItem
                key={index + 3}
                text={service.text}
                path={service.path}
                image={service.image}
                ref={(el) => (serviceRefs.current[index + 3] = el)}
                onMouseEnter={() => handleMouseEnter(index + 3, service.image)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  </div>
</section>



      <section>
        < TestimonialsSection />
      </section>

    </>
  )
}


const testimonials = [
  "We are thankful to the JEF Techno's team for clearing many of our doubts related to lightning protection. LPS audit was conducted for our plant that happened successfully.",
  "JEF supported us in providing very innovative and practical solutions to earthing and lightning protection systems. Every input from the team was with proper technical justification and in line with national & international standards.",
  "We have been associated with JEF Techno for the last 5 years. Product Quality and After Sales Service provided by them is up to the mark.",
  "We have taken JEF’s technical expertise for Lightning Protection System for our Bangalore Warehouse. While working with them, we got to know that lightning protection is just not some product, it’s a complete solution."
];

function TestimonialsSection() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex overflow-hidden flex-col text-center text-white w-full">
      <div className="flex overflow-hidden flex-col justify-center w-full h-[532px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
          <div className="flex relative flex-col justify-center items-center px-5 sm:px-10 md:px-20 py-20 w-full min-h-[532px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8e06a7d505c4129965e4c18c8e0cb8829849853aeb8e18090ea753ccccfdc6f?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
              alt="Background for testimonials section"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="Testimonials gap-5 flex Y-axis-Testimonials relative flex-col max-w-full w-full md:w-[679px]">
              <h2 className="self-center text-base tracking-widest leading-snug">
                TESTIMONIALS
              </h2>
              <h3 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-widest max-md:max-w-full">
                WHAT OUR CUSTOMERS SAY
              </h3>
              <div className="testimonial-slider mt-[5%]">
                <p
                  className="testimonial-slide"
                  style={{
                    transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((text, index) => (
                    <span key={index} className="testimonial-text text-gray-400">
                      {text}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-10 max-w-full tracking-wider text-white uppercase w-full   mx-auto">
                <Link href={'/get-in-touch'}>
                  <button className={`flex overflow-hidden text-sm justify-center bg-[#FF0000] items-center self-center px-16 md:px-14 py-3 my-auto border border-solid border-zinc-800 border-opacity-10 min-h-[55px] rounded-[60px] `}>
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




const ServiceItem = React.forwardRef(({ path, text, onMouseEnter, onMouseLeave }, ref) => {
  const content = (
    <div
      ref={ref}
      className={`flex w-[7.2rem] h-[7.2rem] lg:h-[9rem] lg:w-[9rem] 2xl:w-[11.5rem] 2xl:h-[11.5rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
        ${text === "" ? "bg-transparent" : "border border-solid hover:bg-[#FF0000]"}`}
      onMouseEnter={() => {
        if (text !== "") {
          onMouseEnter();
        }
      }}
      onMouseLeave={() => {
        if (text !== "") {
          onMouseLeave();
        }
      }}
    >
      <span className="text-center text-[10px] lg:text-[10px] 2xl:text-[12px] ">{text}</span>
    </div>
  );

  return path ? <Link href={path}>{content}</Link> : content;
});

ServiceItem.displayName = "ServiceItem";

const ServiceItem2 = React.forwardRef(({ path, text, onMouseEnter, onMouseLeave }, ref) => {
  const content = (
    <div
      ref={ref}
      className={`flex w-[7.2rem] h-[7.2rem] lg:h-[9rem] lg:w-[9rem] 2xl:w-[11.5rem] 2xl:h-[11.5rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
        ${text === "" ? "bg-transparent" : "border border-solid hover:bg-[#FF0000]"}`}
      onMouseEnter={() => {
        if (text !== "") {
          onMouseEnter();
        }
      }}
      onMouseLeave={() => {
        if (text !== "") {
          onMouseLeave();
        }
      }}
    >
      <span className="text-center text-[10px] lg:text-[10px] 2xl:text-[12px] ">{text}</span>
    </div>
  );

  return path ? <Link href={path}>{content}</Link> : content;
});

ServiceItem2.displayName = "ServiceItem2";




function CarouselSection({ components }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // Default to 1 for mobile
  const totalCards = components.length;

  // Function to handle the right click (move forward)
  const handleCarouselClickRight = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % totalCards; // Move forward one card
    });
  };

  // Function to handle the left click (move backward)
  const handleCarouselClickLeft = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + totalCards) % totalCards; // Move backward one card
    });
  };

  // Update the number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2); // Medium
      } else {
        setVisibleCards(3); // Large
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  return (
    <section className="flex xl:px-[100px] lg:px-[60px] flex-col items-start px-5 pt-16 pb-32 bg-black">
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <h2 className="md:text-3xl text-2xl font-bold leading-none text-[#FF0000] uppercase">
          KEY COMPONENTS OF THE STUDY
        </h2>
        <div className="flex self-end flex-col min-h-[60px]">
          <div className="flex gap-5 items-start w-full max-w-[140px]">
            {/* Left Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickLeft}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch p-5 my-auto w-full border border-white border-solid basis-0 min-h-[60px] rounded-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/150914823e04aa0b72d10dfe3eaaf22d38b599636111c8b7ad6e80476980a940?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Left Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
            {/* Right Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickRight}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch px-5 my-auto bg-white border border-solid basis-0 border-zinc-900 border-opacity-10 h-[60px] min-h-[60px] rounded-[60px] w-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcda9453f93d58b48e207cfd8d3b19c69b7c4768fd9e522cbaaea6950c4e4b3?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Right Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center card-slider items-center mt-10 w-full overflow-hidden">
        {/* Carousel wrapper */}
        <div
          className="flex transition-transform  duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`, // Move based on currentIndex and visibleCards
            width: `${totalCards * (100 / visibleCards)}%`, // Total width based on total cards and visible cards
          }}
        >
          {components.map((component) => (
            <div
              key={component.title}
              className="flex overflow-hidden Y-axis-card-anm flex-col self-center sm:self-start items-center sm:items-start w-full "
              style={{
                flex: `0 0 ${100 / visibleCards}%`, // Adjust width of each card based on visibleCards
              }}
            >
              <img src={component.imageSrc} alt={component.title} className="h-[3rem]"    loading="lazy" />
              <h3 className="text-[#FF0000] font-normal w-[80vw] sm:w-[90%] text-2xl sm:text-start my-5 text-center">{component.title}</h3>
              <p className=" text-gray-400 text-center w-[80vw] sm:w-[70%] font-thin lg:w-[80%] sm:text-start text-lg max-w-screen-xl">{component.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}














// const VerticalCarousel = () => {
//   const benefitItems = [
//     "ABOUT Earthing studies",
//     "What is an Earthing/Grounding System Studies",
//     "Earthing/Grounding System Studies",
//     "Our Certifications and Expertise",
//     "Detailed Study Reports and Analysis",
//     "Benefits of Professional Earthing/Grounding System Studies",
//   ];

//   const cardContents = [
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
//       title: "What is an earthing / grounding system studies",
//       description:
//         "An Earthing/Grounding System Study involves evaluating the effectiveness and integrity of both above and below ground connections in electrical installations. These studies help in pinpointing defective joints that can seriously affect the safety and performance of electrical systems.",
//     },
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
//       title: "Our certifications and expertize",
//       description:
//         `JEFs team is certified and trained in the latest standards and practices, including: |3 patents in the area of Grounding System Testing. |IEEE Standards: Compliance with IEEE 80, IEEE 81, ${" "}IEEE 142, and IEEE 1100`,
//     },
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
//       title: "Earthing/Grounding System Studies ?",
//       description:
//         "|Having data of 300,000 earth riser connections in various geographics, the defect rate is alarming. (Get in touch with us to see the statistics)| Rectifying defective connections will help ensuring the safety of personnel and equipment by preventing electric shock and equipment damage.|Enhancing the reliability and performance of electrical systems.|Complying with international standards such as IEEE, IEC, and local regulations.|Preventing operational disruptions and improving system efficiency",
//     },
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
//       title: "Preventing operational disruptions and improving system efficiency.",
//       description:
//         "|Comprehensive documentation of test results, findings and observations with details of specific risers; joints that need rectification | Summary of compliance with relevant standards and recommendations for improvements | Actionable insights for enhancing system safety and performance including design and maintenance related aspects if any",
//     },
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
//       title: "Detailed Study Reports and Analysis",
//       description:
//         `Our detailed reports include : |Comprehensive documentation of findings, measurements, and observations|Summary of compliance with relevant standards and recommendations for improvements.|Actionable insights for optimizing system safety and protection against lightning`,
//     },
//     {
//       imgSrc:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
//       title: "Benefits of Professional Earthing/Grounding System Studies",
//       description:
//         "| Enhanced Safety: Reducing the risk of lightning-related hazards and protecting personnel and equipment.| Operational Reliability:Ensuring uninterrupted operations and protecting critical infrastructure |Standards Compliance: Meeting international and local regulations for lightning protection systems.|Cost Savings: Preventing costly damage and downtime through effective lightning protection measures.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <section>
//       <div className="overflow-hidden py-20 w-full bg-stone-900 max-md:pt-24 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
//         <div className="flex w-[95%] gap-5 max-md:flex-col">
//           {/* Left Side: Benefit Items */}
//           <div className="flex flex-col lg:w-[44%] max-md:ml-0 max-md:w-full">
//             <ul className="hidden lg:flex flex-col mx-auto justify-center space-y-5 max-w-full text-sm leading-6 text-gray-400 w-[90%] lg:w-[70%] max-md:pl-5 max-md:ml-2.5">
//               {benefitItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className={`flex transition-all duration-300 ease-in-out items-start w-full rounded-xl cursor-pointer ${
//                     activeIndex === index
//                       ? "text-white md:text-xl xl:text-2xl font-semibold h-32 xl:h-56"
//                       : "h-auto text-base"
//                   }`}
//                   onClick={() => handleClick(index)}
//                 >
//                   {activeIndex === index && (
//                     <div className="bg-[#FF0000] w-1 h-full mr-4"></div>
//                   )}
//                   <div
//                     className={`xl:w-[80%] uppercase min-w-[20%] ${
//                       activeIndex === index ? "text-white" : "text-gray-400"
//                     }`}
//                   >
//                     {item}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Side: Vertical Carousel Content */}
//           <div className="relative flex flex-col w-[56%] max-sm:h-[70vh] overflow-hidden max-md:ml-0 max-md:w-full">
//             <div
//               className="absolute transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateY(-${(activeIndex * 100)/6}%)`}}
//             >
//               {cardContents.map((content, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col items-start text-2xl  md:text-3xl text-[#FF0000] h-screen max-md:max-w-full"
//                   >
//                     <img
//                       loading="lazy"
//                       src={content.imgSrc}
//                       alt={content.title}
//                       className="object-contain max-w-full aspect-[1.77] w-[6rem] xl:w-[124px] transition-opacity duration-500 ease-in-out"
//                       />
//                     <ul className="lg:hidden flex flex-col mx-auto justify-center space-y-5 my-4 max-w-full text-sm leading-6 text-gray-400 w-[90%] ">
//                         {benefitItems.slice(0, 1).map((item, index) => (
//                           <li
//                             key={index}
//                             className={`flex transition-all duration-300 ease-in-out items-start w-full rounded-xl cursor-pointer ${
//                               activeIndex === index
//                                 ? "text-white text-lg lg:text-2xl h-14 lg:h-24"
//                                 : "h-auto text-base"
//                             }`}
//                             onClick={() => handleClick(index)}
//                           >
//                             {activeIndex === index && (
//                               <div className="bg-[#FF0000] w-1 h-full mr-4"></div>
//                             )}
//                             <div
//                               className={`w-[80%] uppercase min-w-[20%] ${
//                                 activeIndex === index ? "text-white" : "text-gray-400"
//                               }`}
//                             >
//                               {item}
//                             </div>
//                           </li>
//                         ))}
//                       </ul>


//                     <h2 className="mt-6 lg:w-[80%] md:text-2xl lg:text-3xl font-semibold ml-5 lg:ml-0 tracking-[4.53px] uppercase max-md:max-w-full">
//                       {content.title}
//                     </h2>
//                     <div className="mt-10 max-md:max-w-full">
//                       <div className="flex gap-5 max-md:flex-col">
//                         <div className="flex h-auto flex-col w-full max-md:w-full">
//                           {/* Splitting description by period and inserting line breaks with bullet */}
//                           {content.description.split("|").map((sentence, idx) => (
//                           <div key={idx} className="flex items-start">
//                             <span className="leading-9 tracking-widest text-white max-md:max-w-full">
//                               {idx > 0 && "•"} {/* Add bullet point for new lines */}
//                             </span>
//                             <p className="ml-4 text-base  font-light lg:leading-7 tracking-widest text-white max-md:max-w-full">
//                               {["Enhanced Safety:", "Operational Reliability:", "Standards Compliance:", "Cost Savings:"].includes(sentence.trim())
//                                 ? (
//                                   <span className="text-[#FF0000] !important">{sentence.trim()}</span> // Add the color red forcibly
//                                 ) : (
//                                   sentence.trim() // Render the rest of the text as normal
//                                 )}
//                             </p>



//                           </div>
//                         ))}



//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//             </div>
//           </div>

//           {/* Additional Image Section */}
//           <div className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col grow justify-center my-[6%] max-md:mt-10 max-md:max-w-full">
//               <img
//                 loading="lazy"
//                 src="/SerivePage/magna-discovery.jpg.png"
//                 alt="Earthing/Grounding System Illustration"
//                 className="object-cover w-full h-full aspect-[0.96] max-md:max-w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };












// ------------------------------------------------------------------------------------------------------------------------



  


const  QuestionSection= () =>{
  const questionsData = [
  {
    id: 1,
    question: "WHAT IS AN INSTRUMENTATION EARTHING AUDIT?",
    answer: `An Instrumentation Earthing Audit is a detailed, structured and end-to-end technical evaluation of the grounding architecture that supports instrumentation and control systems in industrial facilities. It traces the entire earthing path—from field instruments and cable shields, through junction boxes, marshalling cabinets, DCS panels, up to system cabinets, control room earth buses, and finally the below ground instrumentation and protective earthing systems which are interconnected to the plant earth grid—verifying equipotential bonding, noise control, and safety compliance at every node against globally accepted standards.

Aligned with IEEE 1050-2004, IEEE 1100-2005, and IEC 61000-5-2, the audit combines precision measurements—such as shield loop current, millivolt drop, continuity, EM field intensity, and power quality—with structured visual inspection. The outcome is not just compliance verification, but a diagnostic insight into hidden risks like circulating currents, EMI susceptibility, and unsafe grounding practices—translated into actionable findings directly referenced to international standards.`,
  },

  {
    id: 2,
    question: "WHAT ACTUALLY GOES WRONG",
    answer: `The following 12 factors are identified as capable of interrupting the operation of instrumentation systems

I. Surges, Spikes, and Glitches  
II. Leakage Current  
III. Circulating Current  
IV. Differential Grid / Earth Potential  
V. Incorrect Earthing Philosophy  
VI. Incorrect Cabling Philosophy  
VII. Compromised Common Earthing Point (CEP)  
VIII. High Shield Current  
IX. EMI and EMF  
X. Looping of Excess Power Cables Inside Panels  
XI. Unused and Unterminated Cables  
XII. Power Quality Disturbances`,
  },

  {
    id: 3,
    question: "THE SCALE OF THE PROBLEM IN OPERATING PLANTS",
    answer: `The challenge is compounded by the sheer scale of instrumentation infrastructure in a typical process plant or generating station. A medium-sized plant may have hundreds of panels, thousands of junction boxes, and tens of thousands of individual field instruments—each with its own earthing connections, cable shields, and bonding points. The grounding system is physically extensive, installed over years by multiple contractors, and subject to ongoing modifications and additions that incrementally degrade the original design intent.

Errors accumulate silently.
• A shield grounded at both ends in one junction box.  
• A signal ground bar inadvertently connected to a PE bar during a panel modification.  
• An instrument earth pit left isolated from the plant grid.

None of these individually cause an immediate, visible failure. Together, they create the conditions for the intermittent, hard-to-diagnose problems that operations teams experience as unexplained trips and nuisance alarms — and which plant engineering teams are unable to resolve through standard troubleshooting.`,
  },

  {
    id: 4,
    question: "WHY STANDARD ELECTRICAL TESTING DOES NOT SOLVE THIS",
    answer: `Routine electrical testing — insulation resistance, continuity, earth pit resistance — is designed for the protective earthing system. It does not examine the signal reference ground, shield termination practices, shield loop current, earth bar segregation, or the global earthing architecture. An installation that passes all routine electrical tests can still have an instrumentation earthing system that is non-compliant with IEEE 1050-2004, IEC 61000-5-2, and IEEE 1100-2005 — and that is actively causing operational problems.

This is the gap that a specialist Instrumentation Earthing Audit addresses.`,
  },

  {
    id: 5,
    question: "JEF APPROACH",
    answer: `JEF's Instrumentation Earthing Audit covers 15 structured tests and inspections applied across panels, junction boxes, field instruments. The scope escalates logically: where shield loop current measurements at the panel level indicate a ground loop condition, the audit is extended to junction boxes and field assets to locate the source. It doesn't end with measurements alone, we rectify the anomalies identified and also perform measurements to cross verify the quality of rectification not just by visual inspection but also check whether the measured values post rectification are within the acceptable limits prescribed in standards there by ensuring a foolproof system.

The approach involves 3 phases  
Phase -1 – Audit and Identification of gaps / anomalies  
Phase-2 – Rectification of anomalies  
Phase -3 – Retesting after rectification.`,
  },

  {
    id: 6,
    question: "DELIVERABLES",
    answer: `• Detailed engineering report with all measurement results, test locations, and test conditions.  
• Site photographs documenting the installation condition and all visible deficiencies identified.  
• List of all identified anomalies and defects, with specific locations and BOM required for correction.  
• Detailed report and site photographs post re-audit.`,
  },

  { 
    id: 7, 
    question: "JEF CAPABILITY",
    answer: `• JEF has conducted Instrumentation Earthing Audits across more than 120 control rooms and instrumentation panel rooms, auditing over 9,500 panels, 32,053 junction boxes, and 2,04,963 field instruments and field assets.  
• Our patented Smart Digitization process delivers consistent, structured, and auditable reports at scale — enabling systematic tracking of findings across large, multi-room installations and clear prioritisation of corrective actions.`,
  },
];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex w-full bg-[#1B1818] text-white py-20 px-10 max-md:flex-col">

      {/* LEFT SIDE */}
      <div className="w-[30%] max-md:w-full pl-6">
       <div className="border-l-2 border-[#FF0000] pl-3">
         <h2 className="text-3xl tracking-widest text-gray-400 uppercase mb-6">
          ABOUT
        </h2>

        <h3 className="text-3xl uppercase mb-10 leading-8 ">
          Instrumentation <br /> Systems
        </h3>
       </div>

        <div className="flex flex-col gap-4">
          {questionsData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`text-left text-sm tracking-wide transition-all duration-300 ${
                activeIndex === index
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {item.question}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-[70%] max-md:w-full pl-16 max-md:pl-0 mt-10 max-md:mt-10">

        <div className="text-[#FF0000] text-5xl font-bold mb-6">JEF</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl tracking-[3px] uppercase text-[#FF0000] mb-6">
              {questionsData[activeIndex].question}
            </h2>

            <p className="text-gray-300 leading-7 whitespace-pre-line">
              {questionsData[activeIndex].answer}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}




const ITEMS_PER_PAGE = 3;

const BenefitsSection = () => {
  const [page, setPage] = useState(0);

   const benefitsData = [
  {
    id: "01",
    title: "Reduces Electrical Noise and Signal Disturbance",
    description:
      "By identifying and eliminating ground loops, circulating currents, and shield termination errors that corrupt 4–20 mA and digital signals.",
  },
  {
    id: "02",
    title: "Prevents Malfunctions, False Alarms, and Nuisance Trips",
    description:
      "By addressing the root causes that standard electrical testing does not detect.",
  },
  {
    id: "03",
    title: "Improves System Reliability and Reduces Downtime",
    description:
      "By eliminating the intermittent, hard-to-diagnose failure modes that recur when earthing problems are left uncorrected.",
  },
  {
    id: "04",
    title: "Enhances Personnel and Equipment Safety",
    description:
      "By identifying isolated grounding elements and earth bar mix-ups that represent genuine safety hazards under fault conditions.",
  },
  {
    id: "05",
    title: "Improves Process Stability and Production Efficiency",
    description:
      "By restoring signal integrity and eliminating the operational disruptions caused by instrumentation system noise.",
  },
  {
    id: "06",
    title: "Documented Compliance with International Standards",
    description:
      "Audit reports referenced to IEEE 1050-2004, IEEE 1100-2005, IEC 61000-5-2, and related standards, supporting regulatory, insurance, and operator requirements.",
  },
];

  const totalPages = Math.ceil(benefitsData.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const currentItems = benefitsData.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

 

  return (
    <section className="bg-black text-white px-16 py-20 max-md:px-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-[#FF0000] uppercase text-3xl tracking-[3px]  max-w-[900px] font-semibold">
          Benefits from JEF Instrumentation Earthing Audit
        </h2>

        {/* Arrows */}
        <div className="flex gap-4">
          <button
            onClick={prevPage}
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            ←
          </button>
          <button
            onClick={nextPage}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:opacity-80 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-16 max-md:grid-cols-1"
        >
          {currentItems.map((item, index) => (
            <div key={index} className="relative">

              {/* Divider line */}
              {index !== 0 && (
                <div className="absolute left-[-30px] top-0 h-full border-l border-gray-700" />
              )}

              {/* Number */}
              <div className={`text-5xl text-gray-500 mb-4 font-montserrat font-bold`}>
                {item.id}
              </div>

              {/* Title */}
              <h3 className="text-[#FF0000] text-lg font-medium mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-6">
                {item.description}
              </p>

            </div>
          ))}
        </motion.div>
      </AnimatePresence>

    </section>
  );
}














export default IES
