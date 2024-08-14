"use client"
import { AuroraBackground } from "./ui/Aurora";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <>
            <section>
                <AuroraBackground className="top-0 absolute h-[40rem] w-screen flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4"
                    >
                        <div className="text-4xl md:text-7xl font-bold dark:text-white text-center">
                        NuxeCorps
                        </div>
                        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        A Friend in Every Hug, Comfort in Every Word.
                        </div>
                        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                        About Us
                        </button>
                    </motion.div>
                </AuroraBackground>
                <div className="top-[40rem] absolute flex w-screen justify-center items-center h-[40rem]">
                    <div className="text-3xl sm:text-7xl from-slate-50 to-slate-800">Skibidi</div>
                </div>
            </section>
        </>
    )
}