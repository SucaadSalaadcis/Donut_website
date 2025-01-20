import React from 'react'

export default function Footer() {
    return (
        <div>


            <footer class=" bg-pink-200 rounded-lg shadow md:mt-0 mt-14  dark:bg-gray-800">
                <div class=" p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm  sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">Suad</a>. All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}