import React from 'react';
import HeroSlider from '../components/HeroSlider';
import LogoSlider from "../components/LogoSlider";
import DonateImg from "../assets/donate-icon-2.svg"
import BgOne from "../assets/bg-one.png";
import BgTwo from "../assets/bg-two.png";
import BgThree from "../assets/bg-three.png"



export default function Home() {
    return (
        <>
            <div className="mt-10 w-full">
                <HeroSlider />
                <LogoSlider />

                {/* start donating */}
                <div className="w-[90%] lg:w-[80%] mx-auto py-20 flex flex-col justify-center items-center gap-3">
                    <div className=" flex  items-center gap-4 text-[#122f2a] text-lg italic">

                        <img src={DonateImg} alt="" className='object-contain' />

                        Start donating poor people

                    </div>

                    <h2 className=" text-3xl lg:text-6xl capitalize font-bold ">Charity with difference</h2>

                    <p className='text-lg text-center w-full lg:w-1/2' >Join our monthly giving program to provide consistent support to our initiatives. Regular contributions, no matter the size, help us plan and sustain long-term projects.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8 p-5">
                        {/* Card 1 */}
                        <div data-aos="fade-up"
                            className="relative flex flex-col items-center justify-center text-center rounded-xl overflow-hidden "
                            style={{
                                backgroundImage: `url(${BgOne})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                minHeight: "400px",
                            }}
                        >
                            <div className="absolute inset-0 "></div>
                            <div className="relative z-10 p-6 flex flex-col items-center justify-center gap-4 ">
                                <div className="bg-[#ffc107] rounded-full p-5">
                                    <svg fill="#fff" width="35" height="35" viewBox="0 0 1024 1024">
                                        <path d="M990.848 696.304V438.16l16.096-8.496c10.464-5.44 17.055-16.225 17.183-28.032.128-11.777-6.256-22.689-16.592-28.368l-481.44-257.6c-9.631-5.28-21.28-5.249-30.976.095l-478.8 257.92C6.126 379.36-.177 390.143-.113 401.84s6.496 22.4 16.817 27.97l210.384 111.983c-2.64 4.656-4.272 9.968-4.272 15.696v270.784c0 9.12 3.905 17.84 10.72 23.904 6.945 6.16 73.441 60.096 276.753 60.096 202.592 0 270.88-50.976 278-56.784 7.44-6.064 11.744-15.152 11.744-24.784V552.976c0-4.496-.944-8.768-2.608-12.64l129.424-68.369V696.48c-18.976 11.104-31.84 31.472-31.84 55.024 0 35.344 28.656 64 64 64s64-28.656 64-64c0-23.697-13.04-44.145-32.16-55.2zM736.031 812.368c-25.152 12.096-91.712 35.904-225.744 35.904-134.88 0-199.936-25.344-223.472-37.536V573.6l207.808 110.624a31.896 31.896 0 0 0 15.184 3.84 31.675 31.675 0 0 0 14.816-3.664l211.408-111.664v239.632zM510.063 619.81l-411.6-218.561 412.32-220.976 413.6 220.336z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wide">Child Education</h3>
                                <p className="text-sm leading-relaxed">
                                    Help children access quality education and a brighter future.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div data-aos="fade-down"
                            className="relative flex flex-col items-center justify-center text-center rounded-xl overflow-hidden "
                            style={{
                                backgroundImage: `url(${BgTwo})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                minHeight: "400px",
                            }}
                        >
                            <div className="absolute inset-0 "></div>
                            <div className="relative z-10 p-6 flex flex-col items-center justify-center gap-4 ">
                                <div className="bg-[#122a2f] rounded-full p-5">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35px" height="35px"
                                        viewBox="0 0 234 234" fill="#fff">
                                        <path d="M171,56v-0.5C171,25.448,146.552,1,116.5,1S62,25.448,62,55.5V56H0v77h13v84h14v16h61v-16h58v16h61v-16h14v-84h13V56H171z
	 M92,55.5C92,41.99,102.99,31,116.5,31S141,41.99,141,55.5V56H92V55.5z M153,152h-21v21h-30v-21H81v-30h21v-21h30v21h21V152z"/>
                                    </svg>

                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wide">Medical Care</h3>
                                <p className="text-sm leading-relaxed ">
                                    Help children access quality education and a brighter future.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div data-aos="fade-up"
                            className="relative flex flex-col items-center justify-center text-center rounded-xl overflow-hidden "
                            style={{
                                backgroundImage: `url(${BgThree})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                minHeight: "400px",
                            }}
                        >
                            <div className="absolute inset-0 "></div>
                            <div className="relative z-10 p-6 flex flex-col items-center justify-center gap-4 ">
                                <div className=" bg-[#c44614] rounded-full p-5">

                                    <svg width="35px" height="35px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wide">Healthy food</h3>
                                <p className="text-sm leading-relaxed">
                                    Help children access quality education and a brighter future.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div data-aos="fade-down"
                            className="relative flex flex-col items-center justify-center text-center rounded-xl overflow-hidden "
                            style={{
                                backgroundImage: `url(${BgOne})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                minHeight: "400px",
                            }}
                        >
                            <div className="absolute inset-0 "></div>
                            <div className="relative z-10 p-6 flex flex-col items-center justify-center gap-4 ">
                                <div className="bg-[#ffc107] rounded-full p-5">
                                    <svg fill="#fff" width="35" height="35" viewBox="0 0 1024 1024">
                                        <path d="M990.848 696.304V438.16l16.096-8.496c10.464-5.44 17.055-16.225 17.183-28.032.128-11.777-6.256-22.689-16.592-28.368l-481.44-257.6c-9.631-5.28-21.28-5.249-30.976.095l-478.8 257.92C6.126 379.36-.177 390.143-.113 401.84s6.496 22.4 16.817 27.97l210.384 111.983c-2.64 4.656-4.272 9.968-4.272 15.696v270.784c0 9.12 3.905 17.84 10.72 23.904 6.945 6.16 73.441 60.096 276.753 60.096 202.592 0 270.88-50.976 278-56.784 7.44-6.064 11.744-15.152 11.744-24.784V552.976c0-4.496-.944-8.768-2.608-12.64l129.424-68.369V696.48c-18.976 11.104-31.84 31.472-31.84 55.024 0 35.344 28.656 64 64 64s64-28.656 64-64c0-23.697-13.04-44.145-32.16-55.2zM736.031 812.368c-25.152 12.096-91.712 35.904-225.744 35.904-134.88 0-199.936-25.344-223.472-37.536V573.6l207.808 110.624a31.896 31.896 0 0 0 15.184 3.84 31.675 31.675 0 0 0 14.816-3.664l211.408-111.664v239.632zM510.063 619.81l-411.6-218.561 412.32-220.976 413.6 220.336z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wide">Child Education</h3>
                                <p className="text-sm leading-relaxed ">
                                    Help children access quality education and a brighter future.
                                </p>
                            </div>
                        </div>



                    </div>


                </div>
            </div >

        </>
    )
}