
"use client"

import { useSession } from "next-auth/react"

export default function Page() {
    const {data: session} = useSession();
    return (
        <>
            
            {session ? (
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Live Demo
                        </h2>
                        <p className=" text-left text-gray-500 dark:text-gray-400">
                            Coming Soon...
                        </p>
                    </div>
                </section>
            ) : ( 
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Live Demo
                        </h2>
                        <p className=" text-left text-gray-500 dark:text-gray-400">
                            You need to be logged in to access the live demo. Kindly log in to access this page.
                        </p>
                    </div>
                </section>
                )
            }

        </>
    )
}