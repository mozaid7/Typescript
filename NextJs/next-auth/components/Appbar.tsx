"use client"
import { useRouter } from "next/navigation";

export const Appbar = () => {
    const router = useRouter();
    return <div>
        <button onClick={() => {
            router.push("/api/auth/signin");
        }}>SignIn</button>
    </div>
}