import React from 'react'
import './App.css'
import { Navbar, Hero, About } from './components/index';
import { patternDestktop, patternMobile } from './assets';

function App() {
  return (
    <>
      <div className='max-w-[425px] xl:max-w-[1440px]'>
        <header className='bg-gradient-to-t from-[#ff525d] to-[#FF846D] rounded-bl-[100px] h-[65vh] relative overflow-hidden'>
          <img src={patternMobile} alt="" className='absolute top-[-40%] left-[-60%] max-w-[1200px]' />
          <Navbar />
          <img src={patternDestktop} alt="" className='absolute top-[-200%] left-[-10%] max-w-[2800px]' />
          <Hero />
        </header>
        <main>
          <section>
            <About />
          </section>
        </main>
      </div>
    </>
  )
}

export default App

// :((