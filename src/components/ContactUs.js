import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContactUs() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const [copyAlert, setCopyAlert] = useState(false)
    const phone = 1234567890;
    const mail = 'gagansaimbi@gmail.com'
    const [print, setPrint] = useState('')

    const handlePhoneCopy = () => {
        setPrint('Phone number')
        setCopyAlert(true)
        navigator.clipboard.writeText(phone);
        setTimeout(() => {
            setCopyAlert(false);
        }, 1500);
    }

    const handleMailCopy = () => {
        setPrint('Mail ID')
        setCopyAlert(true)
        navigator.clipboard.writeText(mail);
        setTimeout(() => {
            setCopyAlert(false);
        }, 1500);
    }


    return (<>
        <div className="mt-0 flex justify-center items-center min-h-screen
            bg-bg-img
                bg-cover
                bg-center
                bg-fixed">
            <div className=" border-gray-400 m-2 p-2 max-w-screen-lg h-auto w-auto justify-center items-center rounded-lg">
                <h1 className="text-center pb-2 font-Kanit lg:text-5xl lg:mb-3 lg:mt-2 text-3xl mb-2">
                    Contact us
                </h1>

                <div className=" md:max-h-1/5 h-auto ">

                    <div className="shadow-lg pb-4 w-auto h-auto bg-custom-nav-button rounded-lg">

                        <div className="flex flex-col m-4">

                            {/* image and name  */}
                            <div className="flex p-2 lg:p-0 items-center">
                                <div className="pt-4 image w-20 h-full flex justify-center items-center p-2">
                                    <img className="w-20 h-16 rounded-full "
                                        src={process.env.PUBLIC_URL + '/owner.jpg'}
                                        alt='gagan saimbi' />
                                </div>
                                <div className=" ">
                                    <p className="font-sans p-6 pt-8 pl-2 pr-2
                                        lg:text-2xl text-xl
                                        font-catamaran
                                        text-center">
                                        Gagandeep Singh
                                    </p>
                                </div>
                            </div>

                            <div className="flex">

                                <div className="contact-details pt-0">

                                    {/* phone number  */}
                                    <div className="flex w-auto">
                                        <div className="m-1 order-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                className="w-7 h-9 pr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </div>
                                        <div className="m-1 w-auto pt-1 order-2">
                                            <span className="w-auto
                                            whitespace-nowrap
                                             text-lg pl-1 pr-8 underline">
                                                <a href="tel:+911234567890">+91-{phone}
                                                </a>
                                            </span>
                                        </div>
                                        <div className="m-1 pt-2 order-3">
                                            <button onClick={handlePhoneCopy}>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-4 rounded-md">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>


                                    {/* mail  */}
                                    <div className="flex w-auto max-w-xs">
                                        <div className="m-1 order-1 pt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <div className="m-1 w-auto order-2">
                                            <span className="w-auto pr-1 whitespace-nowrap underline text-lg pl-1">
                                                <a href="mailto:gagansaimbi@gmail.com">{mail}</a>
                                            </span>
                                        </div>
                                        <div className="m-1 pt-1 order-3">
                                            <button onClick={handleMailCopy}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                    className="w-6 h-4 rounded-md">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>



                                    <div className="float-right">
                                        <div className="flex pt-3  text-gray-500">
                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                    className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>
                                           
                                            <Link to='/visit-us'>
                                                <p className="font-sans
                                                    text-md text-gray-500 hover:text-gray-900
                                                    text-center underline">
                                                    Directions to Visit us
                                                </p>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>

        {/* Copy alert */}
        {copyAlert && (
            <div className="copy-alert"
                style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="border border-none w-auto h-auto  rounded-md pl-3 pb-2 pt-1 pr-3  bg-slate-700 bg-opacity-70 text-white">
                    {print} copied!
                </div>
            </div>
        )}
    </>
    );
}

export default ContactUs;