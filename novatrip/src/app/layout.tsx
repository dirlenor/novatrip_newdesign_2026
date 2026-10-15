import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Caveat } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/Layout';
const serif = Cormorant_Garamond({subsets:['latin'],weight:['400','500','600','700'],style:['normal','italic'],variable:'--font-serif'});
const sans = Inter({subsets:['latin'],variable:'--font-sans'});
const handwriting = Caveat({subsets:['latin'],weight:['500','600'],variable:'--font-handwriting'});
export const metadata: Metadata = {title:{default:'NovaTrip — Don’t just imagine it, make it happen.',template:'%s | NovaTrip'},description:'Discover Thailand, from island escapes to cultural journeys. Explore the NovaTrip travel collection.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body className={`${serif.variable} ${sans.variable} ${handwriting.variable}`}><a className="skip" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>}
