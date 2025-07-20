'use client';

import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cart';

export default function CartIcon() {
  const itemsCount = useCartStore(state => state.getItemsCount());

  return (
    <Link href="/cart" className="relative p-2">
      <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
      {itemsCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemsCount}
        </span>
      )}
    </Link>
  );
}