"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "@/components/ui/SearchBar";

// Chargement dynamique du panier pour éviter les erreurs SSR
const CartIcon = dynamic(() => import("./CartIcon"), {
  ssr: false,
  loading: () => (
    <div className="relative p-2">
      <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
    </div>
  ),
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 bg-amber-200 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <HeartIcon className="h-6 w-6 text-amber-700" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                Carré Santé Beauté
              </h1>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/products"
                className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                Boutique
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/institut"
                className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                Institut
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/marques"
                className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                Marques
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/outlet"
                className="text-gray-700 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                Outlet
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Barre de recherche */}
              <div className="relative">
                <SearchBar />
              </div>
            </nav>

            {/* Actions Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Favoris */}
              <button className="p-2 text-gray-700 hover:text-red-500 transition-colors relative group">
                <HeartIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>

              {/* RDV Institut */}
              <Link
                href="/institut"
                className="p-2 text-gray-700 hover:text-amber-700 transition-colors flex items-center"
              >
                <CalendarIcon className="h-6 w-6 mr-1" />
                <span className="text-sm font-medium">RDV</span>
              </Link>

              {/* Compte utilisateur */}
              <button className="p-2 text-gray-700 hover:text-amber-700 transition-colors">
                <UserIcon className="h-6 w-6" />
              </button>

              {/* Panier */}
              <CartIcon />

              {/* Menu mobile trigger */}
              <button
                className="md:hidden p-2 text-gray-700 hover:text-amber-700 transition-colors"
                onClick={handleToggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Actions Mobile */}
            <div className="md:hidden flex items-center space-x-2">
              <button className="p-2 text-gray-700 hover:text-amber-700 transition-colors">
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <CartIcon />
              <button
                className="p-2 text-gray-700 hover:text-amber-700 transition-colors"
                onClick={handleToggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="space-y-2">
                <Link
                  href="/products"
                  className="block px-4 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Boutique
                </Link>
                <Link
                  href="/institut"
                  className="block px-4 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Institut
                </Link>
                <Link
                  href="/marques"
                  className="block px-4 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Marques
                </Link>
                <Link
                  href="/outlet"
                  className="block px-4 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Outlet
                </Link>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <Link
                    href="/favorites"
                    className="block px-4 py-2 text-gray-700 hover:text-red-500 hover:bg-red-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Favoris
                  </Link>
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mon compte
                  </Link>
                  <Link
                    href="/institut"
                    className="block px-4 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Prendre RDV
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contenu principal - SANS MARGES NI PADDING */}
      <main className="w-full">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-amber-200 rounded-lg flex items-center justify-center mr-3">
                  <HeartIcon className="h-5 w-5 text-amber-700" />
                </div>
                <h3 className="text-lg font-semibold">Carré Santé Beauté</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Votre parapharmacie et institut de beauté à Lyon. Soins,
                cosmétiques, épilation et bien-être au quotidien.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                Produits
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tous les produits
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marques"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Nos marques
                  </Link>
                </li>
                <li>
                  <Link
                    href="/outlet"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Outlet & Promos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nouveautes"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Nouveautés
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                Institut
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/institut"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Prendre RDV
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/epilation"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Épilation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/soins-visage"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Soins du visage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/beaute-mains"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Beauté des mains
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                Contact
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contactez-nous
                  </Link>
                </li>
                <li>
                  <Link
                    href="/instituts"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Nos instituts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cgv"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    CGV/CGU
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              © 2025 Carré Santé Beauté. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
