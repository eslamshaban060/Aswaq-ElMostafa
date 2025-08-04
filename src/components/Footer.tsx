import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* معلومات الشركة */}
          <div>
            <h3 className="text-2xl font-bold mb-4">أسواق المصطفى</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              وجهتك الأولى لجميع احتياجاتك اليومية بأفضل الأسعار وأعلى جودة. نحن
              هنا لنجعل تتسوقك أسهل وأسرع.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/01011482752"
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  جميع المنتجات
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  الأقسام
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* الأقسام */}
          <div>
            <h4 className="text-lg font-semibold mb-4">أقسامنا</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products?category=fresh"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  خضروات وفواكه
                </a>
              </li>
              <li>
                <a
                  href="/products?category=dairy"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ألبان ومنتجاتها
                </a>
              </li>
              <li>
                <a
                  href="/products?category=frozen"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  مجمدات
                </a>
              </li>
              <li>
                <a
                  href="/products?category=bakery"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  مخبوزات
                </a>
              </li>
              <li>
                <a
                  href="/products?category=drinks"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  مشروبات
                </a>
              </li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div
                className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"
                onClick={() => (window.location.href = "tel:01011482752")}
              >
                <Phone className="w-5 h-5 text-white/80" />
                <span className="text-white/80">01011482752</span>
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"
                onClick={() => (window.location.href = "tel:01159214390")}
              >
                <Phone className="w-5 h-5 text-white/80" />
                <span className="text-white/80">01159214390</span>
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"
                onClick={() => (window.location.href = "tel:0220463821")}
              >
                <Phone className="w-5 h-5 text-white/80" />
                <span className="text-white/80">0220463821</span>
              </div>
              <div
                className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"
                onClick={() =>
                  window.open("https://wa.me/01011482752", "_blank")
                }
              >
                <MessageCircle className="w-5 h-5 text-white/80" />
                <span className="text-white/80">واتساب: 01011482752</span>
              </div>
              {/* <div className="flex items-center gap-3">
                {/* <Mail className="w-5 h-5 text-white/80" /> */}
              {/* <span className="text-white/80">info@almostafa-market.com</span> 
              </div> */}
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="text-white/80">القاهرة، مصر</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white/80" />
                <span className="text-white/80">متاح 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 أسواق المصطفى. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
