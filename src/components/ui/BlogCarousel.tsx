"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import "swiper/css";
import "swiper/css/navigation";

const blogPosts = [
  {
    id: 1,
    title: "A chaque âge sa crème de jour. (Problème et solution)",
    excerpt:
      "Que notre peau soit grasse, mixte ou sèche, la cosmétique nous propose des formules à tous les prix, faites pour nous, en fonction de nos objectifs et de notre âge.",
    date: "30 décembre 2024",
    readTime: "10 min",
    category: "Conseils beauté",
    slug: "chaque-age-creme-jour-probleme-solution",
    author: "Jérémy Naphay",
  },
  {
    id: 2,
    title: "ABBI personnalise le soin à partir d'un selfie",
    excerpt:
      "Un selfie sur la borne d'un de nos 4 magasins et obtenez votre diagnostic de peau et votre routine sur mesure.",
    date: "10 janvier 2025",
    readTime: "5 min",
    category: "Technologie beauté",
    slug: "abbi-personnalise-soin-selfie",
    author: "Jérémy Naphay",
  },
  {
    id: 3,
    title: "Notre concept en Vidéo",
    excerpt:
      "Découvrez notre concept de Parapharmacie et Institut de beauté en vidéo !!",
    date: "8 janvier 2025",
    readTime: "3 min",
    category: "Notre concept",
    slug: "notre-concept-video",
    author: "Jérémy Naphay",
  },
  {
    id: 4,
    title:
      "Adieu poux et lentes : Astuces naturelles pour des cheveux éclatants !",
    excerpt:
      "Découvrez des astuces naturelles pour dire adieu aux poux et aux lentes ! L'huile de coco, le vinaigre blanc et les huiles essentielles sont vos alliés.",
    date: "15 janvier 2025",
    readTime: "8 min",
    category: "Soins capillaires",
    slug: "adieu-poux-lentes-astuces-naturelles",
    author: "Jérémy Naphay",
  },
  {
    id: 5,
    title: "POURQUOI UTILISER UN SÉRUM ANTI-TACHES BRUNES ?",
    excerpt:
      "Au fil des années et des expositions solaires, des taches brunes peuvent apparaître sur le visage et le corps. Sans gravité, ces taches brunes sont un marqueur visible de l'âge.",
    date: "12 janvier 2025",
    readTime: "6 min",
    category: "Soins du visage",
    slug: "pourquoi-utiliser-serum-anti-taches-brunes",
    author: "Jérémy Naphay",
  },
  {
    id: 6,
    title: "Nouveauté Esthederm Photoreverse",
    excerpt:
      "Comment Esthéderm Photo Reverse parvient-il à corriger les tâches solaires ?",
    date: "5 janvier 2025",
    readTime: "7 min",
    category: "Nouveautés",
    slug: "nouveaute-esthederm-photoreverse",
    author: "Jérémy Naphay",
  },
  {
    id: 7,
    title: "Phytomer Bio - Les Atouts de la ligne Cyfolia",
    excerpt: "Une beauté saine et naturelle certifiée Bio",
    date: "3 janvier 2025",
    readTime: "6 min",
    category: "Marques bio",
    slug: "phytomer-bio-atouts-ligne-cyfolia",
    author: "Jérémy Naphay",
  },
  {
    id: 8,
    title: "Visage : Gardez votre peau douce, souple et lumineuse",
    excerpt:
      "L'un des secrets afin de garder une belle peau, ainsi qu'un teint parfait, repose essentiellement sur l'hydratation de votre visage.",
    date: "1 janvier 2025",
    readTime: "9 min",
    category: "Soins du visage",
    slug: "visage-garde-peau-douce-souple-lumineuse",
    author: "Jérémy Naphay",
  },
];

export default function BlogCarousel() {
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
    <section className="py-32 bg-gray-50">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-24 px-6">
          <h2 className="text-5xl md:text-7xl font-playfair font-light text-black mb-8 tracking-tight">
            Nos
            <br />
            <span className="font-light">Conseils</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Découvrez nos articles d&apos;experts pour prendre soin de votre
            beauté au quotidien
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - En haut */}
          <div className="flex justify-end mb-8 px-6">
            <div className="flex space-x-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-500 shadow-lg group cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-black transition-all duration-300"
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
                className="w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-500 shadow-lg group cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-black transition-all duration-300"
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

          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="blog-carousel"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 delay-0 ease-out group-hover:scale-[1.02] h-[600px] flex flex-col">
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Image à venir
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-gray-100 px-3 py-1 text-xs font-medium">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-playfair font-light text-black mb-3 group-hover:text-gray-700 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="mt-3 text-xs text-gray-500">
                          Par {post.author}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 px-6">
          <Link
            href="/blog"
            className="group inline-flex items-center justify-center px-12 py-6 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300 delay-0 ease-out text-lg relative overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300 delay-0 ease-out">
              Voir tous nos articles
            </span>
            <svg
              className="ml-3 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 delay-0"
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
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-0 origin-left"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
