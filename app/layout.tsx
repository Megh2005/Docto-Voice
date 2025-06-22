import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: "Docto Voice",
  description: "A voice assistant for your medical practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple.png" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {children}
          <Footer/>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
