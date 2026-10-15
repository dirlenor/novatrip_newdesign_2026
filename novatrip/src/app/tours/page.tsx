import {Suspense} from 'react';
import TourListing from '@/components/TourListing';
export const metadata={title:'Tours & Experiences in Thailand'};
export default function ToursPage(){return <Suspense fallback={<main className="inner-page container-main">Loading tours…</main>}><TourListing/></Suspense>}
