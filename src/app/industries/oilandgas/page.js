import OilandGas from "./oilandgascontent";

export const metadata = {
    title: 'Oil & Gas Industry Solutions | JEF UAE',
    description:
        'JEF UAE offers comprehensive electrical safety solutions for the oil and gas sector, including lightning protection, grounding, and AC interference studies.',
    keywords:
        'JEF UAE oil and gas, oil and gas engineering solutions, UAE oil and gas industry, oil and gas project management, technical services UAE, JEF engineering services',
    alternates: {
        canonical: 'https://www.jeftechno.com/industries/oilandgas',
    },
    openGraph: {
        url: 'https://www.jeftechno.com/industries/oilandgas',
        description:
            'JEF UAE offers comprehensive electrical safety solutions for the oil and gas sector, including lightning protection, grounding, and AC interference studies.',
        siteName: 'Oil & Gas Industry Solutions | JEF UAE',
    },
}

export default function OilandGasPage() {
    return (
        <OilandGas />
    );
}
