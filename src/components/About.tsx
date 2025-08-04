import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  CreditCard,
  Smartphone,
  Award,
  Users,
  Clock,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Truck,
      title: "توصيل سريع",
      description: "خدمة توصيل في أقل من ساعة لجميع أنحاء المدينة",
    },
    {
      icon: CreditCard,
      title: "دفع مرن",
      description: "إمكانية الدفع النقدي أو الإلكتروني حسب راحتك",
    },
    {
      icon: Smartphone,
      title: "طلب واتساب",
      description: "اطلب منتجاتك بسهولة عبر واتساب من منزلك",
    },
    {
      icon: Award,
      title: "جودة مضمونة",
      description: "منتجات عالية الجودة مع ضمان الطزاجة والجودة",
    },
    {
      icon: Users,
      title: "خدمة عملاء ممتازة",
      description: "فريق خدمة عملاء متاح 24/7 لمساعدتك",
    },
    {
      icon: Clock,
      title: "مواعيد مرنة",
      description: "اختر الموعد المناسب لك لاستلام طلبك",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-secondary/30 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">من نحن؟</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              <span className="text-2xl font-bold text-primary block mb-4">
                كل اللي تحتاجه لبيتك... في مكان واحد 🛒✨
              </span>
              في أسواق المصطفى، هدفنا نوفر لك كل احتياجاتك اليومية بأسهل طريقة
              ممكنة. من المواد الغذائية والمجمدات، لأفضل منتجات الألبان والعطارة
              والعلافة – وكل ده بجودة مضمونة وأسعار تنافسية.
            </p>

            <div className="text-xl text-foreground font-semibold mb-6">
              ليه تختارنا؟
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-lg text-foreground mb-8">
              <div className="flex items-center justify-center gap-2">
                <span>🛵</span>
                <span>توصيل سريع لحد باب البيت.</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>💳</span>
                <span>خيارات دفع مرنة: كاش أو أونلاين.</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>📱</span>
                <span>اطلب بكل سهولة من خلال واتساب.</span>
              </div>
            </div>

            <p className="text-xl font-bold text-primary">
              وفّر وقتك، وخلّي التسوق أسهل وأسرع مع أسواق المصطفى.
            </p>
          </div>
        </div>

        {/* المميزات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-card transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
