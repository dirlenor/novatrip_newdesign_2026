'use client';
import Image from 'next/image';
import Link from 'next/link';
import {Heart,MapPin,Clock,ArrowUpRight} from 'lucide-react';
import {useEffect,useState} from 'react';
import type {Tour} from '@/data/content';
export default function TourCard({tour}:{tour:Tour}){const [saved,setSaved]=useState(false);useEffect(()=>{try{setSaved(localStorage.getItem('nova-'+tour.slug)==='1')}catch{}},[tour.slug]);return <article className="tour-card"><Link className="tour-thumb" href="#booking" tabIndex={-1} aria-hidden="true"><Image src={tour.image} alt="" fill sizes="110px"/></Link><Link className="tour-info" href="#booking"><h3>{tour.title}</h3><small><MapPin size={11}/>{tour.location}, Thailand</small><small><Clock size={11}/>{tour.duration}<span className="tour-dot">·</span>Sample itinerary</small><span className="price"><span>From</span> {tour.price.toLocaleString('en-US')} THB</span></Link><div className="tour-actions"><button aria-label={`${saved?'Remove':'Save'} ${tour.title}`} aria-pressed={saved} onClick={()=>{setSaved(!saved);try{localStorage.setItem('nova-'+tour.slug,saved?'0':'1')}catch{}}}><Heart size={15} fill={saved?'currentColor':'none'}/></button><Link aria-label={`View ${tour.title}`} href="#booking"><ArrowUpRight size={15}/></Link></div></article>}
