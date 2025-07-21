import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-playfair font-light text-black mb-8">
            Nos Catégories
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium text-black mb-2">Visage</h3>
              <p className="text-gray-600 text-sm">
                Soins du visage et maquillage
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium text-black mb-2">Corps</h3>
              <p className="text-gray-600 text-sm">Soins du corps et hygiène</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium text-black mb-2">Cheveux</h3>
              <p className="text-gray-600 text-sm">
                Soins capillaires et colorations
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium text-black mb-2">Bien-être</h3>
              <p className="text-gray-600 text-sm">Compléments et vitamines</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
