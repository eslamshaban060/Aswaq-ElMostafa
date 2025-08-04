import { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Grid, List } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("جميع الأقسام");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // فلترة حسب النص
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // فلترة حسب القسم
    if (selectedCategory !== "جميع الأقسام") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // ترتيب المنتجات
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort(
          (a, b) => a.currentPrice - b.currentPrice
        );
        break;
      case "price-high":
        filtered = [...filtered].sort(
          (a, b) => b.currentPrice - a.currentPrice
        );
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered = [...filtered].sort((a, b) =>
          a.name.localeCompare(b.name, "ar")
        );
        break;
      case "offers":
        filtered = [...filtered].sort(
          (a, b) => (b.isOffer ? 1 : 0) - (a.isOffer ? 1 : 0)
        );
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* العنوان */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            جميع المنتجات
          </h1>
          <p className="text-xl text-muted-foreground">
            اكتشف مجموعتنا الواسعة من المنتجات عالية الجودة
          </p>
        </div>

        {/* شريط البحث والفلاتر */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl shadow-md p-6 mb-8 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* البحث */}
            <div className="lg:col-span-2 relative">
              <Input
                type="text"
                placeholder="ابحث عن المنتجات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-2 border-primary/20 focus:border-primary bg-white rounded-xl shadow-sm"
              />
              {/* <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" /> */}
            </div>

            {/* فلتر القسم */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="h-12 border-2 border-primary/20 bg-white rounded-xl shadow-sm focus:ring-2 focus:ring-primary/30">
                <SelectValue placeholder="اختر القسم" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* فلتر الترتيب */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-12 border-2 border-primary/20 bg-white rounded-xl shadow-sm focus:ring-2 focus:ring-primary/30">
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">الافتراضي</SelectItem>
                <SelectItem value="name">الاسم</SelectItem>
                <SelectItem value="price-low">
                  السعر: من الأقل للأعلى
                </SelectItem>
                <SelectItem value="price-high">
                  السعر: من الأعلى للأقل
                </SelectItem>
                <SelectItem value="rating">التقييم</SelectItem>
                <SelectItem value="offers">العروض أولاً</SelectItem>
              </SelectContent>
            </Select>

            {/* عرض النتائج */}
            {/* <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="h-12 w-12 rounded-xl border-2 border-primary/20 hover:border-primary transition-all duration-300"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="h-12 w-12 rounded-xl border-2 border-primary/20 hover:border-primary transition-all duration-300"
              >
                <List className="w-4 h-4" />
              </Button>
            </div> */}
          </div>
        </div>

        {/* النتائج */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            تم العثور على {filteredProducts.length} منتج
            {selectedCategory !== "جميع الأقسام" &&
              ` في قسم "${selectedCategory}"`}
            {searchTerm && ` للبحث "${searchTerm}"`}
          </p>
        </div>

        {/* المنتجات */}
        {filteredProducts.length > 0 ? (
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              لم يتم العثور على منتجات
            </h3>
            <p className="text-muted-foreground mb-6">
              جرب تغيير كلمات البحث أو الفلاتر
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("جميع الأقسام");
                setSortBy("default");
              }}
              variant="fresh"
            >
              إعادة تعيين الفلاتر
            </Button>
          </div>
        )}
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Products;
