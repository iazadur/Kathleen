import React from 'react';
import hero from '../assert/hero.png'
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div className='bg-none h-fit  bg-center' style={{ backgroundImage: `url(${hero})` }}>
            <div className="container m-auto">
                <Navbar />
                <div className="w-2/3  py-64">
                    <h1 className='text-8xl font-extrabold'>Kathlen</h1>
                    <h3 className='text-8xl font-bold'>Mineral Mud Mask</h3>
                    <p className='text-xs my-5 w-2/3 break-all'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum eligendi perspiciatis doloribus qui adipisci. Modi, sit officiis! Placeat nostrum expedita odio at tempora repellat nemo molestias hic, aspernatur, provident exercitationem corporis assumenda.</p>
                    <button className='uppercase font-semibold text-xl border  rounded-3xl px-12 py-2' style={{ borderColor:"#4F4002"}}>Shop now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

