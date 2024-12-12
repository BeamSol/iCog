import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-cover bg-center bg-[url('/images/footer-bg.png')] text-gray-800">
            <div className="container mx-auto py-8 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <img src="/images/logo-web_sm_black.png" alt="iCog Logo" className="mb-4 w-32" />
                    <p className="text-sm">
                        iCog, previously known as (iCog Anyone Can Code (iCog-ACC)) is an affiliate of iCog Labs.
                    </p>
                    <p className="mt-4 text-sm">
                        iCog believes technology should be accessible to all, and young people are crucial to unlocking its potential. Our mission is to democratize technology through training, consultancy, and innovative products, enabling the next generation to shape the future.
                    </p>
                    <div className="mt-4 flex space-x-4 text-gray-600">
                        <a href="https://web.facebook.com/icogacc?_rdc=1&_rdr" target='_blank' className="hover:text-gray-400" aria-label="Facebook">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://x.com/icog__" target='_blank' className="hover:text-gray-400" aria-label="Twitter">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://www.instagram.com/icog__/" target='_blank' className="hover:text-gray-400" aria-label="Instagram">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/icoga/posts/?feedView=all" target='_blank' className="hover:text-gray-400" aria-label="LinkedIn">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>

                {/* Useful Links Section */}
                <div>
                    <h3 className="font-bold text-lg mb-4">USEFUL LINKS</h3>
                    <ul className="space-y-2">
                        <li><a href="#about" className="text-gray-600 hover:underline">About Us</a></li>
                        <li><a href="#impact" className="text-gray-600 hover:underline">Impact</a></li>
                        <li><a href="#blogs" className="text-gray-600 hover:underline">Blogs</a></li>
                        <li><a href="#career" className="text-gray-600 hover:underline">Career</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
                    <p>Namibia St, Lingo Tower, 12th Floor</p>
                    <p>Addis Ababa, Ethiopia</p>
                    <p className="mt-4 flex items-center">
                        <FaPhone className="mr-2" />
                     +251-(0)-904262728
                    </p>
                    <p className="mt-2 flex items-center">
                        <FaEnvelope className="mr-2" /> 
                        <a href="mailto:info@icog.et" className="text-gray-600 hover:underline">
                            info@icog.et
                        </a>
                    </p>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-200 text-center py-8 text-sm">
                <p>
                    © Copyright 2024 <span className="font-bold text-gray-800">iCog</span>. All Rights Reserved.
                </p>
                <p className="mt-1">
                    <a href="#" className="text-gray-600 hover:underline">Ayro Innovative</a> |{' '}
                    <a href="#" className="text-gray-600 hover:underline">Bootstrap Made</a>
                </p>
            </div>
        </footer>
    );
}
