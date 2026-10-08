import PanIndiaContent from "./PanIndiaContent";

export const metadata = {
  title: "JEF Across India | Explore by State or Union Territory",
  description:
    "Explore JEF across India. Find state-wise information to connect local business needs with the right products, solutions, resources and opportunities.",
  alternates: {
    canonical: "https://www.jeftechno.com/location",
  },
  openGraph: {
    title: "JEF Across India | Explore by State or Union Territory",
    description:
      "Explore JEF across India. Find state-wise information to connect local business needs with the right products, solutions, resources and opportunities.",
    url: "https://www.jeftechno.com/location",
    type: "website",
    siteName: "Jef Techno",
  },
};

export default function PanIndiaPage() {
  return <PanIndiaContent />;
}