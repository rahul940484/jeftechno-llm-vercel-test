import Career from "./careerpage";

export const metadata = {
    title: 'Careers at JEF UAE – Join Our Team',
    description:
        "Explore exciting career opportunities at JEF UAE. We're hiring for roles like Business Development Manager and Technical Support Engineer. Apply today!",
    keywords:
        'JJEF UAE careers, JEF UAE jobs, JEF UAE employment, careers at JEF UAE, JEF UAE recruitment, JEF UAE hiring, JEF UAE opportunities',
    alternates: {
        canonical: 'https://www.jeftechno.com/careers',
    },
    openGraph: {
        url: 'https://www.jeftechno.com/careers',
        description:
            "Explore exciting career opportunities at JEF UAE. We're hiring for roles like Business Development Manager and Technical Support Engineer. Apply today!",
        siteName: 'Careers at JEF UAE – Join Our Team',
    },
}

export default function CareersPage() {
    return (
        <Career />
    );
}
