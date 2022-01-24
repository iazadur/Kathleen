import React from 'react';
import vactor from '../../assert/Vector.png'
import v from '../../assert/bg-v.png'

const Features = () => {
    return (
        <>
            <section className='container m-auto my-12'>
                <div class="grid grid-cols-4 gap-4">
                    {Array.from({length:4}).map((_,id)=>
                        <div key={id} className='rounded-full bg-pink-200 opacity-75 bg-transparent sm:h-56 sm:w-56 md:w-64 md:h-64 flex justify-center items-center' style={{backgroundImage:`url(${v})`}}>
                            <div className="flex flex-col justify-center items-center ">
                                <img className='w-28' src={vactor} alt="" />
                                <p className=' w-28 text-xl font-normal text-black opacity-100 break-words'>Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                    
                    )}
                    
                    
                    
                </div>
            </section>
        </>
    );
};

export default Features;