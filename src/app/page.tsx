import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeftSection from "@/components/LeftSection";
import RightBar from "@/components/RightBar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col mb-[#102px]">
      <Header />
      <div className="flex w-full flex-1   bg-[#121212] relative ">
        <LeftSection />
        <RightBar />
      </div>
      <Footer />
    </div>
  );
}
