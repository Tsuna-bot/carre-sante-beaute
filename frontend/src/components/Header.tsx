"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// Configuration des catégories principales avec sous-catégories
const categories = [
  {
    name: "Visage",
    href: "/categories/visage",
    subcategories: [
      { name: "Nettoyants", href: "/categories/visage/nettoyants" },
      { name: "Hydratants", href: "/categories/visage/hydratants" },
      { name: "Anti-âge", href: "/categories/visage/anti-age" },
      { name: "Sérum", href: "/categories/visage/serum" },
      { name: "Masques", href: "/categories/visage/masques" },
      {
        name: "Protection solaire",
        href: "/categories/visage/protection-solaire",
      },
    ],
  },
  {
    name: "Corps",
    href: "/categories/corps",
    subcategories: [
      { name: "Gels douche", href: "/categories/corps/gels-douche" },
      {
        name: "Crèmes hydratantes",
        href: "/categories/corps/cremes-hydratantes",
      },
      { name: "Huiles", href: "/categories/corps/huiles" },
      { name: "Gommages", href: "/categories/corps/gommages" },
      { name: "Déodorants", href: "/categories/corps/deodorants" },
      {
        name: "Soins spécifiques",
        href: "/categories/corps/soins-specifiques",
      },
    ],
  },
  {
    name: "Cheveux",
    href: "/categories/cheveux",
    subcategories: [
      { name: "Shampoings", href: "/categories/cheveux/shampoings" },
      {
        name: "Après-shampoings",
        href: "/categories/cheveux/apres-shampoings",
      },
      { name: "Masques", href: "/categories/cheveux/masques" },
      {
        name: "Soins sans rinçage",
        href: "/categories/cheveux/soins-sans-rincage",
      },
      { name: "Colorations", href: "/categories/cheveux/colorations" },
      { name: "Accessoires", href: "/categories/cheveux/accessoires" },
    ],
  },
  {
    name: "Ongles",
    href: "/categories/ongles",
    subcategories: [
      { name: "Vernis", href: "/categories/ongles/vernis" },
      { name: "Soins des ongles", href: "/categories/ongles/soins" },
      { name: "Manucure", href: "/categories/ongles/manucure" },
      { name: "Pédicure", href: "/categories/ongles/pedicure" },
      { name: "Accessoires", href: "/categories/ongles/accessoires" },
      { name: "Marques", href: "/categories/ongles/marques" },
    ],
  },
  {
    name: "Homme",
    href: "/categories/homme",
    subcategories: [
      { name: "Soins du visage", href: "/categories/homme/visage" },
      { name: "Rasage", href: "/categories/homme/rasage" },
      { name: "Parfums", href: "/categories/homme/parfums" },
      { name: "Soins du corps", href: "/categories/homme/corps" },
      { name: "Cheveux", href: "/categories/homme/cheveux" },
      { name: "Bien-être", href: "/categories/homme/bien-etre" },
    ],
  },
  {
    name: "Bébé",
    href: "/categories/bebe",
    subcategories: [
      { name: "Soins quotidiens", href: "/categories/bebe/soins-quotidiens" },
      { name: "Hygiène", href: "/categories/bebe/hygiene" },
      {
        name: "Protection solaire",
        href: "/categories/bebe/protection-solaire",
      },
      { name: "Couches", href: "/categories/bebe/couches" },
      { name: "Alimentation", href: "/categories/bebe/alimentation" },
      { name: "Accessoires", href: "/categories/bebe/accessoires" },
    ],
  },
  {
    name: "Bio",
    href: "/categories/bio",
    subcategories: [
      { name: "Cosmétiques bio", href: "/categories/bio/cosmetiques" },
      { name: "Alimentation bio", href: "/categories/bio/alimentation" },
      { name: "Compléments", href: "/categories/bio/complements" },
      {
        name: "Huiles essentielles",
        href: "/categories/bio/huiles-essentielles",
      },
      {
        name: "Marques certifiées",
        href: "/categories/bio/marques-certifiees",
      },
      { name: "Éco-responsable", href: "/categories/bio/eco-responsable" },
    ],
  },
  {
    name: "Bien-être",
    href: "/categories/bien-etre",
    subcategories: [
      {
        name: "Compléments alimentaires",
        href: "/categories/bien-etre/complements",
      },
      { name: "Vitamines", href: "/categories/bien-etre/vitamines" },
      { name: "Minéraux", href: "/categories/bien-etre/mineraux" },
      { name: "Probiotiques", href: "/categories/bien-etre/probiotiques" },
      { name: "Aromathérapie", href: "/categories/bien-etre/aromatherapie" },
      { name: "Relaxation", href: "/categories/bien-etre/relaxation" },
    ],
  },
];

