import { Link } from "react-router-dom";
import React from 'react';

function Header({ menuOpen, toggleMenu, setMenuOpen }) {

    return (

        <div className={`${menuOpen ? 'bg-green-900' : ''}
            bg-[#618264] drop-shadow-xl
             grid grid-cols-3 h-auto w-full items-center transition ease-in-out duration-200`}>

            {/* Navbar */}
            <div className="nav-button-left order-1  lg:w-auto flex lg:space-x-6 items-center">
                <div className="lg:flex lg:items-center lg:justify-center">

                    {/* Small screens radio button  */}
                    <div className={`flex ${menuOpen ? 'pl-4 pt-2 pb-2' : ''}`}>

                        {/* Navbar toggle button for small screens */}
                        <div className={`${menuOpen ? 'pt-2 pl-0 pb-2' : 'md:pb-4 pl-4'}
                                lg:hidden md cursor-pointer  pr-4`}
                            onClick={toggleMenu}>
                            <svg
                                className={`${menuOpen ? 'text-white' : 'text-black '}  w-6 h-6`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Large and small screen buttons */}
                    <div className={`lg:flex md:space-x-4 lg:space-x-6 items-center
                         ${menuOpen ? 'block' : 'hidden'}`} id='left-buttons'>
                        {/* <div className={`lg:flex md:space-x-4 lg:space-x-6 items-center
                                    transition-max-h
                                    duration-500
                                    ${menuOpen ? 'max-h-screen ease-in block' : 'ease-out max-h-0 hidden'}`}> */}
                        <Link to='/' onClick={() => setMenuOpen(false)}>
                            <p className={`text-black
                                        ${menuOpen ? 'text-white ' : ''}
                                         text-lg pl-3
                                        pt-0 md:text-2xl
                                        font-Lato
                                        md:transition
                                        md:ease-in-out
                                        md:delay-10
                                        md:hover:scale-110
                                        font-Kanit
                                        lg:ml-5
                                        hover:text-white
                                        `}
                            >
                                Home
                            </p>
                        </Link>
                        <Link to='/visit-us' onClick={() => setMenuOpen(false)}>
                            <p className={`md:transition pl-3
                                        md:ease-in-out
                                        md:delay-10
                                        md:hover:scale-110
                                         text-black
                                         ${menuOpen ? 'text-white' : ''}
                                         text-lg pt-0
                                         md:text-2xl  font-Kanit
                                        hover:text-white whitespace-nowrap
                                        `}>
                                Visit Us
                            </p>
                        </Link>
                        <Link to='/products' onClick={() => setMenuOpen(false)}>
                            <p className={`md:transition
                                        pl-3
                                        md:ease-in-out
                                        md:delay-10
                                        md:hover:scale-110
                                        text-black
                                        text-lg
                                        pt-0 ${menuOpen ? 'pb-3 text-white' : ''}
                                        md:text-2xl
                                        font-Kanit
                                        hover:text-white
                                        `}>
                                Products
                            </p>
                        </Link>
                        {/* </div> */}
                    </div>
                </div>
            </div>

            {/* Logo  */}
            <div className={`logo p-3 order-2  ${menuOpen ? '' : ''}`}>

                <div className="flex justify-center items-center
                    md:transition md:ease-in-out md:delay-10 md:hover:scale-110"
                >
                    <Link to='/'>
                        <img onClick={() => setMenuOpen(false)}
                            className="shadow-lg max-h-7 lg:w-auto lg:max-h-8 rounded-md"
                            src={process.env.PUBLIC_URL + '/logo.png'}
                            alt="Plants Nursery"
                        />
                    </Link>
                    {/* <h1 className="font-whisper text-xl text-white italic">Plants Nursery</h1> */}
                </div>
            </div>

            {/* Navbar Right button - Social Media Icons */}
            <div className={`social-media-buttons order-3
                 flex justify-end lg:space-x-6 mr-4 lg:mr-8
                ${menuOpen ? 'flex-col space-y-3 justify-between' : 'space-x-2'}
                `}>
                {/* instagram icon  */}
                <a className={`instagram ${menuOpen ? 'flex justify-end':''}`} href="https://www.instagram.com/gagansaimbi" target="_blank" rel="noopener noreferrer">
                    <svg className={`h-6  md:h-8`}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill={`${menuOpen ? 'white' : 'black'}`} d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486a2.48 2.48 0 0 1 .599-.92c.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                        ></path>
                    </svg>
                </a>
                {/* facebook icon  */}
                <a className={`facebook ${menuOpen ? 'flex justify-end':''}`} href="https://www.facebook.com/gagan.saimbi" target="_blank" rel="noopener noreferrer">
                    <svg className={` h-6 md:h-8`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path fill={`${menuOpen ? 'white' : 'black'}`} d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                </a>
                {/* whatsapp icon  */}
                <a className={`whatsapp ${menuOpen ? 'flex justify-end':''}`} href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                    <svg className={`  h-6 md:h-8`}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    > <path fill={`${menuOpen ? 'white' : 'black'}`} d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                </a>


            </div>

        </div>
    );
}

export default Header;
