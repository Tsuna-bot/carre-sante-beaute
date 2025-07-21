'use client';

import { useQuery } from '@tanstack/react-query';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { mockApi } from '@/lib/mock-data';
import ProductCard from '@/components/ui/ProductCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';

function ProductsSearchWrapper() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  // Récupérer le paramètre de recherche depuis l'URL
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const { data: products, isLoading, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: () => mockApi.products.getAll(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Filtrer les produits en fonction de la recherche
  const filteredProducts = products?.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage 
        message="Impossible de charger les produits."
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Nos Produits
          </h1>
          <p className="text-gray-600 mt-2">
            Découvrez notre sélection de {products?.length || 0} produits
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="mt-4 md:mt-0 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Résultats de recherche */}
      {searchQuery && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">
            {filteredProducts.length} résultat{filteredProducts.length > 1 ? 's' : ''} pour &ldquo;{searchQuery}&rdquo;
          </p>
        </div>
      )}

      {/* Grille de produits */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">
            {searchQuery ? 'Aucun produit trouvé pour cette recherche.' : 'Aucun produit disponible.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductsPageContent() {
  return (
    <Suspense fallback={<LoadingSpinner size="lg" />}>
      <ProductsSearchWrapper />
    </Suspense>
  );
}