// Composant Menu Burger SVG Animé
const AnimatedBurgerMenu = ({
  isOpen,
  color,
}: {
  isOpen: boolean;
  color: string;
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`burger-menu-svg ${isOpen ? "open" : ""}`}
    >
      {/* Barre du haut */}
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Barre du milieu */}
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Barre du bas */}
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryHover = (categoryName: string) => {
    setHoveredCategory(categoryName);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
  };

  const burgerColor = isScrolled ? "#000000" : "#ffffff";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-full mx-auto px-4 sm:px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span
              className={`text-lg sm:text-xl font-poppins font-light transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              } group-hover:opacity-80`}
            >
              Carré Santé Beauté
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-12">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => handleCategoryHover(category.name)}
                onMouseLeave={handleCategoryLeave}
              >
                <Link
                  href={category.href}
                  className={`font-poppins font-light transition-all duration-300 hover:opacity-60 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  {category.name}
                </Link>

                {/* Popup intégrée dans la zone de survol */}
                {hoveredCategory === category.name && (
                  <>
                    {/* Zone de connexion invisible pour combler l'espace */}
                    <div className="absolute top-full left-0 right-0 h-4 bg-transparent" />
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-100 shadow-lg py-6 px-8 min-w-[300px] z-50 mt-4 opacity-0 animate-[fadeInScale_0.3s_ease-out_forwards]">
                      <div className="grid grid-cols-1 gap-2">
                        {category.subcategories.map((subcategory, index) => (
                          <Link
                            key={subcategory.name}
                            href={subcategory.href}
                            className="text-black font-extralight hover:opacity-60 transition-all duration-300 text-sm py-2 opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
                            style={{
                              animationDelay: `${index * 30}ms`,
                            }}
                          >
                            {subcategory.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Blog Link */}
            <Link
              href="/blog"
              className={`font-poppins font-light transition-all duration-300 hover:opacity-60 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 sm:gap-8">
            {/* Search - Hidden on mobile */}
            <div className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className={`w-40 sm:w-60 px-10 py-2 rounded-full text-xs transition-all duration-300 focus:outline-none ${
                  isScrolled
                    ? "bg-gray-100 border border-gray-200 text-black placeholder-gray-500 focus:bg-white focus:border-gray-300"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40"
                }`}
              />
              <MagnifyingGlassIcon
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${
                  isScrolled ? "text-gray-400" : "text-white/60"
                }`}
              />
            </div>

            {/* Account - Hidden on mobile */}
            <Link
              href="/account"
              className={`hidden sm:block transition-colors duration-300 hover:opacity-60 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <UserIcon className="h-5 w-5" />
            </Link>

            {/* Cart */}
            <div className="relative">
              <Link
                href="/cart"
                className={`relative transition-colors duration-300 hover:opacity-60 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                <ShoppingBagIcon className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-light">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button - Menu Burger SVG Animé */}
            <button
              onClick={handleToggleMenu}
              className="lg:hidden flex items-center justify-center w-8 h-8 transition-all duration-300 hover:opacity-60 focus:outline-none burger-button ml-4"
              aria-label="Menu"
            >
              <AnimatedBurgerMenu isOpen={isMenuOpen} color={burgerColor} />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full width overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 w-full h-screen bg-white z-40 overflow-y-auto">
            <div className="w-full px-4 sm:px-6 py-8">
              {/* Search Bar for Mobile */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher un produit..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-gray-300"
                  />
                  <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-6">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="border-b border-gray-100 pb-4"
                  >
                    <Link
                      href={category.href}
                      className="text-black font-medium hover:opacity-60 transition-opacity duration-300 text-lg block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                    {/* Subcategories */}
                    <div className="mt-3 ml-4 space-y-2">
                      {category.subcategories.slice(0, 3).map((subcategory) => (
                        <Link
                          key={subcategory.name}
                          href={subcategory.href}
                          className="text-gray-600 font-light hover:opacity-60 transition-opacity duration-300 text-sm block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Blog Link */}
                <div className="border-b border-gray-100 pb-4">
                  <Link
                    href="/blog"
                    className="text-black font-medium hover:opacity-60 transition-opacity duration-300 text-lg block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>

                {/* Account Link for Mobile */}
                <div className="pt-4">
                  <Link
                    href="/account"
                    className="text-black font-medium hover:opacity-60 transition-opacity duration-300 text-lg block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mon Compte
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
