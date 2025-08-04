import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.currentPrice) / product.originalPrice) *
      100
  );

  return (
    <Card className="group  hover:shadow-lg hover:shadow-[#0004] transition-all duration-300 cursor-pointer hover:-translate-y-1 border-0 bg-white">
      <CardContent className="p-4">
        {/* الصورة والشارات */}
        <div className="relative mb-4">
          <div className="aspect-square bg-white rounded-lg flex items-center justify-center text-muted-foreground text-4xl mb-3">
            <img className="h-[270px]" src={product.image} alt="" />
          </div>

          {product.isOffer && (
            <Badge className="absolute top-2 right-2 bg-offer text-offer-foreground">
              خصم {discountPercentage}%
            </Badge>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* معلومات المنتج */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>

          <p className="text-sm text-muted-foreground">{product.category}</p>

          {/* التقييم */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* الأسعار */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              {product.currentPrice.toFixed(2)} جنيه
            </span>
            {product.isOffer && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice.toFixed(2)} جنيه
              </span>
            )}
          </div>

          {/* زر الشراء */}
          <Button
            variant="fresh"
            size="sm"
            className="w-full"
            onClick={() => {
              const message = `مرحباً، أريد شراء:%0A%0A📦 ${
                product.name
              }%0A🏷️ ${product.category}%0A💰 السعر: ${
                product.currentPrice
              } جنيه${
                product.isOffer ? ` (كان ${product.originalPrice} جنيه)` : ""
              }%0A⭐ التقييم: ${product.rating}/5%0A%0Aشكراً`;
              window.open(
                `https://wa.me/+201011482752?text=${message}`,
                "_blank"
              );
            }}
          >
            اشتر الآن
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
