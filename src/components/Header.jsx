import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CurrencyDropdown from './currencyDropdown';
import LanguageDropdown from './languageDropdown';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-[#122f2a] font-semibold transition"
            : "hover:text-[#122f2a] transition hover:underline hover:underline-offset-8 hover:underline-thickness-4 hover:transition";

    return (
        <>
            <header className="w-full text-white flex justify-between items-center z-50">
                {/* Top Header */}
                <div className="hidden w-[90%] mx-auto bg-[#122f2a] lg:flex items-center justify-between rounded-bl-2xl rounded-br-2xl p-4">
                    {/* First Div */}
                    <div className="flex justify-between items-center gap-10">
                        <div className="flex justify-between items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2 9C2 6.23858 4.23858 4 7 4H17C19.7614 4 22 6.23858 22 9V15C22 17.7614 19.7614 20 17 20H7C4.23858 20 2 17.7614 2 15V9Z" fill="#ffc107" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.22 8.38C6.56 7.94 7.19 7.87 7.62 8.22L10.13 10.22C11.22 11.1 12.78 11.1 13.87 10.22L16.37 8.22C16.81 7.87 17.44 7.94 17.78 8.38C18.13 8.81 18.06 9.44 17.62 9.78L15.12 11.78C13.3 13.24 10.7 13.24 8.88 11.78L6.38 9.78C5.94 9.44 5.87 8.81 6.22 8.38Z" fill="#ffc107" />
                            </svg>
                            <a
                                href="mailto:rextechitsolution@gmail.com?subject=Website%20Inquiry"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#ffc107] transition"
                            >
                                rextechitsolution@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg fill="#ffc107" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M21,15v3.93a2,2,0,0,1-2.29,2A18,18,0,0,1,3.14,5.29,2,2,0,0,1,5.13,3H9a1,1,0,0,1,1,.89,10.74,10.74,0,0,0,1,3.78,1,1,0,0,1-.42,1.26l-.86.49a1,1,0,0,0-.33,1.46,14.08,14.08,0,0,0,3.69,3.69,1,1,0,0,0,1.46-.33l.49-.86A1,1,0,0,1,16.33,13a10.74,10.74,0,0,0,3.78,1A1,1,0,0,1,21,15Z" />
                            </svg>
                            <a
                                href="https://wa.me/2349055549416"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#ffc107] transition"
                            >
                                +2349055549416
                            </a>
                        </div>
                    </div>

                    {/* Second Div */}
                    <div className="flex items-center gap-2 ">
                        <p className=''
                        >Are you ready to help them? Let's become a volunteer!</p>
                    </div>

                    {/* Third Div */}
                    <div className="flex items-center gap-4">
                        <CurrencyDropdown />
                        <LanguageDropdown />
                    </div>
                </div>
            </header>

            {/* Main Navigation */}
            <nav className="w-full lg:w-[90%] mx-auto p-5 sticky flex justify-between items-center z-40 bg-white/10 backdrop-blur-lg">
                {/* Logo */}
                <img src="/logo.png" alt="Logo" className="" />

                {/* Desktop Nav */}
                <div className="hidden lg:flex justify-between bg-[#ffc107] py-5 px-10 rounded-full items-center gap-60">

                    <ul className="flex items-center gap-10 text-black font-bold">
                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li className="relative group cursor-pointer">
                            <span className="transition flex items-center">
                                Causes <span className="ml-2 mt-2 transition-transform group-hover:rotate-180">﹀</span>
                            </span>
                            <ul className="absolute p-3 space-y-2 top-12 left-0 bg-white font-medium rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 min-w-[180px]">
                                <li><NavLink to="/causes/orphanage" className={navLinkClass}>Orphanage</NavLink></li>
                                <li><NavLink to="/causes/health-care" className={navLinkClass}>Health Care</NavLink></li>
                                <li><NavLink to="/causes/water" className={navLinkClass}>Pipe-borne Water</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
                        <li><NavLink to="/news" className={navLinkClass}>News</NavLink></li>
                        <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
                    </ul>

                    {/* contact us */}
                    <div className="flex gap-4">
                        <div className="bg-[#00c0ff] p-3 h-[55px] rounded-full">
                            <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12,2 C16.9705627,2 21,5.98572446 21,10.9023647 C21,14.1558559 18.2776716,17.5957933 12.9482526,21.3431516 L12,22 L11.4277959,21.6050955 C5.85042064,17.7558913 3,14.2315185 3,10.9023647 C3,5.98572446 7.02943725,2 12,2 Z M12,3.97830328 C8.13400675,3.97830328 5,7.07831119 5,10.9023647 C5,13.3048538 7.29671943,16.236445 12,19.5818284 C16.7032806,16.236445 19,13.3048538 19,10.9023647 C19,7.07831119 15.8659932,3.97830328 12,3.97830328 Z M12,6 C14.209139,6 16,7.790861 16,10 C16,12.209139 14.209139,14 12,14 C9.790861,14 8,12.209139 8,10 C8,7.790861 9.790861,6 12,6 Z M12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 Z" />
                            </svg>
                        </div>
                        <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-between ">
                            <div>
                                <p className="text-[#00c0ff]">Location</p>
                                <p className="text-white">Nigeria </p>
                            </div>

                            {/*<div>
                                 <p className="text-white">June - October 2025 </p>
                            </div> */}
                        </div>

                    </div>

                </div>


                {/* Mobile Menu Button */}
                <div className="block lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-black transition-transform duration-300"
                        style={{
                            transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
                        }}
                    >
                        <path
                            d="M17.54 8.31C18.9 8.31 20 7.21 20 5.85C20 4.49 18.9 3.39 17.54 3.39C16.18 3.39 15.08 4.49 15.08 5.85C15.08 7.21 16.18 8.31 17.54 8.31Z"
                            stroke="#122f2a"
                            strokeWidth="1.5"
                        />
                        <path
                            // opacity="0.4"
                            d="M6.46 8.31C7.82 8.31 8.92 7.21 8.92 5.85C8.92 4.49 7.82 3.39 6.46 3.39C5.1 3.39 4 4.49 4 5.85C4 7.21 5.1 8.31 6.46 8.31Z"
                            stroke="#ffc107"
                            strokeWidth="1.5"
                        />
                        <path
                            // opacity="0.4"
                            d="M17.54 20.61C18.9 20.61 20 19.51 20 18.15C20 16.79 18.9 15.69 17.54 15.69C16.18 15.69 15.08 16.79 15.08 18.15C15.08 19.51 16.18 20.61 17.54 20.61Z"
                            stroke="#ffc107"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M6.46 20.61C7.82 20.61 8.92 19.51 8.92 18.15C8.92 16.79 7.82 15.69 6.46 15.69C5.1 15.69 4 16.79 4 18.15C4 19.51 5.1 20.61 6.46 20.61Z"
                            stroke="#122f2a"
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white text-gray-800 lg:hidden px-6 py-4 shadow-lg transition-all duration-500">
                        <ul className="flex flex-col gap-3">
                            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>

                            <li>
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleSubMenu("causes")}
                                >
                                    <span className="font-medium">Causes</span>
                                    <span className="text-xl">{openSubMenu === "causes" ? "−" : "+"}</span>
                                </div>
                                {openSubMenu === "causes" && (
                                    <ul className="mt-2 ml-4 flex flex-col gap-2 text-sm text-gray-600">
                                        <li><NavLink to="/causes/orphanage" className={navLinkClass}>Orphanage</NavLink></li>
                                        <li><NavLink to="/causes/health-care" className={navLinkClass}>Health Care</NavLink></li>
                                        <li><NavLink to="/causes/water" className={navLinkClass}>Pipe-borne Water</NavLink></li>
                                    </ul>
                                )}
                            </li>

                            <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
                            <li><NavLink to="/news" className={navLinkClass}>News</NavLink></li>
                            <li><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
