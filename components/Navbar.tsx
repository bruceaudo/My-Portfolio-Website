"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type NavbarProps = {
    
};

const Navbar: React.FC<NavbarProps> = () => {
  
  const [showMenu, setShowMenu] = useState(false)
 
    
  return <nav className={"flex justify-between h-[60px] items-center nav"}>
      <Link href={"/"} className="logo">
        audo<span className="border-b-2 border-[#a020f0]">labs</span>
      </Link>
      <div className="hidden lg:flex space-x-[40px] text-base">
        <Link className="link" href={"/"}>
          Home
        </Link>
        <Link className="link" href={"/about"}>
          About me
        </Link>
        <Link className="link" href={"/contact"}>
          Contact me
        </Link>
        <Link className="link" href={"/portfolio"}>
          Portfolio
        </Link>
      </div>
      <div className="lg:hidden flex items-center text-base">
        <div className={showMenu ? "flex space-x-[15px] sm:-mr-[200px] items-center text-base -mr-[10px]" : `hidden space-x-[40px] text-base`}>
          <Link className="link" href={"https://www.github.com/bruceaudo"} target="_blank">
            Github
          </Link>
          <Link className="link" href={"https://www.linkedin.com/in/bruceaudo"} target="_blank">
            Linkedin
          </Link>
          <Link className="link" href={"https://www.twitter.com/bruceaudo"} target="_blank">
            Twitter
          </Link>
        </div>
      </div>
      <Bars3Icon onClick={() => setShowMenu(true)} className={showMenu ? "hidden" : "icon lg:hidden cursor-pointer"} />
      <XMarkIcon onClick={() => setShowMenu(false)} className={showMenu ? "flex cursor-pointer icon lg:hidden" : "hidden"} />
    </nav>;
}
export default Navbar;