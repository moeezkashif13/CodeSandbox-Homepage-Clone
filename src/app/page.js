import { Reviews } from "@/components/Client/Homepage";
import Footer from "@/components/Footer";
import HeroSect from "@/components/HeroSect";
import ThreeDivs from "@/components/ThreeDivs";

export default function Home() {
  return (
    <div>
      <HeroSect />

      <ThreeDivs />

      <Reviews />
    </div>
  );
}
