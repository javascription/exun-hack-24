"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Login() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; // Wait for session to load

        if (!session) {
            router.push("/login"); // Redirect to /login if not authenticated
        }
    }, [session, status, router]);
}
