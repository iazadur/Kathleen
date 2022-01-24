import React from 'react';
import { BiUser } from 'react-icons/bi'

const ProductDetails = () => {
    return (
        <>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
                            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 class="text-gray-900 text-5xl title-font font-medium mb-1">Kathleen Mud Mask</h1>
                            <h2 class="text24 text-black">No review yet. Write Review</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">$50.00</h1>
                            <h2 class="text24 text-black">No review yet. Write Review</h2>
                            <h2 class="text24 text-black">Product Type: Beauty</h2>
                           <p className='flex gap-2 justify-start mt-2 mb-4 items-center'>
                                <svg fill="currentColor" style={{ color:"#C4C4C4"}} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg> Add To Wishlist
                           </p>
                           <div className="flex justify-between">
                               <div className="flex">
                                   <button className='border py-1 px-4 text-4xl border-black'>-</button>
                                    <button className='border py-1 px-5 text-xl border-x-0  border-black'>1</button>
                                    <button className='border py-1 px-4 text-2xl border-black'>+</button>
                               </div>
                                <button className='font-semibold text24 text-white rounded-full py-2 px-16' style={{ backgroundColor:"#C1A544"}}>Add to cart</button>
                           </div>
                              <div className="grid grid-cols-2 my-4">
                                  {
                                      Array.from({length:4}).map((_,id)=>
                                          <div key={id} className="flex gap-x-2">
                                              <div className="flex justify-center items-center">
                                                  <BiUser className='text-4xl' />
                                              </div>
                                              <div className="flex flex-col">
                                                  <h3 className='text-xl'>Fast Delivery</h3>
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