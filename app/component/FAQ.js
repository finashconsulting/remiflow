"use client";

import { useState } from "react";
import MinusIcon from "./svg/MinusIcon";
import PlusIcon from "./svg/PlusIcon";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does RemiFlow offer better rates than banks and Remitly?",
      answer:
        " A: We operate with lower overheads and pass the savings on to you. Unlike traditional financial institutions, we do not inflate exchange rates to profit off you. ",
    },
    {
      question: "How long does it take for the money to reach my recipient?",
      answer:
        "A: We ensure transfers are completed within 1-3 business days – no unnecessary delays.",
    },
    {
      question: "Is my money safe with RemiFlow?",
      answer:
        "A: Absolutely! We implement the highest security protocols to keep your transactions protected.",
    },
    {
      question: "Can I pay with cash?",
      answer:
        "A: Yes! If you’re in the GTA, we pick up cash directly from your location for ultimate convenience.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="max-w-[1250px] lg:h-[611px]  mx-auto px-6 lg:px-0 py-10 flex flex-col items-center md:flex-row gap-10"
    >
      {/* Left Section (Title & Description) */}
      <div className="md:w-1/2 space-y-6 ">
        {/* Subheading */}
        <h2
          className="text-[#039D21] font-poppins leading-[20px] font-semibold uppercase text-[16px] tracking-widest lg:mb-2"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h2>

        {/* Main Heading */}
        <h1
          className="text-[24px] leading-[30px] sm:text-3xl md:text-4xl lg:text-[50px] font-semibold sm:leading-[40px] md:leading-[50px] lg:leading-[55px] font-outfit text-[#2B95FA] mb-4"
          data-aos="fade-up"
        >
          Got Questions? We’ve Got Answers!
        </h1>

        {/* Description */}
        <p
          className="text-[#717880] max-w-md font-outfit text-[14px] lg:text-[16px] leading-[28px]"
          data-aos="fade-up"
        >
          Curious about something? We're here to help! Find clear, reliable
          answers to all your questions. No confusion, just simple explanations.
          Ask away—we’ve got the information you need!
        </p>
      </div>

      {/* Right Section (FAQ List) */}
      <div className="md:w-1/2 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className={`w-full flex  items-center justify-between text-left text-[#2B95FA] font-medium last:border-b-0 transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "border-b border-[#CFD7E0]"
                  : "border-b border-transparent py-2"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="">
                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="bg-blue-400  lg:w-[45px] lg:h-[45px] flex items-center justify-center transition-all duration-300 ease-in-out p-1 lg:p-0">
                    {openIndex === index ? (
                      <MinusIcon className="text-[#2B95FA] transition-transform duration-300 ease-in-out rotate-180" />
                    ) : (
                      <PlusIcon className="text-[#2B95FA] transition-transform duration-300 ease-in-out" />
                    )}
                  </div>
                  <span className="text-[#2B95FA] font-semibold text-[12px] lg:text-[16px] leading-5 font-poppins">
                    {faq.question}
                  </span>
                </div>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-3 px-8 text-[#717880] text-[10px] lg:text-[15px] font-poppins leading-7">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
