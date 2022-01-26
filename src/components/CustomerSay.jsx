import React from 'react';
import TextCard from './Shared/TextCard';
import customer from '../assert/customer.png'

const CustomerSay = () => {
    return (
        <>
            <div className="space-y-0">
                <TextCard heading={"Here's what our customer has to say"} />
                <div className="flex justify-center">
                    <img src={customer} className='rounded-full' alt="" />
                </div>
                <TextCard paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"} />

                <TextCard paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"} />
            </div>
        </>
    );
};

export default CustomerSay;