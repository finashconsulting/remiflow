import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo/logo.svg";
import mobileLogo from "@/public/images/logo/new-logo.svg";
import x from "@/public/images/X Logo.svg";
import youtube from "@/public/images/Logo YouTube.svg";
import linkedIn from "@/public/images/LinkedIn.svg";
import instagram from "@/public/images/Logo Instagram.svg";
import FacebookIcon from "./svg/FacebookIcon";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-white border-b border-[#D9D9D9] md:hidden h-16"></div>
      <div
        className="max-w-[1250px] mx-auto px-6 lg:px-0 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
"
      >
        <div className="hidden md:block" data-aos="fade-up">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={198}
                height={53}
                quality={100}
                priority
                className="md:block hidden"
              />
            </Link>
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61572951115848&mibextid=wwXIfr&mibextid=wwXIfr"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/remiflowofficial?igsh=b3Q5azV1bDcxYjlh"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              <Image src={instagram} alt="" width={24} height={24} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image src={linkedIn} alt="" width={24} height={24} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image src={x} alt="" width={24} height={24} />
            </Link>
            {/* <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image src={youtube} alt="" width={24} height={24} />
            </Link> */}
            
          </div>
        </div>
        <div className="font-poppins" data-aos="fade-up">
          <h3 className="text-[16px] font-poppins  lg:text-[#1E1E1E] text-[#26769C] font-semibold mb-2">
            Useful Links
          </h3>
          <ul className="space-y-2 text-[#557280] md:text-[#1E1E1E] leading-6">
            <li>
              <Link href="/" className="hover:text-[#2B95FA] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[#2B95FA] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#send-money"
                className="hover:text-[#2B95FA] transition"
              >
                Send Money
              </Link>
            </li>
            <li>
              <Link
                href="#view-rates"
                className="hover:text-[#2B95FA] transition"
              >
                View Rates
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#2B95FA] transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-[#2B95FA] transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="font-poppins" data-aos="fade-up">
          <h3 className="text-[16px] lg:text-[#1E1E1E] text-[#26769C] font-semibold mb-2">
            Explore
          </h3>
          <ul className="space-y-2 text-[#557280] md:text-[#1E1E1E] leading-6">
            <li>
              <Link
                href="#privacy-policy"
                className="hover:text-[#2B95FA] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#terms-and-conditions"
                className="hover:text-[#2B95FA] transition"
              >
                Terms and Condition
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-[#2B95FA] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#refer-a-friend"
                className="hover:text-[#2B95FA] transition"
              >
                Refer a Friend
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:bg-[#F9FAFB] border-t pb-5 md:pb-0">
        <div className="max-w-[1250px] mx-auto py-4">
          <div className="flex items-center gap-2 lg:gap-10 ">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={198}
                height={53}
                quality={100}
                priority
                className="md:block hidden"
              />

              <Image
                src={mobileLogo}
                alt="Mobile Logo"
                width={160}
                height={46}
                quality={100}
                priority
                className="md:hidden"
              />
            </Link>
            <p className="text-[#134370] text-[13px] lg:text-[16px] font-poppins leading-[21px] lg:leading-[26px]">
              © 2025 Remiflow. All Rights Reserved.
            </p>
          </div>
          <div className="md:hidden">
            <div className="flex items-center justify-center space-x-4 mt-4 ">
              <Link target="_blank" href="https://www.facebook.com/profile.php?id=61572951115848&mibextid=wwXIfr&mibextid=wwXIfr" className="text-gray-600 hover:text-gray-900">
                <FacebookIcon/>
              </Link>
              <Link href="https://www.instagram.com/remiflowofficial?igsh=b3Q5azV1bDcxYjlh" target="_blank" className="text-gray-600 hover:text-gray-900">
                <Image src={instagram} alt="" width={24} height={24} />
              </Link>
             
              
              {/* <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Image src={youtube} alt="" width={24} height={24} />
              </Link> */}
              <Link href="#" target="_blank" className="text-gray-600 hover:text-gray-900">
                <Image src={linkedIn} alt="" width={24} height={24} />
              </Link>
              <Link href="#" target="_blank" className="text-gray-600 hover:text-gray-900">
                <Image src={x} alt="" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
