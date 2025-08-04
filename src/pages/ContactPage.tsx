import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import OfferSlider from "@/components/productsSlider";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronUp,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  Users,
} from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `مرحباً، أنا ${formData.name}%0Aرقم الهاتف: ${formData.phone}%0A%0Aالرسالة:%0A${formData.message}`;
    window.open(`https://wa.me/01011482752?text=${whatsappMessage}`, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      details: ["01011482752", "0220463821"],
      action: "tel:+201011482752",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      details: ["01011482752"],
      action: "https://wa.me/+201011482752",
    },
    {
      icon: MapPin,
      title: "العنوان",
      details: ["أسواق المصطفى", "متوفرون في جميع أنحاء مصر"],
      action: null,
    },
    {
      icon: Clock,
      title: "مواعيد العمل",
      details: ["يومياً من 8 صباحاً", "حتى 12 منتصف الليل"],
      action: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-l from-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">اتصل بنا</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              نحن هنا للمساعدة! تواصل معنا في أي وقت ولأي استفسار
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border border-neutral-light group"
                  >
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-dark mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1   text-xl">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-neutral-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    {info.action && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => {
                          if (info.action.startsWith("tel:")) {
                            window.location.href = info.action;
                          } else {
                            window.open(info.action, "_blank");
                          }
                        }}
                      >
                        {info.title === "الهاتف" ? "اتصل الآن" : "تواصل"}
                      </Button>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  أرسل لنا رسالة
                </h2>
                <p className="text-lg text-neutral-medium mb-8 leading-relaxed">
                  يمكنك التواصل معنا من خلال النموذج التالي وسنقوم بالرد عليك في
                  أقرب وقت ممكن. أو يمكنك التواصل المباشر عبر الواتساب للحصول
                  على رد فوري.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-bold text-neutral-dark">
                        واتساب سريع
                      </h4>
                      <p className="text-sm text-neutral-medium">
                        للرد الفوري والطلبات العاجلة
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-secondary/5 rounded-lg">
                    <Users className="w-6 h-6 text-secondary" />
                    <div>
                      <h4 className="font-bold text-neutral-dark">
                        خدمة عملاء 24/7
                      </h4>
                      <p className="text-sm text-neutral-medium">
                        متوفرون لخدمتكم في جميع الأوقات
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-white border border-neutral-light shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                      الاسم
                    </label>
                    <Input
                      type="text"
                      placeholder="اكتب اسمك"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                      رقم الهاتف
                    </label>
                    <Input
                      type="tel"
                      placeholder="01xxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                      الرسالة
                    </label>
                    <Textarea
                      placeholder="اكتب رسالتك أو استفسارك هنا..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white border-none"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    إرسال عبر الواتساب
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-neutral-light text-center">
                  <p className="text-sm text-neutral-medium mb-4">
                    أو تواصل مباشرة عبر:
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open("https://wa.me/+201011482752", "_blank")
                      }
                      className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4 ml-1" />
                      واتساب
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        (window.location.href = "tel:+201011482752")
                      }
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Phone className="w-4 h-4 ml-1" />
                      اتصال
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Contact Section */}
        {/* <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              تحتاج مساعدة فورية؟
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              فريق خدمة العملاء متوفر على مدار الساعة لمساعدتك في أي استفسار أو
              طلب
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-2 border-white/50 hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
                onClick={() =>
                  window.open("https://wa.me/01011482752", "_blank")
                }
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                راسلنا على الواتساب
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-2 border-white/50 hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
                onClick={() => (window.location.href = "tel:01011482752")}
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا الآن
              </Button>
            </div>
          </div>
        </section> */}

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

export default ContactPage;
