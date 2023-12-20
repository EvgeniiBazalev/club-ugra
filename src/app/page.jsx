import Image from "next/image";
import CarouselMain from "@/components/PagesComponents/MainPage/CarouselMain/CarouselMain";
import Pricing from "@/components/PagesComponents/MainPage/Pricing/Pricing";
import Feedbacks from "@/components/PagesComponents/MainPage/Feedbacks/Feedbacks";
import FAQ from "@/components/PagesComponents/MainPage/FAQ/FAQ";
import FAQGrid from "@/components/PagesComponents/MainPage/FAQ/FAQGrid";

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
