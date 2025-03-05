import React from "react";

const PromoSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#0056A8] flex justify-center flex-col lg:h-[602px]"
    >
      <div className=" text-center py-12 px-6">
        <h2
          className="text-[#FDFDFD] text-[24px] sm:text-3xl md:text-4xl lg:text-[38px] font-semibold leading-[
33.6px] lg:leading-[49px] font-noto mb-6"
          data-aos="fade-up"
        >
          Start Sending Money & Saving Today!
        </h2>
        <p
          className="hidden md:block text-[14px] leading-[21px] sm:text-base md:text-lg mb-8 lg:text-[24px] text-white font-medium mx-auto font-poppins"
          data-aos="fade-up"
        >
          Make the smart choice – experience RemiFlow now and enjoy the best
          exchange <br />
          rates with zero fees.
        </p>
        <p
          className="md:hidden text-[14px] sm:text-base md:text-lg mb-8 lg:text-[24px] text-white font-medium mx-auto font-poppins"
          data-aos="fade-up"
        >
          Make the smart choice – experience RemiFlow now and enjoy the best
          exchange rates with zero fees.
        </p>
        <button
          className="bg-[#039D21] font-poppins text-[16px] font-semibold w-full sm:max-w-sm md:max-w-md lg:w-[415px] lg:h-[78px] rounded-[15px]  text-white  py-4 shadow-md hover:bg-green-700 transition"
          data-aos="fade-up"
        >
          Contact Us Now
        </button>
        <p
          className="text-[14px] sm:text-base md:text-lg mt-7  lg:text-[24px] text-white font-medium mx-auto font-poppins"
          data-aos="fade-up"
        >
          Switch to RemiFlow Today – Send More, Save More – Zero Fees, Maximum
          Happiness!
        </p>
      </div>
    </section>
  );
};

export default PromoSection;
