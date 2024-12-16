import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { RevealWrapper } from "next-reveal";

function Profile() {
  return (
    <section id="people">
      <div className="bg-[url('/images/profile/bg.jpg')] bg-center bg-no-repeat bg-cover px-12 py-16">
        <RevealWrapper duration={1500}>
          <p className="text-center text-[0.75rem] leading-loose text-[#424242]">
            <strong>Om Tat Sat</strong>
            <br />
            On this special occasion,
            we invite you to celebrate with us the journey of love,
            shared responsibilities, and fulfilled vows
            that have shaped our beautiful life together.
            Join us as we mark this milestone with gratitude and joy.
          </p>
        </RevealWrapper>
        <div className="grid grid-cols-2 mt-20">
          <div className="flex flex-col justify-end -rotate-90 -translate-y-4 lg:mr-4 lg:-translate-y-4">
            <RevealWrapper duration={1500} origin="bottom">
              <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
                <span>THE</span>
                <span>BELOVED</span>
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper duration={1500} origin="right">
            <img
              src="/images/profile/women.jpg"
              alt="Retha"
              className="translate-x-[3rem]"
            />
          </RevealWrapper>
        </div>
        <div className="flex flex-col items-end gap-6 mt-12 text-right">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="text-2xl italic font-light">
              Vijayalaximi Shivolkar            </h1>
          </RevealWrapper>
          {/* <p className="text-sm leading-relaxed">
            <strong>Putri dari</strong>
            <br />
            Bapak Drs Triwiyanto (Alm) dan
            <br />
            Ibu Nurleila Entjik Agus Hasyim
          </p> */}
          {/* <a
            href="https://www.instagram.com/lemonnestt/"
            className="text-sm text-white bg-[#424242] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>lemonnestt</span>
            <HiArrowLongRight />
          </a> */}
        </div>
        <div className="grid grid-cols-2 mt-20">
          <RevealWrapper duration={1500} origin="left">
            <img
              src="/images/profile/man.jpg"
              alt="Akbar"
              className="-translate-x-[5rem]"
            />
          </RevealWrapper>
          <div className="flex flex-col justify-end rotate-90 translate-y-4 lg:ml-4 lg:translate-y-8">
            <RevealWrapper duration={1500} origin="bottom">
              <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
                <span>THE</span>
                <span>BELOVED</span>
              </p>
            </RevealWrapper>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 mt-12 text-left">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="text-2xl italic font-light">
              Rajesh Shivolkar            </h1>
          </RevealWrapper>
          {/* <p className="text-sm leading-relaxed">
            <strong>Putra dari</strong>
            <br />
            Bapak Nuryantoro (Alm) dan
            <br />
            Ibu Masaat Said
          </p>
          <a
            href="https://www.instagram.com/akbar/"
            className="text-sm text-white bg-[#424242] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>akbar</span>
            <HiArrowLongRight />
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Profile;
