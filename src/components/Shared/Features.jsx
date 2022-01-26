import React from 'react';
import vactor from '../../assert/Vector.png'
import v from '../../assert/bg-v.png'

const Features = () => {
    return (
        <>
            <section className='container m-auto my-12'>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 ">
                    {Array.from({ length: 4 }).map((_, id) =>
                        <div key={id} className='  flex justify-center items-center'>
                            <div style={{ borderRadius: '50%' }} className=" bg-pink-200 opacity-75 bg-transparent p-12 w-64 h-64">
                                <div className="flex flex-col justify-center items-center ">
                                    <img className='w-28' src={vactor} alt="" />
                                    <p className=' w-28 text-xl font-normal text-black opacity-100 break-words'>Loremipsum dolo sitamet</p>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </section>
        </>
    );
};

export default Features;