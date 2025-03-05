import React from "react";
import ExchangeBox from "./ExchangeBox";
import one from "@/public/images/money/1.svg";
import two from "@/public/images/money/2.svg";
import three from "@/public/images/money/3.svg";
import four from "@/public/images/money/4.svg";
import topline from "@/public/images/money/top-line.png";
import Image from "next/image";

const MoneyTransfer = () => {
  const steps = [
    {
      number: one,
      title: "Enter Amount & Check Rates",
      description: (
        <>
          Use our real-time currency{" "}
          <span className="text-[#67B5FF] font-medium">calculator</span> to see how much
          your recipient will receive. Click Send Money to proceed.
        </>
      ),
    },
    {
      number: two,
      title: "Share Details on WhatsApp",
      description: (
        <>
          You'll be redirected to WhatsApp to provide your{" "}
          <span className="text-[#67B5FF]">recipient details </span> and receive{" "}
          <span className="text-[#67B5FF]">Interac e-Transfer</span>{" "}
          instructions.
        </>
      ),
    },
    {
      number: three,
      title: "Make Payment",
      description: (
        <>
          Complete the{" "}
          <span className="text-[#67B5FF]">Interac e-Transfer</span> , and we'll
          keep you updated on the transaction status. New users must complete
          <span className="text-[#67B5FF]"> KYC</span> before their first
          transfer.
        </>
      ),
    },
    {
      number: four,
      title: "Money Delivered in 1-3 Days",
      description: (
        <>
          Funds are <span className="text-[#67B5FF]">securely processed</span>{" "}
          and delivered quickly. We'll notify you once the transfer is
          complete.
        </>
      ),
    },
  ];
  return (
    <section id='moneytransfer'
      className="px-6 lg:px-0 max-w-[1250px] mx-auto mt-12 lg:mt-[100px]"
      data-aos="fade-up"
    >
      <div className="text-center mb-[50px] md:mb-[100px]">
        <h2 className="text-[#67B5FF] lg:text-[32px] text-[18px] leading-[27px] font-medium font-poppins">
          Just 4 easy steps
        </h2>
        <h1 className="text-[24px] sm:text-2xl md:text-3xl lg:text-[38px] font-noto font-semibold mt-2 text-center">
          How to <span className="text-[#039D21]">send money</span> to India?
        </h1>
        <Image src={topline} alt="" className="w-5/6 lg:w-5/12 block  mx-auto mt-1 lg:mt-3" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-0">
        <div className="max-w-[590px] rounded-2xl md:mr-6 order-last lg:order-none">
          <div className="space-y-14">
            {steps.map((step, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="p-6 relative bg-[#2B95FA1A] rounded-xl flex flex-col items-center text-center"
              >
                <Image
                  src={step.number}
                  alt=""
                  width={65}
                  height={65}
                  className="absolute -top-10"
                />
                <h4 className="text-lg py-2 lg:text-[24px] font-poppins font-semibold text-[#000000] mt-2">
                  {step.title}
                </h4>
                <p className="text-[#5F5F5F] lg:text-[20px] font-poppins leading-[22PX] mt-1">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ExchangeBox />
      </div>
    </section>
  );
};

export default MoneyTransfer;
