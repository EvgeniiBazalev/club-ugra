import Image from "next/image";
import CarouselMain from "./components/UI/CarouselMain/CarouselMain";
import Pricing from "./components/UI/Pricing/Pricing";
import Feedbacks from "./components/UI/Feedbacks/Feedbacks";

export default function Home() {
  return (
    <main>
      <CarouselMain />
      <Pricing />
      <Feedbacks />
    </main>
  );
}
