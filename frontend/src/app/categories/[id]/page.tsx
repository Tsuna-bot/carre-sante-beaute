import Link from "next/link";
import { ArrowLeftIcon, FolderIcon } from "@heroicons/react/24/outline";
import PageLayout from "@/components/PageLayout";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { id } = await params;

  // Simulation d'une catégorie
  const category = {
    id: parseInt(id),
    name: "Catégorie de démonstration",
    description:
      "Ceci est une catégorie de démonstration pour montrer le design de la page catégorie.",
    level_depth: 1,
    active: true,
  };

  const products = [
    { id: 1, name: "Produit 1", price: "29.99", active: true },
    { id: 2, name: "Produit 2", price: "39.99", active: true },
    { id: 3, name: "Produit 3", price: "49.99", active: true },
  ];

  return (
    <PageLayout>
      <div className="space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm">
          <Link
            href="/categories"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Retour aux catégories
          </Link>
        </nav>

        {/* En-tête de la catégorie */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <FolderIcon className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {category.name}
              </h1>

              {category.description && (
                <div className="prose prose-sm text-gray-600 mb-4">
                  <p>{category.description}</p>
                </div>
              )}

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Niveau {category.level_depth}</span>
                <span>•</span>
                <span>
                  {products.length} produit
                  {products.length > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Produits de la catégorie */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Produits ({products.length})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image produit</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-gray-900">
                  {product.price} €
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export async function generateStaticParams() {
  // Génère quelques pages de catégories statiques
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];
}
