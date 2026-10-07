import ProcessPlant from "./p2content";

export const metadata = {
    title: 'Process Plant Solutions | JEF UAE',
    description:
        'JEF UAE offers specialized electrical safety solutions for process plants, including comprehensive grounding, lightning protection, and AC interference studies to ensure operational reliability and safety.',
    keywords:
        'process plant solutions, JEF UAE, electrical safety, grounding systems, lightning protection, AC interference studies, industrial safety, process plant reliability',
    alternates: {
        canonical: 'https://www.jeftechno.com/industries/processplant',
    },
    openGraph: {
        url: 'https://www.jeftechno.com/industries/processplant',
        description:
            'JEF UAE offers specialized electrical safety solutions for process plants, including comprehensive grounding, lightning protection, and AC interference studies to ensure operational reliability and safety.',
        siteName: 'Process Plant Solutions | JEF UAE',
    },
}

export default function ProcessPlantPage() {
    return (
        <ProcessPlant />
    );
}
