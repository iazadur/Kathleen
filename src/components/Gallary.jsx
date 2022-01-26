import React from 'react';
import TextCard from './Shared/TextCard';
import girls from '../assert/gallary.png'

const Gallary = () => {
    return (
        <>
            <TextCard heading={"#kathleenmusmask"} paragraph={"Shop our instagram feed@Banhxeo Blankets"} />
            <div className="grid sm:grid-cols-2 sm:gap-2 gap-0 px-2 sm:px-0 md:grid-cols-3 lg:grid-cols-5 grid-cols-1">
                {Array.from({length:5}).map((_,id)=>
                
                <img key={id} className='w-full' src={girls} alt="" />
                )}
            </div>
        </>
    );
};

export default Gallary;