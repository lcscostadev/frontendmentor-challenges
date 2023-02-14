import React, { useState } from 'react';
import { useEffect } from 'react';
import { ilustrationDesktop, ilustrationMobile } from '../assets';

const About = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 640);

    const updateImage = () => {
        setDesktop(window.innerWidth > 640);
    }

    useEffect(() => {
        window.addEventListener('resize', updateImage);

        return () => window.removeEventListener("resize", updateImage);
    });

    return (
        <>
            <section className='xl:max-w-[1440px] xl:mx-auto '>
                <div className='pt-20 text-center'>
                    <h1 className='text-[1.7rem] lg:text-[2rem] font-semibold text-veryDarkBlue'>Design for the future</h1>
                </div>
                <div className='flex items-center justify-evenly flex-col-reverse xl:flex-row text-center xl:text-start'>
                    <div>
                        <div>
                            <h2 className='text-[1.5rem] font-semibold xl:max-w-[450px] text-veryDarkBlue max-w-[250px]  mx-auto'>Introducing an extensible editor</h2>
                            <p className='pt-5 pb-14 max-w-[300px] xl:max-w-[450px] text-veryDarkGrayishBlue mx-auto'> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                                change the looks of a blog.</p>
                        </div>
                        <div>
                            <h2 className='text-[1.5rem] font-semibold xl:max-w-[450px] text-veryDarkBlue max-w-[250px] mx-auto'>Robust content management</h2>
                            <p className='pt-5 pb-14 max-w-[300px] xl:max-w-[450px] text-veryDarkGrayishBlue mx-auto'>Flexible content management enables users to easily move through posts. Increase the usability of your blog
                                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                        </div>
                    </div>
                    <img src={isDesktop ? ilustrationDesktop : ilustrationMobile} alt="" className='py-10 xl:max-w-[650px]' />
                </div>
            </section>
        </>
    );
}

export default About;