import React from "react";
import phone1 from "@/public/images/exciting/phone.png";
import rocket from "@/public/images/rocket.svg";
import Image from "next/image";

const ExcitingNews = () => {
  return (
    <div className="bg-[url(/images/exciting/ex_mobile.png)] md:bg-[url(/images/exciting_bg.svg)] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1250px] mx-auto">
        <div className="mt-16 w-full px-6 pt-10 pb-6 lg:p-0 h-auto lg:h-[800px] rounded-lg flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <div className="hidden">
              <h3
                className="text-3xl lg:text-[44px] font-noto leading-[64px] font-bold text-[#2B95FA] flex items-center gap-2"
                data-aos="fade-up"
              >
                <Image src={rocket} alt="" width={48} height={48} />{" "}
                ExcitingNews:
              </h3>
            </div>

            <h3
              className="text-[28px] text-center md:text-left lg:text-[44px] font-noto leading-[44px] lg:leading-[64px] font-bold text-[#2B95FA] flex justify-center md:justify-start items-center gap-2"
              // data-aos="fade-up"
            >
              <Image
                src={rocket}
                alt=""
                width={48}
                height={48}
                className="w-[24px] h-[24px]  lg:w-[48px] lg:h-[48px]"
              />{" "}
              Exciting News:
            </h3>
            <h2
              className="max-w-[644px] text-[28px]  text-center lg:text-[44px] font-noto leading- [44px] lg:leading-[64px] font-bold text-[#2B95FA]"
              // data-aos="fade-up"
            >
              RemiFlow App <span className="text-[#039D21]">Coming Soon!</span>
            </h2>
            <p
              className="px-2 text-[#607D8B] text-[16px] sm:text-[22px] lg:text-[26px] font-poppins leading-[24px] lg:leading-[34px] mt-6"
              data-aos="fade-up"
            >
              Get ready for the ultimate convenience! Our mobile app will make
              sending money faster, easier, and more seamless than ever before.
              Stay tuned for updates!
            </p>
          </div>
          <div
            className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
            data-aos="fade-up"
          >
            <Image
              src={phone1}
              alt="Mobile App Preview"
              width={300}
              height={660}
              className="rounded-lg md:hidden"
              quality={100}
              priority
            />
            <Image
              src={phone1}
              alt="Mobile App Preview"
              className="rounded-lg hidden md:block"
              width={320}
              height={660}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcitingNews;
