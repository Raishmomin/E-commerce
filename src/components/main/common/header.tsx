import Link from "next/link";
import React from "react";
import SearchBar from "./search";
import UserDropdown from "./userDropdown";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const Option = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full h-16 flex items-center justify-between px-6 sticky top-0 shadow-md bg-white z-50">
      <h1 className="text-[#103A3A] font-serif font-semibold text-3xl">
        Habitat
      </h1>
      <div className="flex items-center gap-6">
        {Option.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-[#103A3A] font-semibold hover:underline underline-offset-4"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <SearchBar /> <UserDropdown />{" "}
        <ShoppingCart className="text-[#103A3A] hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
