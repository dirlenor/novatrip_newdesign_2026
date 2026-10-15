'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import {ArrowRight,ArrowUp,Search,Menu,X,MapPin,Mail,ChevronDown,Phone,FileText,Lock,Facebook,Instagram,Youtube,Music2,Plane,Palmtree} from 'lucide-react';

export function Footer(){
 const [message,setMessage]=useState('');
 return <footer className="footer" id="footer">
  <div className="footer-coast" aria-hidden="true"><Image src="/images/image 57.webp" alt="" fill sizes="75vw"/></div>
  <div className="container-main footer-content">
   <div className="footer-grid">
    <div className="footer-brand"><Image src="/images/logo-white.png" width={200} height={50} alt="NovaTrip"/>
     <p>Experience the world with NovaTrip.<br/>We provide premium travel experiences, curated just for you. Discover your next adventure today.</p>
     <div className="social" aria-label="Social channels"><span title="Facebook"><Facebook size={19} fill="currentColor"/></span><span title="Instagram"><Instagram size={19}/></span><span title="YouTube"><Youtube size={20}/></span><span title="X"><X size={20}/></span><span title="TikTok"><Music2 size={19}/></span></div>
    </div>
    <div className="footer-links"><h3>Quick Links</h3>{[['Destinations','#destinations'],['Experiences','#explore'],['Transportation','#booking'],['Tickets','#booking'],['Travel Blog','#blog']].map(([text,href])=><Link key={text} href={href}>{text}<ArrowRight size={13}/></Link>)}</div>
    <div className="footer-links"><h3>Support</h3>{['Help Center','FAQs','Terms of Service','Privacy Policy','Contact Us'].map(text=><Link key={text} href="#footer">{text}<ArrowRight size={13}/></Link>)}</div>
    <div className="footer-contact"><h3>Contact Info</h3><p><MapPin size={21}/><span>Northern All Star Co., Ltd.<br/>198/3 Moo.5, Saithai, Muang<br/>Krabi, Krabi, Thailand 81000</span></p><p><Phone size={19}/><span>+66 63 102 8788</span></p><p><Mail size={20}/><span>booking@novatrip.co</span></p><p><FileText size={20}/><span>TAT License No.: 31/01362</span></p></div>
    <div className="newsletter"><h2>Get Travel Inspiration<br/>in <em>Your Inbox.</em></h2><p>Sign up for exclusive deals, travel tips,<br/>and curated destinations.</p><form onSubmit={event=>{event.preventDefault();setMessage('Demo preview — your email has not been submitted.')}}><label className="sr-only" htmlFor="email">Your email address</label><Mail size={19}/><input id="email" type="email" required placeholder="Enter your email"/><button aria-label="Preview newsletter subscription"><ArrowRight size={20}/></button></form><small role="status"><Lock size={12}/>{message||'We respect your privacy. · Demo preview'}</small></div>
   </div>
   <div className="footer-art" aria-hidden="true"><svg className="flight-path" viewBox="0 0 300 120" fill="none"><path d="M2 118 Q115 29 280 8" stroke="currentColor" strokeWidth="1"/></svg><Plane className="footer-plane" size={27} fill="currentColor"/><span className="footer-handwriting">Explore<br/>Dream<br/>Discover</span><div className="postcard postcard-one"><Image src="/images/image 57.webp" fill sizes="220px" alt=""/></div><div className="postcard postcard-two"><Image src="/images/image 97.webp" fill sizes="200px" alt=""/></div><div className="travel-stamp"><span>THAILAND</span><Palmtree size={27}/><small>EXPLORE · DISCOVER</small></div></div>
  </div>
  <div className="footer-bottom-wrap"><div className="container-main footer-bottom"><span>© 2026 NovaTrip. All rights reserved.</span><div><Link href="#footer">Terms of Service</Link><i/><Link href="#footer">Privacy Policy</Link><i/><Link href="#footer">Sitemap</Link><button className="icon-button" aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}><ArrowUp size={16}/></button></div></div></div>
 </footer>
}
export function Header(){const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false);const path=usePathname();useEffect(()=>{const fn=()=>setScrolled(window.scrollY>40);fn();window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)},[]);useEffect(()=>setOpen(false),[path]);const solid=scrolled||path!=='/';return <header className={`header ${solid?'solid':''}`}><div className="container-main nav"><Link href="/" aria-label="NovaTrip home"><Image src={`/images/logo${solid?'':'-white'}.png`} width={148} height={37} alt="NovaTrip" priority/></Link><nav aria-label="Main navigation" className={open?'navlinks open':'navlinks'}><Link href="/#destinations" onClick={()=>setOpen(false)}>Destinations</Link><Link href="#explore">Tours</Link><Link href="#booking">Transportation</Link><Link href="#explore">Experiences</Link><Link href="#footer">Support</Link></nav><div className="nav-actions"><Link href="#explore" aria-label="Search tours"><Search size={18}/></Link><span className="language" title="This preview is available in English">EN <ChevronDown size={12}/></span><Link className="button small" href="/#booking">Log in <ArrowRight size={15}/></Link><button className="menu icon-button" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></div></header>}
