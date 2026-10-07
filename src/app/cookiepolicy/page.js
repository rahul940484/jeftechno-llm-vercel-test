export const metadata = {
    title: "Understanding Cookies | Jef UAE",
    description: "Understand how Jef UAE uses cookies to enhance your browsing experience",
    keywords: [
        "cookie policy",
        "Jef UAE",
        "cookies usage",
        "website cookies",
        "data tracking",
        "user experience",
        "cookies management"
    ],
    alternates: {
        canonical: "https://www.jeftechno.com/cookiepolicy",
    },
    openGraph: {
        title: "Understanding Cookies | Jef UAE",
        description: "Understand how Jef UAE uses cookies to enhance your browsing experience.",
        url: "https://www.jeftechno.com/cookiepolicy",
        siteName: "Understanding Cookies | Jef UAE",
    },
};

const CookiePolicy = () => {
    const sections = [
        {
            title: "AGREE TO ACCEPT COOKIES AND ACCESSIBILITY:",
            content: [
                "Dear Customers and users please note that upon your first visit to an JEF TECHNO SOLUTIONS PVT LTD.,website, a cookie is sent to your computer that uniquely identifies your browser. A \"cookie\" is a small file containing a string of characters that is sent to your computer when you visit a website. We use cookies to improve the quality of our service and to better understand how people use our sites. We do this by storing user preferences in cookies and by tracking user trends and patterns of how people navigate our sites.",
                "Most browsers are initially set up to accept cookies. You can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features or services on our sites may not function properly without cookies. Cookies specific to the JEF TECHNO' website (not shared with third parties) JEF TECHNO' website uses both \"first party\" cookies (cookies used by the JEF TECHNO website only) and \"third party\" cookies (cookies originating from a third-party website). We use first party cookies for storing preferences and data needed throughout your visit on the site. We use third party cookies for tracking user trends and patterns with the help of third-party web statistics providers. The third-party cookies used for tracking user trends and patterns are used exclusively by JEF TECHNO websites and the web statistics provider and are not shared with any other third party.",
                "The table below describes the web statistics cookies used by the JEF TECHNO website. Provider of cookie Type of cookie Purpose of cookie Google Analytics First Party Web analytics (anonymous usage) Couple of software we will list as required for the SEO. SOCIAL MEDIA AND OTHERS"
            ]
        },
        {
            title: "Privacy Policy",
            content: [
                "JEF TECHNO considers privacy an important issue, so we build and operate our web services with the protection of privacy taken into account. This Privacy Policy outlines the types of personal information we gather when you use JEF Techno's web sites and some of the steps we take to safeguard it. These principles apply to personally identifying information we ask for and that you provide. By this we mean information that individually identifies you, such as your name, physical address, e-mail address or other contact details"
            ]
        },
        {
            title: "Data collection",
            content: [
                "Browsing of our web sites and most other services do not require any personally identifying information.",
                "JEF TECHNO may collect limited non-personally identifying information your browser makes available whenever you visit a website. This log information includes your Internet Protocol address, browser type, browser language, the date and time of your query and one or more cookies that may uniquely identify your browser. We use this information to better understand user's behaviour and to further improve our offerings",
                "JEF TECHNO asks you for some personal information in order to create an account and we will use that information to provide the service. When we require personally identifying information, we will inform you about the types of information we collect and how we use it. We hope this will help you make an informed decision about sharing your personal information with us. It is then up to you to decide if you want to provide the information or not. Information sharing.",
                "We do not rent or sell your personally identifying information to other companies or individuals, unless we have your consent. We may share such information in any of the following limited circumstances: We have your expressed consent.",
                "We provide such information to trusted businesses or persons for the sole purpose of processing your request on our behalf. When this is done, it is subject to agreements that oblige those parties to process such information only on our instructions and in compliance with this Privacy Policy and appropriate confidentiality and security measures.",
                "We conclude that we are required by law or have a good faith belief that access, preservation or disclosure of such information is reasonably necessary to protect the rights, property or safety of JEF TECHNO, its users or the public. Information security",
                "We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data.",
                "We restrict access to your personally identifying information to JEF TECHNO employees who need to know that information in order to fulfil your request or supply our services."
            ]
        },
        {
            title: "Updating your information",
            content: [
                "We provide mechanisms for updating and correcting your personally identifying information for many of our services. For more information, please see the help pages for each service."
            ]
        },
        {
            title: "Links",
            content: [
                "The external sites linked to from the JEF TECHNO web sites are developed by people over whom JEF TECHNO exercises no control. These other sites may place their own cookies on your computer, collect data or solicit personal information."
            ]
        },
        {
            title: "Changes to this Policy",
            content: [
                "Please note this Privacy Policy will change from time to time. We expect most such changes to be minor, but there may be changes that are more significant. Regardless, we will post those changes on this page and, if the changes are significant, we will also provide a more prominent notice. Each version will be noted at the top of the page. Prior versions of this Privacy Policy will be kept in an archive for you to view.",
                "If you have any additional questions, please feel free to contact us any time."
            ]
        }
    ];

    return (
        <>
            <main className="flex overflow-hidden flex-col bg-neutral-100 lg:py-32 py-5">
                <section className="flex overflow-hidden flex-col items-start self-center px-20 py-20 mt-24 max-w-full text-base font-extralight leading-7 bg-white text-zinc-900 w-[1024px] max-md:px-5 max-md:mt-10">
                    <h1 className="text-4xl leading-none font-light uppercase tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                        COOKIE POLICY
                    </h1>
                    <h2 className={`mt-16 text-2xl font-medium leading-8 text-[#FF0000] max-md:mt-10 max-md:max-w-full`}>
                        {"ACCEPTANCE COOKIES AND ACCESSIBILITIES OF JEF TECHNO SOLUTIONS PVT LTD"}
                    </h2>
                    {sections.map((section, index) => (
                        <article key={index}>
                            <h2 className={`mt-16 text-xl font-normal leading-8 text-stone-900 max-md:mt-10 max-md:max-w-full ${index === 0 ? '' : 'mt-11 text-xl tracking-widest leading-none uppercase max-md:mt-10'}`}>
                                {section.title}
                            </h2>
                            {section.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className={`mt-9 text-lg max-md:max-w-full`}>
                                    {paragraph}
                                </p>
                            ))}
                        </article>
                    ))}
                </section>
            </main>
        </>
    );
};

export default CookiePolicy;
