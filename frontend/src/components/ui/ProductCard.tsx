import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Product } from '@/types/prestashop';
import { useCartStore } from '@/store/cart';
import { useCallback } from 'react';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: string): string => {
  const numericPrice = parseFloat(price);
  return isNaN(numericPrice) ? '0.00' : numericPrice.toFixed(2);
};

const stripHtmlTags = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
  const target = e.target as HTMLImageElement;
  target.src = '/placeholder-product.jpg';
};

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  }, [addItem, product]);

  const imageUrl = product.image && typeof product.image === 'object' && 'src' in product.image 
    ? product.image.src 
    : typeof product.image === 'string' 
    ? product.image 
    : '/placeholder-product.jpg';
  const formattedPrice = formatPrice(product.price);

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300 overflow-hidden">
        {/* Image */}
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
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
              {stripHtmlTags(product.description_short)}
            </p>
          )}

          {/* Prix et actions */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">
                {formattedPrice} €
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
                <span className="text-xs text-red-600">
                  Rupture de stock
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}