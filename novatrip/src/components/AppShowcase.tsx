'use client';

import {useRef} from 'react';
import Image from 'next/image';
import {Plane,Sun} from 'lucide-react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function AppShowcase(){
  const root=useRef<HTMLElement>(null);
  useGSAP(()=>{
    const mm=gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)',()=>{
      root.current?.querySelectorAll<SVGPathElement>('.app-route-draw,.app-flight-draw').forEach(path=>{
        const length=path.getTotalLength();
        gsap.fromTo(path,{strokeDasharray:`${length} ${length}`,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:root.current,start:'top 65%',end:'bottom 35%',scrub:.6,invalidateOnRefresh:true}});
      });
      gsap.from('.app-island',{y:25,opacity:0,duration:1,ease:'power2.out',scrollTrigger:{trigger:root.current,start:'top 80%',toggleActions:'play none none reverse'}});
    });
    return()=>mm.revert();
  },{scope:root});

  return <section ref={root} className="app-showcase" id="app">
    <div className="app-wash" aria-hidden="true"/>
    <div className="app-island" aria-hidden="true"><Image src="/images/app-island-overlay.png" fill sizes="(max-width:767px) 90vw, 45vw" alt=""/></div>
    <svg className="app-route" viewBox="0 0 1600 650" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path className="app-route-draw" d="M-40 525 C65 458 95 470 120 522 S164 594 263 555 S444 509 396 558 S427 627 566 581 S833 505 783 477 S685 519 727 549 S847 510 966 449 S1134 487 1226 432 S1370 353 1475 402 S1575 458 1640 436" stroke="#ceff58" strokeWidth="17" strokeLinecap="round"/>
    </svg>
    <div className="app-showcase-layout container-main">
      <div className="app-showcase-copy">
        <p className="eyebrow">NOVA TRIP APP</p>
        <h2>Your Travel Companion<br/><em>Anywhere</em> You Go.<span className="app-spark" aria-hidden="true"><i/><i/><i/></span></h2>
        <p>Book tours, manage your trips, get real-time updates<br className="desktop"/> and exclusive deals — all in one app.</p>
      </div>
      <div className="app-showcase-phones">
        <Image src="/images/app.png" fill sizes="(max-width:767px) 90vw, 45vw" alt="NovaTrip app previews for exploring Thailand and booking a Phi Phi Islands tour"/>
        <div className="app-note app-note-search" aria-hidden="true">Easy Search<br/>Plan Faster<svg viewBox="0 0 85 105" fill="none"><path d="M12 5C15 42 30 67 65 86M48 85l20 4-6-20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        <div className="app-note app-note-explore" aria-hidden="true">Explore<br/>Book<br/>Go Further<svg viewBox="0 0 90 90" fill="none"><path d="M73 4C68 34 53 51 18 64M25 47L15 66l24 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
      </div>
    </div>
    <span className="app-note app-note-dream" aria-hidden="true">Explore<br/>Dream<br/>Discover</span>
    <div className="app-adventure-note" aria-hidden="true"><span>Your Next<br/>Adventure<br/>Awaits</span><Sun size={40}/></div>
    <div className="app-flight" aria-hidden="true"><svg viewBox="0 0 340 210" fill="none"><defs><mask id="app-flight-reveal"><path className="app-flight-draw" d="M8 185C91 202 169 171 182 131S149 91 146 119S224 159 311 39" stroke="white" strokeWidth="5"/></mask></defs><path d="M8 185C91 202 169 171 182 131S149 91 146 119S224 159 311 39" stroke="#ceff58" strokeWidth="3" strokeDasharray="10 9" mask="url(#app-flight-reveal)"/></svg><Plane size={45} fill="currentColor" strokeWidth={1}/></div>
  </section>;
}
