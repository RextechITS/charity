// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CurrencyDropdown from './currencyDropdown';
import LanguageDropdown from './languageDropdown';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Header() {

    // onscroll header
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // menu
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "lg:text-[#122f2a] font-bold lg:underline underline-offset-[10px] transition text-[#ffc107]"
            : "hover:text-[#ffc107] lg:hover:text-[#122f2a] transition duration-500 hover:underline hover:underline-offset-8 hover:underline-thickness-8 hover:transition hover:duration-500";

    return (
        <>
            {/* Top Header */}
            <header className="w-full text-white flex justify-between items-center z-50">
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
            <nav
                className={`w-full p-5 lg:px-[8%]  fixed left-0 flex justify-between items-center gap-5 z-40 bg-white backdrop-blur-lg transition-all duration-500 ${scrolled ? "top-0 shadow-md" : "lg:top-20 top-0"
                    }`}
            >
                {/* Logo */}
                <Link to="/"><img src="/logo.png" alt="Logo" className="" /></Link>


                {/* Desktop Nav */}
                <div className="hidden lg:flex justify-between bg-[#ffc107] py-3 px-14 rounded-full items-center gap-60">

                    <ul className="flex items-center gap-10 text-black font-medium text-lg">
                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li className="relative group cursor-pointer">
                            <span className="transition flex items-center">
                                Causes <span className="ml-2 mt-2 transition-transform duration-500 group-hover:rotate-180">﹀</span>
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
                    <div className="flex gap-4 items-center">

                        <svg width="40px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>support</title>
                            <rect width="24" height="24" fill="none" />
                            <path d="M12,2a8,8,0,0,0-8,8v1.9A2.92,2.92,0,0,0,3,14a2.88,2.88,0,0,0,1.94,2.61C6.24,19.72,8.85,22,12,22h3V20H12c-2.26,0-4.31-1.7-5.34-4.39l-.21-.55L5.86,15A1,1,0,0,1,5,14a1,1,0,0,1,.5-.86l.5-.29V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v5H13.91a1.5,1.5,0,1,0-1.52,2H20a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V10A8,8,0,0,0,12,2Z" />
                        </svg>


                        <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-between">
                            <div>
                                <p className="">Call / Text Us Now</p>
                                <a href="https://wa.me/+2349055549416" target="_blank" rel="noopener noreferrer" className="font-bold">+2349055549416 </a>
                            </div>

                        </div>

                    </div>

                </div>

                {/* search and donate button */}
                <div className="hidden md:flex items-center gap-4">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black hover:text-[#122f2a] transition cursor-pointer">
                        <path d="M21 21L15.8 15.8M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <button className="w-60 bg-[#ffc107] text-black hover:text-[#ffc107]  px-10 py-5 rounded-full font-semibold hover:bg-[#0e2521] transition duration-500 flex -items-center justify-center gap-4">
                        Donate Now
                        <svg fill="currentColor" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                {/* <div className="block lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
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
                </div> */}

                {/* Mobile Menu Button */}
                <div
                    className="block lg:hidden cursor-pointer z-50 relative"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {!menuOpen ? (
                        // Menu (open icon)
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
                                d="M6.46 8.31C7.82 8.31 8.92 7.21 8.92 5.85C8.92 4.49 7.82 3.39 6.46 3.39C5.1 3.39 4 4.49 4 5.85C4 7.21 5.1 8.31 6.46 8.31Z"
                                stroke="#ffc107"
                                strokeWidth="1.5"
                            />
                            <path
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
                    ) : (
                        // Close (X icon)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="transition-transform duration-300"
                        >
                            <path
                                d="M6 6L18 18M6 18L18 6"
                                stroke="#b8860b"  // dark gold
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </div>


                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-24 left-0 w-full h-[100vh] bg-white text-gray-800 lg:hidden px-6 py-10 shadow-lg transition-all duration-500 space-y-10">
                        <ul className="flex flex-col gap-4 text-xl">
                            <li style={{ paddingTop: "20px", paddingBottom: "20px", borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc" }}><NavLink to="/" className={navLinkClass} >Home</NavLink></li>

                            <li style={{ paddingBottom: "20px", borderBottom: "1px solid #ccc" }}>
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleSubMenu("causes")}
                                >
                                    <span className="font-medium">Causes</span>
                                    <span className="text-xl font-medium">{openSubMenu === "causes" ? "−" : "+"}</span>
                                </div>
                                {openSubMenu === "causes" && (
                                    <ul className="mt-2 ml-4 flex flex-col gap-2 text-sm text-gray-600">
                                        <li><NavLink to="/causes/orphanage" className={navLinkClass}>Orphanage</NavLink></li>
                                        <li><NavLink to="/causes/health-care" className={navLinkClass}>Health Care</NavLink></li>
                                        <li><NavLink to="/causes/water" className={navLinkClass}>Pipe-borne Water</NavLink></li>
                                    </ul>
                                )}
                            </li>

                            <li style={{ paddingBottom: "20px", borderBottom: "1px solid #ccc" }}><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
                            <li style={{ paddingBottom: "20px", borderBottom: "1px solid #ccc" }}><NavLink to="/news" className={navLinkClass}>News</NavLink></li>
                            <li style={{ paddingBottom: "20px", borderBottom: "1px solid #ccc" }}><NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink></li>
                        </ul>

                        <div className="flex flex-col justify-center items-center gap-10">
                            <button className="w-60 bg-[#ffc107] text-black hover:text-[#ffc107]  px-10 py-4 rounded-full font-semibold hover:bg-[#0e2521] transition duration-500 flex -items-center justify-center gap-4">
                                Donate Now
                                <svg fill="currentColor" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.293,20.707a1,1,0,0,1,0-1.414L17.586,5H12a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-2,0V6.414L4.707,20.707a1,1,0,0,1-1.414,0Z" />
                                </svg>
                            </button>

                            {/* follow us */}
                            <div className=" ">
                                <div className="mb-10 w-full">
                                    {/* <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                                            Follow Us On
                                        </h4> */}
                                    <div className="flex items-center">
                                        <a
                                            href="#"
                                            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-white bg-[#122f2a] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                        >
                                            <svg
                                                width="8"
                                                height="16"
                                                viewBox="0 0 8 16"
                                                className="fill-current"
                                            >
                                                <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-white bg-[#122f2a]  hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                        >
                                            <svg
                                                width="16"
                                                height="12"
                                                viewBox="0 0 16 12"
                                                className="fill-current"
                                            >
                                                <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-white bg-[#122f2a]  hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                        >
                                            <svg
                                                width="16"
                                                height="12"
                                                viewBox="0 0 16 12"
                                                className="fill-current"
                                            >
                                                <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-stroke  hover:text-white text-white bg-[#122f2a]  sm:mr-4 lg:mr-3 xl:mr-4"
                                        >
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                className="fill-current"
                                            >
                                                <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                )}

            </nav>
        </>
    );
}
