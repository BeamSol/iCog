import React from 'react'

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-cover h-screen bg-center bg-[url('/images/hero-bg.png')] px-8">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-bold text-black mb-4">
          Enabling Ethiopia’s Youth through Technology.
        </h1>
        <p className="text-gray-700 mb-8">
          iCog, an affiliate of iCog labs, believes technology should be accessible to all, and young people are crucial to unlocking its potential.
        </p>
        <a
          href="#learn-more"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Learn More →
        </a>
      </div>
      <div className="flex-shrink-0 mt-8 md:mt-0">
        <img
          src="/images/hero_logo_lg.png" 
          alt="iCog Logo"
          className="w-80 h-80"
        />
      </div>
    </section>
  )
}
