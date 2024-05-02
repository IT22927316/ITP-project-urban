import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaXmark } from "react-icons/fa6"; // Make sure to import the icons you are using
import navpic from "../assets/navbarimage1.jpeg";
import navpic2 from "../assets/navpic.webp";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // Use removeEventListener here
        }
    }, [])

    //navigation items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "KnowledgeHub", path: "/articleshub" },
        { link: "Events", path: "/events" },
        { link: "Community", path: "/communitymain" },
        { link: "Shop", path: "/shop" },
        { link: "Dashboard", path: "/admin/dashboard" },
    ]

    return (
        <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50 ${isSticky ? 'bg-teal-300' : ''}`}>
            <nav style={{ backgroundImage: `url(${navpic})` }} className='py-4 lg:px-24 px-4'>
                <div className='flex justify-between item-center text-base gap-8'>
                    {/* insert logo */}
                    <Link to="/" className='text-2xl font-bold text-white flex items-center gap-2'>UrbanHarvestHub</Link>

                    {/* nav items for large device */}
                    <ul className='md:flex space-x-12 hidden font-semibold'>
                        {
                            navItems.map(({ link, path }) => (
                                <li key={path}>
                                    <Link to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    {/* button for lg devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <Link to="/userprofile">
                            <button><FaUser className='w-5 hover:text-blue-700' /></button>
                        </Link>
                    </div>

                    {/* menu btn for the mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-5 w-5 text-white' /> : <FaUser className='h-5 w-5 text-white' />}
                        </button>
                    </div>
                </div>

                {/* nav items for sm devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
