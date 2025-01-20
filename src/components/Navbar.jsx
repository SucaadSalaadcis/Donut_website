import React from 'react'

import img from '../assets/img/5.jpg'
import { LuUser } from 'react-icons/lu';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoMdMenu } from "react-icons/io";


export default function Navbar() {

    return (
        <div className="relative w-full h-screen bg-center bg-cover">

            <img
                src={img}
                alt=""
                className="absolute inset-0 object-cover w-full h-full rounded-b-[20px]"
            />

            <div className='relative z-10 flex justify-between px-5 pt-10 md:px-32'>
                <div className='flex gap-2 mt-3 ml-4 md:text-3xl'>
                    <IoMdMenu className='mt-1 md:text-3xl' />
                    <p>Menu</p>

                </div>

                <div className='flex justify-between gap-9 '>

                    <div className='flex gap-5 mt-3 ml-4 md:text-3xl'>
                        <LuUser />
                        <MdOutlineShoppingCart />
                    </div>
                </div>
            </div>
            
            <div className="relative z-10 flex items-center justify-center pt-20 text-center">
                <p className="md:text-5xl font-bold text-[black]" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                    Where Sweet Dreams <span className="block">Become Delicious Reality</span>
                </p>

            </div>
            {/* <img src={img1} alt="" className="w-full h-[200px] mt-[30%] -z-10" /> */}
        </div>

    )
}
