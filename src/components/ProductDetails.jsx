import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi'

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1)
    return (
        <>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap ">
                        <div className=" flex gap-x-2 flex-col lg:flex-row w-full lg:w-1/2 ">
                            <div className="flex lg:flex-col flex-row lg:w-2/12 w-full gap-y-4 order-1 lg:order-0 gap-2 my-3">
                                <img alt="ecommerce" class="lg:w-full w-1/4 h-auto lg:h-auto object-cover object-center rounded" src="https://dummyimage.com/100x100" />
                                <img alt="ecommerce" class="lg:w-full w-1/4 h-auto lg:h-auto object-cover object-center rounded" src="https://dummyimage.com/100x100" />
                                <img alt="ecommerce" class="lg:w-full w-1/4 h-auto lg:h-auto object-cover object-center rounded" src="https://dummyimage.com/100x100" />
                                <img alt="ecommerce" class="lg:w-full w-1/4 h-auto lg:h-auto object-cover object-center rounded" src="https://dummyimage.com/100x100" />
                            </div>
                            <img alt="ecommerce" class="order-0 lg:order-1 w-full h-auto lg:h-auto lg:w-10/12  object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                        </div>
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
                            <h1 class="text-gray-900 text-5xl title-font font-medium mb-1">Kathleen Mud Mask</h1>
                            <h2 class="text24 text-black">No review yet. Write Review</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">$50.00</h1>
                            <h2 class="text24 text-black">No review yet. Write Review</h2>
                            <h2 class="text24 text-black">Product Type: Beauty</h2>
                            <p className='flex gap-2 justify-start mt-2 mb-4 items-center'>
                                <svg fill="currentColor" style={{ color: "#C4C4C4" }} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg> Add To Wishlist
                            </p>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <button className='border md:py-1 md:px-4 py-0 px-2 text-4xl border-black' onClick={() => setQuantity(quantity && quantity - 1)}>-</button>
                                    <button className='border md:py-1 md:px-5 py-0 px-2 text-xl border-x-0  border-black'>{quantity}</button>
                                    <button className='border md:py-1 md:px-4 py-0 px-2 text-2xl border-black' onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <button className='font-semibold text24 text-xl text-white rounded-full lg:py-2 lg:px-16 py-1 px-6' style={{ backgroundColor: "#C1A544" }}>Add to cart</button>
                            </div>
                            <div className="grid grid-cols-2 my-4 gap-y-3">
                                {
                                    Array.from({ length: 4 }).map((_, id) =>
                                        <div key={id} className="flex gap-x-2">
                                            <div className="flex justify-center items-center">
                                                <BiUser className='text-4xl' />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className='text-xl font-semibold'>Fast Delivery</h3>
                                                <p className='text-base '>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;