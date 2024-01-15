
import { Link } from 'react-router-dom';
import MyList from './MyList.js';
import data from './ProductsData.js'
import React, { useEffect, useState } from 'react';

function Products() {
    const getData = JSON.parse(localStorage.getItem('myList'))
    const [searchData, setSearchData] = useState([...data.plants, ...data.pots, ...data.landscaping]);

    // syncLocalAndSearchData()
    function syncLocalAndSearchData() {
        if (getData && getData.length > 0) {
            const updatedSearchData = searchData.map((item) => {
                const localItem = getData.find((local) => local.id === item.id);
                return localItem || item; // return the localItem if found, else return the original item
            });
            setSearchData(updatedSearchData);
            setRenderData(updatedSearchData); // Optionally update renderData if necessary
        }
    }

    const [plantData] = useState(data.plants)
    const [potData] = useState(data.pots)
    const [landscapingData] = useState(data.landscaping)
    const [renderData, setRenderData] = useState(searchData)
    const [highlight, setHighlight] = useState('all')
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [cardView, setCardView] = useState('grid')
    const [myList, setMyList] = useState(getData || [])
    const [counter, setCounter] = useState(myList.length)
    const [showList, setShowList] = useState(false) // To show List
    const [listAlert, setListAlert] = useState(false)
    const [scrollTop, setScrollTop] = useState(false)
    // const [showDetailCard, setShowDetailCard] = useState(false)

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [highlight, cardView]);

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (getData) {
            syncLocalAndSearchData();
        }

        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  // syncLocalAndSearchData to run once on mount to sync with local storage

    useEffect(() => {
        if (myList) {
            localStorage.setItem('myList', JSON.stringify(myList));
        }
        // console.log("Updated myList:", myList);
        // console.log("Updated localStorage:", localStorage.getItem('myList'));
        setCounter(myList.length)
    }, [myList]);


    useEffect(() => {
        if (showList === false) {
            document.body.classList.remove('disable-scroll')
        } else {
            document.body.classList.add('disable-scroll')
        }

    }, [showList]); // to disable scroll on main products page when selection list is open

    useEffect(() => {

        if (highlight === 'all') {
            setRenderData(searchData);
        } else {
            const updatedList = searchData.filter((item) => item.category === highlight)
            setRenderData(updatedList);
            setSearchQuery('');
        }
    }, [searchData, highlight]); // to run when user change  filter or change in searchData

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleList = () => {
        if (counter !== 0) {
            setShowList(true)
        } else {
            setListAlert(true);
            setTimeout(() => {
                setListAlert(false);
            }, 2500);
        }
    }

    const handleResetList = () => {
        localStorage.clear('myList')
        setMyList([])
        setSearchData([...data.plants, ...data.pots, ...data.landscaping])
        // getData([])
        // syncLocalAndSearchData()
    }

    const handleFilter = (temp) => {
        if (temp === 'all') {
            setRenderData(searchData);
            setHighlight(temp);
        } else {
            const updatedList = searchData.filter((item) => item.category === temp)
            setRenderData(updatedList);
            setHighlight(temp);
            setSearchQuery('');
        }
    }

    const handlemyListDelete = (id) => {
        const selectedItem = searchData.find(item => item.id === id);
        if (selectedItem) {
            // const modifiedselectedItem = { ...selectedItem, in_list: "false" }
            const updatedSearchData = searchData.map((item) => {
                if (id === item.id) {
                    return { ...item, in_list: "false" }
                }
                return item;
            })
            setSearchData(updatedSearchData)
            // Add the selected item to myList
            // setMyList(prevList => [...prevList, modifiedselectedItem]);
            // setIsInList(modifiedselectedItem.in_list);
        }
        const updatedList = myList.filter((item) => item.id !== id);
        setMyList(updatedList);
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handlemyListAdd = (id) => {
        // Check if the item with the given id is already in the myList
        const itemExists = myList.some(item => item.id === id);
        if (!itemExists) {
            // Find the item in searchData based on the id
            const selectedItem = searchData.find(item => item.id === id);
            if (selectedItem) {
                const modifiedselectedItem = { ...selectedItem, in_list: "true" }
                const updatedSearchData = searchData.map((item) => {
                    if (id === item.id) {
                        return { ...item, in_list: "true" }
                    }
                    return item
                })
                setSearchData(updatedSearchData)
                // Add the selected item to myList
                setMyList(prevList => [...prevList, modifiedselectedItem]);
            }
        }
        if (counter >= 0) {
            setCounter(counter + 1)
        }
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setShowSuggestions(true)
        setSearchQuery(query);
        // Filtering data as per user input, searching from both name and details
        const filteredProducts = searchData.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
            ||
            product.detail.toLowerCase().includes(query.toLowerCase())
        );
        setRenderData(filteredProducts)
        setSuggestions(filteredProducts.slice(0, 8)); // To adjust the number of suggestions displayed

    };

    const handleSearchClick = (name) => {
        setSearchQuery(name);
        setSuggestions([]);
        const selectedProduct = searchData.find((product) => product.name === name);
        setRenderData([selectedProduct]);
    };


    return (<>
        <div className={`bg-white flex-grow`}
            onClick={() => { setShowSuggestions(false) }}>
            <div className="sticky top-9 lg:top-0 z-40 bg-white">
                <div className='items-center text-center'>
                    <h1 className="pt-6 pb-4 pl-7 lg:pl-24
                        font-Catamaran
                        text-3xl
                        lg:text-5xl
                        text-center">
                        Products we offer

                        {/* selection list  */}
                        <div className='float-right flex  pt-2 lg:pr-5 pr-2 lg:mr-5'>
                            <button onClick={handleList} className=''>
                                <svg className='lg:w-10 lg:h-10 w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                </svg>
                            </button>

                            <div className='float-top h-min w-4 aspect-square'>
                                {counter !== 0 &&
                                    <p className='rounded-full text-xs bg-green-700 text-yellow-50 aspect-square lg:h-5 h-4'>
                                        {counter}
                                    </p>
                                }
                            </div>
                        </div>

                    </h1>
                </div>
            </div>

            <div className="flex-grow flex-col min-h-screen justify-center items-center">
                <div className="sticky top-24 lg:top-20 z-40 bg-white">

                    {/* Filter buttons  */}
                    <div id="buttons" className="flex flex-nowrap justify-center space-x-2 lg:space-x-8 pt-4 pb-0">

                        <button onClick={() => { handleFilter('all') }}
                            className={`pl-2 pr-2  font-Loto  border-2 h-auto w-auto
                                border-navbar-green
                                hover:ring-offset-2
                                hover:ring
                                hover:ring-navbar-green
                                hover:bg-navbar-green
                                hover:text-white
                                md:transition
                                md:ease-in-out
                                md:delay-10
                                md:hover:scale-110
                                rounded-xl
                                ${highlight === 'all' ?
                                    'bg-navbar-green ring-navbar-green ring ring-offset-2 text-white'
                                    :
                                    'bg-white'}
                                `}>
                            <span className="p-2 text-lg lg:text-2xl">All</span>
                        </button>
                        <button onClick={() => { handleFilter('plant') }}
                            className={`pl-2 pr-2  font-Loto  border-2 h-auto w-auto
                                border-navbar-green
                                hover:ring-offset-2
                                hover:ring
                                hover:ring-navbar-green
                                hover:bg-navbar-green
                                hover:text-white
                                md:transition
                                md:ease-in-out
                                md:delay-10
                                md:hover:scale-110
                                rounded-xl
                                ${highlight === 'plant' ?
                                    'bg-navbar-green ring-navbar-green ring ring-offset-2 text-white'
                                    :
                                    'bg-white'}
                                 `}>
                            <span className="p-2 text-lg lg:text-2xl">Plants</span>
                        </button>
                        <button onClick={() => { handleFilter('pot') }}
                            className={`pl-2 pr-2  font-Loto  border-2 h-auto w-auto
                                    border-navbar-green
                                    hover:ring-offset-2
                                    hover:ring
                                    hover:ring-navbar-green
                                    hover:bg-navbar-green
                                    hover:text-white
                                    md:transition
                                    md:ease-in-out
                                    md:delay-10
                                    md:hover:scale-110
                                    rounded-xl
                                    ${highlight === 'pot' ?
                                    'bg-navbar-green ring-navbar-green ring ring-offset-2 text-white'
                                    :
                                    'bg-white'}
                                    `}>
                            <span className="p-2 text-lg lg:text-2xl">Pots</span>
                        </button>
                        <button onClick={() => { handleFilter('landscaping') }}
                            className={`pl-2 pr-2  font-Loto  border-2 h-auto w-auto
                                border-navbar-green
                                hover:ring-offset-2
                                hover:ring
                                hover:ring-navbar-green
                                hover:bg-navbar-green
                                hover:text-white
                                md:transition
                                md:ease-in-out
                                md:delay-10
                                md:hover:scale-110
                                rounded-xl
                                ${highlight === 'landscaping' ?
                                    'bg-navbar-green ring-navbar-green ring ring-offset-2 text-white'
                                    :
                                    'bg-white'}
                    `}>
                            <span className="p-2 text-lg lg:text-2xl">Landscaping</span>
                        </button>
                    </div>
                    {/* <br /> */}

                    {/* Search bar  */}
                    <div className='p-2 pb-4 pt-2 w-full flex justify-center space-x-8 lg:space-x-32'>
                        <div className="relative z-30 w-4/5 lg:w-1/2 pt-2">
                            <div className="flex items-center">
                                {/* Search icon  */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>

                                {/* input box  */}
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    placeholder="Search products..."
                                    className="ml-3 lg:p-2 p-1 pl-8 w-full rounded border border-gray-400 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                                />

                                {/* Cross button to reset search bar  */}
                                {searchQuery !== '' && (
                                    <button
                                        className="ml-2 text-black focus:outline-none hover:text-gray-700"
                                        onClick={() => { setSearchQuery(''); setRenderData([...plantData, ...potData, ...landscapingData]); setHighlight('all') }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </button>
                                )}
                            </div>

                            {/* Suggestion box, once user starts to type  */}
                            {(suggestions.length > 0 && searchQuery !== '' && showSuggestions === true) && (
                                <ul className="absolute bg-gray-50 border border-gray-100 w-full mt-2">
                                    {suggestions.map((product) => (
                                        <li
                                            key={product.id}
                                            className="pl-8 pr-2 py-1 capitalize font-catamaran border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
                                            onClick={() => handleSearchClick(product.name)}
                                        >
                                            {product.name.toLowerCase()}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Toggle switch for list or grid view of cards  */}
                        <div className='flex justify-center lg:pt-3 pt-2 pr-3'>
                            <button onClick={() => { setCardView('list'); setShowSuggestions(false) }}
                                className='list-view flex items-center justify-center rounded-l-md bg-gray-300 border border-gray-900 w-auto h-8 p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                                </svg>
                            </button>
                            <button onClick={() => { setCardView('grid') }}
                                className='grid-view flex items-center justify-center rounded-r-md bg-gray-300 border border-gray-900 w-auto h-8 p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                                </svg>
                            </button>

                        </div>
                    </div>
                    <hr className='bg-black' />
                </div>

                <div className='flex justify-center bg-gray-50'
                >

                    {/* cards rendering */}
                    {renderData.length === 0 &&
                        <div className='m-10 text-xl'>
                            <h1 className='text-center'>Uh oh! No results found.</h1>
                            <h1 className='underline text-center'
                                onClick={() => { setRenderData(searchData); setHighlight('all'); setSearchQuery('') }}>
                                Browse whole catalogue instead.
                            </h1>
                        </div>}
                    {/* grid view */}
                    {
                        (renderData.length !== 0 && cardView === 'grid') &&
                        <div id="grid-card"
                            className="p-4
                                grid grid-cols-2 gap-4
                                lg:grid-cols-5 lg:gap-4
                                md:grid-cols-4
                                ">
                            {renderData.map((plant, index) => {
                                return (
                                    <div key={index}
                                        className={`m-1 border-gray-400 px-2 py-2
                                            bg-[#B6C4B6]
                                            border-2 hover:border-green-900
                                            rounded-lg flex flex-col flex-nowrap
                                            items-center justify-center
                                            gap-2 relative after:absolute after:h-full
                                            hover:bg-[#F7E1AE] z-20 shadow-lg
                                            after:w-full after:inset-0 after:rounded-lg
                                            transition-all duration-300 hover:transition-all
                                            hover:duration-300 after:transition-all
                                            after:duration-500 after:hover:transition-all
                                            after:hover:duration-500 overflow-hidden
                                            after:-translate-y-full
                                            after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all
                                            md:transition
                                            md:ease-in-out
                                            md:delay-10
                                            md:hover:scale-110

                                            `}
                                    // onMouseEnter={()=>setShowDetailCard(true)}
                                    // onMouseLeave={()=>setShowDetailCard(false)}
                                    >

                                        <img
                                            // className='rounded-lg z-30 bg-opacity-0 opacity-100 aspect-square bg-white mix-blend-multiply w-2/3 '
                                            className='z-30
                                                aspect-square
                                                w-40
                                                p-2 rounded-3xl
                                                transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto
                                                card1img
                                                '
                                            src={plant.image}
                                            alt={`${plant.name} (${plant.detail})`} />

                                        <div className='detail h-auto w-auto pb-1'>
                                            <p
                                                className="card_name w-auto h-12 flex items-center lg:text-md text-sm text-center font-semibold text-navbar-green tracking-wider group-hover:text-gray-700"
                                            >
                                                {plant.name}
                                            </p>
                                            {/* {showDetailCard &&
                                            <p className="card_detail hidden w-auto font-semibold text-gray-600 text-xs text-center mb-1">
                                                {plant.detail}
                                            </p>
                                            } */}
                                        </div>

                                        <div className='flex justify-center items-center z-40'>
                                            {
                                                plant.in_list === "false" &&
                                                <button className='border bg-[#304D30] rounded-md
                                                        p-1 pl-2 pr-2 z-40
                                                        hover:border hover:border-green-950 hover:text-green-950
                                                        hover:font-semibold hover:bg-[#EEF0E5] lg:text-sm text-xs
                                                        text-white '
                                                    onClick={() => { handlemyListAdd(plant.id) }}>
                                                    Add to my List
                                                </button>
                                            }
                                            {
                                                plant.in_list === "true" &&
                                                <button className='border bg-[#76453B] rounded-md
                                                        pl-1 pr-1 z-40
                                                        p-1 lg:text-sm text-xs
                                                        text-white italic w-auto'
                                                    disabled={true}>
                                                    Added to List
                                                </button>
                                            }
                                            {
                                                plant.in_list === "true" &&
                                                <button className='pl-1 z-40'
                                                    onClick={() => { handlemyListDelete(plant.id) }}
                                                    disabled={plant.in_list === "true" ? false : true}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                        className="rounded-md w-auto h-6 hover:bg-red-300">
                                                        <path fill='none' strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </button>
                                            }
                                            {
                                                plant.in_list === "na" &&
                                                <Link to='/contact-us' target="_blank" rel="noopener noreferrer">
                                                    <button className='border bg-[#618264] rounded-md p-1 pl-2 pr-2 mt-2
                                                        hover:border hover:border-green-950 hover:text-green-950
                                                        hover:font-semibold hover:bg-[#EEF0E5] lg:text-sm text-xs
                                                        text-white '>
                                                        Contact Us
                                                    </button>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    }

                    {/* List view */}
                    {
                        (renderData.length !== 0 && cardView === 'list') &&
                        <div id="list-card"
                            className="p-4 pt-2 lg:w-4/5 flex justify-center items-center">
                            <table className='table-auto p-2
                                w-full'>
                                <thead>
                                    <tr className='p-2'>
                                        <th></th>
                                        <th className='p-2 pl-0
                                            text-left font-Loto
                                            lg:text-2xl text-lg border-b'>
                                            <p className='flex'>Product Name
                                                {/* <div id='sorter' className='sorter flex justify-center pl-2 items-center'>
                                                    <button className='' onClick={''}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                        className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                                    </svg>
                                                    </button>
                                                    <button className='' onClick={''}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                        className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                                    </svg>
                                                    </button>
                                                </div> */}
                                            </p>

                                        </th>
                                        <th className='p-2 pl-0
                                            text-left font-Loto
                                            lg:text-2xl text-lg border-b'>
                                            <p className='flex'>Category
                                                {/* <div id='sorter' className='sorter flex justify-center pl-2 items-center'>
                                                    <button className='' onClick={''}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                        className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                                    </svg>
                                                    </button>
                                                    <button className='' onClick={''}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                        className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                                    </svg>
                                                    </button>
                                                </div> */}
                                            </p>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderData.map((plant, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='pl-0 aspect-square p-2 w-7 h-7 lg:w-14 lg:h-14 '>
                                                    <img className='w-7 h-7 lg:w-14 lg:h-14 lg:p-1 aspect-square rounded-full'
                                                        src={plant.image}
                                                        alt={plant.name}
                                                    />
                                                </td>
                                                <td className='capitalize
                                                    p-2 pl-4 lg:text-md border-b z-40'>
                                                    {plant.name.toLowerCase()}
                                                    <div className='float-right'>
                                                        <div className='items-center'>
                                                            {
                                                                plant.in_list === "true" &&
                                                                <button className=''
                                                                    disabled={plant.in_list === "true" ? false : true}
                                                                    onClick={() => { handlemyListDelete(plant.id) }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                                        className="border bg-slate-100 rounded-md w-auto h-6 lg:hover:bg-red-300">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                                    </svg>
                                                                </button>
                                                            }{plant.in_list === "false" &&
                                                                <button className='border bg-[#618264] rounded-full lg:text-sm text-xs
                                                                        text-white lg:hover:border lg:hover:border-green-950 lg:hover:text-green-950
                                                                        lg:hover:font-semibold lg:hover:bg-white'
                                                                    onClick={() => { handlemyListAdd(plant.id) }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                    </svg>
                                                                </button>
                                                            }
                                                            {
                                                                plant.in_list === "na" &&
                                                                <a href="tel:+919872020820">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                                    </svg>
                                                                </a>
                                                            }

                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='p-2 italic text-gray-400 border-b'>plant</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>


            {/* my-list popup */}
            {(showList && counter !== 0) &&
                <MyList counter={counter}
                    setListAlert={setListAlert}
                    show={setShowList}
                    handlemyListDelete={handlemyListDelete}
                    reset={handleResetList} />
            }
            {/* alert if list is empty */}
            {(!showList && counter === 0 && listAlert) &&
                <div className="list-empty-alert z-50"
                    style={{ position: 'fixed', top: '85%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div className="text-center border border-none w-auto h-auto  rounded-md pl-3 pb-2 pt-1 pr-3  bg-slate-700 bg-opacity-70 text-white">
                        Your List is Emtpy! <br /> Add some products to list.
                    </div>
                </div>
            }
            {/* Scroll to top button */}
            {renderData.length !== 0 && scrollTop && <button onClick={handleScrollToTop}
                        className="fixed mr-5 mb-20 opacity-80 bg-green-800
                                z-40 transition ease-in duration-1000 delay-700
                                bottom-0 right-0 hover:ease-in-out
                                lg:h-16 lg:w-16 h-12 w-12
                                flex justify-center items-center
                                rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white"
                            className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                        </svg>
                    </button>}
        </div>


    </>);

}

export default Products