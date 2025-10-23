import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales";
import PromoCarousel from "./components/PromoCarousel";

export default function Home() {
  return (
    <div className="px-8">
      <Hero />
  <PromoCarousel />
  <FlashSales />
    </div>
  );
}
