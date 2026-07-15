import { useState, useEffect, useRef } from 'react'
import './App.css'
import FadeIn from './assets/animations/animations.jsx'
import { useInView } from 'motion/react';

function Header() {
  const [scrollY, setScrollY] = useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      setScrollY(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll)
  },[])

  return(
    <div>
      <h1 className=
      {
        `fixed
        left-1/2
        -translate-x-1/2
        transition-all
        duration-300
        h-20 
        bg-[var(--surface-2)]/60
        backdrop-blur-[50px] 
        flex 
        justify-center 
        items-center 
        text-[var(--text)]
        z-50
        ${scrollY ? 
          'top-4 w-[96%] rounded-2xl shadow-[0_0_20px_var(--border)]' 
          : 'top-0 w-full rounded-none'
        }`
      }>Header</h1>
    </div>
  )
}


function Introduction(){
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });
  useEffect(()=>{
    if(inView){
      ref.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  },[inView])
  return (
    <FadeIn>
      <div className='section scroll-mt-20' ref={ref}>
        <h1 className='text-2xl font-bold'>Introduction</h1>
      </div>
    </FadeIn>
  )
}


function AboutMe(){
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });
  useEffect(()=>{
    if(inView){
      ref.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  },[inView])
  return (
    <FadeIn>
      <div className='section scroll-mt-20' ref={ref}>
        <h1 className='text-2xl font-bold'>About Me</h1>
      </div>
    </FadeIn>
  )
}


function Skills(){
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });
  useEffect(()=>{
    if(inView){
      ref.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  },[inView])
  return (
    <FadeIn>
      <div className='section scroll-mt-20' ref={ref}>
        <h1 className='text-2xl font-bold'>Skills</h1>
      </div>
    </FadeIn>
  )
}


function Projects(){
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });
  useEffect(()=>{
    if(inView){
      ref.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  },[inView])
  return (
    <FadeIn>
      <div className='section scroll-mt-20' ref={ref}>
        <h1 className='text-2xl font-bold'>Projects</h1>
      </div>
    </FadeIn>
  )
}


function Contact(){
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });
  useEffect(()=>{
    if(inView){
      ref.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  },[inView])
  return (
    <FadeIn>
      <div className='section scroll-mt-20' ref={ref}>
        <h1 className='text-2xl font-bold'>Contact</h1>
      </div>
    </FadeIn>
  )
}


function Body() {
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <Header />
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export {Body} 