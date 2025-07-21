"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import rgCologneNeroli from "@/assets/news/rg-cologne-neroli-100ml.jpg";
import nhcoEffluvium from "@/assets/news/nhco-effluvium-168u.jpg";
import laRoseeVisMasque from "@/assets/news/la-rosee-vis-masque-en-stick-regenerant-75ml.jpg";
import dermadvDermatopic from "@/assets/news/dermadv-dermatopic-cr-cicareparatrice-100ml.jpg";

const newsData = [
  {
    id: 1,
    title: "Roger & Gallet Néroli Eau Parfumée Bienfaisante 100ml",
    subtitle: "Roger & Gallet Paris",
    description:
      "La chaleur estivale de l'Immortelle illuminée des accents floraux miellés de la fleur d'Oranger.",
    image: rgCologneNeroli,
    category: "Parfums",
    reference: "3690794",
    price: "37,99 €",
  },
  {
    id: 2,
    title: "NHCO Nutrition Effluvium 168 Gélules",
    subtitle: "NHCO",
    description:
      "20 actifs sont concentrés dans une formule unique, notamment de la L-Arginine, un extrait d'Eruca sativa qui stimule le bulbe capillaire favorisant la croissance des cheveux, des acides aminés constitutifs des fibres de kératine et du Zinc qui contribue au maintien de cheveux normaux.",
    image: nhcoEffluvium,
    category: "Soins Cheveux",
    reference: "9773258",
    price: "42,90 €",
  },
  {
    id: 3,
    title: "La Rosée Masque en Stick 3 en 1 Régénérant 75ml",
    subtitle: "LA ROSEE",
    description:
      "Purifiez, détoxifiez et régénérez votre peau en douceur avec le Masque en Stick 3 en 1 à l'argile blanche de La Rosée. Un geste pratique, une peau radieuse.",
    image: laRoseeVisMasque,
    category: "Soins Visage",
    reference: "0071708",
    price: "17,99 €",
  },
  {
    id: 4,
    title:
      "Dermadvanced Dermatopic Crème Cica-Réparatrice Cuivre et Zinc 100ml",
    subtitle: "DERMADVANCED",
    description:
      "La Crème Cica-Réparatrice Dermatopic de Dermadvanced apaise et répare les irritations sèches et rougeurs, offrant confort et bien-être à la peau.",
    image: dermadvDermatopic,
    category: "Soins Visage",
    reference: "7020527",
    price: "12,99 €",
  },
];

const NewsCarousel = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="news-carousel"
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <div className="group bg-white border border-gray-200 p-8 hover:border-gray-300 transition-all duration-500 h-full flex flex-col">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-black text-white px-3 py-1 text-xs font-light tracking-wide">
                    {news.category}
                  </span>
                </div>
              </div>

              <div className="text-center flex-1 flex flex-col">
                <span className="text-xs font-light text-gray-500 tracking-widest uppercase mb-4 block">
                  {news.subtitle}
                </span>
                <h3 className="text-2xl font-playfair font-light text-black mb-2 leading-tight">
                  {news.title.includes("&") ? (
                    <>
                      {news.title.split("&").map((part, index, array) => (
                        <span key={index}>
                          {part}
                          {index < array.length - 1 && (
                            <span className="font-poppins">&</span>
                          )}
                        </span>
                      ))}
                    </>
                  ) : (
                    news.title
                  )}
                </h3>
                {news.reference && (
                  <p className="text-xs text-gray-400 font-light text-center mb-6">
                    Réf: {news.reference}
                  </p>
                )}
                <p className="text-gray-600 mb-8 leading-relaxed text-sm font-light flex-1">
                  {news.description}
                </p>
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="text-center">
                    <span className="text-2xl font-light text-black">
                      {news.price}
                    </span>
                    <p className="text-xs text-gray-400 font-light mt-1">TTC</p>
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

      {/* Navigation Buttons - Même style que Produits sélectionnés */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group cursor-pointer"
      >
        <svg
          className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors duration-300"
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
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group cursor-pointer"
      >
        <svg
          className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors duration-300"
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
  );
};

export default NewsCarousel;
