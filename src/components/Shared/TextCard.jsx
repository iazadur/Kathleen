import React from 'react';

const TextCard = ({ heading, paragraph }) => {
    return (
        <div class="flex flex-col text-center w-full my-20">
            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">{heading}</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed font-normal text-xl">{paragraph}</p>
        </div>
    );
};

export default TextCard;