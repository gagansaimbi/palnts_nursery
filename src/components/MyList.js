// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function MyList({ show, handlemyListDelete, counter, reset, setListAlert }) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('myList')) || [])

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('myList')))
    }, [handlemyListDelete, reset]);

    const handleEmptyList = () => {
        reset();
        show(false);
        setListAlert(true);
        setTimeout(() => {
            setListAlert(false);
        }, 2500);

    }

    return (
        <div className='z-50 backdrop-blur-sm m-0 p-0 fixed top-0 w-full h-full'>
            <div className="flex justify-between">
                <div className='left-blank lg:w-2/3 w-1/5 h-screen'
                    onClick={() => { show(false) }}>
                </div>

                <div className='right-list bg-white lg:w-2/5 w-4/5 h-full drop-shadow-2xl'>
                    {/* close my-list popup button  */}
                    <button className='float-right m-5 text-3xl text-black'
                        onClick={() => { show(false) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>

                    <div className='list-elements flex-col m-4 h-screen'>
                        <br /><br />

                        <div className=''>
                            <h1 className='text-2xl whitespace-nowrap lg:text-4xl pl-2 font-Kanit'>
                                My Selection's List
                                {counter !== 0 &&
                                    <span className='text-gray-500'> ({counter})</span>}</h1>
                        </div>
                        <div className='p-2 pb-4'>
                            <p className='text-gray-400 text-sm'>
                                Add your favorite's to this list to reference during your visit to our nursery.                            </p>
                        </div>
                        {/* List elements */}

                        <div id="list-card"
                            className="p-6 shadow-md drop-shadow-lg rounded-xl
                                 bg-gray-100 pt-0 overflow-auto
                                 h-2/5 max-h-2/5 lg:h-2/3 lg:max-h-2/3 lg:w-full
                                 flex-col justify-center">
                            <div className='h-10 sticky top-0 p-1 pt-2 bg-gray-100 w-auto border-b border-gray-400'>
                                <button disabled className='float-left'>
                                    <svg className='lg:w-6 lg:h-6 w-5 h-5 mt-1 lg:mt-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* reset button to empty list  */}
                                <button className='float-right pt-1 lg:pt-0
                                    rounded-md text-sm w-auto
                                    hover:bg-red-600
                                    hover:text-white
                                    text-red-600
                                    lg:hover:text-md'
                                    onClick={handleEmptyList}>
                                    Empty List
                                </button>
                            </div>
                            <div className='w-full'>
                                {/* table for list  */}
                                <table className='table-auto p-2
                                    w-full'>
                                    <tbody>
                                        {data.map((plant, index) => {
                                            return (
                                                <tr key={index} className='border-b' >
                                                    {/* image  */}
                                                    <td className='pl-0 aspect-square p-2 w-6 h-6 lg:w-12 lg:h-auto '>
                                                        <img className='w-6 h-6 lg:w-10 lg:h-10 lg:p-1 aspect-square rounded-full'
                                                            src={plant.image}
                                                            alt={plant.name}
                                                        />
                                                    </td>
                                                    {/* name  */}
                                                    <td className='capitalize p-1 lg:text-md '>
                                                        {plant.name.toLowerCase()}
                                                    </td>
                                                    {/* delete icon  */}
                                                    <td className='float-right'>
                                                        {
                                                            plant.in_list === "true" &&
                                                            <button className='pt-3 lg:pt-5'
                                                                disabled={plant.in_list === "true" ? false : true}
                                                                onClick={() => { if (counter <= 1) { show(false) }; handlemyListDelete(plant.id); }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                                    className="bg-slate-100 rounded-md w-auto h-5 lg:h-5 lg:hover:bg-red-300">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                                </svg>
                                                            </button>
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className='flex justify-center items-center mt-8  lg:mt-4 h-8 w-full'>
                            <div className='mr-1'>
                                <p className='lg:text-base text-md'>Any Queries?<br className='' /> Reach out to us
                                </p>
                            </div>
                            <p className='mr-3'>:</p>
                            <div className='ml-2 w-8 lg:hidden'>
                                <a href="tel:+919872020820">
                                    <svg className="w-6 h-6 hover:h-8 hover:w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </a>
                            </div>
                            <div className='mr-2 w-8'>
                                <a className={`whatsapp`} href="https://wa.me/919872020820" target="_blank" rel="noopener noreferrer">
                                    <svg className={`h-6 hover:h-8`}
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    > <path fill='green' d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                                </a>
                            </div>
                            {/* for large screens only  */}
                            <p className='hidden lg:block mr-4'>or</p>
                            <div className='mr-2 w-auto hidden lg:block'>
                                <Link className='contact-us' to='/contact-us'
                                    target="_blank" rel="noopener noreferrer">
                                    <button className='w-auto flex justify-center items-center whitespace-nowrap border-2 border-green-700 hover:border-navbar-green rounded-xl p-1 pt-0 pb-0 hover:bg-navbar-green hover:text-white'>
                                        Contact Us
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>


                </div>

            </div>


        </div>)
}

export default MyList