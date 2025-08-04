import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import OfferSlider from "@/components/productsSlider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <About />
        <OfferSlider />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
