import { Link } from "react-router-dom";
import {useEffect} from 'react'

function Home() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }, []);

    return (
        <div className="flex-grow flex-col min-h-screen ">
            <div className={`bg-opacity-70
                min-h-screen
                bg-bg-img
                lg:bg-cover
                bg-center
                bg-fixed
                `}>

                {/* Heading of homepage */}
                <div id="heading-container" >
                    <h1 className="font-Kanit select-none pt-20 md:pt-36 text-7xl md:text-8xl text-black text-center bg-opacity-100">
                        Plants Nursery
                    </h1>
                    <p className="pb-20 select-none md:pb-52 pt-3 md:pt-7 text-md md:text-3xl text-center">
                        Prime destination for plant lovers 🌱🌼❤️
                    </p>
                </div>

                {/* About on homepage */}
                <div id="about" className="flex justify-center mx-auto w-4/5 border-none backdrop-blur-md rounded-2xl p-8 pt-4 bg-navbar-green bg-opacity-30 shadow-xl">
                    <div className="w-auto text-center">
                        <h1 className="font-Kanit pt-0 md:pt-1 text-2xl md:text-4xl text-black bg-opacity-100">
                            Who We Are
                        </h1>
                        <p className="text-sm text-black text-justify md:text-center md:text-lg mt-4">
                            Plants Nursery is Rocket city's go-to destination for premium plants, stylish pots, nutrient-rich manure, and expert landscaping services.
                        </p>
                        <p className="text-sm text-justify md:text-center md:text-lg mt-4">
                            Transform your living spaces with vibrant greenery. Join us on this green journey, and let's make your surroundings bloom with life and color!
                        </p>
                        <Link to="/about-us">
                            <button className="text-sm mt-5 px-3 py-1 md:px-6 md:py-3
                             bg-home-btn
                              text-white rounded-md
                               hover:bg-[#EEF0E5] hover:text-black
                               hover:border-navbar-green
                               md:transition
                                md:ease-in-out
                                md:delay-10
                                ">
                                More About Us..
                            </button>
                        </Link>
                    </div>
                </div>
                <br />

                {/* Products on homepage */}
                <div id="services" className="flex justify-center mx-auto w-4/5 border-none backdrop-blur-md rounded-2xl p-8 pt-4 bg-navbar-green bg-opacity-30 shadow-xl">
                    <div className="text-center w-auto">
                        <h1 className="font-Kanit pt-0 md:pt-1 text-2xl md:text-4xl text-black bg-opacity-100">
                            What We Offer
                        </h1>
                        <p className="text-sm mt-4 md:text-xl">
                            Plants Nursery is your one-stop solution for all things green!
                        </p>
                        <ul className="text-justify mt-4">
                            <li className="mb-2 text-xs md:text-lg">
                                <span className="text-sm md:text-xl">Premium Plants 🌻: </span>
                                Diverse collection of healthy and vibrant plants for homes, offices, and outdoor spaces.
                            </li>
                            <li className="mb-2 text-xs md:text-lg">
                                <span className="text-sm md:text-xl">Stylish Pots 🪴: </span>
                                Perfect pots to complement your plants and enhance the aesthetic of your spaces.
                            </li>
                            <li className="mb-2 text-xs md:text-lg">
                                <span className="text-sm md:text-xl">Nutrient-rich Manure 💪🏻: </span>
                                Boost the growth of your plants with our high-quality and organic manure.
                            </li>
                            <li className="mb-2 text-xs md:text-lg">
                                <span className="text-sm md:text-xl">Expert Landscaping 🏡: </span>
                                Transform your surroundings with our expert landscaping services for homes, schools, and offices.
                            </li>
                        </ul>
                        <Link to="/products">
                            <button className="text-sm mt-3 px-3 py-1 md:px-6 md:py-3
                             bg-home-btn
                              text-white rounded-md hover:bg-[#EEF0E5] hover:text-black
                               hover:border-navbar-green
                               md:transition
                                md:ease-in-out
                                md:delay-10">
                                Explore all Products..
                            </button>
                        </Link>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

export default Home;
