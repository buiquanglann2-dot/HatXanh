import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
}
