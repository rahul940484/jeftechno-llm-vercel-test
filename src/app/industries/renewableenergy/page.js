import RenewableEnergyResource from "./recontent";

export const metadata = {
    title: 'Renewable Energy Solutions | JEF UAE',
    alternates: {
        canonical: 'https://www.jeftechno.com/industries/renewableenergy',
    },
    openGraph: {
        url: 'https://www.jeftechno.com/industries/renewableenergy',
        siteName: 'Renewable Energy Solutions | JEF UAE',
    },
}

export default function RenewableEnergyPage() {
    return (
        <RenewableEnergyResource />
    );
}
