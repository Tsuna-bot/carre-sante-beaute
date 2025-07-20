import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ui/ProductCarousel";
import NewsCarousel from "@/components/ui/NewsCarousel";
import BlogCarousel from "@/components/ui/BlogCarousel";
import Footer from "@/components/ui/Footer";
import carresantebeauteCover from "@/assets/carresantebeaute_cover.webp";
import product1Image from "@/assets/manucurist-soin-active-plump-15ml.jpg";
import product2Image from "@/assets/manucurist-soin-active-glow-grape-15ml.jpg";
import product3Image from "@/assets/le-gel-douche-surgras-est-un-nettoyant-multi-usages-3en1-adapte-pour-le-lavage-du-visage-du-corps-et-des-cheveux.jpg";
import product4Image from "@/assets/le-1er-vernis-soin-embellisseur-effet-highlighter-pour-renforcer-et-illuminer-naturellement-les-ongles-.jpg";
import product5Image from "@/assets/le-1er-vernis-soin-embellisseur-effet-cc-polish-pour-lisser-les-stries-gommer-les-imperfections-et-unifier-la-surface-de-l-ongle.jpg";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Manucurist Active Glow Grape 15ml",
      brand: "Ageti",
      description:
        "Le 1er vernis soin embellisseur effet gloss lilas pour nourrir les ongles en profondeur et réhausser leur éclat naturel !",
      price: "15,99 €",
      image: product2Image,
      reference: "3222383",
    },
    {
      id: 2,
      name: "Manucurist Active Plump 15ml",
      brand: "Ageti",
      description:
        "Le 1er vernis soin embellisseur au collagène pour des ongles hydratés et visuellement repulpés !",
      price: "15,99 €",
      image: product1Image,
      reference: "3222406",
    },
    {
      id: 3,
      name: "Manucurist Active Shine 15ml",
      brand: "Ageti",
      description:
        "Le 1er vernis soin embellisseur effet highlighter pour renforcer et illuminer naturellement les ongles !",
      price: "15,99 €",
      image: product4Image,
      reference: "3222765",
    },
    {
      id: 4,
      name: "Manucurist Active Smooth 00 15ml",
      brand: "Ageti",
      description:
        "Le 1er vernis soin embellisseur effet CC Polish pour lisser les stries, gommer les imperfections et unifier la surface de l'ongle !",
      price: "15,99 €",
      image: product5Image,
      reference: "3222703",
    },
    {
      id: 5,
      name: "Beau Terra Gel Douche Surgras Aloe Vera 1L",
      brand: "Beau Terra",
      description:
        "Le gel douche surgras est un nettoyant multi-usages 3en1 adapté pour le lavage du visage, du corps et des cheveux",
      price: "6,99 €",
      image: product3Image,
      reference: "0816769",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Award-Winning Design */}
      <section className="relative w-full h-screen bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black/98 via-black/95 to-black/90"></div>
        <Image
          src={carresantebeauteCover}
          alt="Carré Santé Beauté - Votre destination beauté"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-5xl mx-auto px-6">
            <h1 className="text-6xl md:text-8xl font-playfair font-light mb-8 tracking-tight leading-none">
              <span
                className="inline-block animate-fade-in-up opacity-0"
                style={{
                  animationDelay: "0.3s",
                  animationFillMode: "forwards",
                }}
              >
                Faire rimer
              </span>
              <br />
              <span
                className="inline-block animate-fade-in-up opacity-0 font-light"
                style={{
                  animationDelay: "0.3s",
                  animationFillMode: "forwards",
                }}
              >
                santé et beauté
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-12 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              Carré Santé a créé des espaces dédiés à la beauté sur la base
              d&apos;un concept conjuguant soins, conseils et accompagnement
              personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 justify-center items-center">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 delay-0 ease-out text-base sm:text-lg relative overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">Découvrir</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-0 origin-left"></div>
              </Link>
              <Link
                href="/categories"
                className="group inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 delay-0 ease-out text-base sm:text-lg relative overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">Prendre RDV</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-0 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Ultra-Modern Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-playfair font-light text-black mb-8 tracking-tight">
              Produits
              <br />
              <span className="font-light">Sélectionnés</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Une curation exclusive de produits de beauté premium, sélectionnés
              avec soin
            </p>
          </div>

          {/* Products Grid - Award-Winning Layout */}
          <ProductCarousel products={products} />

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center px-12 py-6 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300 delay-0 ease-out text-lg relative overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300 delay-0 ease-out">
                Voir tous nos produits
              </span>
              <ArrowRightIcon className="ml-3 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 delay-0" />
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-0 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Nouveautés Section - Carousel */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-playfair font-light text-black mb-8 tracking-tight">
              Nos
              <br />
              <span className="font-light">Nouveautés</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Découvrez nos dernières arrivées et produits exclusifs
            </p>
          </div>

          <NewsCarousel />
        </div>
      </section>

      {/* Institut Section - Services et Rendez-vous */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-playfair font-light text-black mb-8 tracking-tight">
              Notre
              <br />
              <span className="font-light">Institut</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Découvrez nos soins personnalisés et prenez rendez-vous pour une
              expérience beauté unique
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
            {/* ÉPILATIONS */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  ÉPILATIONS
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* LUMIÈRE PULSÉE */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  LUMIÈRE PULSÉE
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* SOINS MINCEUR */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  SOINS MINCEUR
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* SOINS DU CORPS */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  SOINS DU CORPS
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* SOINS DU VISAGE */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  SOINS DU VISAGE
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* PEELINGS */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  PEELINGS
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* BEAUTÉ DES MAINS / PIEDS */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  BEAUTÉ DES MAINS / PIEDS
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* MAQUILLAGE */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  MAQUILLAGE
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* GEL ET PORCELAINE */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  GEL ET PORCELAINE
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* BEAUTÉ DU REGARD */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  BEAUTÉ DU REGARD
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* DERMOPIGMENTATION */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  DERMOPIGMENTATION
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* MICROBLADING */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  MICROBLADING
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* UV ET AUTOBRONZANTS */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  UV ET AUTOBRONZANTS
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ANIMATION */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  ANIMATION
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* SOINS du MOIS */}
            <div className="text-center group">
              <div className="bg-gray-100 rounded-lg p-4 mb-3 group-hover:bg-gray-200 transition-all duration-300 delay-0 ease-out cursor-pointer group-hover:pb-16 relative overflow-hidden">
                <h3 className="text-sm font-playfair font-light text-black">
                  SOINS DU MOIS
                </h3>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-0 flex space-x-6">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="text-center">
            <Link
              href="/institut/rendez-vous"
              className="group inline-flex items-center justify-center px-12 py-6 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300 delay-0 ease-out text-lg relative overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-300 delay-0 ease-out">
                Prendre Rendez-vous
              </span>
              <ArrowRightIcon className="ml-3 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 delay-0" />
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-0 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Carousel */}
      <BlogCarousel />

      {/* Newsletter Section - Ultra-Minimalist */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-playfair font-light text-white mb-8 tracking-tight">
            Restez
            <br />
            <span className="font-light">Connecté</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Recevez nos dernières nouveautés et offres exclusives
          </p>
          <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-8 py-6 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-all duration-300 delay-0 ease-out backdrop-blur-sm min-w-80"
            />
            <button className="px-12 py-6 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 delay-0 ease-out group relative overflow-hidden cursor-pointer">
              <span className="relative z-10 group-hover:text-black flex items-center justify-center">
                S&apos;abonner
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-0 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
