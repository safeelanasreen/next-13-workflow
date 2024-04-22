import React from "react";
import headerNavLinks from "@/static/headerNavLinks";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Style from "./Header.module.scss";
const MainHeader = () => {
  return (
    <header className={`bg-black ${Style.MainHeader}`}>
      <div className="container m-auto px-4">
        <div className="flex items-center justify-between py-10  ">
          <div className="logo text-white">Logo</div>
          <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
            {headerNavLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hidden sm:block font-medium text-white"
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default MainHeader;
