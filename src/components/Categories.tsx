import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "@/components/ui/card";
import { Apple, Milk, Snowflake, Cookie, Coffee, Beef } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "ألبان ومنتجاتها",
    icon: Milk,
    count: "تصفح المنتجات",
    bgColor: "#eff6ff",
    iconColor: "#2563eb",
  },
  {
    id: 2,
    name: "مشروبات",
    icon: Coffee,
    count: "تصفح المنتجات",
    bgColor: "#fffbeb",
    iconColor: "#d97706",
  },
  {
    id: 3,
    name: "خضروات وفواكه",
    icon: Apple,
    count: "تصفح المنتجات",
    bgColor: "#f0f9ff",
    iconColor: "#16a34a",
  },
  {
    id: 4,
    name: "مواد غذائية",
    icon: Snowflake,
    count: "تصفح المنتجات",
    bgColor: "#ecfeff",
    iconColor: "#0891b2",
  },
  {
    id: 5,
    name: "معلبات",
    icon: Cookie,
    count: "تصفح المنتجات",
    bgColor: "#fff7ed",
    iconColor: "#ea580c",
  },
];

const Categories = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    rtl: true,
    speed: 500,
    swipeToSlide: false,
    variableWidth: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
    arrows: true,
    dots: false,
    autoplay: true,
  };

  return (
    <section
      id="categories"
      className="py-8 overflow-hidden md:py-16 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">
            تسوق حسب القسم
          </h2>
          <p className="text-sm md:text-lg text-neutral-medium max-w-2xl mx-auto">
            اختر من مجموعة واسعة من الأقسام المختلفة لتلبية جميع احتياجاتك
            اليومية
          </p>
        </div>
        <div dir="rtl">
          <Slider {...settings}>
            {categories.map((category) => (
              <div key={category.id} className="px-1">
                <Card
                  onClick={() =>
                    (window.location.href = `/category/${category.name}`)
                  }
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white border border-neutral-light flex-none"
                  style={{ width: "10rem", maxWidth: "100%" }}
                >
                  <div className="p-4 md:p-6 text-center">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: category.bgColor }}
                    >
                      <category.icon
                        className="w-6 h-6 md:w-8 md:h-8 transition-colors duration-300"
                        style={{ color: category.iconColor }}
                      />
                    </div>
                    <h3 className="font-bold text-xs md:text-sm lg:text-base text-neutral-dark mb-1 md:mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-medium">
                      {category.count}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center mt-6 md:hidden">
          <p className="text-xs text-neutral-medium">
            اسحب لليمين أو اليسار لرؤية المزيد
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
