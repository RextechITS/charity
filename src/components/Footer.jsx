import React from "react";
import { Link } from "react-router-dom";
import logoLite from "/logo-light.png";
import HeartImg from "../assets/sprade-light.png";
const Footer = () => {
    return (
        <>
            <footer className="relative z-10 bg-[#122f2a] pb-10 pt-20 lg:pb-20 lg:pt-[120px] ">

                {/* sections */}
                <div className="w-[95vw] lg:w-[87%] mx-auto space-y-20 lg:space-y-36">

                    {/* subscribe to our newsletter */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center place-items-center">
                        <div data-aos="fade-up" className="w-full px-4 space-y-4 text-center lg:text-left">
                            <h4 className="text-2xl md:text-4xl font-bold text-white capitalize" > Subscribe to our newsletter</h4>
                            <p className="text-[#949d9c] capitalize" >regular inspections and feedback mechanisms</p>
                        </div>

                        <div data-aos="fade-up" className="w-full px-4 flex gap-4 justify-center items-center ">
                            <input id="subscribeEmail" type="email" placeholder="Enter your email" className="w-full md:w-2/4 p-5 rounded-full text-black  bg-white focus:outline-none" required />
                            <button className="bg-[#ffc107] hover:bg-[#198754] flex justify-center items-center transition ease-in-out duration-500 py-5 px-8 rounded-3xl text-[#122f2a] hover:text-white " >
                                <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="20px" height="20px" viewBox="0 0 32 32" xml:space="preserve" fill="currentColor" stroke="currentColor">
                                    <path class="sharpcorners_een" d="M23.35,8.463L11.085,19.881L9,27.85v-9.079L23.35,8.463z M27.857,3.993L1.911,12.642l6.677,5.193
	                                L27.857,3.993z M9.763,28.884l4.404-5.431l-2.479-1.925L9.763,28.884z M11.979,20.416l-0.017,0.066L22.57,28.71l6.636-24.335
	                                L11.979,20.416z"/>
                                </svg>
                            </button>
                        </div>

                    </div>

                    {/* divider */}
                    <div className="divider w-full h-[1px] bg-[#667471]"></div>

                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-20 place-content-center">

                        {/* logo, follow us */}
                        <div data-aos="fade-up" className="w-full px-4">
                            <div className="mb-10 w-full space-y-6">
                                <Link to="/">
                                    <img
                                        src={logoLite}
                                        alt="logo"
                                        className="w-1/2 h-full object-contain "
                                    />

                                </Link>
                                <p className="mb-10 text-base text-[#949d9c]">
                                    Our secure online donation platform allows you to make contributions quickly and safely. Choose from various.
                                </p>
                                <p className="flex items-center text-sm font-medium text-[#949d9c] hover:text-[#ffc107]">
                                    <span className="mr-3 flex gap-2 items-center">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_941_15626)">
                                                <path
                                                    d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                                                    fill="#ffc107"
                                                />
                                                <path
                                                    d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                                                    fill="#ffc107"
                                                />
                                                <path
                                                    d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                                                    fill="#ffc107"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_941_15626">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg> <span className="text-white">|</span>

                                        <svg fill="#ffc107" width="20px" height="20px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-whatsapp">
                                            <path d='M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z' /><path d='M14.842 12.045l-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z' />
                                        </svg>
                                    </span>
                                    <a href="https://wa.me/2349055549416" rel="noopener noreferrer" className="">+012 (345) 678 99</a>
                                </p>

                                <p className="flex items-center gap-2 font-medium text-[#949d9c] hover:text-[#ffc107]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#ffc107"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>  <a href="mailto:rextechitsolution@gmail.com" className=""> rextechitsolution@gmail.com </a>
                                </p>

                                <p className="flex items-center gap-2 font-medium text-[#949d9c] hover:text-[#ffc107]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#ffc107"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>  <a href="mailto:rextechitsolution@gmail.com" className=""> rextechitsolution@gmail.com </a>
                                </p>

                                {/* follow us */}
                                <div className="w-full ">
                                    <div className="mb-10 w-full">
                                        <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                                            Follow Us On
                                        </h4>
                                        <div className="flex items-center">
                                            <a
                                                href="#"
                                                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
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
                                                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
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
                                                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
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
                                                className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
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

                        {/* links */}
                        <LinkGroup header="Quick Links" className="w-full">
                            <NavLink to="About" label="About Us" />
                            <NavLink link="News" label="Our News" />
                            <NavLink link="/#" label="Our Campaigns" />
                            <NavLink link="/#" label="FAQ" />
                            <NavLink link="Contact" label="Get A Quote" />
                        </LinkGroup>

                        <LinkGroup header="Our Services" className="w-full">
                            <NavLink link="/#" label="Educational Support" />
                            <NavLink link="/#" label="Health Support" />
                            <NavLink link="/#" label="Food & Water Support" />
                            <NavLink link="/#" label="Our Campaigns" />
                        </LinkGroup>

                        <LinkGroup header="Extra" className="w-full">
                            <NavLink link="/#" label="Premium Support" />
                            <NavLink link="/#" label="Our Services" />
                            <NavLink link="/#" label="Know Our Team" />
                            <NavLink link="/#" label="Download App" />
                        </LinkGroup>


                    </div>
                </div>

                {/* absolutes svgs */}
                <div>
                    <span className="absolute bottom-0 left-0 z-[-1] max-sm:left-60 max-sm:bottom-60">
                        <img src={HeartImg} alt="heart" className="w-full object-contain animate-pulse" />
                    </span>

                    <span className="absolute right-10 top-10 lg:top-20 z-[-1] animate-pulse">
                        <svg
                            width={75}
                            height={75}
                            viewBox="0 0 75 75"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                                fill="url(#paint0_linear_1179_4)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_4"
                                    x1="-1.63917e-06"
                                    y1="37.5"
                                    x2={75}
                                    y2="37.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#13C296" stopOpacity="0.31" />
                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>

                {/* divider */}
                <div className="divider w-full h-[1px] bg-[#667471] my-10"></div>

                <p className="text-center text-white font-semibold">&copy; {new Date().getFullYear()}. RexTech IT Solutions. All rights reserved....</p>
            </footer>
        </>
    );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
    return (
        <>
            <div className="w-full px-4">
                <div data-aos="fade-up" className="mb-10 w-full">
                    <h4 className="w-1/2 mb-9 text-xl font-bold text-white border-b  border-b-5 border-b-[#ffc107] pb-3">
                        {header}
                    </h4>
                    <ul className="space-y-3 text-[#949d9c] hover:text-[#ffc107]">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }) => {
    return (
        <li>
            <a
                href={link}
                className="inline-block text-base leading-loose text-[#949d9c] hover:text-[#ffc107]"
            >
                {label}
            </a>
        </li>
    );
};
