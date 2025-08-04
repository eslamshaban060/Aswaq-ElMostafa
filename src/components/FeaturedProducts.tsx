import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const FeaturedProducts = () => {
  // نأخذ أول 8 منتجات من العروض
  const featuredProducts = products
    .filter((product) => product.isOffer)
    .slice(0, 8);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              عروض مميزة
            </h2>
            <p className="text-xl text-muted-foreground">
              اكتشف أفضل العروض على منتجاتنا المختارة
            </p>
          </div>
          <a href="/products">
            {" "}
            <Button variant="outline" className="hidden md:flex">
              مشاهدة الكل
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">
            مشاهدة جميع العروض
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
