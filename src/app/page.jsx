import Image from "next/image";
import CarouselMain from "@/components/UI/CarouselMain/CarouselMain";
import Pricing from "@/components/UI/Pricing/Pricing";
import Feedbacks from "@/components/UI/Feedbacks/Feedbacks";
import FAQ from "@/components/UI/FAQ/FAQ";
import FAQGrid from "@/components/UI/FAQ/FAQGrid";

export default function Home() {
  return (
    <main>
      <CarouselMain />
      <Pricing />
      <Feedbacks />
      <FAQGrid />
      {/* <FAQ /> */}
    </main>
  );
}
