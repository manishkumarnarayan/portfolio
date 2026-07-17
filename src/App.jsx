import { useState, useEffect, useRef } from 'react'
import './App.css'
import FadeIn from './assets/animations/animations.jsx'
// import { useInView } from 'motion/react';

function Header({
  introref,
  aboutref,
  skillsref,
  projectsref,
  contactref
}) {
  const [scrollY, setScrollY] = useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      setScrollY(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll)
  },[])
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
  }
  return(
    <div className=
      {
        `header
        fixed
        left-1/2
        -translate-x-1/2
        transition-all
        duration-400
        h-20 
        bg-[var(--surface-2)]/60
        backdrop-blur-[45px] 
        grid
        justify-center 
        items-center 
        text-[var(--text)]
        z-45
        ${scrollY ? 
          'top-4 w-[96%] rounded-2xl shadow-[0_0_20px_var(--border)]' 
          : 'top-0 w-full rounded-none'
        }`
      }>
      <h1 className='name justify-self-start p-4 col-[1/3]'>Manish Kumar Narayan</h1>
      <div className="section-btn flex flex-row justify-between pr-12 gap-5 col-[5/7]">
        <button onClick={()=>scrollToSection(introref)} >Introduction</button>
        <button className='whitespace-nowrap' onClick={()=>scrollToSection(aboutref)} >About Me</button>
        <button onClick={()=>scrollToSection(skillsref)} >Skills</button>
        <button onClick={()=>scrollToSection(projectsref)} >Projects</button>
        <button onClick={()=>scrollToSection(contactref)} >Contact</button>
      </div>
    </div>
  )
}


function Introduction({introref}){
  // const inView = useInView(ref, { amount: 0.2 });
  // useEffect(()=>{
  //   if(inView){
  //     ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
  //   }
  // },[inView])
  return (
    <FadeIn>
      <div className=' section scroll-mt-60' ref={introref}>
        <h1 className='txt-content text-2xl font-raleway font-light tracking-[1px]'>Simple.<br></br></h1>
        <h1 className='txt-content text-2xl font-monsieur font-light tracking-[1px]'>Elegant.<br></br></h1>
        <h1 className='txt-content text-2xl font-raleway font-light tracking-[1px]'>Functional.</h1>
      </div>
    </FadeIn>
  )
}


function AboutMe({aboutref}){
  // const inView = useInView(ref, { amount: 0.2 });
  // useEffect(()=>{
  //   if(inView){
  //     ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
  //   }
  // },[inView])
  return (
    <FadeIn>
      <div className='section scroll-mt-60' ref={aboutref}>
        <h1 className='text-2xl font-bold'>About Me</h1>
      </div>
    </FadeIn>
  )
}


function Skills({skillsref}){
  // const inView = useInView(ref, { amount: 0.2 });
  // useEffect(()=>{
  //   if(inView){
  //     ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
  //   }
  // },[inView])
  return (
    <FadeIn>
      <div className='section scroll-mt-60' ref={skillsref}>
        <h1 className='text-2xl font-bold'>Skills</h1>
      </div>
    </FadeIn>
  )
}


function Projects({projectsref}){
  // const inView = useInView(ref, { amount: 0.2 });
  // useEffect(()=>{
  //   if(inView){
  //     ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
  //   }
  // },[inView])
  return (
    <FadeIn>
      <div className='section scroll-mt-60' ref={projectsref}>
        <h1 className='text-2xl font-bold'>Projects</h1>
      </div>
    </FadeIn>
  )
}


function Contact({contactref}){
  // const inView = useInView(ref, { amount: 0.2 });
  // useEffect(()=>{
  //   if(inView){
  //     ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
  //   }
  // },[inView])
  return (
    <FadeIn>
      <div className='section scroll-mt-60' ref={contactref}>
        <h1 className='text-2xl font-bold'>Contact</h1>
      </div>
    </FadeIn>
  )
}


function Body() {
  const introref = useRef(null);
  const aboutref = useRef(null);
  const skillsref = useRef(null);
  const projectsref = useRef(null);
  const contactref = useRef(null);
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <Header
        introref={introref}
        aboutref={aboutref}
        skillsref={skillsref}
        projectsref={projectsref}
        contactref={contactref}
      />
      <Introduction introref={introref} />
      <AboutMe aboutref={aboutref} />
      <Skills skillsref={skillsref}/>
      <Projects projectsref={projectsref}/>
      <Contact contactref={contactref}/>
    </div>
  )
}

export {Body} 