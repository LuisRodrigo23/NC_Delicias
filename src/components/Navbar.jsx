import React, { useState, useEffect } from 'react';
import { changeHeaderColor } from './Scroll';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const header = document.querySelector('header');
        const cleanup = changeHeaderColor(header);

        // Cleanup function para remover el evento de scroll
        return () => {
            cleanup();
        };
    }, []);

    return (
        <>
            <header style={{ backgroundColor: 'white', transition: 'background-color 0.3s ease' }}
                className='fixed top-0 w-full bg-white shadow-lg z-10'>
                <div className="py-10 px-2 lg:mx-4 xl:mx-12">
                    <div className="">
                        <nav className="relative flex items-center justify-between flex-wrap">
                            <div className="block lg:hidden">
                                <button
                                    onClick={handleMenuClick} // Manejar el clic del botón del menú
                                    className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                                    <svg className="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                    </svg>
                                    <h1 className='text-gray-700 font-bold ml-[30px] text-xl'>Nc Delicias</h1>
                                </button>
                            </div>
                            <div id="main-nav" className={`w-full flex-grow lg:flex items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>

                                <div className=" lg:flex-grow mt-2 animated jackinthebox xl:mx-8 text-[20px]">
                                    <a href={"/"}
                                        className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-blue-700  mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                        INICIO
                                    </a>
                                    <a href={"#btnMotionCards"}
                                        className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-blue-700  mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                        PRODUCTOS
                                    </a>
                                    <a href="#idPage"
                                        className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-blue-700  mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                        SOBRE NOSOTROS
                                    </a>
                                    <a href={"#footerId"}
                                        className="block lg:inline-block text-md font-bold  text-gray-900  sm:hover:border-indigo-400  hover:text-blue-700  mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                        CONTACTANOS
                                    </a>

                                </div>
                            </div>
                            <div className="absolute left-[90%] transform -translate-x-1/2 h-[7.1rem] flex items-center justify-center w-full ml-full">
                                <img src="../src/img/imgLogo.png" alt="Logo" className="h-[6rem] w-auto mr-[45px]" />
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    );
}

export default Navbar