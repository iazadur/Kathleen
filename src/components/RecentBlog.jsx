import React from 'react';
import TextCard from './Shared/TextCard';
import blog1 from '../assert/blog1.png'
import blog2 from '../assert/blog2.png'
import blog3 from '../assert/blog3.png'

const RecentBlog = () => {
    return (
        <>
            <TextCard heading={"Recent Blogs"} />
            <div className="container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
                    <div className=" relative">
                        <img src={blog1} alt="" className='h-full w-full' />
                        <div className=" absolute top-0 right-0 text-right px-2 mt-5">
                            <p className='text24 font-semibold leading-none'>Lorem Ipsum </p>
                            <h3 className='text-4xl font-semibold leading-none mb-2'>Lorem Ipsum is simply</h3>
                            <a href="/" className='border-b border-black text-black text-lg text-normal'>READ MORE</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative" >
                            <img src={blog2} className='h-72 w-full' alt="" />
                            <div className=" absolute top-0 left-0 text-left px-2 mt-5 text-white">
                                <p className='text24 font-semibold leading-none'>Lorem Ipsum </p>
                                <h3 className='text-4xl font-semibold leading-none mb-2'>Lorem Ipsum is simply</h3>
                                <a href="/" className='border-b border-white  text-lg text-normal'>READ MORE</a>
                            </div>
                        </div>
                        <div className="relative" >
                            <img className='h-72 w-full' src={blog3} alt="" />
                            <div className=" absolute bottom-0 left-0 text-left px-2 mb-5 text-white">
                                <p className='text24 font-semibold leading-none'>Lorem Ipsum </p>
                                <h3 className='text-4xl font-semibold leading-none mb-2'>Lorem Ipsum is simply</h3>
                                <a href="/" className='border-b border-white  text-lg text-normal'>READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentBlog;