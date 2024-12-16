import React from "react";
import { RevealWrapper } from "next-reveal";

function ArRum() {
  return (
    <section id="qs-ar-rum">
      <div className="bg-[url('/images/anNur/bg.png')] rounded-t-[1.25rem] bg-center bg-no-repeat bg-cover p-12 flex flex-col items-center text-center gap-8 -mt-8 z-20 relative font-light">
        <RevealWrapper duration={1500} origin="top">
          <h1 className="italic text-4xl flex gap-4 text-[#A99C86]">
            <span>V</span>
            <span>&</span>
            <span>R</span>
          </h1>
        </RevealWrapper>
        <RevealWrapper duration={1500} origin="top">
          <p className="text-[0.70rem] leading-loose text-[#424242]">
            "सखा यज्ञस्य सखा भव, युक्तो यज्ञे सखा भव।
            मित्रस्य सखा भव, युज्यमानौ सखा भव॥"
          </p>
          <p className="text-[0.6rem] pt-2  italic  leading-loose text-[#424242]">
            May one be united as one in love and purpose.
            May the bond be unbreakable, and may one grow together in strength,
            Being the closest companions in every aspect of your life.


          </p>
        </RevealWrapper>
        <RevealWrapper duration={1500} origin="bottom">
          <h3 className="text-lg italic">Atharva Veda 14.2.15
          </h3>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default ArRum;
