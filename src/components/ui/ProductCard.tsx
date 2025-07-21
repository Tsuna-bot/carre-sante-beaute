import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Product } from "@/types/prestashop";
import { useCartStore } from "@/store/cart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const imageUrl = product.image || "/placeholder-product.jpg";
  const price = parseFloat(product.price);

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300 overflow-hidden">
        {/* Version Desktop - Layout vertical */}
        <div className="hidden sm:block">
          {/* Image */}
          <div className="aspect-square relative overflow-hidden bg-gray-100">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder-product.jpg";
              }}
            />
            {!product.active && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold">Indisponible</span>
              </div>
            )}
          </div>

          {/* Contenu */}
          <div className="p-4">
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
              {product.name}
            </h3>

            {product.description_short && (
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description_short.replace(/<[^>]*>/g, "")}
              </p>
            )}

            {/* Prix et actions */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">
                  {price.toFixed(2)} €
                </span>
                {product.reference && (
                  <span className="text-xs text-gray-500">
                    Réf: {product.reference}
                  </span>
                )}
              </div>

              {product.active && (
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                  title="Ajouter au panier"
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Stock */}
            {product.quantity !== undefined && (
              <div className="mt-2">
                {product.quantity > 0 ? (
                  <span className="text-xs text-green-600">
                    En stock ({product.quantity})
                  </span>
                ) : (
                  <span className="text-xs text-red-600">Rupture de stock</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Version Mobile - Layout horizontal carré */}
        <div className="sm:hidden flex h-32">
          {/* Image à gauche */}
          <div className="w-32 h-32 relative overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder-product.jpg";
              }}
            />
            {!product.active && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold text-xs">
                  Indisponible
                </span>
              </div>
            )}
          </div>

          {/* Contenu à droite */}
          <div className="flex-1 p-3 flex flex-col justify-between">
            <div>
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2 text-sm">
                {product.name}
              </h3>

              {product.description_short && (
                <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                  {product.description_short.replace(/<[^>]*>/g, "")}
                </p>
              )}
            </div>

            {/* Prix et actions */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-900">
                  {price.toFixed(2)} €
                </span>
                {product.reference && (
                  <span className="text-xs text-gray-500">
                    Réf: {product.reference}
                  </span>
                )}
              </div>

              {product.active && (
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                  title="Ajouter au panier"
                >
                  <ShoppingCartIcon className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Stock */}
            {product.quantity !== undefined && (
              <div className="mt-1">
                {product.quantity > 0 ? (
                  <span className="text-xs text-green-600">
                    En stock ({product.quantity})
                  </span>
                ) : (
                  <span className="text-xs text-red-600">Rupture de stock</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
