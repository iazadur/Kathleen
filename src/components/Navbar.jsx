import React from 'react';
import { BsBag} from 'react-icons/bs'
import logo from '../assert/Logo.png'

const Navbar = () => {
    return (
        <>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav class="flex lg:w-2/5 flex-wrap items-center md:ml-auto justify-around text-xl">
                        <a href="/" class="mr-5 hover:text-gray-900">Home</a>
                        <a href="/" class="mr-5 hover:text-gray-900">About US</a>
                        <a href="/" class="mr-5 hover:text-gray-900">Shop</a>
                    </nav>
                    <a href="/" class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <img src={logo} alt="" />

                    </a>
                    <div class="lg:w-2/5 inline-flex lg:justify-around ml-5 lg:ml-0 text-xl">
                        <a href="/" class="mr-5 hover:text-gray-900">FAQ</a>
                        <a href="/" class="mr-5 hover:text-gray-900">Log in/Sign Up</a>
                        <a href="/" class="mr-5 hover:text-gray-900"><BsBag /></a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;