import React from "react";
import Countdown from "react-countdown";
import { RevealWrapper } from "next-reveal";

function CountdownComp() {
  function renderer({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: any;
    hours: any;
    minutes: any;
    seconds: any;
    completed: any;
  }) {
    return completed ? (
      <span>Acara sudah berlalu.</span>
    ) : (
      <span>
        {days} day {hours} hr
        <br />
        {minutes} min {seconds} sec
      </span>
    );
  }

  return (
    <section id="countdown">
      <div className="min-h-screen bg-[url('/images/countdown/bg.jpg')] bg-cover bg-[44.5%] text-white relative py-28 flex items-end">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative w-full px-10 py-8">
          <div
            className="bg-[#00000021] rounded-tr-[3.125rem] rounded-bl-[3.125rem] absolute inset-x-4 inset-y-0 z-10"
            style={{ backdropFilter: "blur(6px)" }}
          />
          <div className="relative z-20">
            <RevealWrapper duration={1500} origin="right">
              <p className="text-sm font-light uppercase">WEDDING anniversary INVITATION</p>
              <h1 className="mt-2 mb-4 text-3xl font-light">Vijaya & Rajesh</h1>
              <div className="grid grid-cols-2 border-y border-y-white text-center text-[0.75rem] font-light">
                <p className="leading-[1.85] py-2 px-2 border-r border-r-white flex flex-col gap-2">
                  <span>SAVE THE DATE</span>
                  <span>Friday, 03 January 2025</span>
                </p>
                <p className="flex flex-col gap-2 px-2 py-2">
                  <span>COUNTDOWN</span>
                  <Countdown
                    date={new Date("2025-01-03")}
                    renderer={renderer}
                  />
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountdownComp;
