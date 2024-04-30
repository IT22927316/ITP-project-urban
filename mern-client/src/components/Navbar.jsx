import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaXmark } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import { useCart } from '../inventoryshop/CartContext';
import { BiCart } from "react-icons/bi";

const Navbar = () => {
    const { state } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

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
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);

    const cartIconSize = "w-7 h-7";

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
            <nav className='py-4 lg:px-24 px-4 bg-green-700'>
                <div className='flex justify-between item-center text-base gap-8'>
                    <Link to="/" className='text-2xl font-bold text-white flex items-center gap-2'>UrbanHarvestHub</Link>

                    <ul className='md:flex space-x-12 hidden font-semibold'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <Link to="/userprofile">
                            <button><FaUser className='w-5 hover:text-blue-700' /></button>
                        </Link>
                        <Link to="/mycart">
                            <div className="relative">
                                <BiCart className={`text-white hover:text-blue-700 ${cartIconSize}`} />
                                {cartItemCount > 0 && (
                                    <div className="absolute -top-2 -right-2 bg-red-500 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">{cartItemCount}</div>
                                )}
                            </div>
                        </Link>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-5 w-5 text-white' /> : <FaUser className='h-5 w-5 text-white' />}
                        </button>
                    </div>
                </div>

                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
