import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { RevealWrapper } from "next-reveal";

function WeddingEvents() {
  return (
    <section id="wedding-events">
      <div className="bg-[url('/images/weddingEvents/bg.jpeg')] bg-cover bg-center relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-xl italic font-light text-center text-white">
            Events
          </h1>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-10">
              <img
                src="https://m.media-amazon.com/images/I/81GCOcWUmwS._AC_UF894,1000_QL80_.jpg"
                alt="akad"
                className="w-full h-76 object-cover rounded-t-[1.25rem]"
              />
              <div className="flex">
                <div className="w-[20%] bg-[#424242] rounded-bl-[1.25rem] flex items-center">
                  <p className="rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-5 lg:-translate-x-3.5 tracking-[5px]">
                    PUJA
                  </p>
                </div>
                <div className="w-[80%] bg-white px-4 py-6 rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="text-xl italic font-light">
                    Friday, 03 January 2025
                  </h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <p className="flex items-center text-[#5a5a5a] font-light text-sm gap-1.5">
                    <AiFillClockCircle />
                    <span>11.00 am - 6.00 pm</span>
                  </p>
                  <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="font-bold text-black">
                      Vitthal Rukmini puja                    </strong>
                    <br />
                    HNO 474/1, Shivolkar wada Mulgao, Bicholim Goa
                  </p>
                  <a
                    href="https://www.google.com/maps?q=15.6212622,73.9124697&entry=gps&lucs=,94244543,94246480,94242616,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94228354,94233079,94203019,47084304,94208458,94208447,94213316&g_ep=CAISEjI0LjQ3LjMuNjk4NTMxOTU1MBgAIJ6dCiqZASw5NDI0NDU0Myw5NDI0NjQ4MCw5NDI0MjYxNiw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw5NDIzMTE4OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIyODM1NCw5NDIzMzA3OSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0Nyw5NDIxMzMxNkICSU4%3D&g_st=ia"
                    className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                  >
                    GOOGLE MAPS
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-6">
              <img
                src="https://m.media-amazon.com/images/I/81jiA7FGjmL._AC_UF1000,1000_QL80_.jpg"
                alt="akad"
                className="w-full h-72 object-cover rounded-t-[1.25rem] object-center"
              />
              <div className="flex">
                <div className="w-[80%] bg-white px-4 py-6 rounded-bl-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="text-xl italic font-light">
                    Friday, 03 January 2025
                  </h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <div>
                    <p className="flex items-center text-[#5a5a5a] font-light text-[0.8rem] gap-1.5">
                      <AiFillClockCircle />
                      <span>8.00 pm onwards</span>
                    </p>

                  </div>
                  <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="font-bold text-black">
                      Silver Anniversary                    </strong>
                    <br />
                    HNO 474/1, Shivolkar wada Mulgao, Bicholim Goa

                  </p>
                  <a
                    href="https://www.google.com/maps?q=15.6212622,73.9124697&entry=gps&lucs=,94244543,94246480,94242616,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94228354,94233079,94203019,47084304,94208458,94208447,94213316&g_ep=CAISEjI0LjQ3LjMuNjk4NTMxOTU1MBgAIJ6dCiqZASw5NDI0NDU0Myw5NDI0NjQ4MCw5NDI0MjYxNiw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw5NDIzMTE4OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIyODM1NCw5NDIzMzA3OSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0Nyw5NDIxMzMxNkICSU4%3D&g_st=ia"
                    className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                  >
                    GOOGLE MAPS
                  </a>
                </div>
                <div className="w-[20%] bg-[#424242] rounded-br-[1.25rem] flex items-center">
                  <p className="-rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-[3rem] lg:-translate-x-[2.35rem] tracking-[5px]">SOIREE</p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default WeddingEvents;
