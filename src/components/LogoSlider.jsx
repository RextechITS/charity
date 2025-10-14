import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    // "/logos/logo6.png",
];

const LogoSlider = () => {
    return (
        <section className="bg-[rgb(237,238,239)] py-14">
            <div className="w-full lg:w-9/12 mx-auto">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="flex items-center"
                >
                    {logos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center">
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="h-24 lg:h-28 w-auto object-cover hover:opacity-100 transition duration-300"
                                />

                                {/* <img
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                className="h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition duration-500"
                            /> */}

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default LogoSlider;
