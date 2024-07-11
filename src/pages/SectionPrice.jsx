import React from 'react'
import '/src/index.css'
import Footer from '../components/Footer';

function SectionPrice() {
    return (
        <>
            <div className="min-w-screen bg-white grid lg:grid-cols-2 gap-10 lg:gap-10 mt-8 p-[4rem] max-[1100px]:p-[2rem]" id='sectionPrice'>
                {[
                    {
                        title: "Cheese Nai's de Fresa",
                        description:
                            "Contiene una base con una base hecha de galletas trituradas, proporciona una textura suave del relleno. La capa principal es un relleno de queso crema, incluyendo leche condensada, gelatina sin sabor y un toque de esencia de vainilla. Encima del relleno, se colocan fresas frescas o una salsa de fresa. Las fresas pueden estar cortadas en rodajas o dispuestas enteras. La salsa de fresa aporta un sabor dulce y ácido que combina perfectamente con el queso.",
                        imgSrc: "https://i.postimg.cc/x8LPQx94/img-Fond-Fresa.png",
                    },
                    {
                        title: "Cheese Nai's de Oreo",
                        description:
                            "Contiene una base con una base hecha de galletas trituradas de oreo. La capa principal es un relleno de queso crema, incluyendo leche condensada, gelatina sin sabor, un toque de esencia de vainilla y relleno con trozos de galleta oreo. Encima del relleno, cubrimos con galletas en trocitos.",
                        imgSrc: "https://i.postimg.cc/J4WqxLqV/img-Fond-Oreo.png",
                    },
                    {
                        title: "Cheese Nai's de Limon",
                        description:
                            "Contiene una base con una base hecha de galletas trituradas, proporcionando una textura suave del relleno, la capa de queso incluye una mezcla de limón, leche condensada, gelatina sin sabor y un toque de vainilla, por lo que combina la cremosidad del queso crema con la frescura del limón. Encima del relleno incluye un decorado con ralladura de limón.",
                        imgSrc: "https://i.postimg.cc/pVjCKTKJ/img-Fond-Limon.png",
                    },
                    {
                        title: "Cheese Nai's",
                        description:
                            "Garantizamos a los clientes pasar un buen tiempo con familia o amigos degustando de los cheesecakes que ofrecen dulzura y variedad de sabores característicos que los distinguen de otros cheesecakes. Son saludables, tradicionales y personalizados dependiendo de lo que desee el cliente. ",
                        imgSrc: "https://i.postimg.cc/zvwT6yjm/448427755-1248364163239611-6793991713541956325-n-removebg-2.png",
                    },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="w-full max-w-6xl rounded bg-[#f8e8c4] shadow-xl p-8 lg:p-16 mx-auto text-gray-800"
                    >
                        <div className="md:flex items-center -mx-4 sm:-mx-10">
                            <div className="w-full md:w-1/2 px-4 sm:px-10 mb-10 md:mb-0">
                                <div className="relative">
                                    <img
                                        src={card.imgSrc}
                                        className="w-full h-full relative"
                                        alt="Raincoat"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 sm:px-10">
                                <div className="mb-10">
                                    <h1 className="font-bold uppercase text-2xl mb-5">{card.title}</h1>
                                    <p className="text-sm">{card.description}</p>
                                </div>
                                <div>
                                    <div className="inline-block align-bottom mr-5">
                                        <span className="text-2xl leading-none align-baseline">Q</span>
                                        <span className="font-bold text-5xl leading-none align-baseline">
                                            25
                                        </span>
                                        <span className="text-2xl leading-none align-baseline">.00</span>
                                    </div>
                                    <div className="inline-block align-bottom">
                                        <br />
                                        <a href="https://www.instagram.com/nc_.delicias/"><button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                                            <i className="mdi mdi-cart -ml-2 mr-2"></i> Solicitar
                                        </button></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex items-end justify-end fixed bottom-5 right-0 mb-4 mr-4 z-10">
                    <div>
                        <a
                            title="Buy me a beer"
                            href="https://www.instagram.com/nc_.delicias/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-20 h-20 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
                        >
                            <img
                                className="object-cover object-center w-full h-full rounded-full"
                                src="https://i.postimg.cc/xYNtwsBN/imgLogoC.png"
                                alt="Buy me a beer"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default SectionPrice