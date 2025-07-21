import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import PageLayout from "@/components/PageLayout";
import { mockProducts } from "@/lib/mock-data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  // Récupérer le produit à partir des données statiques
  const product = mockProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto text-center py-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Produit non trouvé
          </h1>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800"
          >
            Retour aux produits
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link
            href="/products"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Retour aux produits
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image du produit */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Informations produit */}
          <div className="space-y-6">
            <div>
              {product.brand && (
                <p className="text-gray-600 mb-2">{product.brand}</p>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              {product.reference && (
                <p className="text-sm text-gray-500">Réf: {product.reference}</p>
              )}
            </div>

            {/* Prix */}
            <div className="border-t border-b py-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">
                  {parseFloat(product.price).toFixed(2)} €
                </span>
                <span className="text-gray-500">TTC</span>
              </div>
            </div>

            {/* Stock */}
            {product.quantity !== undefined && (
              <div className="flex items-center space-x-2">
                {product.quantity > 0 ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-sm">
                      En stock ({product.quantity} disponible{product.quantity > 1 ? 's' : ''})
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 text-sm">Rupture de stock</span>
                  </>
                )}
              </div>
            )}

            {/* Description */}
            <div className="prose prose-sm max-w-none">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
              {product.description_short && (
                <p className="text-gray-600 text-sm mt-2">{product.description_short}</p>
              )}
            </div>

            {/* Boutons d'action */}
            <div className="space-y-4">
              {product.active && product.quantity && product.quantity > 0 ? (
                <button className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Ajouter au panier
                </button>
              ) : (
                <button 
                  disabled 
                  className="w-full flex items-center justify-center px-6 py-3 bg-gray-400 text-white font-medium rounded-lg cursor-not-allowed"
                >
                  Produit indisponible
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export async function generateStaticParams() {
  // Génère les pages pour tous les produits dans mock-data
  return mockProducts.map((product) => ({
    id: product.id.toString(),
  }));
}
