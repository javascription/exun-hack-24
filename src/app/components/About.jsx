import Heading from "./ui/Heading"

export default function About() {
    return (
        <>
            <div className="aboutContainer top-[40rem] absolute flex w-screen justify-center items-center h-[40rem]">
                <Heading className="absolute top-[7rem] text-8xl">About</Heading>
                <p className="p-about font-normal text-lg text-justify text-neutral-300 mx-auto w-80%">
                    NuxeCorps Private Limited is a multinational company dedicated to pioneering innovative solutions that enhance the quality of life for individuals worldwide.
                    With a strong focus on leveraging advanced technology for societal benefit, NuxeCorps has a track record of developing products that address real-world challenges.
                    Our mission is to create a better, more compassionate world through technology-driven solutions that cater to the needs of the most vulnerable among us, particularly children undergoing medical treatment.
                </p>
            </div>
        </>
    )
}