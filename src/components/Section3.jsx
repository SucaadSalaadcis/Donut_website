import React from 'react'
import img from '../assets/img/7.png'

export default function Section3() {
    return (
        <div class="relative bg-pink-200 mt-20 h-[230px] w-full">
            {/* <!-- Scalloped Top Background --> */}
            

            {/* <!-- Floating Blueberries --> */}
            <div class="absolute w-full h-full top-0 left-0">
                <img
                    src={img}
                    class="absolute top-10 left-10 w-16 h-16 animate-bounce"
                />
                <img
                    src={img}
                    class="absolute top-20 right-10 w-20 h-20 animate-spin"
                />
            </div>

            {/* <!-- Content Section --> */}
            <div class="relative z-10 flex flex-col items-center justify-center h-full">
                <h1 class="text-[#633c45] text-3xl font-bold pb-5">Our Star Treat</h1>
                <div class="bg-white bg-opacity-70 p-6 rounded-xl shadow-md">
                    <h2 class="text-xl font-bold text-[#633c45]">Blueberry Bliss Cake</h2>
                    <p class="text-gray-600">
                        Experience pure delight with our Blueberry Bliss Cake. Made with love,
                        featuring juicy blueberries on a soft vanilla base.
                    </p>
                    <span class="text-green-600 font-bold mt-2 block">$25.00 (8-inch round)</span>
                </div>
            </div>
        </div>


    )
}
