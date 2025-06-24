"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    const { user } = useUser();
    return (
        <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
                <Link href="/">
                    <div className="size-10 rounded-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-1 shadow-[0_0_8px_#76f5c0] cursor-pointer">
                        <img
                            src="/favicon.png"
                            alt="Medical Icon"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                </Link>
                <h1 className="text-base font-bold md:text-2xl">Docto Voice AI</h1>
            </div>
            {!user ? <Link href="/sign-in">
                <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    Login
                </button>
            </Link> :
                <div className="flex gap-5 items-center">
                    <UserButton appearance={{
                        elements: {
                            userButtonAvatarBox: 'w-8 h-8',
                        }
                    }} />
                    <Button
                        className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        onClick={() => window.location.href = "/dashboard"}
                    >
                        Dashboard
                    </Button>
                </div>}
        </nav>
    );
};