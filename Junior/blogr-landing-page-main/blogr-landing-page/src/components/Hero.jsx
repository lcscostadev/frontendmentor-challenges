import React from 'react';

const Hero = () => {
    return (
        <>
            <section className='text-center px-10 pt-14 relative'>
                <h1 className='text-[2rem] max-w-[300px] mx-auto text-white font-[Ubuntu] xl:text-[3rem] xl:max-w-[800px] xl:pt-10'>A modern publishing platform</h1>
                <p className='max-w-[300px] mx-auto font-[Overpass] text-[1.1rem] opacity-75 pt-4 pb-8 text-white xl:max-w-[500px]'>Grow your audience and build your online brand</p>
                <div className='flex items-center justify-center gap-3'>
                    <button className='rounded-3xl py-3 px-5 bg-white text-[#ff7a85] font-bold hover:text-white hover:bg-opacity-30'>Start for Free</button>
                    <button className='bg-none border border-white rounded-3xl text-white font-bold py-3 px-5 hover:bg-white hover:text-[#ff7a85]'>Learn More</button>
                </div>
            </section>
        </>
    );
}

export default Hero;