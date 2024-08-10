"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'; 
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';

export default function Footer() {
    return (
        <>
            <section>
                <div className="p-2-3-percent flex justify-between w-[97%] z-[100] fixed bottom-0 text-primary">
                    <div className='text-[14px]'>© NuxeCorps Limited, {new Date().getFullYear()}</div>
                    <div className='f-links flex gap-[5px]'>
                        <FontAwesomeIcon icon={faGithub}><a href='https://github.com/javascription' target='blank'></a></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faCode}><a href='https://github.com/javascription' target='blank'></a></FontAwesomeIcon>
                    </div>
                </div>
            </section>
        </>
    )
}