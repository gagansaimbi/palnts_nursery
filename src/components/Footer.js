import { Link } from "react-router-dom"


function Footer({toggleMenu, menuOpen}) {

    function handleMenu(){
        if(menuOpen){
            toggleMenu()
        }
    }

    return <div onClick={handleMenu}>
            <footer id='footer' className="bg-[#618264]">
                <div className="container lg:max-w-full min-w-full">
                    <div className="flex flex-wrap justify-center">
                        <div className="p-1">
                            <Link to="/about-us" className="text-custom-nav-button  ">
                                About Us
                            </Link>
                        </div>
                        <p className="text-custom-nav-button p-1 ">|</p>
                        <div className="p-1">
                            <Link to="/contact-us" className="text-custom-nav-button  ">
                                Contact Us
                            </Link>
                        </div>
                        <p className="text-custom-nav-button p-1 ">|</p>
                        <div className="p-1">
                            <Link to="/" className="text-custom-nav-button ">
                                Terms
                            </Link>
                        </div>
                    </div>

                    <hr className="ml-20 mr-20" />

                    {/* Social Media Icons  */}
                    <h1 className="text-center text-custom-nav-button ">Find us on</h1>
                    <div className="flex justify-center space-x-6 p-2 pt-1">

                        <a className="instagram" href="https://www.instagram.com/gagansaimbi"
                            target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 16 16"
                                height="26"
                                width="26"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="white"
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598a2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486a2.48 2.48 0 0 1 .599-.92c.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                ></path>
                            </svg>
                        </a>
                        <a className="facebook" href="https://www.facebook.com/gagan.saimbi" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                height="26"
                                width="26"
                                viewBox="0 0 512 512"
                                fill="#fff"
                            >
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                        </a>
                        <a className="whatsapp" href="https://wa.me/919872020820" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 16 16"
                                fill="currentColor"
                                height="26"
                                width="26"
                                xmlns="http://www.w3.org/2000/svg"
                            > <path fill="white" d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                        </a>

                    </div>

                    <hr />
                    <div className="flex justify-center">
                        
                        <p className="md:space-x-2 space-x-2 flex justify-between text-xs order-last text-white-400 text-center p-1">
                            Developed by: {" "}
                            {/* Linked in link */}
                            <a className="underline"
                                href="https://www.linkedin.com/in/gagansaimbi/"
                                target="_blank" rel="noopener noreferrer"
                                > gagansaimbi
                            </a>
                            {' '}
                            {/* Clickable Github icon */}
                            <a href="https://github.com/gagansaimbi/plants_nursery"
                                target="_blank"
                                rel="noopener noreferrer">
                            <svg strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="w-4 hover:scale-125 duration-200 hover:text-custom-nav-button">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                        </p>
                    </div>
                </div>

            </footer>
    </div>
}

export default Footer