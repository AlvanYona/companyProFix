

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Perkenalan = () => {
  return (
    <section id="Hero" className="mt-5 px-4 py-10 w-full bg-amber-100">
      <div className="flex flex-col-reverse md:grid grid-cols-2 w-full items-center">
        {/* Kolom 1 - Teks */}
        <div className="space-y-5 flex flex-col justify-center items-center md:items-start p-6 md:p-[50px]">
          <p className="text-2xl font-semibold md:text-5xl text-center md:text-left">
            Style and Comfort for Everyone
          </p>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            deserunt? Voluptatem fuga delectus, et facere sapiente velit quod
            esse ab nam alias similique error cupiditate, necessitatibus
            adipisci exercitationem at corporis odio aspernatur inventore
            assumenda fugit! Sit assumenda ullam laudantium non.
          </p>
          <div>
            <Link href="/product">
              <button className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
                <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>
                <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>
                <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                  <span className="select-none">See More Our Product</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Kolom 2 - Gambar */}
        <div className="flex justify-center items-center w-full">
          <article className="flex w-[90%] md:w-[350px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-4 md:p-6 shadow-[6px_6px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white hover:shadow-[10px_10px_0_0_#000]">
            <Image
              src="/pic1home.jpg"
              alt="seren"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Perkenalan;
