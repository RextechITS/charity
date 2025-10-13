import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "/HeroImages/slide1.jpg",
        title: "Giving Help To Those Who Need It.",
        subtitle: "Start Donating Poor People",
        buttons: [
            { label: "Explore More", style: "bg-[#122f2a] text-white hover:bg-[#ffc107] hover:text-black" },
            { label: "Get A Quote", style: "bg-[#ffc107] text-black hover:bg-[#122f2a] hover:text-white" },
        ],
    },
    {
        id: 2,
        image: "/HeroImages/slide2.jpg",
        title: "Make The World A Better Place.",
        subtitle: "Together, We Can Help Others",
        buttons: [
            { label: "Join Us", style: "bg-[#122f2a] text-white hover:bg-[#ffc107] hover:text-black" },
            { label: "Donate Now", style: "bg-[#ffc107] text-black hover:bg-[#122f2a] hover:text-white" },
        ],
    },
    {
        id: 3,
        image: "/HeroImages/slide3.jpg",
        title: "Your Kindness Can Save Lives.",
        subtitle: "Be Part of Something Great",
        buttons: [
            { label: "Learn More", style: "bg-[#122f2a] text-white hover:bg-[#ffc107] hover:text-black" },
            { label: "Contribute", style: "bg-[#ffc107] text-black hover:bg-[#122f2a] hover:text-white" },
        ],
    },
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[80vh] lg:h-[90vh] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${slides[current].image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",

                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    <img src="/HeroImages/banner-two-shape.png" alt="" className="animate-ping duration-1000 absolute left-0 top-40 " />
                    <img src="/HeroImages/sprade-base.png" alt="" className="animate-pulse duration-300 absolute right-80 top-80 max-md:right-10 max-md:top-20 contain" />



                    {/* Text Content */}
                    <div className="relative z-10 flex flex-col gap-4 justify-center h-full text-left px-6 md:px-[10%] text-white max-w-5xl">
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-[#ffc107] mb-3 font-bold italic flex items-center gap-2"
                        >

                            <img src="/HeroImages/donate-icon.svg" alt="" />

                            {slides[current].subtitle}
                        </motion.p>

                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-4xl md:text-6xl font-extrabold leading-[55px] mb-6"
                        >
                            {slides[current].title}
                        </motion.h1>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-4"
                        >
                            {slides[current].buttons.map((btn, index) => (
                                <button
                                    key={index}
                                    className={`w-[220px] px-7 py-5 rounded-full font-semibold ${btn.style} hover:opacity-90 transition duration-500 flex items-center justify-center `}
                                >
                                    {btn.label} &nbsp; ⬈
                                </button>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute bottom-20 md:bottom-80 lg:bottom-40 right-10 flex flex-col gap-4 max-sm:hidden">
                <button
                    onClick={() =>
                        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
                    }
                    className="w-12 h-12 rounded-full bg-[#18473f] flex items-center justify-center text-white p-5 text-2xl hover:bg-[#ffc107] transition"
                >
                    ←
                </button>
                <button
                    onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                    className="w-12 h-12 rounded-full bg-[#ffc107] flex items-center justify-center p-5 text-2xl text-black hover:bg-[#103b32] hover:text-white transition"
                >
                    ➞
                </button>
            </div>
        </section>
    );
};

export default HeroSlider;
