import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    const navbarRef = useRef(null);
    const wrapperRef = useRef(null);
    const barsIconRef = useRef(null);
    const closeIconRef = useRef(null);

    function openWrapper() {
        wrapperRef.current.style.display = 'flex';
        closeIconRef.current.style.display = 'flex';
        barsIconRef.current.style.display = 'none';
        navbarRef.current.style.zIndex = '3';
    }

    function closeWrapper() {
        wrapperRef.current.style.display = 'none';
        closeIconRef.current.style.display = 'none';
        barsIconRef.current.style.display = 'flex';
    }

    function resizeWindow() {
        wrapperRef.current.style.display = 'none';
        closeIconRef.current.style.display = 'none';
        barsIconRef.current.style.display = 'flex';
        const windowWidth = window.innerWidth;
        if (windowWidth >= 992) {
            barsIconRef.current.style.display = 'none';
        } else {
            barsIconRef.current.style.display = 'flex';
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resizeWindow);
    }, []);

    return (
    <>
        <section>
            <header className="relative pt-[2rem] pr-0 pb-[2rem] pl-0">
                <div className="fixed flex flex-wrap justify-between w-[100%]
                                items-center z-[100]" ref={navbarRef} >
                    <div className="text-2xl ml-[3rem]"><a href="#" className="mo:text-[2.5rem]">NuxeCorps</a></div>
                    <ul className="relative flex gap-12 mo:hidden">
                        <li><a href="/" className="relative">About</a></li>
                        <li><a href="/demo" className="relative">Demo</a></li>
                        <li><a href="/merchandise" className="relative">Merchandise</a></li>
                        <li><a href="/subscription" className="relative">Subscription</a></li>
                        <li><a href="/contact" className="relative">Contact</a></li>
                        <li><a href="Login" className="relative">Login</a></li>
                    </ul>
                    <FontAwesomeIcon icon={faBars} id="bars" onClick={() => openWrapper()} ref={barsIconRef} 
                        className="color-primary cursor-pointer mr-[4rem] hidden mo:block mo:text-5xl" />

                    
                    <FontAwesomeIcon icon={faXmark} onClick={() => closeWrapper()} ref={closeIconRef} 
                        className="hidden text-primary text-[3.3rem] border-4 rounded-2xl mr-12" />
                    <div className="text-primary cursor-pointer text-[1.6rem]
                                    border-[0.125rem] pt-[0.03rem] pb-[0.03rem]
                                    pl-[0.6rem] pr-[0.6rem] rounded-[100px]
                                    leading-normal mr-[3.6rem] mo:hidden">
                        <FontAwesomeIcon icon={faMoon}/>
                    </div>
                </div>
            </header>
            <div ref={wrapperRef} 
            className="hidden flex-col top-[0%] fixed w-[100%] h-screen
                        p-13-percent backdrop-blur-[15px]
                        text-center items-center z-[1]" >
                <ul className="gap-8 flex flex-col">
                    <li><a href="#">
                        <div className="text-primary flex text-[4rem] w-[5.8rem] h-[5.8rem] items-center justify-center">
                            <FontAwesomeIcon icon={faMoon}/>
                        </div>
                    </a></li>
                    <li><a className="text-[2.5rem]" href="/">About</a></li>
                    <li><a className="text-[2.5rem]" href="/demo">Demo</a></li>
                    <li><a className="text-[2.5rem]" href="/merchandise">Merchandise</a></li>
                    <li><a className="text-[2.5rem]" href="/subscription">Subscription</a></li>
                    <li><a className="text-[2.5rem]" href="/contact">Contact</a></li>
                    <li><a className="text-[2.5rem]" href="Login">Login</a></li>
                </ul>
            </div>
        </section>
    </>
    )
}