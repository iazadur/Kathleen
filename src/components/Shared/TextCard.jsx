import React from 'react';

const TextCard = ({ heading, paragraph }) => {
    return (
        <div class="flex flex-col text-center w-full my-20">
            <h1 class="sm:text-5xl text-3xl font-semibold title-font mb-4" style={{ color:"#882643"}}>{heading}</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed font-normal text24 text-black">{paragraph}</p>
        </div>
    );
};

export default TextCard;