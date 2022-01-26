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
                <div className="grid grid-cols-2 gap-4 h-auto">
                    <div className="">
<img src={blog1} alt="" className='h-full w-full' />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="" >
                            <img src={blog2} className='h-72 w-full' alt="" />
                        </div>
                        <div className="" >
                            <img className='h-72 w-full' src={blog3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentBlog;