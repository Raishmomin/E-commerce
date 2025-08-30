import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/main/home/banner";
import ShopbyCategory from "@/components/main/home/shopbyCategory";
import DiffrentCategory from "@/components/main/home/diffrentCategory";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Banner />
      <ShopbyCategory />
      <DiffrentCategory />
    </>
  );
}
