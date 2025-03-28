import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeftSection from "@/components/LeftSection";
import RightBar from "@/components/RightBar";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen flex flex-col ">
      <Header />
      <div className="flex w-full flex-1   bg-[#121212] relative ">
        <LeftSection />
        <RightBar />
        <Footer />
      </div>
    </div>
  );
}

export default page;
