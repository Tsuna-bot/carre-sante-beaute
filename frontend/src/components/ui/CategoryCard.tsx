import Link from 'next/link';
import { FolderIcon } from '@heroicons/react/24/outline';
import { Category } from '@/types/prestashop';

interface CategoryCardProps {
  category: Category;
  productsCount?: number;
}

export default function CategoryCard({ category, productsCount }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.id}`}>
      <div className="group bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300 p-6">
        <div className="flex items-center space-x-4">
          {/* Icône */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <FolderIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>

          {/* Contenu */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {category.name}
            </h3>
            
            {category.description && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {category.description.replace(/<[^>]*>/g, '')}
              </p>
            )}

            <div className="flex items-center mt-2 space-x-4">
              {productsCount !== undefined && (
                <span className="text-xs text-gray-500">
                  {productsCount} produit{productsCount > 1 ? 's' : ''}
                </span>
              )}
              
              <span className="text-xs text-gray-500">
                Niveau {category.level_depth}
              </span>

              {!category.active && (
                <span className="text-xs text-red-500">
                  Inactive
                </span>
              )}
            </div>
          </div>

          {/* Flèche */}
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}