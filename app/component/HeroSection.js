import React from "react";
import herogroup from "@/public/images/Group 1707478082 (1).webp";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="herosection" className="bg-gradient">
      <div className="lg:mt-[80px] max-w-[1250px] mx-auto w-full lg:flex items-center justify-between gap-4">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center bg-[#0056A8] md:bg-transparent text-center md:text-left h-[316px] p-4">
          <h2
            className="lg:w-[662px] text-[#FDFDFD] md:text-black font-noto text-[28px] leading-[36.4px] md:text-4xl lg:text-[55px] lg:leading-[75px] font-semibold md:font-bold"
            data-aos="fade-left"
          >
            Send Money to India with The{" "}
            <span className="md:text-[#FA6D2B]"> Best Rates </span>
            <br className="hidden md:block" /> &{" "}
            <span className="lg:text-[#268BEB]"> Zero Fees</span>
          </h2>
          <p
            className="w-full max-w-[364px] text-center md:text-left font-poppins font-normal text-[#FDFDFD] text-[16px] md:text-[#395664] sm:text-lg lg:text-[24px] my-6 md:mt-4 sm:max-w-[700px] lg:max-w-[800px]"
            data-aos="fade-left"
          >
            Get better rates than Banks, Google, and Remitly. No fees, No
            hassle.
          </p>

          <p
            className="font-poppins hidden text-white md:block text-base sm:text-lg lg:text-[24px] md:text-[#395664] mt-4 max-w-full sm:max-w-[700px] lg:max-w-[800px]"
            data-aos="fade-left"
          >
            New here? Verify your identity in just 1 minute to start sending
            money.
          </p>

          {/* Buttons */}
          <div
            className="font-poppins md:mt-6 flex flex-col sm:flex-row gap-4"
            data-aos="fade-left"
          >
            <Link href="#moneytransfer">
              <button className="max-w-[364px] font-poppins text-[16px] font-semibold min-w-[180px] mx-auto block  sm:text-lg lg:text-[26px] w-full sm:w-[200px] lg:w-[250px] h-[54px] sm:h-[60px] lg:h-[68px] rounded-full lg:rounded-[34px] bg-[#039D21] md:bg-[#268BEB] lg:font-medium text-white px-6 py-3 hover:bg-[#1a6bbf] transition-colors">
                Send Money
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-1 lg:mt-0" data-aos="fade-right">
          <Image
            src={herogroup}
            alt="Happy family"
            width={2400}
            height={2400}
            priority
            placeholder="blur"
            className="rounded-lg p-5 lg:p-0 w-full lg:w-[488px] lg:h-[460px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
