import React from "react";
import Construction from "../../public/assets/images/construction.svg";
import Image from "next/image";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return <main className="flex flex-col justify-center items-center text-center">
      <section className="mt-[50px] md:mt-[70px] lg:mt-[50px]">
        <Image priority className="construction-img" src={Construction} alt="construction-img" />
        <div className="lg:mb-20 mb-32 sm:mb-44">
          <h1 className="portfolio-heading mt-8 lg:mt-5">
            Oops! Page Is Still Under Construction
          </h1>
        </div>
      </section>
    </main>;
};
export default page;
