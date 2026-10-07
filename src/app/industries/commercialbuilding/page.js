import CommercialBuilding from "./cbcontent";

export const metadata = {
    title: 'Commercial Building Electrical Solutions | JEF UAE',
    description:
        'JEF UAE offers comprehensive electrical solutions for commercial buildings, including lightning protection, grounding systems, and power quality studies to ensure safety and efficiency.',
    keywords:
        'JEF UAE,commercial building electrical solutions, JEF UAE, lightning protection, grounding systems, power quality studies, electrical safety, building efficiency',
    alternates: {
        canonical: 'https://www.jeftechno.com/industries/commercialbuilding',
    },
    openGraph: {
        url: 'https://www.jeftechno.com/industries/commercialbuilding',
        description:
            'JEF UAE offers comprehensive electrical solutions for commercial buildings, including lightning protection, grounding systems, and power quality studies to ensure safety and efficiency.',
        siteName: 'Commercial Building Electrical Solutions | JEF UAE',
    },
}

export default function Page() {
    return (
        <CommercialBuilding />
    );
}
