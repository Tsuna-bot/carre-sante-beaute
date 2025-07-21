'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { mockApi } from '@/lib/mock-data';
import { Product } from '@/types/prestashop';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  const { data: searchResults } = useQuery({
    queryKey: ['search', query],
    queryFn: () => mockApi.products.search(query),
    enabled: query.length >= 2,
    staleTime: 30000, // 30 secondes
  });

  // Fermer les résultats quand on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="relative max-w-md w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(e.target.value.length >= 2);
            }}
            onFocus={() => query.length >= 2 && setIsOpen(true)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
      </form>

      {/* Résultats de recherche */}
      {isOpen && searchResults && searchResults.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-gray-500 mb-2 px-2">
              {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''}
            </div>
            {searchResults.slice(0, 5).map((product: Product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                onClick={handleResultClick}
                className="block p-3 hover:bg-gray-50 rounded border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {parseFloat(product.price).toFixed(2)} €
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {searchResults.length > 5 && (
              <Link
                href={`/products?search=${encodeURIComponent(query)}`}
                onClick={handleResultClick}
                className="block p-3 text-center text-blue-600 hover:bg-blue-50 font-medium"
              >
                Voir tous les résultats ({searchResults.length})
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Aucun résultat */}
      {isOpen && query.length >= 2 && searchResults && searchResults.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-center">
          <div className="text-gray-500">
            Aucun produit trouvé pour &ldquo;{query}&rdquo;
          </div>
        </div>
      )}
    </div>
  );
}