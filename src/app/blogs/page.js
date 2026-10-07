import Blog from "./MainBlogPage";

export const metadata = {
  title: "Lightning Protection Blog | JEF Techno  [38 chars]",
  description: "",
  keywords: "electrical safety and lightning protection blog, earthing system articles, power quality knowledge hub, electrical safety insights, lightning protection blog services, lightning protection blog company, lightning protection blog for industrial plants, lightning protection blog consultant, lightning protection blog design and installation, best lightning protection blog company in India, lightning protection blog company in UAE, how to select a lightning protection blog provider for a factory, lightning protection blog as per IS/IEC 62305, turnkey lightning protection blog for industrial plants, lightning protection blog cost for commercial building, certified lightning protection blog consultant near me, lightning protection blog for data centers and warehouses, earthing system, lightning arrester, surge protection device, soil resistivity, earth pit testing, risk assessment IEC 62305, equipotential bonding, down conductor, air termination network, touch and step potential, electrical safety compliance, power system reliability, industrial electrical audit",
  alternates: {
    canonical: "https://www.jeftechno.com/blogs",
  },
  openGraph: {
    title: "Lightning Protection Blog | JEF Techno  [38 chars]",
    description: "",
    url: "https://www.jeftechno.com/blogs",
    type: "website",
    siteName: "Jef Techno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightning Protection Blog | JEF Techno  [38 chars]",
    description: "",
  },
};

export default function BlogPage() {
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.jeftechno.com/' // or jeftechno.com depending on region
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blogs',
                item: 'https://www.jeftechno.com/blogs'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Blog />
        </>
    );
}
