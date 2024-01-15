import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function VisitUs({ menuOpen }) {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }, []);

    const [copyAlert, setCopyAlert] = useState(false)
    const address = 'Plants Nursery, Rocket street, Rocket Road, Rocket city, India - 123456';

    const handleCopy = () => {
        setCopyAlert(true)
        navigator.clipboard.writeText(address);
        setTimeout(() => {
            setCopyAlert(false);
        }, 1500);
    };

    return (
        <div className="mt-0 bg-white flex flex-col justify-center items-center min-h-100">
            {/* Main gate image */}
            <img
                className="shadow-2xl mb-5
                        contrast-50
                        lg:contrast-100
                        max-w-full
                        min-w-full
                        lg:max-w-sm
                        lg:min-w-fit
                        lg:h-96
                        lg:mt-20
                        lg:rounded-3xl
                        "
                src={process.env.PUBLIC_URL + '/visit-us.jpg'}
                alt="Plants Nursery entrance"
            />
            <h1 className={`absolute ${menuOpen ? 'top-36 md:top-52 ' : 'top-16'}
                     text-4xl text-gray-100
                     md:text-5xl
                     md:p-2
                     p-1
                     rounded-xl
                     opacity-100 bg-opacity-0
                     shadow-2xl backdrop-blur-sm
                     bg-blend-overlay
                    dropshadow-xl font-Kanit
                    lg:text-5xl
                    lg:backdrop-blur-none
                    lg:text-black
                    lg:shadow-none
                    `}>
                How to reach us
            </h1>
            {/* </a> */}

            <div className=" m-2 mt-0 p-2 h-auto w-auto justify-center items-center rounded-lg">

                <div className="mb-2 md:max-h-1/5 h-auto flex flex-wrap justify-center ">
                    {/* Address */}
                    <div className="shadow-lg pl-5 pr-5 p-2 m-4 mt-0 w-auto h-auto border border-black bg-custom-nav-button rounded-lg">
                        {/* Button to copy address to clipboard  */}
                        <button
                            onClick={handleCopy}
                            className="shadow-md mt-3 float-right rounded-lg bg-gray-300 w-8 h-8 flex justify-center items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="pointer-events-none"
                            >
                                <rect width="24" height="24"></rect>
                                <rect
                                    x="4"
                                    y="8"
                                    width="12"
                                    height="12"
                                    rx="1"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></rect>
                                <path
                                    d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18"
                                    stroke="#000000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeDasharray="2 2"
                                ></path>
                            </svg>
                        </button>

                        <h3 className="pt-3 pb-4 font-mono text-2xl lg:text-2xl">Address:</h3>
                        <p className="font-sans pl-7 text-lg">{address.split(',').join(',')}</p>
                        <p className="font-sans pl-7 text-lg text-gray-600">(Near rocket library)</p>
                        <br />
                        <p className="font-sans pl-7 text-lg underline">Opening hours:</p>
                        <p className="font-sans pl-11 text-lg">9 a.m to 7 p.m (Summers)</p>
                        <p className="font-sans pl-11 text-lg">9 a.m to 6 p.m (Winters)</p>
                        <p className=" pt-2 font-sans pl-2 text-md lg:text-lg text-gray-600">
                            Having queries..? &nbsp;
                            <Link to='/contact-us' className='underline hover:text-gray-900'>
                                Contact Us
                            </Link>
                        </p>
                    </div>

                    {/* Google map widget */}
                    <div className="shadow-lg p-2 m-5 mt-0 w-auto h-auto border border-black bg-custom-nav-button rounded-lg">
                        <div className="shadow-lg w-auto h-4/5 gmap_canvas">
                            <iframe
                                title='google map link'
                                height="250"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=India%20Gate&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                alt="google maps"

                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copy alert */}
            {copyAlert && (
                <div className="copy-alert"
                    style={{ position: 'fixed', top: '85%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="border border-none w-auto h-auto  rounded-md pl-3 pb-2 pt-1 pr-3  bg-slate-700 bg-opacity-70 text-white">
                        Address copied!
                    </div>
                </div>
            )}
        </div>
    );
}

export default VisitUs;
