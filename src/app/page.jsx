import Hero from "@/Components/Hero";
import SectionFeatures from "@/Components/SectionFeatures";
import SectionPopularProducts from "@/Components/SectionPopularProducts";
import SectionTestimonials from "@/Components/SectionTestimonials";
import SectionCTA from "@/Components/SectionCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionFeatures />
      <SectionPopularProducts />
      <SectionTestimonials />
      <SectionCTA />
    </main>
  );
}
