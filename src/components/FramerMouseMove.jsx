// src/components/FramerMouseMove.jsx
import { motion, useMotionValue, useSpring } from "framer-motion";
// import { AnimatePresence, motion } from "framer-motion/dom";
import { useEffect } from "react";

const FramerMouseMove = () => {
    // raw mouse positions
    const x = useMotionValue(-9999); // start offscreen
    const y = useMotionValue(-9999);

    // springs for smooth motion
    const springX = useSpring(x, { stiffness: 200, damping: 20 });
    const springY = useSpring(y, { stiffness: 200, damping: 20 });

    // update motion values on mouse move
    const handleMouseMove = (e) => {
        x.set(e.clientX);
        y.set(e.clientY);
    };

    // optional: attach listener to window for full-page tracking (useful if your content captures pointer)
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        // full-screen wrapper must be pointer-events-none so cursor doesn't block interactions
        <div className="hidden lg:block fixed inset-0 z-[9999] pointer-events-none">
            {/* motion div is positioned via left/top (not transform x/y) */}
            <motion.div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: springX, top: springY }}
            >
                {/* outer circle + inner dot (inner is centered via flex) */}
                <div className="w-8 h-8 rounded-full bg-[#046a58] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#122f2a]" />
                </div>
            </motion.div>
        </div>
    );
};

export default FramerMouseMove;
