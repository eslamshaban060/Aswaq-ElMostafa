import { Menu, Phone, MapPin, Star, Shield, MessageCircle } from "lucide-react";
import { FaPhone } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-primary  relative z-40">
        {/* شريط علوي للمعلومات - الأخضر الداكن */}
        <div className="bg-primary py-3">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center text-white text-sm">
              <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                <div
                  className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
                  onClick={() => (window.location.href = "tel:01011482752")}
                >
                  <FaPhone className="w-4 h-4" />
                  <span className="font-medium">01011482752</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <MapPin className="w-4 h-4" />
                  <span>خدمة توصيل سريعة </span>
                </div>
                <div className="hidden md:flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Shield className="w-4 h-4" />
                  <span>ضمان الجودة والطازجة</span>
                </div>
                <div className="hidden lg:flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Star className="w-4 h-4 text-offer" />
                  <span> بنوفرلك كل المنتجات فى مكان واحد </span>
                </div>
                <div
                  className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
                  onClick={() =>
                    window.open("https://wa.me/01011482752", "_blank")
                  }
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">واتساب: 01011482752</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الهيدر الرئيسي - أبيض نقي */}
        <div className="bg-white shadow-lg border-b border-neutral-light/30">
          <div className="container mx-auto px-4 py-4 lg:py-6">
            {/* الصف الأول: اللوجو وشريط البحث والأزرار */}
            <div className="flex items-center justify-between gap-4">
              {/* اللوجو */}
              <div className="flex-shrink-0">
                <div className="text-center lg:text-right">
                  <h1
                    className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary leading-tight cursor-pointer"
                    onClick={() => (window.location.href = "/")}
                  >
                    أسواق المصطفى
                  </h1>
                  <p className="text-xs lg:text-sm text-neutral-medium mt-1 font-medium hidden sm:block">
                    كل اللي بتدور عليه في مكان واحد
                  </p>
                </div>
              </div>

              {/* شريط البحث - وسط */}
              <div className="flex-1 max-w-md mx-4 hidden md:block">
                <SearchBar />
              </div>

              {/* أيقونات العمل */}
              <div className="flex items-center gap-3 lg:gap-4">
                {/* واتساب */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="hidden lg:flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-none px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    window.open("https://wa.me/01011482752", "_blank")
                  }
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden xl:inline font-medium">واتساب</span>
                </Button>

                {/* واتساب للموبايل */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full h-12 w-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    window.open("https://wa.me/+201011482752", "_blank")
                  }
                >
                  <MessageCircle className="w-6 h-6" />
                </Button>

                {/* قائمة الهامبرجر */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 text-primary transition-all duration-300 rounded-full h-12 w-12 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* شريط البحث للموبايل */}
            <div className="md:hidden mt-4">
              <SearchBar />
            </div>

            {/* الميزات للموبايل */}
            <div className="flex items-center justify-center gap-4 mt-4 sm:hidden">
              <div className="flex items-center gap-2 px-3 py-1 bg-neutral-light rounded-lg">
                <Shield className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium text-primary">
                  جودة مضمونة
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-offer/10 rounded-lg">
                <Star className="w-3 h-3 text-offer" />
                <span className="text-xs font-medium text-neutral-dark">
                  أسعار منافسة
                </span>
              </div>
            </div>
          </div>

          {/* شريط التنقل للديسكتوب فقط */}
          <div className="hidden lg:block border-t border-gradient-to-r from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-center">
                <div className="flex items-center space-x-reverse space-x-2 bg-gradient-to-r from-neutral-light/80 to-neutral-light rounded-full p-2 shadow-lg backdrop-blur-sm">
                  {[
                    { name: "الرئيسية", href: "/" },
                    { name: "جميع المنتجات", href: "/products" },
                    { name: "الأقسام", href: "/categories" },
                    { name: "من نحن", href: "/about" },
                    { name: "اتصل بنا", href: "/contact" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="relative text-neutral-dark hover:text-primary transition-all duration-300 font-medium text-sm xl:text-base py-2 px-4 xl:py-3 xl:px-6 rounded-full hover:bg-white/80 group hover:shadow-lg transform hover:scale-105"
                    >
                      {item.name}
                      <span className="absolute bottom-1 right-1/2 transform translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 group-hover:w-3/4"></span>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </header>
    </>
  );
};

export default Header;
