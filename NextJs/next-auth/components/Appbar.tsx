"use client"
import { signIn, signOut } from "next-auth/react";

export const Appbar = () => {
    return <div>
        <button onClick={() => {
           signIn();
        }}>SignIn</button>

        <button onClick={() => {
           signOut();
        }}>Logout</button>
    </div>
}