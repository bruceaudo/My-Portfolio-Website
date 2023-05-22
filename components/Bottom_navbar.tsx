import React from "react";
import {
  EnvelopeIcon,
  BriefcaseIcon,
  HomeIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

type Bottom_navbarProps = {};

const Bottom_navbar: React.FC<Bottom_navbarProps> = () => {
  return <nav className="fixed bottom-0 left-0 w-full bg-[#383F45] text-white lg:hidden flex justify-between items-center sm:px-[64px] sm:py-[24px] px-[20px] py-[15px] shadow-xl z-50">
      <Link href={"/"} className="flex flex-col justify-center items-center gap-y-2">
        <div>
          <HomeIcon className="icon" />
        </div>
        <p className="text-sm">Home</p>
      </Link>
      <Link href={"/about"} className="flex flex-col justify-center items-center gap-y-2">
        <div>
          <QuestionMarkCircleIcon className="icon" />
        </div>
        <p className="text-sm">About me</p>
      </Link>
      <Link href={"/contact"} className="flex flex-col justify-center items-center gap-y-2">
        <div>
          <EnvelopeIcon className="icon" />
        </div>
        <p className="text-sm">Contact me</p>
      </Link>
      <Link href={"/portfolio"} className="flex flex-col justify-center items-center gap-y-2">
        <div>
          <BriefcaseIcon className="icon" />
        </div>
        <p className="text-sm">Portfolio</p>
      </Link>
    </nav>;
};
export default Bottom_navbar;
