import { useState, useEffect, useRef } from 'react'
import './App.css'
import FadeIn from './assets/animations/animations.jsx'
// import myphoto from 'src/assets/images/MySelf.jpg'
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
    <>
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
        <div className="section-btn flex flex-row justify-end gap-5 col-[4/7] overflow-x-hidden pr-[10px]">
          <button onClick={()=>scrollToSection(introref)} >Introduction</button>
          <button className='whitespace-nowrap' onClick={()=>scrollToSection(aboutref)} >About Me</button>
          <button onClick={()=>scrollToSection(skillsref)} >Skills</button>
          <button onClick={()=>scrollToSection(projectsref)} >Projects</button>
          <button onClick={()=>scrollToSection(contactref)} >Contact</button>
        </div>
      </div>
    </>
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
      <div className=' section justify-center scroll-mt-60' ref={introref}>
        <h1 className='txt-content text-2xl font-raleway font-thin tracking-[1px]'>Simple.<br></br></h1>
        <h1 className='txt-content text-2xl font-monsieur font-thin tracking-[1px]'>Elegant.<br></br></h1>
        <h1 className='txt-content text-2xl font-raleway font-thin tracking-[1px]'>Functional.</h1>
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
      <div className='section scroll-mt-60' id='about' ref={aboutref}>
        <div className="myImg h-[100%] w-[100%] col-[2/5] row-[2/10] flex justify-center items-center">
          <img className='rounded-3xl' src='src/assets/images/MySelf.jpg' alt="Handsome right?" />
        </div>
        <div className="info font-railway font-thin w-[100%] h-[100%] text-white col-[6/13] row-[2/10] text-center flex flex-col justify-center items-center">
          <h1 className='text-4xl'>Hey there, I'm Manish</h1>
          <p className='text-2xl'>I'm a Computer Science student and frontend developer who enjoys building fast, responsive, and user-friendly web applications. I focus on clean design, thoughtful interactions, and writing code that's as maintainable as it is functional. I'm always exploring new technologies and looking for opportunities to turn ideas into meaningful digital experiences.</p>
        </div>
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
      <div className='section scroll-mt-60' id='skills' ref={skillsref}>
        <div className="text-2xl info font-railway font-thin w-[100%] h-[100%] text-white col-[2/13] row-[2/10] flex flex-col">
          <p className=''>So as of now my key skills include:</p>
          <br/>
          <ul className='list-disc list-inside flex flex-col gap-2'>
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Git & Github</li>
            <li>Python</li>
            <li>Sql</li>
            <li>Java</li>
            <li>Firebase</li>
            <li>Ai agents ( like Claude, ChatGPT, Gemini, Kiwi, Deepseek, etc )</li>
          </ul>
          <br />
          <p>But these aren't the only ones as I'm constantly improving and learning new things.</p>
        </div>
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