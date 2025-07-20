import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import PageLayout from "@/components/PageLayout";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Simulation d'un produit
  const product = {
    id: parseInt(id),
    name: "Produit de démonstration",
    price: "29.99",
    description:
      "Ceci est un produit de démonstration pour montrer le design de la page produit.",
    active: true,
    quantity: 10,
  };

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
          {/* Image placeholder */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">Image du produit</span>
              </div>
            </div>
          </div>

          {/* Informations produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
            </div>

            {/* Prix */}
            <div className="border-t border-b py-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price} €
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-sm">
              <p>{product.description}</p>
            </div>

            {/* Bouton d'action */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Voir les détails
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export async function generateStaticParams() {
  // Génère quelques pages de produits statiques
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
}
