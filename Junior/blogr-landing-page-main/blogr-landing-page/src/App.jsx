import React from 'react'
import './App.css'
import { Navbar, Hero, About, Team } from './components/index';
import { patternDestktop, patternMobile, bgPatternCircles } from './assets';

function App() {
  return (
    <>
      {/* do about section and also app section with dinamic re-usable component */}
      <div className='max-w-[425px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[100%]'>
        <header className='bg-gradient-to-t from-[#ff525d] to-[#FF846D] rounded-bl-[100px] h-[65vh] relative overflow-hidden'>
          <img src={patternMobile} alt="pattern" className='absolute top-[-40%] left-[-60%] max-w-[1200px]' />
          <Navbar />
          <img src={patternDestktop} alt="pattern" className='absolute top-[-200%] left-[-10%] max-w-[2800px]' />
          <Hero />
        </header>
        <main>
          <section>
            <About />
          </section>
          <section>
            <Team>
              <img src={bgPatternCircles} alt="" />
            </Team>
          </section>
        </main>
      </div>
    </>
  )
}

export default App

// :((