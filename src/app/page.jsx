import dynamic from 'next/dynamic'

import Hero from './components/Hero';
const About = dynamic(() => import('./components/About'))
const Testimonials = dynamic(() => import('./components/Testimonials'))

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Testimonials />
        </main>
    );
}
