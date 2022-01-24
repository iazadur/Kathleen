import React from 'react';

const NewsLetter = () => {
    return (
        <>
            <div className="" style={{ backgroundColor: "#FFF8EB" }}>

                <div className="sm:w-1/3 m-auto space-y-3 py-14">
                    <h3 className='text-center text-5xl font-bold '>Newsletter</h3>
                    <p className='text-gray text-base text-center w-1/2 m-auto'>Be the first to know about specials, discounts and our latest products</p>
                    <div className="flex justify-center items-center w-full">    <input type="text" name="" className='inputText w-full bg-transparent p-2 placeholder:text-gray-400' placeholder='Your email address' id="" /></div>
                    <div className="flex justify-center items-center w-full">
                        <button className='font-semibold text-white text-xl text-center py-2 px-12 rounded-full' style={{ backgroundColor: "#C1A544" }}>Subscribe</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NewsLetter;