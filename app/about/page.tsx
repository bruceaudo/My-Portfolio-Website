"use client"
import Skill from "@/components/Skill";
import Skills2 from "@/components/Skills2";
import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Link from "next/link";

type pageProps = {
  
};

const page: React.FC<pageProps> = () => {
  
  return <main className="max-w-[99%] mx-auto text-center mt-[40px]">
      <div>
        <h2>About me</h2>
        <p className="mt-10 lg:max-w-[45rem] lg:mx-auto max-w-full">
          Hi there! I am a passionate programmer with a love for good design,
          I specialize in creating stunning web applications and websites that
          are both aesthetically pleasing and highly functional. With
          expertise in UI/UX design, frontend development, and backend
          development, I am equipped to take on projects of any size and
          complexity. In addition to my core skills, I am currently expanding
          my knowledge in AI and machine learning concepts, further enhancing
          my ability to deliver innovative and cutting-edge solutions. If
          you're looking for a talented and dedicated developer to help bring
          your project to life, please don't hesitate to contact me.
        </p>
      </div>
      <h3 className="mt-10">Skills</h3>
      {/**Skills section here */}
      <Skill />
      <Skills2 />
      <div className="flex justify-center items-center mt-20 lg:mb-20 mb-32 sm:mb-44">
        <a download href="cv.pdf">
          <button className="text-base flex items-center gap-3">
            <ArrowDownTrayIcon className="icon" /> Download resume
          </button>
        </a>
      </div>
    </main>;
};
export default page;
