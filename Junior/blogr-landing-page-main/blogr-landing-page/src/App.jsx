import React from 'react'
import './App.css'
import { Navbar, Hero } from './components/index';
import { patternMobile } from './assets';

function App() {
  return (
    <>
      <div className='max-w-[375px]'>
        <header className='bg-gradient-to-t from-[#ff525d] to-[#FF846D] rounded-bl-[100px] h-[60vh] relative overflow-hidden'>
          <img src={patternMobile} alt="" className='absolute top-[-40%] left-[-75%] max-w-[1200px]' />
          <Navbar />
          <Hero />
        </header>
      </div>
    </>
  )
}

export default App
