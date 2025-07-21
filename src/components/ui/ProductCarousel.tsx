"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

// Import Swiper styles
import "swiper/css";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  image: StaticImageData;
  reference?: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    if (progressBarRef.current) {
      const progress = ((swiper.activeIndex + 1) / products.length) * 100;
      progressBarRef.current.style.width = `${progress}%`;
    }
  };

  return (
    <div className="relative px-16 sm:px-16">
      {/* Version Desktop - Layout original */}
      <div className="hidden sm:block">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={32}
          slidesPerView={1}
          navigation={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="product-carousel"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group bg-white border border-gray-200 p-8 hover:border-gray-300 transition-all duration-500 h-full flex flex-col">
                <div className="relative w-full h-64 bg-gray-50 mb-8 group-hover:scale-105 transition-transform duration-700 ease-out">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center flex-1 flex flex-col">
                  <span className="text-xs font-light text-gray-500 tracking-widest uppercase mb-4 block">
                    {product.brand}
                  </span>
                  <h3 className="text-2xl font-playfair font-light text-black mb-2 leading-tight">
                    {product.name}
                  </h3>
                  {product.reference && (
                    <p className="text-xs text-gray-400 font-light text-center mb-6">
                      Réf: {product.reference}
                    </p>
                  )}
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm font-light flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <div className="text-center">
                      <span className="text-2xl font-light text-black">
                        {product.price}
                      </span>
                      <p className="text-xs text-gray-400 font-light mt-1">
                        TTC
                      </p>
                    </div>
                  </div>
                  <button className="w-full border-2 border-black text-black py-4 font-medium hover:bg-black hover:text-white transition-all duration-300 text-sm group relative overflow-hidden cursor-pointer mt-auto">
                    <span className="relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      Ajouter au panier
                    </span>
                    <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Version Mobile - Layout horizontal rectangulaire */}
      <div className="sm:hidden -mx-16">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="product-carousel"
          onSlideChange={handleSlideChange}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 overflow-hidden">
                <div className="flex h-64">
                  {/* Image à gauche */}
                  <div className="w-32 h-64 relative overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Contenu à droite */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-light text-gray-500 tracking-widest uppercase mb-2 block">
                        {product.brand}
                      </span>
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2 text-sm leading-tight">
                        {product.name}
                      </h3>
                      {product.reference && (
                        <p className="text-xs text-gray-400 font-light mb-2">
                          Réf: {product.reference}
                        </p>
                      )}
                      <p className="text-xs text-gray-600 line-clamp-4 mb-3 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Prix */}
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-gray-900">
                        {product.price}
                      </span>
                      <p className="text-xs text-gray-400 font-light">TTC</p>
                    </div>
                  </div>
                </div>

                {/* Bouton panier en dessous */}
                <div className="p-4 pt-0">
                  <button className="w-full bg-black text-white py-4 px-4 font-medium text-sm cursor-pointer">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Indicateur de navigation mobile */}
        <div className="flex justify-center items-center mt-6">
          <div className="w-48 h-1 bg-gray-200 rounded-full">
            <div
              ref={progressBarRef}
              className="mobile-progress-bar h-full bg-gray-400 rounded-full transition-all duration-300"
              style={{ width: `${(1 / products.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Desktop seulement */}
      <div className="hidden sm:block">
        <button
          onClick={handlePrev}
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-500 shadow-lg group cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-gray-600 group-hover:text-black transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-500 shadow-lg group cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-gray-600 group-hover:text-black transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
