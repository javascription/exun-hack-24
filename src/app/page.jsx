"use client"

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./components/Navbar'))

export default function Home() {
    return (
        <main className="m-0 p-0 w-screen h-screen scroll-smooth overflow-x-hidden bg-secondary">
            <Navbar />
            <div className="text-3xl sm:text-7xl from-slate-50 to-slate-800">Hi</div>
        </main>
    );
}
