import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-playfair font-light text-black mb-8">
            Votre Panier
          </h1>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-playfair font-light text-black mb-4">
              Panier vide
            </h2>
            <p className="text-gray-600 mb-6">
              Votre panier est actuellement vide. Découvrez nos produits pour
              commencer vos achats.
            </p>
            <Link
              href="/"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Continuer les achats
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
