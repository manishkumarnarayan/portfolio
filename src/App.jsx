import { useState, useEffect, useRef } from 'react'
import './App.css'
import FadeIn from './assets/animations/animations.jsx'
import { AnimatePresence, useInView } from 'motion/react';
import { motion, useScroll, useSpring } from "motion/react";
import {submitContact} from './contactSubmit'
import me from '../assets/images/MySelf.jpg'
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
          h-auto min-h-16 md:h-20
          py-2 md:py-0
          bg-[var(--surface-2)]/30
          backdrop-blur-[45px] 
          flex flex-col md:grid
          md:grid-cols-6
          justify-between md:justify-center 
          items-center 
          text-[var(--text)]
          z-45
          px-4
          gap-2 md:gap-0
          ${scrollY ? 
            'top-2 md:top-4 w-[96%] rounded-2xl shadow-[0_0_20px_var(--border)]' 
            : 'top-0 w-full rounded-none'
          }`
        }>
        <h1 className='name text-lg sm:text-xl md:text-2xl font-bold md:font-normal text-center md:text-left md:justify-self-start md:col-[1/3]'>Manish Kumar Narayan</h1>
        <div className="section-btn flex flex-row justify-center md:justify-end gap-2 md:gap-5 md:col-[4/7] overflow-x-auto w-full md:w-auto pr-[10px] no-scrollbar py-1">
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
  return (
    <FadeIn>
      <div className='section justify-center scroll-mt-30 overflow-x-hidden gap-4 md:gap-6' ref={introref}>
        <h1 className='txt-content font-raleway font-thin tracking-[1px]'>Simple.</h1>
        <h1 className='flex justify-center items-center gap-3 md:gap-7 txt-content font-monsieur font-thin tracking-[1px] w-full px-4'>
          <hr className="w-full max-w-[80px] sm:max-w-[200px] md:max-w-[500px] bg-white border-t opacity-80"/>
          <span>Elegant.</span>
          <hr className="w-full max-w-[80px] sm:max-w-[200px] md:max-w-[500px] bg-white border-t opacity-80"/>
        </h1>
        <h1 className='txt-content font-raleway font-thin tracking-[1px]'>Functional.</h1>
      </div>
    </FadeIn>
  )
}


function AboutMe({aboutref}){
  return (
    <FadeIn>
      <div className='section scroll-mt-30' id='about' ref={aboutref}>
        <div className="myImg h-[100%] w-[100%] max-w-[260px] sm:max-w-[320px] md:max-w-none md:col-[2/5] md:row-[2/10] flex justify-center items-center">
          <img className='rounded-3xl max-h-[300px] md:max-h-none object-cover shadow-lg'src=me alt="Handsome right?" />
        </div>
        <div className="info font-raleway font-thin w-[100%] h-[100%] text-white md:col-[6/13] md:row-[2/10] text-center flex flex-col justify-center items-center gap-3">
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold md:font-normal'>Hey there, I'm Manish</h1>
          <p className='text-base sm:text-lg md:text-2xl px-2 leading-relaxed'>I'm a Computer Science student and frontend developer who enjoys building fast, responsive, and user-friendly web applications. I focus on clean design, thoughtful interactions, and writing code that's as maintainable as it is functional. I'm always exploring new technologies and looking for opportunities to turn ideas into meaningful digital experiences.</p>
        </div>
      </div>
    </FadeIn>
  )
}

function Card({front, back, id}){
  const [flipped, setFlipped] = useState(false);
  
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
  const skills =[
      {
        id: 'react',
        front:(
            <>
              <h2 className='font-raleway font-thin text-base sm:text-2xl' >React</h2>
            </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl mb-1'>React</h2>
            <p className='text-[10px] sm:text-sm'>Build multiple responsive web apps.</p>
            <p className='text-[10px] sm:text-sm'>Hooks • Context • Routing</p>
          </>
        )
      },
      {
        id: 'js',
        front:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl'>JavaScript with <br/> Html and Css</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl mb-1'>JavaScript with <br/> Html & Css</h2>
            <p className='text-[10px] sm:text-sm'>Build multiple responsive web apps.</p>
            <p className='text-[10px] sm:text-sm'>Interactive • Clean Design</p>
          </>
        )
      },
      {
        id: 'python',
        front:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl'>Python</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl mb-1'>Python</h2>
            <p className='text-[10px] sm:text-sm'>Build efficient backend applications.</p>
            <p className='text-[10px] sm:text-sm'>Backend • Automation</p>
          </>
        )
      },
      {
        id: 'sql',
        front:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl'>SQL</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl mb-1'>SQL</h2>
            <p className='text-[10px] sm:text-sm'>Data management in databases with security.</p>
            <p className='text-[10px] sm:text-sm'>Database • Management</p>
          </>
        )
      },
      {
        id:'java',
        front:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl'>Java</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl mb-1'>Java</h2>
            <p className='text-[10px] sm:text-sm'>Used for backend and software applications.</p>
            <p className='text-[10px] sm:text-sm'>Object-Oriented • Backend</p>
          </>
        )
      },
      {
        id:'git',
        front:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl'>Git & GitHub</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl mb-1'>Git & GitHub</h2>
            <p className='text-[10px] sm:text-sm'>Version control & teamwork.</p>
            <p className='text-[10px] sm:text-sm'>Collaboration</p>
            <a className='text-[10px] sm:text-sm text-slate-400 transition ease-in-out hover:text-primary hover:underline' target="_blank" rel="noreferrer" href='https://github.com/manishkumarnarayan'> Visit profile </a>
          </>
        )
      },
      {
        id: 'vercel',
        front:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl'>Vercel</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl mb-1'>Vercel</h2>
            <p className='text-[10px] sm:text-sm'>Used for deploying web apps.</p>
            <p className='text-[10px] sm:text-sm'>Hosting • CI/CD</p>
          </>
        )
      },
      {
        id:'AI-agents',
        front:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl'>AI Agents</h2>
          </>
        ),
        back:(
          <>
            <h2 className='font-raleway font-thin text-base sm:text-2xl mb-1'>AI Agents</h2>
            <p className='text-[10px] sm:text-sm'>Create agents using Claude, ChatGPT & Gemini.</p>
            <p className='text-[10px] sm:text-sm'>AI Tools • Workflows</p>
          </>
        )
      }
  ]
  return (
    <FadeIn>
      <div className='section scroll-mt-30' id='skills' ref={skillsref}>
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-raleway font-thin text-white text-center md:text-left md:col-[2/13] md:row-[1/2]'>My Skills</h1>
        <div className="text-lg md:text-2xl info font-raleway font-thin w-[100%] h-[100%] text-white md:col-[2/13] md:row-[2/10] flex flex-col items-center">
          <p className='text-center md:text-left w-full text-base sm:text-xl mb-3'>So as of now my key skills include:</p>
          <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 w-[100%] justify-center items-stretch'>
            {skills.map((skill)=>{
              return(<Card key={skill.id} id={skill.id} front={skill.front} back={skill.back}/>)
            })}
          </ul>
          <br />
          <p className='text-center md:text-left w-full text-xs sm:text-base mt-2'>But these aren't the only ones as I'm constantly improving and learning new things.</p>
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
      id={id}
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
        p-4
      `}
    >
      <motion.div
        layout
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <motion.h2
          layout
          className="project-name text-2xl sm:text-3xl text-center"
        >
          <span> {name} </span>
        </motion.h2>

        {/* Description */}
        <AnimatePresence>
          {(open || isHover) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden w-full md:w-[70%] flex flex-col justify-center items-center pt-2"
            >
              <p className="text-wrap text-center text-xs sm:text-base">{description}</p>
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
              className="overflow-hidden text-center pt-2"
            >
              <div className="flex gap-2 flex-wrap justify-center my-2">
                {skillUsed.map(skill => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded bg-slate-700 text-white text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center gap-6 my-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm text-slate-700 hover:text-primary hover:underline transition font-semibold"
                >
                  Github
                </a>

                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm text-slate-700 hover:text-primary hover:underline transition font-semibold"
                >
                  Live Link
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}


function Projects({projectsref}){
  const [isactive, setIsactive] = useState(false)
  const projects = [
    {
      id: 'nexconversa',
      name: 'NexConversa',
      skillUsed: ['JS','HTML','CSS','Python'],
      github: 'https://github.com/manishkumarnarayan/nexconversa',
      liveLink: 'https://nexconversa.vercel.app/',
      description: 'NexConversa is a modern real-time chat application that enables seamless one-to-one conversations with instant messaging, user authentication, and cloud-based data storage. It focuses on speed, reliability, and a clean user experience.'
    },
    {
      id:'whisperlink',
      name:'WhisperLink',
      skillUsed:["HTML",'CSS','JS'],
      github: 'https://github.com/manishkumarnarayan/whisperlink',
      liveLink: 'https://whisperlink-nu.vercel.app/',
      description: 'An anonymous messaging platform that lets anyone share honest thoughts, compliments, confessions, or feedback through a personalized link.\nBuilt with privacy and simplicity in mind, it creates a safe space for authentic conversations.'
    }
  ]
  return (
    <FadeIn>
      <div className='section scroll-mt-30 flex flex-col justify-start items-center gap-6 p-4 md:p-[20px]' ref={projectsref}>
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-raleway font-thin text-white w-full text-center md:text-left md:col-[2/13] md:row-[2/10]'>My Projects</h1>
        <div className="project-container h-[99%] w-[100%] rounded-2xl flex flex-row justify-center items-start gap-10 overflow-y-auto">
          <ul className='flex flex-col justify-start items-center w-[100%] h-[auto] gap-6 md:gap-10'>
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
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');
  return (
    <FadeIn>
      <div className='section contact scroll-mt-30 p-4 md:p-6' ref={contactref}>
        <div className="contact-top flex flex-col justify-center items-center md:col-[1/3] md:row-[1/2]">
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-raleway font-thin text-white mb-2 md:mb-0'>Contact Me</h1>
        </div>
        <div className="contact-left w-full h-full flex flex-col justify-center items-center gap-3">
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' className='w-full md:w-[80%] h-[48px] bg-[var(--surface)] border-[1px] border-[var(--border)] rounded-[10px] p-[10px] text-white text-sm md:text-base'/>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' className='w-full md:w-[80%] h-[48px] bg-[var(--surface)] border-[1px] border-[var(--border)] rounded-[10px] p-[10px] text-white text-sm md:text-base'/>
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='Phone (optional)' className='w-full md:w-[80%] h-[48px] bg-[var(--surface)] border-[1px] border-[var(--border)] rounded-[10px] p-[10px] text-white text-sm md:text-base'/>
          <select value={subject} onChange={(e)=>setSubject(e.target.value)} name="subject" id="" className='w-full md:w-[80%] h-[48px] bg-[var(--surface)] border-[1px] border-[var(--border)] rounded-[10px] p-[10px] text-white text-sm md:text-base'>
            <option value="">Select a subject</option>
            <option value="job">Job offer</option>
            <option value="freelance">Hire as a Freelancer</option>
          </select>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Message' className='w-full md:w-[80%] h-[100px] bg-[var(--surface)] border-[1px] border-[var(--border)] rounded-[10px] p-[10px] text-white text-sm md:text-base description'/>
          <button onClick={()=>{
            if(name==='' || email==='' || subject==='' || message===''){
              alert('Please fill all the fields before sending a contact request')
            }
            else{
              submitContact(name,email,subject,message)
              setName('')
              setEmail('')
              setPhone('')
              setSubject('')
              setMessage('')
            }
          }} className='w-full md:w-[80%] h-[48px] bg-[var(--surface-2)] border-[1px] border-[var(--border)] rounded-[10px] p-[10px] text-white font-medium hover:bg-slate-700 transition cursor-pointer'>Send</button>
        </div>
        <div className="contact-right w-full h-full flex flex-col justify-center items-center gap-6 md:gap-10 mt-4 md:mt-0">
          <p className='flex justify-center items-center gap-4 md:gap-10 text-3xl md:text-6xl font-raleway font-thin text-white w-full'>
            <hr className="w-full max-w-[80px] sm:max-w-[150px] md:max-w-[200px] bg-white border-t"/>
            <span className="">Or</span>
            <hr className="w-full max-w-[80px] sm:max-w-[150px] md:max-w-[200px] bg-white border-t"/>
          </p>
          <div className='flex flex-row justify-center items-center gap-6 md:gap-10 flex-wrap'>
          <a href='mailto:manishkumarnarayan2007@gmail.com'>
            <p className='text-lg md:text-2xl font-raleway font-thin text-white hover:text-primary transition'>
              Email
            </p>
          </a>
          <a href='https://github.com/manishkumarnarayan' target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-16 md:h-16" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#fff" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/manish-kumar-341b81421?utm_source=share_via&utm_content=profile&utm_medium=member_android' target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-16 md:h-16" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#fff" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
            </svg>
          </a>
          <a href='https://www.instagram.com/ghosteddudee?igsh=MWk4cmczanBzenB2Mg==' target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-16 md:h-16" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="#fff" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
            </svg>
          </a>
          </div>
        </div>
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
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 45,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[rgba(45,169,251,1)] z-50 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ ease: "easeInOut" }}
      />
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
    </>
  )
}

export {Body} 