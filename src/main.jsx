import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Body } from './App.jsx'
import vid from "./assets/bg-vid-1-nhd.mp4"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='background'>
      <video autoPlay loop playsInline muted className='object-cover w-full h-full'>
        <source src={vid} type='video/mp4' />
      </video>
    </div>
    <Body />
  </StrictMode>,
)
