import { useState } from "react";
import {
  Home,
  Package,
  Grid3X3,
  Info,
  Phone,
  MessageCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState(false);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral-dark/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-light bg-gradient-to-r from-primary/5 to-secondary/5">
          <h2 className="text-xl font-bold text-primary">القائمة الرئيسية</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 hover:bg-primary/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <div className="space-y-2">
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 text-neutral-dark hover:text-primary transition-all duration-300 group"
              onClick={onClose}
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">الرئيسية</span>
            </a>
            <a
              href="/products"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 text-neutral-dark hover:text-primary transition-all duration-300 group"
              onClick={onClose}
            >
              <Package className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">جميع المنتجات</span>
            </a>
            <a
              href="/categories"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 text-neutral-dark hover:text-primary transition-all duration-300 group"
              onClick={onClose}
            >
              <Grid3X3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">الأقسام</span>
            </a>
            <a
              href="/about"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 text-neutral-dark hover:text-primary transition-all duration-300 group"
              onClick={onClose}
            >
              <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">من نحن</span>
            </a>
            <a
              href="/contact"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 text-neutral-dark hover:text-primary transition-all duration-300 group"
              onClick={onClose}
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">اتصل بنا</span>
            </a>
          </div>

          {/* Categories Section */}
          {/* <div className="mt-6 pt-4 border-t border-neutral-light">
            <button
              onClick={() => setExpandedCategories(!expandedCategories)}
              className="flex items-center justify-between w-full px-4 py-3 text-neutral-dark hover:text-primary font-medium"
            >
              <span>تصفح الأقسام</span>
              <Grid3X3 className="w-5 h-5" />
            </button>

            {expandedCategories && (
              <div className="mt-2 space-y-1 max-h-48 overflow-y-auto">
                {categories.slice(1).map((category) => (
                  <a
                    key={category}
                    href={`/category/${category}`}
                    onClick={onClose}
                    className="block px-6 py-2 text-sm text-neutral-medium hover:text-primary hover:bg-primary/5 rounded transition-all duration-200"
                  >
                    {category}
                  </a>
                ))}
              </div>
            )}
          </div> */}
        </nav>

        {/* Contact Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-light bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="space-y-3">
            <h3 className="font-bold text-neutral-dark mb-2">تواصل معنا</h3>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-[#25D366] border-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              onClick={() => {
                window.open("https://wa.me/01011482752", "_blank");
                onClose();
              }}
            >
              <MessageCircle className="w-5 h-5" />
              واتساب: 01011482752
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => {
                window.location.href = "tel:01159214390";
                onClose();
              }}
            >
              <Phone className="w-5 h-5" />
              هاتف: 01159214390
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => {
                window.location.href = "tel:0220463821";
                onClose();
              }}
            >
              <Phone className="w-5 h-5" />
              هاتف أرضي: 0220463821
            </Button>
          </div>

          <div className="text-center mt-4 pt-4 border-t border-neutral-light">
            <p className="text-sm text-neutral-medium mb-1">أسواق المصطفى</p>
            <p className="text-xs text-neutral-medium">
              كل اللي بتدور عليه في مكان واحد
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
