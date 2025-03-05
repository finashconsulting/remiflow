import React from "react";
import ExcitingNews from "./component/ExcitingNews";
import PromoSection from "./component/PromoSection";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Features from "@/app/component/Features";
import FAQ from "./component/FAQ";
import MoneyTransfer from "./component/MoneyTransfer/MoneyTransfer";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MoneyTransfer/>
      <ExcitingNews />
      <Features />
      <FAQ />
      <PromoSection />
      <Footer />
    </div>
  );
}
