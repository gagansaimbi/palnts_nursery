import { useEffect } from "react";
import { Link } from "react-router-dom";

function AboutUs() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return <>
        <div className="flex-grow min-h-screen bg-bg-img lg:bg-cover bg-center bg-fixed">
            <div className="grid justify-items-center">
                <h1 className="pt-6 pb-4 lg:mb-0
                font-Catamaran
                text-4xl lg:text-5xl
                text-center "
                >
                    About Us
                </h1>

                <div className="flex-col w-4/5 rounded-xl bg-navbar-green bg-opacity-30 backdrop-blur-xl">
                    <div className="p-5 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
                        <img className="m-2 mb-0 ml-4 float-right lg:float-none w-1/2 lg:w-1/4 rounded-xl shadow-md drop-shadow-lg aspect-square"
                            src={process.env.PUBLIC_URL + '/about-us/about-us-top.jpg'}
                            alt=''
                        />
                        <p className="p-1 text-justify w-auto lg:text-xl ">Founded in 1995 by the esteemed retired rainforest officer, Sardar Ranjit Singh Plants,
                            Plants Nursery has flourished into Patiala's premier destination for plants, pots, and bespoke
                            landscape designs. Nestled on a spacious 1-acre plot along Sirhind Road near Jhill Chowk, our
                            nursery epitomizes a legacy rooted in passion and dedication.
                        </p>
                    </div>
                    {/* </div> */}

                    {/* <br /> */}

                    {/* <div className="flex justify-center items-center
                w-full pl-2 pr-2"> */}
                    <div className="p-5 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
                        <p className='p-1 text-justify w-auto lg:text-xl '>Over the years, Plants Nursery has curated an impressive collection, offering Ornamental, Fruit,
                            Flowering, Air-purifying, and Hedge plants to cater to diverse needs. Complementing our plant range, we showcase a curated
                            selection of pots, from ceramic to terracotta and plastic, ensuring the perfect match for every setting.
                        </p>
                    </div>
                    {/* </div> */}

                    {/* <br /> */}

                    {/* <div className="flex justify-center items-center
                w-full pl-2 pr-2"> */}
                    <div className="p-5 lg:flex
                    lg:flex-row lg:justify-center lg:items-center">
                        <img className="m-2 mb-0 mr-4 lg:mr-0 float-left lg:float-none w-1/2 lg:w-1/4 rounded-xl shadow-md drop-shadow-lg aspect-square"
                            src={process.env.PUBLIC_URL + '/about-us/about-us-down.jpg'}
                            alt=''
                        />
                        <p className="p-1 lg:pl-4 text-justify w-auto lg:text-xl ">
                            Beyond our <Link to='/products' className="underline">product</Link> offerings, we prioritize quality, providing specialized plant manures and boosters to nurture your green spaces. With a commitment to excellence and environmental stewardship, Plants Nursery remains steadfast in our mission to bring nature's beauty closer to homes, offices, and schools across Patiala.
                        </p>
                    </div>
                    {/* </div> */}

                    {/* <br /> */}

                    {/* <div className="flex justify-center items-center
                w-full pl-2 pr-2"> */}
                    <div className="p-5 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
                        <p className='p-1 text-justify w-auto lg:text-xl '>
                            Discover the essence of green living with Plants Nursery, where every plant finds its perfect place, and spaces come alive with vitality.
                        </p>
                    </div>
                </div>
                <br />

            </div>
        </div>
    </>

}

export default AboutUs