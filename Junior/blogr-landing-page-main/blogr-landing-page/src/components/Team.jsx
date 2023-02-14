import React from 'react';
import { ilustrationPhones } from '../assets';

const Team = () => {
    return (
        <>
            <section className='bg-bg-gradient-very-desaturated-blue flex items-center relative justify-center'>
                <div>
                    <img src={ilustrationPhones} alt="" />
                </div>
                <div>
                    <h1 className='text-[2rem] text-white'>State of the Art Infrastructure</h1>
                    <p className='text-Grayish-blue xl:max-w-[500px]'>  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </section>
        </>
    );
}

export default Team;