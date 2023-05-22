"use client";

import Image from 'next/image';
import Hero from '../public/assets/images/hero-img.svg'
import Contact_Btn from '@/components/Contact_Btn';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
   const [text, setText] = useState(" "); // set initial value to empty space
   const [showCursor, setShowCursor] = useState(true);

  const handleClick = () => {
    const email = 'audo401@gmail.com'

    const gmailURL = `https://mail.google.com/mail/?view=cm&to=${email}`
    const yahooURL = `https://compose.mail.yahoo.com/?to=${email}`

    const openMailClient = (url: any) => {
      const ua = navigator.userAgent.toLowerCase()

      if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) {
        //Safari browser
        window.open(url, '_blank', 'noopener noreferrer')
      } else if (ua.indexOf('chrome') !== -1 && ua.indexOf('samsungbrowser') === -1) {
        //Chrome browser
        window.open(url, "_blank", "noopener noreferrer");
      } else {
        //Other browsers
        window.open(url, "_blank", "noopener noreferrer");
      }
    }

    const openMailApp = () => {
      const ua = navigator.userAgent.toLowerCase()

      if (ua.indexOf('android') != -1 && ua.indexOf('samsungbrowser') === -1) {
        //Android device
        window.location.href= `mailto:${email}`
      } else if (ua.indexOf('iphone') !== -1 || ua.indexOf('ipad') !== -1) {
        //iOS device
        if (ua.indexOf('safari') !== -1) {
          //Safari browser on ipad
          window.location.href = `mailto:${email}`
        } else {
          //Other email app on ipad
          window.open(`mailto:${email}`)
        }
      } else {
        //Other devices
        window.location.href = `mailto:${email}`
      }
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      openMailApp()
    } else {
      const otherEmailUrl = `mailto:${email}`
      openMailClient(gmailURL || yahooURL || otherEmailUrl)
    }
  }

   useEffect(() => {
     const words = ["Frontend Development", "Backend development", "UI/UX Design", "AI & Machine Learning"];
     let wordIndex = 0;
     let letterIndex = 0;
     let timeout: string | number | NodeJS.Timeout | undefined;

     const type = () => {
       if (letterIndex <= words[wordIndex].length) {
         setText(words[wordIndex].slice(0, letterIndex));
         letterIndex++;
         timeout = setTimeout(type, 100);
       } else {
         setShowCursor(false);
         clearTimeout(timeout);
         setTimeout(erase, 1000);
       }
     };

     const erase = () => {
       if (letterIndex >= 0) {
         setText(words[wordIndex].slice(0, letterIndex));
         letterIndex--;
         timeout = setTimeout(erase, 50);
       } else {
         setShowCursor(false);
         clearTimeout(timeout);
         letterIndex = 0
         setTimeout(() => {
           wordIndex = (wordIndex + 1) % words.length;
           setShowCursor(true);
           clearTimeout(timeout);
           setTimeout(type, 1000);
         }, 500);
       }
     };

     timeout = setTimeout(type, 1000);

     return () => clearTimeout(timeout);
   }, []);

  return <main className="flex flex-col justify-center items-center text-center ">
      <section className="mt-[50px] md:mt-[70px] lg:mt-[80px] lg:flex lg:gap-[6rem]">
        <Image priority className="hero-img ml-[40px] sm:ml-0 floating-element" src={Hero} alt="Hero-img" />
        <div>
          <h1 className="hero-title mt-10">
            Hello, <span className="text-[#a020f0]">I&apos;m Bruce</span>
          </h1>
          <p className="hero-description mt-3">
            Full Stack Developer | <span className="green-span">
              React & NodeJs
            </span>
          </p>
          <p className="hero-description-two mt-3">Turning ideas into apps</p>
          <p className="hero-description-three mt-3">
            {text}
            <span className={`hero__cursor ${showCursor ? "show" : ""}`}>
              |
            </span>
          </p>
          <div className="flex items-center lg:gap-x-8 gap-x-5 justify-center lg:mb-20 mb-32 sm:mb-44">
            <Contact_Btn handleClick={handleClick} />
            <Link className="mt-10 text-base px-[35px] py-[15px] rounded-full border border-[#a020f0] hover:bg-[#a020f0]" href={"/portfolio"}>
              See Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>;
}
