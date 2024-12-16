import React from "react";
import { RevealWrapper } from "next-reveal";

function Footer() {
  return (
    <section id="footer">
      <div className=" bg-cover bg-[47.5%] bg-no-repeat flex items-end">
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#FFFFFF00_0%,#424242_67%)] absolute inset-x-0 bottom-0 -top-24"></div>
          <div className="relative z-10 flex flex-col items-center gap-4 p-6 text-center text-white">
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.75rem] font-light leading-relaxed">
                Thank you for your presence and prayers. Your warm wishes and heartfelt prayers have added immeasurable joy and strength to our lives.
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.75rem] font-bold leading-relaxed">
                Built with 🤍{' '}Riya

              </p>
            </RevealWrapper>

          </div>
        </div>
      </div>

    </section>
  );
}

export default Footer;
