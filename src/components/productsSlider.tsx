import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const OfferSlider = () => {
  const bestOffers = products
    .filter((p) => p.isOffer)
    .sort((a, b) => {
      const discountA =
        ((a.originalPrice - a.currentPrice) / a.originalPrice) * 100;
      const discountB =
        ((b.originalPrice - b.currentPrice) / b.originalPrice) * 100;
      return discountB - discountA;
    })
    .slice(0, 10);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // تغيير إلى 4 منتجات
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, // إلغاء الأزرار الافتراضية
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12  bg-gray-50">
      <div className="container">
        {/* عنوان مميز */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            منتجاتنا المميزة
          </h2>
          <p className="text-gray-500 text-lg">
            اكتشف أعلى واكبر الخصومات على منتجاتنا المختارة
          </p>
        </div>

        {/* السلايدر مع أزرار مخصصة */}
        <div className="relative">
          <div className="offer-slider  w-[100%]">
            <Slider
              {...settings}
              ref={(slider) => {
                window.sliderRef = slider;
              }}
            >
              {bestOffers.map((product) => (
                <div key={product.id} className="px-2">
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </div>

          {/* أزرار التنقل المخصصة */}
          <button
            onClick={() => window.sliderRef?.slickPrev()}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white rounded-full w-12 h-12 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-5 h-5 text-green-600 mx-auto group-hover:text-green-700 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => window.sliderRef?.slickNext()}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white rounded-full w-12 h-12 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-5 h-5 text-green-600 mx-auto group-hover:text-green-700 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        /* .container {
          width: 100%;
          margin-right: auto;
          margin-left: auto;
          /* padding-right: 2rem; /* 32px */
        /* padding-left: 2rem; 32px */
        */
        /* }

        @media (min-width: 1400px) {
          .container {
            max-width: 1400px;
          }
        } */ */

        /* إخفاء الأزرار الافتراضية تماماً */
        .offer-slider .slick-prev,
        .offer-slider .slick-next {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default OfferSlider;
