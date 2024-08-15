"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'; 
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';

export default function Footer() {
    return (
        <>
            <section>
                <div className="p-2-3-percent flex justify-between w-[100%] z-[100] fixed bottom-0 text-primary backdrop-blur-[10px]">
                    <div className='text-[14px]'>© NuxeCorps Private Limited, {new Date().getFullYear()}</div>
                    <div className='f-links flex'>
                        <a href='https://github.com/javascription' target='blank'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                        <a href='https://github.com/javascription' target='blank'><FontAwesomeIcon icon={faCode}></FontAwesomeIcon></a>
                    </div>
                </div>
            </section>
        </>
    )
}