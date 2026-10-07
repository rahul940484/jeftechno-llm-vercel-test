import React from "react";

export const metadata = {
    title: "Terms and Conditions | Jef UAE",
    description: "Review the terms and conditions for using Jef UAE's services and website",
    keywords: [
        "contact JEF UAE",
        "terms and conditions",
        "Jef UAE",
        "website terms",
        "service agreement",
        "user policy",
        "legal terms"
    ],
    alternates: {
        canonical: "https://www.jeftechno.com/termsandconditions",
    },
    openGraph: {
        title: "Terms and Conditions | Jef UAE",
        description: "Review the terms and conditions for using Jef UAE's services and website.",
        url: "https://www.jeftechno.com/termsandconditions",
        siteName: "Terms and Conditions | Jef UAE",
    },
};

const TermsAndConditions = () => {
    const sections = [
        {
            title: '1. Information We Collect',
            content: [
                'We may collect personal data and non-personal data as follows:',
                {
                    subtitle: 'Personal Information',
                    description: ' •  Includes your name, email address, phone number, IP address, location data, job title, and any other information you voluntarily provide via forms on our Site or when contacting us.'
                },
                {
                    subtitle: 'Non - Personal Data',
                    description: ' •  Information collected automatically such as browsing data, browser type, pages visited, time spent on the site, and other technical information.'
                }
            ]
        },
        {
            title: '2. How We Use Your Information',
            content: [
                'We use your personal information for the following purposes:',
                'To respond to your inquiries or requests.',
                'To provide and improve our products and services.',
                'To personalize your experience on our Site.',
                'To comply with legal obligations.',
                'To send marketing materials, only with your consent, or in accordance with applicable laws.'
            ]
        },
        {
            title: '3. Sharing Your Information',
            content: [
                'We do not sell, rent, or trade your personal data to third parties. However, we may share your data under the following circumstances:',
                'With our trusted third-party service providers who assist us in operating the Site, conducting our business, or providing services to you, in accordance with UAE PDPL.',
                'When required to comply with legal obligations, or to respond to lawful requests by public authorities, including national security or law enforcement requirements.'
            ]
        },
        {
            title: '4. International Data Transfers',
            content: [
                'While our primary operations are within the UAE, we may transfer your data to countries outside the UAE if necessary, for the purposes outlined in this Privacy Policy. Any transfer of personal data outside the UAE will comply with the UAE PDPL to ensure that your data is protected at all times.'
            ]
        },
        {
            title: '5. Data Retention',
            content: [
                'We will retain your personal data only for as long as necessary to fulfill the purposes for which we collected it, or to comply with legal, accounting, or reporting requirements.'
            ]
        },
        {
            title: '6. Data Security',
            content: [
                'We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, use, or disclosure. However, no system can guarantee 100% security, and we cannot fully eliminate security risks associated with your personal data.'
            ]
        },
        {
            title: '7. Your Rights',
            content: [
                'As a data subject under UAE PDPL, you have the following rights:',
                { listItem: 'Access: You can request access to your personal data.' },
                { listItem: 'Correction: You can request correction of any inaccurate or incomplete personal data.' },
                { listItem: 'Deletion: You can request the deletion of your personal data in certain circumstances.' },
                { listItem: 'Objection: You can object to the processing of your personal data in certain cases.' },
                { listItem: 'Portability: You can request to transfer your data to another entity.' },
                'To exercise any of your rights, please contact us at [insert contact email]. We will respond to your request within the timeframe required by UAE law.'
            ]
        },
        {
            title: '8. Cookies and Tracking Technologies',
            content: [
                'We may use cookies and similar technologies to enhance your browsing experience on our Site. You can control or disable cookies through your browser settings; however, disabling cookies may affect the functionality of our Site.'
            ]
        },
        {
            title: '9. Marketing Communications',
            content: [
                'If you have opted in to receive marketing communications from us, we may use your personal data to send you updates about our products, services, or events. You may withdraw your consent at any time by clicking the "unsubscribe" link in any of our emails or by contacting us directly.'
            ]
        },
        {
            title: '10. Links to Third-Party Websites',
            content: [
                'Our Site may contain links to third-party websites. We are not responsible for the privacy practices or the content of those third-party sites. We recommend reviewing the privacy policies of any linked websites you visit.'
            ]
        },
        {
            title: '11. Changes to This Privacy Policy',
            content: [
                'We may update this Privacy Policy from time to time to reflect changes in legal requirements or our practices. We encourage you to review this policy periodically to stay informed of how we protect your personal data.'
            ]
        },
        {
            title: '12. Contact Us',
            content: [
                'If you have any questions or concerns about this Privacy Policy, or if you would like to make a complaint, please contact us at:',
                { email: 'info@jeftechno.com' }
            ]
        }
    ];

    const SectionHeader = ({ title }) => (
        <h2 className="mt-14 text-2xl tracking-wide font-normal leading-none text-[#FF0000] max-md:mt-10">
            {title}
        </h2>
    );

    // const ListItem = ({ content }) => (
    //   <div className="mt-6 max-md:max-w-full">
    //     <ul>
    //       <li>{content}</li>
    //     </ul>
    //   </div>
    // );

    const ListItem = ({ content }) => {
        // Split the content by ":" to bold the first part (e.g., "Access")
        const parts = content.split(':');
        return (
            <p className="mt-6 text-lg text-gray-700 leading-6 max-md:max-w-full">
                <span className="font-normal">{parts[0]}:</span>
                {parts[1]}
            </p>
        );
    };

    const ContentBlock = ({ content }) => (
        <div className="mt-10 max-md:max-w-full">
            {content.map((item, index) => {
                if (typeof item === 'string') {
                    return <p key={index} className="mt-6 text-lg text-gray-700 leading-6 max-md:max-w-full">{item}</p>;
                } else if (item.subtitle) {
                    return (
                        <React.Fragment key={index}>
                            <h3 className="mt-6 text-xl text-black font-light leading-tight">{item.subtitle}</h3>
                            <p className="mt-7 text-lg text-gray-700 leading-6 max-md:max-w-full">{item.description}</p>
                        </React.Fragment>
                    );
                } else if (item.listItem) {
                    // Use the modified ListItem component
                    return <ListItem key={index} content={item.listItem} />;
                } else if (item.email) {
                    return (
                        <p key={index} className="mt-8 font-semibold text-[#FF0000]">
                            Email: <span className="underline">{item.email}</span>
                        </p>
                    );
                }
                return null;
            })}
        </div>
    );




    return (
        <>
            <main className="flex overflow-hidden self-center justify-center mx-auto flex-col items-center px-20 py-56 text-base font-extralightn bg-neutral-100  text-zinc-800 max-md:px-5 max-md:py-24">
                <article className="flex overflow-hidden flex-col items-start px-10 py-16  max-w-full bg-white w-[1024px] max-md:px-5">
                    <h1 className="text-4xl font-normal leading-none uppercase tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                        Terms & Condition
                    </h1>
                    <p className="mt-16  text-lg text-gray-700 leading-6 max-md:mt-10 max-md:max-w-full">
                        JEF Group of Companies ("JEF," "we," "our," or "us") is committed to protecting your privacy and ensuring that your personal data is handled in compliance with the applicable laws and regulations of the United Arab Emirates (UAE), including the UAE Personal Data Protection Law (PDPL). This Privacy Policy explains how we collect, use, disclose, and
                        <br />
                        safeguard your information when you visit our website [www.jeftechno.com] (the "Site") or interact with us in other ways.
                    </p>
                    {sections.map((section, index) => (
                        <section key={index}>
                            <SectionHeader title={section.title} />
                            <ContentBlock content={section.content} />
                        </section>
                    ))}
                </article>
            </main>
        </>
    );
};

export default TermsAndConditions;
