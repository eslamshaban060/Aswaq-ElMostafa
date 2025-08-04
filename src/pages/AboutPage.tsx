import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OfferSlider from "@/components/productsSlider";
import {
  ChevronUp,
  Heart,
  Shield,
  Truck,
  Star,
  Users,
  Clock,
  Award,
} from "lucide-react";

const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    {
      icon: Heart,
      title: "خدمة بحب واهتمام",
      description: "بنهتم نوفّر لك تجربة تسوّق سهلة ومريحة كل يوم",
    },
    {
      icon: Shield,
      title: "جودة مضمونة",
      description: "منتجات مختارة بعناية لتلبية احتياجاتك اليومية",
    },
    {
      icon: Truck,
      title: "توصيل سريع وآمن",
      description: "نوصل طلباتك في أسرع وقت وبأعلى مستوى من الخدمة",
    },
    {
      icon: Star,
      title: "عروض وتوفير",
      description: "أسعار مناسبة وعروض مستمرة تناسب كل بيت",
    },
  ];

  const stats = [
    { icon: Users, number: "2,000+", label: "عميل راضي" },
    { icon: Clock, number: "5+", label: "سنوات من الثقة" },
    { icon: Award, number: "500+", label: "منتج متنوع" },
    { icon: Truck, number: "7 أيام", label: "خدمة توصيل مستمرة" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-l from-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">من نحن</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              أسواق المصطفى - راحتك وجودتك في كل تفاصيل التسوّق
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  قصتنا
                </h2>
                <div className="space-y-4 text-lg text-neutral-dark leading-relaxed">
                  <p>
                    بدأت أسواق المصطفى بهدف بسيط: نوفر منتجات يومية بجودة ممتازة
                    وأسعار مناسبة لكل بيت.
                  </p>
                  <p>
                    من أول يوم، التزمنا إنك تلاقي كل احتياجاتك تحت سقف واحد —
                    خضروات وفاكهة، لحوم طازجة، منتجات مجمدة، وسلع أساسية.
                  </p>
                  <p>
                    فريقنا بيشتغل على مدار الساعة لاختيار أفضل المنتجات وتقديم
                    خدمة تحترم وقتك واحتياجاتك.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-neutral-medium">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-neutral-light/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                لماذا تختارنا؟
              </h2>
              <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
                نحن لا نقدم مجرد منتجات، بل نقدم تجربة تسوق كاملة ومريحة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border border-neutral-light"
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-dark mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">رسالتنا</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              "نهدف إلى تقديم أفضل تجربة تسوق ممكنة بجودة عالية، أسعار مناسبة،
              وخدمة محترمة ترضي كل بيت"
            </p>
            <Button
              variant="outline"
              size="lg"
              className=" text-green-800 border-2 border-white/50 hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
              onClick={() => window.open("https://wa.me/01011482752", "_blank")}
            >
              تواصل معنا
            </Button>
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

export default AboutPage;
