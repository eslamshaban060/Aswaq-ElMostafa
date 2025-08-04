import { useState, useRef, useEffect } from "react";
import { Search, X, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className = "" }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchTerm]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setShowResults(false);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-medium" />
        <Input
          type="text"
          placeholder="ابحث عن المنتجات..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-10 pl-10 h-12 text-right bg-white  border-green-900 focus:border-primary focus:ring-primary"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6 hover:bg-neutral-light"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Search Results */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-light rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
          <div className="p-2">
            <p className="text-sm text-neutral-medium px-3 py-2 border-b border-neutral-light">
              النتائج ({searchResults.length})
            </p>
            {searchResults.slice(0, 8).map((product) => (
              <a
                key={product.id}
                href={`/products#product-${product.id}`}
                className="flex items-center gap-3 p-3 hover:bg-neutral-light rounded-lg transition-colors"
                onClick={() => setShowResults(false)}
              >
                <div className="w-12 h-12 bg-neutral-light rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-neutral-medium" />
                </div>
                <div className="flex-1 text-right">
                  <h4 className="font-medium text-neutral-dark">
                    {product.name}
                  </h4>
                  <p className="text-sm text-neutral-medium">
                    {product.category}
                  </p>
                  <p className="text-sm font-bold text-primary">
                    {product.currentPrice} جنيه
                  </p>
                </div>
              </a>
            ))}
            {searchResults.length > 8 && (
              <div className="text-center py-2 border-t border-neutral-light">
                <a
                  href="/products"
                  className="text-sm text-primary hover:underline"
                  onClick={() => setShowResults(false)}
                >
                  عرض جميع النتائج ({searchResults.length})
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* No Results */}
      {showResults && searchTerm && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-light rounded-lg shadow-lg z-50">
          <div className="p-4 text-center">
            <p className="text-neutral-medium">
              لا توجد نتائج للبحث "{searchTerm}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
