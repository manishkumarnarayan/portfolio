import { useState, useEffect, useRef } from 'react'
import './App.css'
import FadeIn from './assets/animations/animations.jsx'
import { AnimatePresence, useInView } from 'motion/react';
import { motion } from "motion/react";
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
    ref.current?.scrollIntoView({behavior: 'instant', block: 'start'});
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
          bg-[var(--surface-2)]/30
          backdrop-blur-[45px] 
          grid
          justify-center 
          items-center 
          text-[var(--text)]
          z-45
          px-4
          ${scrollY ? 
            'top-4 w-[96%] rounded-2xl shadow-[0_0_20px_var(--border)]' 
            : 'top-0 w-full rounded-none'
          }`
        }>
        <h1 className='name justify-self-start col-[1/3]'>Manish Kumar Narayan</h1>
        <div className="section-btn flex flex-row justify-end gap-5 col-[4/7] overflow-x-hidden pr-[10px]">
          <button className={`${useInView(introref, {amount: 0.4}) ? 'btn-active' : ''}`} onClick={()=>scrollToSection(introref)} >Introduction</button>
          <button className={`${useInView(aboutref, {amount: 0.4}) ? 'btn-active' : ''}`} onClick={()=>scrollToSection(aboutref)} >About Me</button>
          <button className={`${useInView(skillsref, {amount: 0.4}) ? 'btn-active' : ''}`} onClick={()=>scrollToSection(skillsref)} >Skills</button>
          <button className={`${useInView(projectsref, {amount: 0.4}) ? 'btn-active' : ''}`} onClick={()=>scrollToSection(projectsref)} >Projects</button>
          <button className={`${useInView(contactref, {amount: 0.4}) ? 'btn-active' : ''}`} onClick={()=>scrollToSection(contactref)} >Contact</button>
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
      <div className=' section justify-center scroll-mt-30' ref={introref}>
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
      <div className='section scroll-mt-30' id='about' ref={aboutref}>
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

function Card({front, back, id}){
  const [flipped, setFlipped] = useState(false);
  
  // const toggle = (id) => {
  //     setFlipped(prev => ({
  //         ...prev,
  //         [id]: !prev[id]
  //   }));
  // }
  return (
    <div className="card-wrapper">
      <div
        className={`card ${flipped ? "flipped" : ""}`}
        id={id}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="front">
            {front}
        </div>

        <div className="back">
            {back}
        </div>
      </div>
    </div>
  )
}


function Skills({skillsref}){
  // const inView = useInView(ref, { amount: 0.2 });
  // useEffect(()=>{
  //   if(inView){
  //     ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
  //   }
  // },[inView])
  const skills =[
      {
        id: 'react',
        front:(
            <>
              <h2 className='font-raleway font-thin text-2xl' >React</h2>
            </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>React</h2>
            <p className='text-sm'>Build multiple responsive web apps.</p>
            <p className='text-sm'>Hooks • Context • Routing</p>
          </>
        )
      },
      {
        id: 'js',
        front:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>JavaScript with <br/> Html and Css</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>JavaScript with <br/> Html and Css</h2>
            <p className='text-sm'>Build multiple responsive web apps.</p>
            <p className='text-sm'>Interactive • Clean Design • Responsive</p>
          </>
        )
      },
      {
        id: 'python',
        front:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Python</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Python</h2>
            <p className='text-sm'>Build easy to understand and efficient backend.</p>
            <p className='text-sm'>Backend • Automation</p>
          </>
        )
      },
      {
        id: 'sql',
        front:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Sql</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Sql</h2>
            <p className='text-sm'>Used for data management in various databases. Primarily for it's security.</p>
            <p className='text-sm'>Database • Data Management</p>
          </>
        )
      },
      {
        id:'java',
        front:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Java</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Java</h2>
            <p className='text-sm'>Used for various purposes including backend and other applications.</p>
            <p className='text-sm'>Object-Oriented • Backend</p>
          </>
        )
      },
      {
        id:'git',
        front:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Git & Github</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Git & Github</h2>
            <p className='text-sm'>Used for version control and collaborating with others.</p>
            <p className='text-sm'>Version Control • Collaboration</p>
            <br/>
            <a className='text-sm text-slate-400 transition ease-in-out hover:text-primary  hover:underline hover:scale-[1.2]' target="_blank" href='https://github.com/manishkumarnarayan'> Visit my git profile </a>
          </>
        )
      },
      {
        id: 'vercel',
        front:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Vercel</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>Vercel</h2>
            <p className='text-sm'>Used for deploying web applications.</p>
            <p className='text-sm'>Hosting • Deployment • CI/CD</p>
          </>
        )
      },
      {
        id:'AI-agents',
        front:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>AI Agents</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-2xl'>AI Agents</h2>
            <p className='text-sm'>Can use various AI models and tools to create AI agents that can perform various tasks.</p>
            <p className='text-sm'>AI Agents • Claude • ChatGPT • Gemini</p>
          </>
        )
      }
  ]
  return (
    <FadeIn>
      <div className='section scroll-mt-30' id='skills' ref={skillsref}>
        <div className="text-2xl info font-railway font-thin w-[100%] h-[100%] text-white col-[2/13] row-[2/10] flex flex-col">
          <p className=''>So as of now my key skills include:</p>
          <br/>
          <ul className='grid grid-cols-4 gap-10 w-[100%] h-[100%] justify-around'>
            {skills.map((skill)=>{
              return(<Card id={skill.id} front={skill.front} back={skill.back}/>)
            })}
          </ul>
          <br />
          <p>But these aren't the only ones as I'm constantly improving and learning new things.</p>
        </div>
      </div>
    </FadeIn>
  )
}

function ProjectCard({
  id,
  name,
  skillUsed,
  github,
  liveLink,
  description,
  activeCard,
  setActiveCard
}) {
  const [isHover, setIsHover] = useState(false);

  const open = activeCard === id;

  const toggle = () => {
    setActiveCard(open ? null : id);
  };

  return (
    <motion.div
      layout
      onClick={toggle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`
        project-card
        ${open || isHover ? "project-card-active" : ""}
        ${open ? "project-card-open z-10" : "z-0"}
        w-full
        rounded-3xl
        overflow-hidden
        flex flex-col justify-center items-center
      `}
    >
      <motion.div
        layout
        id={id}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <motion.h2
          layout
          className="project-name text-3xl text-center"
        >
          <span id={id}> {name} </span>
        </motion.h2>

        {/* Description */}
        <AnimatePresence>
          {(open || isHover) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p>{description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Content */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden text-center"
            >
              <br />

              <p className="text-sm">{github}</p>

              <br />

              <div className="flex gap-2 flex-wrap justify-center">
                {skillUsed.map(skill => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded bg-slate-700 text-white text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <br />

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-400 hover:text-primary hover:underline transition"
              >
                Github
              </a>

              <br />

              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-400 hover:text-primary hover:underline transition"
              >
                Live Link
              </a>

              <br />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}


function Projects({projectsref}){
  // const inView = useInView(ref, { amount: 0.2 });
  // useEffect(()=>{
  //   if(inView){
  //     ref.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
  //   }
  // },[inView])
  const [isactive, setIsactive] = useState(false)
  const projects = [
    {
      id: 'nexconversa',
      name: 'NexConversa',
      skillUsed: ['JS','HTML','CSS','Python'],
      github: 'github.com/manishkumarnarayan/NexConversa',
      liveLink: '#',
      description: 'A texting-site with user authentication and chat functionality.'
    },
    {
      id:'proposalsite',
      name:'Heart Proposal',
      skillUsed:["HTML",'CSS','JS'],
      github: '#',
      liveLink: '#',
      description: 'A proposal site'
    }
  ]
  return (
    <FadeIn>
      <div className='section scroll-mt-30 flex flex-row justify-center items-start gap-10 p-[20px]' ref={projectsref}>
        <h1 className='text-6xl font-raleway font-thin text-white col-[2/13] row-[2/10]'>My Projects</h1>
        <div className="project-container h-[99%] w-[99%] rounded-2xl flex flex-row justify-center items-start gap-10 p-[20px] overflow-y-scroll">
          <ul className='flex flex-col justify-start items-center w-[100%] h-[auto] gap-10'>
            {projects.map((project)=>{
              return(<ProjectCard key={project.id} 
                id={project.id} 
                name={project.name} 
                skillUsed={project.skillUsed} 
                github={project.github} 
                liveLink={project.liveLink} 
                description={project.description} 
                activeCard={isactive} 
                setActiveCard={setIsactive}/>)
            })}
          </ul>
        </div>
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
      <div className='section scroll-mt-30' ref={contactref}>
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