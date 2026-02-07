import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import BestSellers from '@/components/home/BestSellers';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <HeroSection />
      <CategoryGrid />
      <BestSellers />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
