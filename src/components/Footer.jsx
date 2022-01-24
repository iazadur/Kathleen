import React from 'react';
import left from '../assert/left.png'
import right from '../assert/right.png'
import visa from '../assert/visa.png'

const Footer = () => {
    return (
        <>
            <footer class="text-black body-font bg" style={{ backgroundColor: "#FFF8EB", backgroundImage: [`url(${left})`,` url(${right})`]}}>
                <div class="container px-5 py-1 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center order-first">
                        <div class="lg:w-1/5 md:w-1/5 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Links</h2>
                            <nav class="list-none mb-10 ">
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">About Us</a>
                                </li>
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">Products</a>
                                </li>
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">Blogs</a>
                                </li>
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">Contact Us</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-2/5 md:w-2/5 w-full px-4">
                            
                            <nav class="list-none mb-10 space-y-2">
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">OVER 1500 HAPPY CUSTOMERS! </a>
                                </li>
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">FREE SHIPPING ON ALL ORDERS!</a>
                                </li>
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">100% Satisfaction Guaranteed!</a>
                                </li>
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">30 Day Full Refund Policy!</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-2/5 w-full px-4">
                            
                            <nav class="list-none mb-10 space-y-2">
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">3 REASONS TO BUY FROM US!</a>
                                </li>
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">30-Days Money Back Guarantee</a>
                                </li>
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">Hassle- Free Returns</a>
                                </li>
                                <li>
                                    <a href='/' class="text-black hover:text-gray-800">Secure Orders </a>
                                </li>
                            </nav>
                        </div>
                        
                    </div>
                </div>
                <div class="">
                    <div class="container mx-auto flex sm:justify-between items-center sm:flex-row flex-col">
                       
                        <p class="text-sm text-gray-900 sm:ml-6 sm:mt-0 mt-4">Privacy Policy | Return Policy</p>
                        <p class="text-sm text-gray-900 sm:ml-6 sm:mt-0 mt-4">© 2021 Kathleen.com</p>
                        <div className="flex gap-x-1">
                            {
                                Array.from({length:4}).map((_,id)=>
                                <img className='w-12' key={id} src={visa} alt="" />
                                )
                            }
                        </div>
                        
                    </div>
                </div>
            </footer> 
        </>
    );
};

export default Footer;