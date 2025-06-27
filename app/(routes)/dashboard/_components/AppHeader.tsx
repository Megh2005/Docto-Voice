"use client"

import * as React from "react"
import { Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"

const navItems = [
    { name: "Home", href: "/" },
    { name: "History", href: "/history" },
    { name: "Pricing", href: "/pricing" },
    { name: "Profile", href: "/profile" },
]

export default function AppHeader() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            {/* Desktop Floating Navbar */}
            <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-black/70 border border-white/20 rounded-2xl shadow-2xl md:block hidden transition-all duration-300 hover:shadow-3xl hover:shadow-white/10 hover:bg-black/80">
                <div className="w-[70vw] lg:w-[75vw] xl:w-[80vw] 2xl:w-[80vw] mx-auto px-4 lg:px-6 xl:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/30 group-hover:border-white/80 group-hover:rotate-12">
                                    <Image
                                        src="/favicon.png"
                                        alt="Brand Logo"
                                        fill
                                        className="object-cover p-1 transition-transform duration-500 group-hover:scale-110"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation Items (Center) */}
                        <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-white/80 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10 group overflow-hidden"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-1px]">
                                        {item.name}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Profile Section (Right) */}
                        <div className="flex items-center space-x-3">
                            <SignedIn>
                                <div className="transform transition-all duration-300 hover:scale-110">
                                    <UserButton
                                        appearance={{
                                            elements: {
                                                avatarBox: "w-10 h-10 ring-2 ring-white/30 hover:ring-white/60 transition-all duration-300",
                                                userButtonPopoverCard: "bg-black/90 backdrop-blur-md border border-white/20",
                                                userButtonPopoverText: "text-white",
                                                userButtonPopoverActionButton: "text-white/80 hover:text-white hover:bg-white/10"
                                            }
                                        }}
                                    />
                                </div>
                            </SignedIn>
                            <SignedOut>
                                <SignInButton>
                                    <Button className="bg-white hover:bg-white/90 text-black border-0 rounded-lg text-base px-4 h-10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95">
                                        Sign In
                                    </Button>
                                </SignInButton>
                            </SignedOut>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/20 md:hidden transition-all duration-300 hover:bg-black/90">
                <div className="flex items-center justify-between h-16 px-6">
                    {/* Mobile Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10 bg-white rounded-full border-2 border-white overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                            <Image
                                src="/favicon.png"
                                alt="Brand Logo"
                                fill
                                className="object-cover p-1 transition-transform duration-500 group-hover:scale-110"
                                priority
                            />
                        </div>
                        <span className="text-white font-bold text-xl transition-all duration-300 group-hover:text-white/90 group-hover:translate-x-1">Brand</span>
                    </Link>

                    {/* Mobile menu button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 w-12 h-12 transition-all duration-300 hover:scale-110 active:scale-95">
                                <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-180" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[320px] bg-black/95 backdrop-blur-md border-l border-white/20 p-0"
                        >
                            <MobileSidebar onClose={() => setIsOpen(false)} />
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>

            {/* Spacer for page content - larger margin */}
            <div className="h-32 md:h-32" />
        </>
    )
}

function MobileSidebar({ onClose }: { onClose: () => void }) {
    return (
        <div className="flex flex-col h-full">
            {/* Mobile Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
                <Link href="/" className="flex items-center space-x-3 group" onClick={onClose}>
                    <div className="relative w-10 h-10 bg-white rounded-full border-2 border-white overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <Image
                            src="/favicon.png"
                            alt="Brand Logo"
                            fill
                            className="object-cover p-1 transition-transform duration-500 group-hover:scale-110"
                            priority
                        />
                    </div>
                    <span className="text-white font-bold text-xl transition-all duration-300 group-hover:text-white/90">Brand</span>
                </Link>
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex-1 px-6 py-8">
                <nav className="space-y-2">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className="relative block px-4 py-4 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-lg group overflow-hidden transform hover:translate-x-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-1px]">
                                {item.name}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                            <div className="absolute left-0 top-0 w-1 h-0 bg-white transition-all duration-300 group-hover:h-full" />
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Profile Section */}
            <div className="p-6 border-t border-white/20">
                <SignedIn>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10 ring-2 ring-white/30",
                                    userButtonPopoverCard: "bg-black/90 backdrop-blur-md border border-white/20",
                                    userButtonPopoverText: "text-white",
                                    userButtonPopoverActionButton: "text-white/80 hover:text-white hover:bg-white/10"
                                }
                            }}
                        />
                        <span className="text-white font-medium">Profile</span>
                    </div>
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <Button
                            className="w-full bg-white hover:bg-white/90 text-black border-0 h-12 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95"
                            onClick={onClose}
                        >
                            Sign In
                        </Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </div>
    )
}