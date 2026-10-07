import GetInTouchForm from "./contactpage";

export const metadata = {
  title: "Contact Us | JEF UAE – Connect for Electrical Solutions",
  description: "",
  keywords: "JEF Techno office locations, JEF Techno phone number, JEF Techno enquiry form, JEF Techno India UAE USA offices",
  alternates: {
    canonical: "https://www.jeftechno.com/get-in-touch",
  },
  openGraph: {
    title: "Contact Us | JEF UAE – Connect for Electrical Solutions",
    description: "",
    url: "https://www.jeftechno.com/get-in-touch",
    type: "website",
    siteName: "Jef Techno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | JEF UAE – Connect for Electrical Solutions",
    description: "",
  },
};

export default function GetInTouchPage() {
    return (
        <GetInTouchForm />
    );
}
