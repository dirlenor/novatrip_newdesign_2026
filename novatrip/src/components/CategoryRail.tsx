'use client';

import {useRef, useState} from 'react';
import Link from 'next/link';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {Palmtree,Waves,Mountain,Landmark,Utensils,TreePine,Building2,UserRound,Sunset,Percent} from 'lucide-react';
import {categories} from '@/data/content';

const icons=[Palmtree,Waves,Mountain,Landmark,Utensils,TreePine,Building2,UserRound,Sunset];
const promoCategories=new Set(['Island Tours','Adventure']);
gsap.registerPlugin(useGSAP);

export default function CategoryRail(){
  const root=useRef<HTMLElement>(null);
  const [activeIndex,setActiveIndex]=useState<number|null>(null);

  useGSAP(()=>{
    const mm=gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)',()=>{
      const items=gsap.utils.toArray<HTMLElement>('.category-item');
      items.forEach((item,index)=>{
        const distance=activeIndex===null?Infinity:Math.abs(index-activeIndex);
        const icon=item.querySelector('.category-icon');
        const badge=item.querySelector('.category-promo');
        const track=item.querySelector('.category-label-track');
        const firstLabel=track?.firstElementChild as HTMLElement|null;
        const labelWidth=firstLabel?.getBoundingClientRect().width??0;

        gsap.to(icon,{scale:distance===0?1.2:distance===1?1.08:1,duration:.52,ease:'power3.out',overwrite:'auto'});
        if(badge)gsap.to(badge,{autoAlpha:activeIndex===index?1:0,scale:activeIndex===index?1:0.72,x:activeIndex===index?0:5,y:activeIndex===index?0:5,duration:.48,ease:'power2.out',overwrite:'auto'});

        if(activeIndex===index&&labelWidth&&track){
          gsap.to(track,{x:-(labelWidth+28),duration:2.8,repeat:-1,ease:'none',overwrite:'auto'});
        }else if(track){
          gsap.to(track,{x:0,xPercent:0,duration:.46,ease:'power2.out',overwrite:'auto'});
        }
      });
    });
    return()=>mm.revert();
  },{scope:root,dependencies:[activeIndex],revertOnUpdate:true});

  return <section ref={root} className="categories container-main" aria-label="Tour categories" onMouseLeave={()=>setActiveIndex(null)} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setActiveIndex(null)}}>
    {categories.map((category,index)=>{
      const Icon=icons[index];
      const hasPromo=promoCategories.has(category);
      return <Link href="#explore" key={category} className="category-item" data-active={activeIndex===index} aria-label={category} onMouseEnter={()=>setActiveIndex(index)} onFocus={()=>setActiveIndex(index)}>
        <span className="category-icon"><Icon strokeWidth={1.4}/>{hasPromo&&<span className="category-promo" aria-label="10 percent off"><Percent size={11}/><b>10% OFF</b></span>}</span>
        <span className="category-label" aria-hidden="true"><span className="category-label-static">{category}</span><span className="category-label-track"><span>{category}</span><span>{category}</span></span></span>
      </Link>;
    })}
  </section>;
}
