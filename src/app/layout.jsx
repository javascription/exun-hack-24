import { Poppins } from "next/font/google";
import './static/fortawesome.css' // remove unused classes after prod
import './globals.css';

// Components

import dynamic from 'next/dynamic';
import SessionWrapper from "./components/SessionWrapper";
const Footer = dynamic(() => import('./components/Footer'))
const Navbar = dynamic(() => import('./components/LoginNav'))

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', "900"]
});

// Metadata - SEO

const url = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
    title: "NuxeCorps Private Limited",
    description: "Exun Internal Hackathon 2024: Made by Gauransh Saini",
    openGraph: {
        title: 'NuxeCorps Private Limited',
        description: "Exun Internal Hackathon 2024: Made by Gauransh Saini",
        url: url,
        siteName: 'NuxeCorps Private Limited',
        images: [
            {
                url: `${url}/opengraph-image.jpg`,
                width: 800,
                height: 600,
            },
            {
                url: `${url}/opengraph-image.jpg`,
                width: 1800,
                height: 1600,
                alt: 'Website Image',
            },
        ],
        locale: 'en_US',
        type: 'website',
        article: {
            publishedTime: '2024-08-14T00:00:00Z',
            modifiedTime: '2024-08-14T00:00:00Z',
            authors: ['Gauransh Saini'],
            section: 'Project',
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NuxeCorps Private Limited',
        description: "Exun Internal Hackathon 2024: Made by Gauransh Saini",
        image: `${url}/opengraph-image.jpg`,
    },
    robots: {
        index: true,
        follow: true,
    },
    canonical: url,
    htmlLang: 'en',
    generator: 'Next.js',
    applicationName: "NuxeCorps Private Limited",
    referrer: 'origin-when-cross-origin',
    keywords: ['Exun', 'Internal', 'Hackathon', '2024', 'Gauransh', 'Saini', 'NuxeCorps', 'Private', 'Limited'],
    authors: [
        { name: 'Gauransh Saini', url: url }
    ],
    creator: 'Gauransh Saini',
    publisher: 'Gauransh Saini',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function RootLayout({ children }) {
  return (
    
    <SessionWrapper>
      <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body className={`${poppins.className} dark m-0 p-0 w-screen h-screen scroll-smooth overflow-x-hidden bg-background`}>
          <Navbar />
          {children}
          <Footer />
          </body>
      </html>
    </SessionWrapper>
  );
}
