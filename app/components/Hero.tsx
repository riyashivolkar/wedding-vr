"use client";

import React from "react";
import { RxEnvelopeOpen } from "react-icons/rx";
import useSound from "use-sound";
import { RevealWrapper } from "next-reveal";

function Hero({
  setCurrentOverflow,
}: {
  setCurrentOverflow: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [play] = useSound("/audio/backsound.mp3", {
    volume: 0.25,
  });

  return (
    <section id="hero">
      <div className="min-h-screen bg-[url('/images/hero/bg.jpg')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 z-10 bg-black/70" />
        <div className="relative z-20 flex flex-col justify-between h-screen px-12 text-center py-28">
          <div>
            <p className=" text-[0.75rem] font-bold  ">25th Wedding Anniversary of</p>
            <h1 className="mt-2 text-4xl font-light">Vijaya & Rajesh</h1>
            <p className="font-extralight text-[0.8rem] mt-4">
              Friday, 03 January 2025
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[0.8rem]">Click below to open</p>
            {/* <p className="text-[0.8rem]">
              Jl. Lengkong Besar No.8, Cikawao, Kec. Lengkong, Kota Bandung
            </p> */}
            <RevealWrapper duration={4000} origin="bottom">
              <a
                href="#countdown"
                onClick={() => {
                  setCurrentOverflow("auto");
                  play();
                }}
                className="font-bold text-sm bg-[#ed1d1d36] border border-[#bdb08f8c] rounded-lg flex items-center gap-2 px-6 py-3 mt-6 hover:scale-90 ease-linear duration-[0.2s]"
              >
                <RxEnvelopeOpen />
                <span>Open Invitation</span>
              </a>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
