"use client"
import Heading from './ui/Heading';
import TextMotion from "./ui/TextMotion";
import Link from 'next/link'


export default function TeddyBuddy() {
    return (
        <>
            <div className="teddy top-[114.7rem] absolute w-screen h-[40rem]">
                <TextMotion className="flex justify-center items-center">
                    <Heading className="absolute top-[5rem] sm:top-[6rem] md:top-[7rem] mi:text-5xl text-6xl sm:text-7xl md:text-8xl pb-5">TeddyBuddy</Heading>
                    <p className="p-about font-normal mi:text-xs sm:text-sm md:text-base text-justify text-neutral-300 mx-auto w-80% 
                    absolute top-[10rem] sm:top-[11rem] md:top-[15rem]">
                        NuxeCorps Pvt Ltd introduces &apos;TeddyBuddy&apos;, an innovative soft toy designed to be more than just a comforting presence for children.
                        TeddyBuddy is an interactive companion that can listen to a child&apos;s voice and respond with comforting and relevant answers.
                        This smart teddy bear serves as a friend and emotional support system, helping young patients navigate their feelings and anxieties, especially during the challenging times surrounding major surgeries.
                        By providing a sense of companionship and emotional security, TeddyBuddy aims to ease the mental burden on young patients, contributing to their overall well-being and recovery.
                        <br />
                        <span className="flex flex-row justify-center mt-4">
                            <Link href="/demo" className="text-center flex items-center justify-center mr-4">
                                <span className="demo">Demo</span>
                            </Link>
                            <Link href="/contact" className="text-center flex items-center justify-center">
                                <span className="contact">Contact</span>
                            </Link>
                        </span>
                    </p>
                </TextMotion>
            </div>
        </>
    )
}

