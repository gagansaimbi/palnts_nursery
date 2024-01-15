
import { Link } from "react-router-dom";
import {useEffect} from 'react'

function ContactUs() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }, []);

    return (<>
        <div className="mt-0 flex justify-center items-center min-h-screen">
            <div className=" border-gray-400 m-2 p-2 max-w-screen-lg h-auto w-auto justify-center items-center rounded-lg">
                <h1 className="text-center pb-2 font-Kanit lg:text-5xl lg:mb-3 lg:mt-2 text-3xl mb-2">
                    Oops! Page Not Found
                </h1>
                <p className="text-center">The page you are looking for doesn't exist. Go to <Link to='/' className="underline">Home</Link></p>
            </div>
        </div>
    </>
    );
}

export default ContactUs;