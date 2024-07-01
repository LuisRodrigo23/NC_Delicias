import React, { useState } from 'react';
import SectionPrice from './SectionPrice';


function MotionCards() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const images = [
        '../src/img/imgOreoPl.jpg',
        'https://images.unsplash.com/photo-1613067532415-90df85362423?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1588433899519-0d55a844d159?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1631857455684-a54a2f03665f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1578241873976-9e4fa81ebeb8?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    const back = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const next = () => {
        if (currentIndex < images.length) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex <= images.length) {
            setCurrentIndex(images.length - currentIndex + 1)
        }
    };

    return (
        <>
            <article className=" w-full sticky flex-shrink-0 overflow-hidden shadow-2xl">
                <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
                    <span>{currentIndex}</span>/
                    <span>{images.length}</span>
                </div>

                {images.map((image, index) => (
                    <figure
                        key={index}
                        className={`h-[42rem] ${currentIndex === index + 1 ? 'block' : 'hidden'}`}
                    >
                        <img src={image} alt="Image" className="absolute inset-0 z-10 h-full w-full object-cover opacity-70" />

                    </figure>
                ))}

                <button
                    onClick={back}
                    className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
                >
                    <svg className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={next}
                    className="absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
                    id='btnMotionCards'
                >
                    <svg className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </article >
            <SectionPrice />
        </>

    );
}

export default MotionCards