import PowerUtilites from "./pucontent";

export const metadata = {
    title: 'Power & Utilities Solutions | JEF UAE',
    description:
        'JEF UAE provides innovative electrical solutions for the power and utilities sector, enhancing efficiency, safety, and reliability across operations.',
    keywords:
        'power utilities solutions, JEF UAE, electrical solutions, energy efficiency, utilities safety, operational reliability, power sector services',
    alternates: {
        canonical: 'https://www.jeftechno.com/industries/powerutilities',
    },
    openGraph: {
        url: 'https://www.jeftechno.com/industries/powerutilities',
        description:
            'JEF UAE provides innovative electrical solutions for the power and utilities sector, enhancing efficiency, safety, and reliability across operations.',
        siteName: 'Power & Utilities Solutions | JEF UAE',
    },
}

export default function Page() {
    return (
        <>
            <PowerUtilites />
        </>
    );
}
