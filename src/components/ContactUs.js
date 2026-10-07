'use client';

import React, { useState, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);

    const toggleConfirmation = () => {
        setShowConfirmation(!showConfirmation);
    };

    useEffect(() => {

        gsap.utils.toArray('.Y-axis-text').forEach((element) => {
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

    const handleSubmitForm = async () => {

        const contactformData = {
            name,
            email,
            mobile,
        };

        toggleConfirmation();
        setTimeout(() => {
            const element = document.querySelector('.thank-you');
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top + window.scrollY;
            const centerPosition = elementTop - (window.innerHeight / 2) + (elementRect.height / 2);

            window.scrollTo({
                top: centerPosition,
                behavior: 'smooth'
            });
        }, 0);

        setName("");
        setEmail("");
        setMobile("");

        try {
            const response = await axios.post(
                "/api/contact-us",
                contactformData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Server response:", response.data);
        } catch (error) {
            console.error("Error sending data to server:", error);
        }
    };

    return (
        <section className="flex overflow-hidden flex-col text-base font-light  text-stone-300">
            <div className="flex relative flex-col justify-center items-start px-20 py-24 w-full min-h-[628px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <img src="/HomePageImg/ContactUsMainImg.png" alt="Contactusmainimg" className="object-cover z-10 absolute inset-0 size-full"  loading="lazy" />
                <div className="flex z-20 lg:mx-[1%] relative flex-col items-start mb-0 max-w-full w-[521px] max-md:mb-2.5">

                    <h1 className="text-2xl Y-axis-text lg:text-3xl font-semibold text-[#FF0000] uppercase tracking-[2px] max-md:text-4xl">
                        Contact us
                    </h1>

                    <p className="self-stretch Y-axis-text mt-4 text-sm lg:text-base font-normal leading-none text-white max-md:max-w-full">
                        Get in touch with us for any business enquiry.
                    </p>
                    {showConfirmation ? (
                        <div className='w-full flex flex-col items-start gap-12 thank-you mt-16 text-xl Y-axis-text lg:text-2xl font-semibold text-[#FF0000] uppercase tracking-[2px]'>
                            <div className='leading-tight'>Thank You…!! </div>
                            <div className='leading-tight'>Our team has received your information, will get in touch with you within the next 24 hours to discuss how we can help bring your vision to life.</div>
                        </div>
                    ) : (
                        <form id="userDetailsForm"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmitForm();
                            }} className="w-full Y-axis-text mt-12 max-md:mt-10">
                            {/* {inputFields.map((field, index) => (
            <FormInput key={index} label={field.label} type={field.type} />
          ))} */}
                            <div className="mb-6">
                                <label className="sr-only">Name</label>
                                <input
                                    type="text"
                                    name="text"
                                    placeholder={'Name'}
                                    className="overflow-hidden Y-axis-text px-5 py-3 w-full font-medium text-black max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="sr-only">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={'Email'}
                                    className="overflow-hidden Y-axis-text px-5 py-3 w-full font-medium text-black max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="sr-only">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="number"
                                    placeholder={'Mobile Number'}
                                    className="overflow-hidden Y-axis-text px-5 font-medium text-black py-3 w-full max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
                                    required
                                    onChange={(e) => setMobile(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (
                                            !/[0-9]/.test(e.key) &&
                                            !["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete"].includes(e.key)
                                        ) {
                                            e.preventDefault();
                                        }
                                    }}
                                />
                            </div>
                            <button
                                form="userDetailsForm" type="submit"
                                className="overflow-hidden Y-axis-text px-16 py-3 mt-2 max-w-full text-xl font-semibold text-white whitespace-nowrap bg-[#FF0000] rounded-3xl w-[380px] max-md:px-5"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ContactUs