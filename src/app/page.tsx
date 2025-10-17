import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import Walkman from "@/components/Walkman";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <GallerySection />
      <Walkman />
      <FooterSection />
    </main>
  );
}
