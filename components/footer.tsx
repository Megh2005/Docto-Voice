import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DarkFooter() {
    return (
        <TooltipProvider>
            <footer className="bg-transparent text-gray-300 border-t border-gray-800">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden p-0.5">
                                    <div className="w-full h-full rounded-full flex items-center justify-center">
                                        <Link href="/">
                                            <div className="size-10 rounded-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-1 shadow-[0_0_8px_#76f5c0] cursor-pointer">
                                                <img
                                                    src="/favicon.png"
                                                    alt="Medical Icon"
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl tracking-tight">Docto Voice AI</h3>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                                        >
                                            <Facebook className="w-4 h-4 text-gray-400 hover:text-white" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Facebook</p>
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                                        >
                                            <Twitter className="w-4 h-4 text-gray-400 hover:text-white" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Twitter</p>
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                                        >
                                            <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Instagram</p>
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                                        >
                                            <Linkedin className="w-4 h-4 text-gray-400 hover:text-white" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Connect on LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="max-w-md">
                                <h4 className="text-white font-semibold text-lg mb-2">Stay Ahead in AI Healthcare</h4>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="flex-1">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Input
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 h-11"
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Enter your professional email</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>

                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button className="w-24 h-11 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                                                Subscribe
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Join our AI healthcare community</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </TooltipProvider>
    )
}
