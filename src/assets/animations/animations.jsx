// FadeIn.jsx
import { motion, useAnimation, useInView } from "motion/react";
import { useRef, useEffect } from "react";

export default function FadeIn({ children }) {
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 0.6,
            ease: "easeOut",
            },
        }
        }

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.05 });
    const controls = useAnimation();

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden");
    }, [isInView]);

    return (
        <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="w-full flex justify-center"
        >
        {children}
        </motion.div>
    );
}

