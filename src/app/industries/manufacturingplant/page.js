import ManufacturingPlant from "./mpcontent";

export const metadata = {
    title: 'Manufacturing Plant Solutions | JEF UAE',
    description:
        'Enhance the performance, safety, and efficiency of your manufacturing plant with JEF UAE’s specialized electrical solutions and expert services.',
    keywords:
        'manufacturing plant solutions, JEF UAE, plant safety, operational efficiency, electrical services, industrial solutions, performance optimization',
    alternates: {
        canonical: 'https://www.jeftechno.com/industries/manufacturingplant',
    },
    openGraph: {
        url: 'https://www.jeftechno.com/industries/manufacturingplant',
        description:
            'Enhance the performance, safety, and efficiency of your manufacturing plant with JEF UAE’s specialized electrical solutions and expert services.',
        siteName: 'Manufacturing Plant Solutions | JEF UAE',
    },
}

export default function ManufacturingPlantPage() {
    return (
        <ManufacturingPlant />
    );
}
