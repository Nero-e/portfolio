import LandingHeader from "@/components/LandingHeader";
import MainSection from "@/components/MainSection";
import SecondSection from "@/components/SecondSection";
import Image from "next/image";
import Animation from "@/components/Animation";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="relative w-full h-screen overflow-auto">
        <div className="snap-start">
          <MainSection />
        </div>
        <div className="snap-start">
          <SecondSection/>
        </div>
        <div>
          {/* <Animation/> */}
        </div>
      </main>
    </>
  );
}
