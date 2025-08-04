import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OfferSlider from "@/components/productsSlider";
import {
  Apple,
  Milk,
  Snowflake,
  Cookie,
  Coffee,
  Beef,
  ChevronUp,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = [
  {
    id: 1,
    name: "خضروات وفواكه",
    icon: Apple,
    color: "fresh",
    link: "/category/خضروات%20وفواكه",
    bgColor: "#f0f9ff",
    iconColor: "#16a34a",
    description: "أطازج الخضروات والفواكه الموسمية بأفضل الأسعار",
  },
  {
    id: 2,
    name: "ألبان ومنتجاتها",
    icon: Milk,
    color: "trust",
    link: "/category/ألبان%20ومنتجاتها",
    bgColor: "#eff6ff",
    iconColor: "#2563eb",
    description: "منتجات الألبان الطازجة والأجبان المتنوعة",
  },
  {
    id: 3,
    name: "مجمدات",
    icon: Snowflake,
    color: "primary",
    link: "/category/مجمدات",
    bgColor: "#ecfeff",
    iconColor: "#0891b2",
    description: "مجمدات عالية الجودة ومحفوظة بعناية",
  },
  {
    id: 4,
    name: "مخبوزات",
    icon: Cookie,
    color: "offer",
    link: "/category/مخبوزات",
    bgColor: "#fff7ed",
    iconColor: "#ea580c",
    description: "مخبوزات طازجة يومياً من أفضل المخابز",
  },
  {
    id: 5,
    name: "مشروبات",
    icon: Coffee,
    color: "fresh",
    link: "/category/مشروبات",
    bgColor: "#fffbeb",
    iconColor: "#d97706",
    description: "مشروبات متنوعة ساخنة وباردة لجميع الأذواق",
  },
  {
    id: 6,
    name: "لحوم ودجاج",
    icon: Beef,
    color: "trust",
    link: "/category/لحوم%20ودجاج",
    bgColor: "#fef2f2",
    iconColor: "#dc2626",
    description: "لحوم طازجة ودجاج بلدي بأعلى معايير الجودة",
  },
];

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getProductsByCategory = (categoryId: number) => {
    return products.filter(
      (product) =>
        product.category ===
        categories.find((cat) => cat.id === categoryId)?.name
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-l from-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              جميع الأقسام
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              اكتشف مجموعة واسعة من المنتجات في جميع الأقسام المختلفة
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                const categoryProducts = getProductsByCategory(category.id);

                return (
                  <Card
                    key={category.id}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-neutral-light overflow-hidden"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category.id ? null : category.id
                      )
                    }
                  >
                    <div className="p-8 text-center">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                        style={{ backgroundColor: category.bgColor }}
                      >
                        <IconComponent
                          className="w-10 h-10 transition-colors duration-300"
                          style={{ color: category.iconColor }}
                        />
                      </div>

                      <h3 className="font-bold text-xl text-neutral-dark mb-3 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>

                      <p className="text-neutral-medium mb-4">
                        {category.description}
                      </p>

                      <div className="flex items-center align-items-center justify-center ">
                        {/* <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {category.count}
                        </span> */}
                        <a href={category.link}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary   hover:text-white"
                          >
                            استكشف القسم
                          </Button>
                        </a>
                      </div>
                    </div>

                    {/* Products Preview */}
                    {/* {selectedCategory === category.id && (
                      <div className="border-t border-neutral-light bg-neutral-light/30 p-6">
                        <h4 className="font-bold text-lg mb-4 text-neutral-dark">منتجات من هذا القسم:</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {categoryProducts.slice(0, 4).map((product) => (
                            <div key={product.id} className="bg-white rounded-lg p-3 shadow-sm">
                              <div className="w-full h-24 bg-neutral-light rounded mb-2"></div>
                              <h5 className="font-medium text-sm text-neutral-dark mb-1">{product.name}</h5>
                              <p className="text-xs text-primary font-bold">{product.currentPrice} جنيه</p>
                            </div>
                          ))}
                        </div>
                        {categoryProducts.length > 4 && (
                          <p className="text-center text-sm text-neutral-medium mt-4">
                            و {categoryProducts.length - 4} منتج آخر...
                          </p>
                        )}
                      </div>
                    )} */}
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      </main>
      <OfferSlider />
      <Footer />
    </div>
  );
};

export default CategoryPage;
