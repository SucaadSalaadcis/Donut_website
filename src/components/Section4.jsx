import React from 'react'
import chair9 from '../assets/img/6.png'
import { TbCar } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { LuArrowRightLeft } from "react-icons/lu";


export default function Section4() {
    return (
        <div className='gap-32 mt-32 mb-32 md:flex px-28 md:justify-evenly'>
            {/* right */}
            <div className='mt-10 md:mt-0'>
                <img src={chair9} className='rounded-3xl' alt="" />
            </div>
            {/* left */}
            <div className='flex justify-center mt-20'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold text-[#633c45]'>Why Choose Our Donot's</h1>
                    <p className='mt-3 text-gray-500'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam <br />vulputate velit imperdiet dolor tempor tristique.</p>

                    {/* the 4 icons */}
                    <div className='mt-10'>
                        {/* the top 2 */}
                        <div className='flex justify-between'>
                            <div>
                                <TbCar className='text-5xl text-[#633c45]' />
                                <p className='mt-2 font-semibold text-zinc-800'>Fast & Free Shipping</p>
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit.<br /> Aliquam vulputate.</p>
                            </div>
                            <div className='mt-3'>
                                <FiShoppingBag className='text-4xl text-[#633c45]' />
                                <p className='mt-2 font-semibold text-zinc-800'>Easy to Shop</p>
                                <p className='mt-2 text-gray-500'>Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit.<br /> Aliquam vulputate.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}
