import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navbarContent = [
  { name: "Home", link: "/" },
  { name: "Features", link: "/features" },
  { name: "About Us", link: "/about" },
];

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "New chat",
  description: "Explore more with me",
  icons:'/logo.jpg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          {/* Logo in the top-left corner */}
          <div className="absolute top-3 left-4 p-4 flex items-center z-10">
            <div className="h-[45px] w-[45px] mr-2">
              {/* Ensure the image source is correct */}
              <img src="/logo.jpg" alt="logo website" width={45} className="rounded-full" />
            </div>
            <div className="text-white text-3xl font-bold">Talkflow</div>
          </div>

          <FloatingNav navItems={navbarContent} />
          {children}
        </div>
      </body>
    </html>
  );
}
