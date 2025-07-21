'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  TrashIcon, 
  MinusIcon, 
  PlusIcon,
  ShoppingBagIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cart';

export default function CartPageContent() {
  const { items, total, updateQuantity, removeItem, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulation du processus de checkout
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Ici vous pourriez intégrer avec l'API PrestaShop pour créer une commande
    alert('Commande simulée ! Dans un vrai projet, ceci créerait une commande via l\'API PrestaShop.');
    
    clearCart();
    setIsCheckingOut(false);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <ShoppingBagIcon className="h-24 w-24 text-gray-400 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Votre panier est vide
        </h1>
        <p className="text-gray-600 mb-8">
          Découvrez nos produits et ajoutez-les à votre panier pour commencer vos achats.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Découvrir nos produits
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Mon Panier ({items.length} article{items.length > 1 ? 's' : ''})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Liste des articles */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const product = item.product;
            if (!product) return null;

            const itemTotal = parseFloat(item.price) * item.quantity;
            const imageUrl = product.image || '/placeholder-product.jpg';

            return (
              <div key={item.id} className="bg-white border rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  {/* Image produit */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder-product.jpg';
                        }}
                      />
                    </div>
                  </div>

                  {/* Informations produit */}
                  <div className="flex-1 min-w-0">
                    <Link 
                      href={`/products/${product.id}`}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">
                      Prix unitaire: {parseFloat(item.price).toFixed(2)} €
                    </p>
                    {product.reference && (
                      <p className="text-xs text-gray-500">
                        Réf: {product.reference}
                      </p>
                    )}
                  </div>

                  {/* Contrôles quantité */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(product.id, item.quantity - 1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                      disabled={item.quantity <= 1}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(product.id, item.quantity + 1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Prix total et suppression */}
                  <div className="text-right">
                    <div className="font-bold text-lg text-gray-900">
                      {itemTotal.toFixed(2)} €
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-red-600 hover:text-red-800 mt-2"
                      title="Supprimer cet article"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Actions du panier */}
          <div className="flex justify-between items-center pt-4">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Vider le panier
            </button>
            
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Continuer mes achats
            </Link>
          </div>
        </div>

        {/* Résumé de commande */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Résumé de la commande
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span className="font-medium">{total.toFixed(2)} €</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Livraison</span>
                <span className="font-medium">Gratuite</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">TVA (20%)</span>
                <span className="font-medium">{(total * 0.2).toFixed(2)} €</span>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{(total * 1.2).toFixed(2)} €</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut || items.length === 0}
              className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isCheckingOut ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                  Traitement...
                </div>
              ) : (
                'Procéder au paiement'
              )}
            </button>

            <div className="mt-4 text-xs text-gray-500 text-center">
              Paiement sécurisé • Livraison gratuite • Retour 30 jours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}