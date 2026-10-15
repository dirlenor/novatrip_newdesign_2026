'use client';

import {useEffect,useRef,useState} from 'react';
import Image from 'next/image';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);
const slides=[
  {src:'/images/hero-boat.webp',alt:'Longtail boat beneath the limestone cliffs of Krabi'},
  {src:'/images/hero-sunset.png',alt:'Sunset over a tropical beach resort'},
  {src:'/images/hero-cave.png',alt:'Emerald bay seen through a limestone cave'},
];

export default function HeroBackground(){
  const root=useRef<HTMLDivElement>(null);
  const [active,setActive]=useState(0);

  useEffect(()=>{
    const timer=window.setTimeout(()=>setActive((active+1)%slides.length),60000);
    return()=>window.clearTimeout(timer);
  },[active]);

  useGSAP(()=>{
    const mm=gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)',()=>{
      gsap.fromTo('.hero-slide .hero-art',{scale:1},{scale:1.025,duration:36,ease:'sine.inOut',repeat:-1,yoyo:true});
    });
    return()=>mm.revert();
  },{scope:root});

  useGSAP(()=>{
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.to(root.current?.querySelectorAll('.hero-slide')??[],{opacity:index=>index===active?1:0,duration:reduced?0:1.5,ease:'sine.inOut',overwrite:'auto'});
  },{scope:root,dependencies:[active]});

  return <div ref={root} className="hero-slideshow">
    <div className="hero-backgrounds" aria-hidden="true">
      {slides.map((slide,index)=><div className="hero-slide" key={slide.src} style={{opacity:index===0?1:0}}><Image className={`hero-art hero-art-${index}`} src={slide.src} alt={slide.alt} fill priority={index===0} loading={index===0?undefined:'eager'} sizes="100vw"/></div>)}
      <div className="hero-image-shade"/>
    </div>
    <div className="hero-pagination" aria-label="Hero images">
      <span className="hero-slide-counter" aria-hidden="true">0{active+1}<span> / 03</span></span>
      {slides.map((slide,index)=><button key={slide.src} type="button" aria-label={`Show image ${index+1}: ${slide.alt}`} aria-pressed={active===index} className={active===index?'active':''} onClick={()=>setActive(index)}><span/></button>)}
    </div>
  </div>;
}
