import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import FriendsProvider from "@/context/friendsContext";
import Provider from "./lib/providers";
import Footer from "@/components/shared/footer/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "Stay connected with your friends and manage your relationships effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full justify-between flex bg-[#F3F5F7]  flex-col">
        <Provider>
          
          <Navbar></Navbar>
          <main className=" flex-grow">
            {children }
          </main>
          <Footer></Footer>
        </Provider>
        <ToastContainer></ToastContainer>
       
      </body>
    </html>
  );
}
