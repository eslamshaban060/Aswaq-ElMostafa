import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Truck,
  CreditCard,
  Smartphone,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-supermarket.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-24 overflow-hidden">
      {/* خلفية مع تأثير متطور */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="أسواق المصطفى"
          className="w-full h-full object-cover"
        />
      </div>

      {/* تأثيرات بصرية */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-offer/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* النص */}
          <div className="text-right text-white animate-fade-in">
            {/* <div className="flex items-center gap-2 mb-4">
              {/* <span className="text-yellow-300 font-semibold text-lg">مرحباً بك في</span> 
            </div> */}

            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-5">
              <Sparkles className="w-6 h-6 inline-block me-2   text-yellow-300" />
              <span className="leading-[70px]">
                كل اللي بتدور عليه...
                <span className="text-yellow-300  mt-2">
                  هتلقيه في مكان واحد!
                </span>
              </span>
            </h2>

            <p className="text-xl lg:text-2xl mb-10 text-white/90 leading-arabic font-medium">
              في أسواق المصطفى، جمّعنا لك كل احتياجات بيتك في مكان واحد: مواد
              غذائية، مجمدات، ألبان، عطارة، علافة – وكل ده بجودة ممتازة وأسعار
              لا تقبل المنافسة!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a className="w-[100%]" href="/products">
                <Button
                  variant="hero"
                  size="xl"
                  className="shadow-elevated hover:scale-105 transition-all-smooth w-[100%] "
                >
                  <ShoppingCart className="w-6 h-6 ml-3" />
                  ابدأ التسوق الآن
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="xl"
                className="bg-white text-primary hover:bg-neutral-light border-2 border-white hover:border-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold"
                onClick={() =>
                  window.open(
                    "https://wa.me/+201011482752?text=مرحباً، أريد طلب منتجات من أسواق المصطفى",
                    "_blank"
                  )
                }
              >
                اطلب من واتساب
              </Button>
            </div>

            {/* المزايا */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  icon: Truck,
                  title: "توصيل سريع",
                  subtitle: "خلال ساعة واحدة",
                  color: "bg-blue-500/20",
                },
                {
                  icon: CreditCard,
                  title: "دفع مرن",
                  subtitle: "فوري أو كاش",
                  color: "bg-green-500/20",
                },
                {
                  icon: Smartphone,
                  title: "طلب واتساب",
                  subtitle: "من راحة بيتك",
                  color: "bg-purple-500/20",
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-white/90 group hover:text-white transition-all-smooth"
                  >
                    <div
                      className={`${feature.color} backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-all-smooth`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{feature.title}</p>
                      <p className="text-sm text-white/70">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* الصورة */}
          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-elevated border border-white/20">
              <img
                src={heroImage}
                alt="منتجات أسواق المصطفى"
                className="w-full h-auto rounded-2xl shadow-lg"
              />

              {/* بطاقة عرض متطورة */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-offer text-offer-foreground p-6 rounded-2xl shadow-elevated border-4 border-white/20">
                <p className="font-bold text-xl mb-1">خصم حتى 30%</p>
                <p className="text-sm opacity-90">على منتجات مختارة</p>
                <div className="absolute top-2 left-2">
                  <Sparkles className="w-5 h-5 text-yellow-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
