"use client";
import React, { useState, useRef, useEffect } from "react";
import CA from "@/public/images/money/CA.svg";
import IN from "@/public/images/money/IN.svg";
import left from "@/public/images/money/left.svg";
import up_down from "@/public/images/updown.svg";
import downarrow from "@/public/images/money/down-arrow.svg";
import Image from "next/image";
import RightArrowIcon from "../svg/RightArrowIcon";

const paymentOptions = ["E-Transfer", "Cash pickup (within GTA)"];

const ExchangeBox = () => {
  const [inr, setInr] = useState("1000.00");
  const [cad, setCad] = useState("60040.00");
  const [paymentMethod, setPaymentMethod] = useState(paymentOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(60.04); // Default rate, will be updated
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Fetch exchange rate from the API
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://v6.exchangerate-api.com/v6/bfe0096271658fb2e9b78681/latest/CAD"
        );
        const data = await response.json();
        const fetchedRate = data.conversion_rates.INR;
        const adjustedRate = fetchedRate + 0.05; // Add 0.05 INR
        setExchangeRate(adjustedRate);
      } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, []);

  const handleInrChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Remove non-numeric input
    setInr(value);
    setCad(value ? (parseFloat(value) * exchangeRate).toFixed(2) : "");
  };

  const handleCadChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setCad(value);
    setInr(value ? (parseFloat(value) / exchangeRate).toFixed(2) : "");
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelect = (option) => {
    setPaymentMethod(option);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const lockInRate = () => {
    const formattedINR = parseFloat(inr).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const formattedCAD = parseFloat(cad).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const whatsappURL = `https://wa.me/15483845252?text=Hi%20RemiFlow,%0A%0AI%20would%20like%20to%20send%20${formattedINR}%20CAD%20to%20India%20via%20${paymentMethod}.%0A%0A➡%20Exchange%20Rate:%201%20CAD%20=%20${exchangeRate.toFixed(
      2
    )}%20INR%0A➡%20Total%20INR%20Received%20=%20${formattedCAD}%20INR%0A%0APlease%20confirm%20and%20proceed%20with%20the%20transaction.`;
    window.location.href = whatsappURL;
  };

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg border border-[#2B95FA] max-w-[480px] w-full mx-auto"
      data-aos="fade-up"
    >
      {/* send section */}
      <div className="bg-[#EDF7FE] flex items-center lg:h-[74px] rounded-lg">
        <div className="relative flex items-center justify-between p-4 rounded-lg h-[56px]">
          {/* Left Section */}
          <div className="flex-1">
            <label className="text-[#989898] text-[12px] leading-[18px] font-poppins font-medium">
              You send
            </label>
            <input
              type="text"
              inputMode="decimal"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              className="bg-[#EDF7FE] text-[#333333] text-[20px] lg:text-[24px] font-medium leading-[30px] focus:outline-none w-full"
              value={inr}
              onChange={handleInrChange}
              required
            />
          </div>
          <div className=" absolute left-1/2 transform -translate-x-1/2 h-5/6 w-[.76px] bg-[#E3E5EA]"></div>
          {/* Right Section */}
          <div className="flex-1">
            <div className="flex items-center justify-end gap-2">
              <Image
                src={CA}
                alt="Canada Flag"
                width={30}
                height={30}
                className="w-[30px] h-[29px] sm:w-8 sm:h-8"
              />
              <span className="text-[#000000] text-[12px] lg:text-[15px] font-normal">
                CAD
              </span>
              <Image
                src={downarrow}
                alt="Down Arrow"
                width={14}
                height={14}
                className="w-3 h-2 lg:w-[14px] lg:h-[14px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Details Section */}
      <div className="hidden md:block">
        <div className="flex flex-col sm:flex-row gap-2 py-4 text-gray-700">
          <Image
            className="sm:ml-5 mx-auto hidden md:block"
            src={left}
            alt="Left Icon"
          />
          <div className="w-full space-y-2 font-poppins text-sm sm:text-[18px]">
            <p className="flex justify-between text-[#333333] font-medium">
              <span>Fees*</span>
              <span>0 CAD</span>
            </p>
            <div className="text-[#989898] leading-7 border-b-[1.25px] pb-1 border-[#ECEEF3]">
              <p className="flex justify-between">
                <span>Transaction fee</span>
                <span>0 CAD</span>
              </p>
              <p className="flex justify-between">
                <span>Bank transfer fee</span>
                <span>0 CAD</span>
              </p>
            </div>
            <p className="flex justify-between font-semibold border-b-[1.25px] pt-[6px] pb-3 border-[#ECEEF3]">
              <span>Amount to convert</span>
              <span>{parseFloat(inr).toFixed(2)} INR</span>
            </p>
            <p className="flex justify-between font-semibold pt-3">
              <span>Exchange rate</span>
              <span>{parseFloat(cad).toFixed(2)} INR</span>
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center gap-3 py-5 ml-5">
          <div className="bg-[#2277C8] w-[42px] h-[42px] rounded-full flex items-center justify-center">
            <Image src={up_down} className="w-[20px] h-[20px]" alt="" />
          </div>
          <div className="flex gap-4 text-[#038D1E] font-poppins text-[16px] leading-[17.6px]">
            <span>1.00 CAD </span>
            <RightArrowIcon />
            <span> {exchangeRate.toFixed(2)} INR</span>
          </div>
        </div>
      </div>

      {/* the get section */}
      <div className="bg-[#EDF7FE] flex items-center lg:h-[74px] rounded-lg">
        <div className="relative flex items-center justify-between p-4 rounded-lg h-[56px] w-full">
          {/* Left Section */}
          <div className="flex-1">
            <label className="text-[#989898] text-[12px] leading-[18px] font-poppins font-medium">
              They get
            </label>
            <input
              type="text"
              inputMode="decimal"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              className="bg-[#EDF7FE] text-[#333333] text-[20px] lg:text-[24px] font-medium leading-[30px] focus:outline-none w-full"
              value={cad}
              onChange={handleCadChange}
              required
            />
          </div>

          {/* Vertical Divider */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-5/6 w-[.76px] bg-[#E3E5EA]"></div>

          {/* Right Section */}
          <div className="flex-1">
            <div className="flex items-center justify-end gap-2">
              <Image
                src={IN}
                alt="India Flag"
                width={30}
                height={30}
                className="w-[30px] h-[29px] sm:w-8 sm:h-8"
              />
              <span className="text-[#000000] text-[12px] lg:text-[15px] font-normal">
                INR
              </span>
              <Image
                src={downarrow}
                alt="Down Arrow"
                width={14}
                height={14}
                className="w-3 h-2 lg:w-[14px] lg:h-[14px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exchange Rate */}
      <p className="hidden md:block text-right text-sm sm:text-[16px] text-[#989898] mt-2 font-poppins font-medium border-b-[1.25px] pt-1 pb-2 border-[#ECEEF3]">
        1 CAD = {exchangeRate.toFixed(2)} INR
      </p>

      {/* for mobile */}
      <div className="md:hidden px-4 flex mt-4 border-b pb-2 border-[#ECEEF3] justify-between text-[#989898] text-[14px] font-medium font-poppins">
        <span className="leading-[21px]">Fees*</span>
        <span className="leading-[21px]">0 CAD</span>
      </div>

      {/* Payment Options */}
      <div className="lg:px-2 flex sm:flex-row items-center justify-between py-6 font-poppins relative">
        {/* Custom Dropdown */}
        <div
          className="max-w-[50%] rounded-lg font-poppins relative"
          ref={dropdownRef}
        >
          <div className="flex">
            <p className="text-[#727272] text-[12px] md:text-[16px] font-medium">
              Pay with:
            </p>
            <div
              className="w-[90px] md:w-[130px] bg-white rounded-lg px-1 lg:px-2 cursor-pointer flex justify-between items-center"
              onClick={toggleDropdown}
            >
              <span className="w-[90px] text-[#038D1E] truncate text-[12px] md:text-[16px] font-medium">
                {paymentMethod}
              </span>
              <span
                className={`transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <Image
                  src={downarrow}
                  alt="Down Arrow"
                  width={14}
                  height={14}
                  className="w-3 h-3 lg:w-[14px] md:h-[14px] transition-transform duration-200 ease-in-out"
                />
              </span>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {paymentOptions.map((option, index) => (
                <li
                  key={index}
                  className="px-2 py-2 cursor-pointer hover:bg-gray-200 text-[12px] md:text-[16px]"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}

          <p className="text-center text-[#1A5996] mt-1 lg:mt-0 font-medium text-[12px] md:text-[16px]">
            Free
          </p>
        </div>

        {/* Responsive Border */}
        <div className="sm:block absolute left-1/2 transform -translate-x-1/2 h-4/6 w-[.75px] bg-[#E3E5EA]"></div>

        <div className=" text-center text-[#727272] text-[12px] md:text-[16px] font-medium">
          <span className="text-[12px] md:text-[16px]">
            Estimated delivery time
          </span>
          <p className="text-[#1A5996] text-[12px] md:text-[16px] text-center mt-1 font-medium">
            1-3 Days
          </p>
        </div>
      </div>
      {/* Lock in Rate Button */}
      <div className="pb-5">
        <button
          onClick={lockInRate}
          className="send_money_btn w-full  h-12 sm:h-[74px] font-poppins text-[16px] font-semibold sm:text-[24px]  text-white rounded-lg hover:bg-blue-700 transition"
        >
          Lock in Rate & Continue
        </button>
      </div>
    </div>
  );
};

export default ExchangeBox;