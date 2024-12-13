import React from 'react';
import { LocationMarkerIcon, PhoneIcon, MailIcon, ClockIcon } from '@heroicons/react/solid';

export default function Contact() {
    return (
        <div className="pt-10 px-8 bg-white">
            <h2 className="text-center text-3xl font-bold mb-6">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="border p-4 rounded-lg shadow-md bg-gray-100">
                        <div className="flex items-center mb-2 ">
                            <LocationMarkerIcon className="h-6 w-6 text-gray-600 mr-2" />
                            <h3 className="font-semibold">Address</h3>
                        </div>
                        <p>Namibia St, Lingo Tower, 12th Floor, Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-md bg-gray-100">
                        <div className="flex items-center mb-2">
                            <PhoneIcon className="h-6 w-6 text-gray-600 mr-2" />
                            <h3 className="font-semibold">Call Us</h3>
                        </div>
                        <p>+251 - (0) - 904262728</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-md bg-gray-100">
                        <div className="flex items-center mb-2">
                            <MailIcon className="h-6 w-6 text-gray-600 mr-2" />
                            <h3 className="font-semibold">Email Us</h3>
                        </div>
                        <p>info@icog.et</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-md bg-slate-100">
                        <div className="flex items-center mb-2">
                            <ClockIcon className="h-6 w-6 text-gray-600 mr-2" />
                            <h3 className="font-semibold">Open Hours</h3>
                        </div>
                        <p>Monday - Friday<br />9:00 AM - 05:00 PM</p>
                    </div>
                </div>


                <form className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="name">Your Name (*)</label>
                        <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">Your Email (*)</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="subject">Subject (*)</label>
                        <input type="text" id="subject" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="message">Message (*)</label>
                        <textarea id="message" className="w-full p-2 border border-gray-300 rounded"    required></textarea>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                    <button type="submit" className="w-48 bg-black text-white py-2 rounded">Send Message</button>
                    <p className="text-red-500 text-sm mt-2">* Required</p>
                    </div>
                </form>
            </div>


            <div className="mt-10 pt-10 text-center h-48 bg-slate-100">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <div className="relative w-[420px] mx-auto">
                    <input
                        type="email"
                        placeholder="Email Address (*)"
                        className="p-2 w-full border border-gray-300 rounded pr-20"
                    />
                    <button
                        className="absolute right-0 top-0 bottom-0 bg-black text-white py-2 px-4 rounded-r"
                    >
                        Subscribe
                    </button>
                </div>
            </div>

        </div>
    );
}
