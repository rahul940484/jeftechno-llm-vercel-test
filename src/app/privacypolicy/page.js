export const metadata = {
    title: "Privacy Policy | Jef UAE",
    description: "Learn how Jef UAE protects your privacy and handles your personal data.",
    keywords: [
        "contact JEF UAE",
        "privacy policy",
        "Jef UAE",
        "data protection",
        "user privacy",
        "personal data security",
        "privacy practices",
        "data handling"
    ],
    alternates: {
        canonical: "https://www.jeftechno.com/privacypolicy",
    },
    openGraph: {
        title: "Privacy Policy | Jef UAE",
        description: "Learn how Jef UAE protects your privacy and handles your personal data..",
        url: "https://www.jeftechno.com/privacypolicy",
        siteName: "Privacy Policy | Jef UAE",
    },
};

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "What Types of Information Does JEF Techno Collect About its Users?",
            subsections: [
                {
                    subtitle: "Personal Information",
                    content: "\"Personal Information\" is information that identifies you as an individual or relates to an identifiable individual, including: name, title, company name, job function, expertise, postal address, telephone number, or email address. If you submit any Personal Information relating to other people to us or to our service providers in connection with the Sites, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy."
                },
                {
                    subtitle: "Other Information",
                    content: "\"Other Information\" is any information that does not reveal your specific identity or does not directly relate to an identifiable individual. This might include, for instance, browser and device information; App usage data; information collected through cookies, pixel tags, and other technologies; demographic information and other information provided by you; or aggregated information. We use this information to facilitate our operation of the Sites and for other purposes described below."
                },
                {
                    subtitle: "IP Address:",
                    content: "Your \"IP Address\" is a number that is automatically assigned to the computer that you are using by your Internet Service Provider (ISP). An IP Address may be identified and logged automatically in our server log files whenever you access the Sites, along with the time of the visit and the page(s) that you visited. Collecting IP Addresses is standard practice and is done automatically by many websites, applications and other services.\n\nJEF Techno uses IP Addresses to calculate usage levels of the Sites, help diagnose problems with its servers, administer the Sites, and monitoring the regions from which you navigate to JEF Techno Sites."
                }
            ]
        },
        {
            title: "How Does JEF Techno Collect Information?",
            subsections: [
                {
                    subtitle: "Personal Information.",
                    content: "We and our service providers may collect Personal Information in a variety of ways, including"
                },
                {
                    subtitle: "Through the Sites:",
                    content: "We may collect Personal Information through the Sites, e.g., when you request a free trial or demo, register for a webinar, contact us, subscribe to our email newsletter, download content (e.g. brochures), or register to use our Sites."
                },
                {
                    subtitle: "Offline:",
                    content: "We may collect Personal Information from you offline, such as when you attend one of our events, during phone calls with sales representatives, or when you contact our office landline operator."
                },
                {
                    subtitle: "Through You:",
                    content: "JEF Techno may collect information such as your location or your preferred means of communication when you voluntarily provide it. Unless combined with Personal Information, this information does not personally identify you or any other user of the Sites. Note that there is no legal obligation for you to provide us with Personal Information and any information collected by us will be provided by you at your own will and with your consent."
                }
            ]
        }
    ];

    return (
        <>
            <main className="flex overflow-hidden flex-col bg-neutral-100 lg:py-32 py-5">
                <section className="flex overflow-hidden flex-col items-start self-center px-20 py-20 mt-24 max-w-full text-base font-extralight bg-white text-zinc-800 w-[1024px] max-md:px-5 max-md:mt-10">
                    <h1 className="text-4xl font-normal leading-none uppercase tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                        PRIVACY POLICY
                    </h1>
                    <h2 className="mt-16 text-2xl font-normal leading-none text-[#FF0000] max-md:mt-10 max-md:max-w-full">
                        PRIVACY POLICY OF JEF TECHNO SOLUTIONS PVT LTD.
                    </h2>
                    <p className="mt-14 text-xl font-light leading-loose max-md:mt-10">
                        CUSTOMER INFORMATION:
                    </p>
                    <p className="mt-9 text-lg leading-6 max-md:max-w-full">
                        JEF Techno Solutions PVT LTD., and its Affiliates ("JEF TECHNO " or "We") know that you care about how the information we receive from you is used and shared, and we take your privacy seriously.
                    </p>
                    <p className="self-stretch text-lg mt-9 leading-6 max-md:mr-1 max-md:max-w-full">
                        This Privacy Policy describes JEF Techno's privacy practices in relation to information that we collect through websites operated by us from which you are accessing this Privacy Policy (collectively, the "Domains"), through the software applications made available by us for use on or through computers and mobile devices that link to this Privacy Policy (the "Apps"), through our social media pages and apps located at Facebook, LinkedIn, Twitter (collectively, the "Social Media Pages"), and other services provided by us both online and offline; as well as through HTML-formatted email messages that we send to you that link to this Privacy Policy (collectively, including the Domains, the Apps and the Social Media Pages, the "Sites"). "You" or a "user" refers to any individual who visits or otherwise uses the Sites. By using the Sites, you are accepting and agreeing to the practices outlined in this Privacy Policy.
                    </p>
                    <p className="self-stretch text-lg mt-9 leading-6 max-md:max-w-full">
                        This Privacy Policy does not apply to the practices of third parties that JEF Techno does not own or control, or to individuals that JEF Techno does not employ or manage. This Privacy Policy also does not apply to information that we receive or handle on behalf of our subscribers in our role as a service provider, such as information that we receive through the JEF Techno 'Marketing Products or Services' or other JEF Techno services, including any apps we make available for use by Services subscribers in future (collectively, the "Services"). Such information is governed by the terms of the applicable services agreement, rather than this Privacy Policy.
                    </p>
                    <p className="mt-8 text-lg max-md:max-w-full">
                        You can request a copy of this Privacy Policy by contacting us at <span className="font-semibold text-base text-[#FF0000]">info@jeftechno.com</span>
                    </p>

                    {sections.map((section, index) => (
                        <article key={index}>
                            <h2 className="mt-11 text-2xl font-normal leading-none text-[#FF0000] max-md:mt-10 max-md:max-w-full">
                                {section.title}
                            </h2>
                            {section.subsections.map((subsection, subIndex) => (
                                <div key={subIndex}>
                                    <h3 className="mt-11 text-xl font-light leading-tight max-md:mt-10">
                                        {subsection.subtitle}
                                    </h3>
                                    <p className="mt-9 text-lg leading-6 max-md:max-w-full">
                                        {subsection.content}
                                    </p>
                                </div>
                            ))}
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
};

export default PrivacyPolicy;
