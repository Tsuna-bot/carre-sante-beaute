import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-playfair font-light text-black mb-8">
            Nos Produits
          </h1>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-playfair font-light text-black mb-4">
              Découvrez notre sélection
            </h2>
            <p className="text-gray-600 mb-6">
              Explorez notre gamme complète de produits de beauté et de
              bien-être.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-black mb-2">
                  Soins du visage
                </h3>
                <p className="text-gray-600 text-sm">
                  Nettoyants, hydratants, anti-âge
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-black mb-2">
                  Soins du corps
                </h3>
                <p className="text-gray-600 text-sm">
                  Gels douche, crèmes, huiles
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-medium text-black mb-2">
                  Bien-être
                </h3>
                <p className="text-gray-600 text-sm">
                  Compléments, vitamines, bio
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
