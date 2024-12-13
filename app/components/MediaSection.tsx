import React from 'react';

export default function MediaSection() {
    return (
        <div className="bg-gray-800 text-white py-10 h-[420px]">
            <h2 className="text-center text-2xl font-bold mb-4">In The Media</h2>
            <p className="text-center mb-12">What they are Reporting About Us</p>
            <div className="flex justify-center items-center space-x-20">
                <a href="https://edition.cnn.com/2018/10/11/africa/ethiopian-ai-tech-coder-betelhem-dessie/index.html" target="_blank">
                    <img src="/images/cnn-logo-vector-1-(4).png" alt="CNN" className="h-16" />
                </a>
                <a href="https://www.bbc.com/worklife/article/20190308-how-ethiopias-youngest-tech-pioneer-inspires-a-generation" target="_blank">
                    <img src="/images/bbc-logo-vector-1-(1).png" alt="BBC" className="h-16" />
                </a>
                <a href="https://www.youtube.com/watch?v=LieM2067u3w&feature=youtu.be" target="_blank">
                    <img src="/public/images/cgtn_english.png" alt="CGTN" className="h-16" />
                </a>
                <a href="https://www.youtube.com/watch?v=p8fl-u1UMVA&feature=youtu.be" target="_blank"  >
                    <img src="/public/images/the_economist-logo.png" alt="The Economist" className="h-16" />
                </a>
            </div>
        </div>
    );
}
