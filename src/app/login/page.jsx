"use client"

import { signIn, useSession } from "next-auth/react"

export default function Login () {
    const {data: session} = useSession();
    return (
        <>
            {session ? (
                <>
                <h1>Welcome Back!</h1>
                </>
            ) : (
                <>
                    <h1>You are not logged in</h1>
                    <button onClick={() => signIn('google')}>Login With GOogl</button>
                    <button onClick={() => signIn('github')}>Login with Githuv</button>
                </>
            )
            }
        </>
    )
}