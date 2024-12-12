import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
            {/* Logo Section */}
            <Link href="#home" >
                <img
                    src="/images/logo-web_sm_black.png"
                    alt="iCog Logo"
                    className="w-12 h-12"
                />
            </Link>

            {/* Navigation */}
            <nav>
                <ul className="flex space-x-8 font-bold text-black">
                    <li>
                        <Link href="#home" className="hover:text-gray-400">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="hover:text-gray-400">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="#impact" className="hover:text-gray-400">
                            Impact
                        </Link>
                    </li>
                    <li>
                        <Link href="#blog" className="hover:text-gray-400">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="#career" className="hover:text-gray-400">
                            Career
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
