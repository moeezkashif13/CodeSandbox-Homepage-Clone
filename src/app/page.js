import { Reviews } from "@/components/Client/Homepage";
import ScrollAnimationPractice from "@/components/Client/ScrollAnimationPractice";
import Footer from "@/components/Footer";
import HeroSect from "@/components/HeroSect";
import ThreeDivs from "@/components/ThreeDivs";

export default function Home() {
  return (
    <div>
      <HeroSect />

      <ScrollAnimationPractice />

      <ThreeDivs />

      <Reviews />
    </div>
  );
}
