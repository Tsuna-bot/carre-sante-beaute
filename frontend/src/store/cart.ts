import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, CartStore } from '@/types/prestashop';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (product: Product, quantity = 1) => {
        if (!product || !product.id || quantity <= 0) {
          console.warn('Invalid product or quantity provided to addItem');
          return;
        }

        const { items } = get();
        const existingItem = items.find(item => item.id_product === product.id);

        if (existingItem) {
          get().updateQuantity(product.id, existingItem.quantity + quantity);
        } else {
          const newItem: CartItem = {
            id: Date.now(),
            id_product: product.id,
            quantity,
            price: product.price,
            product,
          };

          set(state => {
            const newItems = [...state.items, newItem];
            return {
              items: newItems,
              total: calculateTotal(newItems),
            };
          });
        }
      },

      removeItem: (productId: number) => {
        set(state => {
          const newItems = state.items.filter(item => item.id_product !== productId);
          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        });
      },

      updateQuantity: (productId: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set(state => {
          const newItems = state.items.map(item =>
            item.id_product === productId
              ? { ...item, quantity }
              : item
          );
          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        });
      },

      clearCart: () => {
        set({ items: [], total: 0 });
      },

      getItemsCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const price = parseFloat(item.price);
    if (isNaN(price) || item.quantity < 0) {
      console.warn(`Invalid price or quantity for item ${item.id_product}`);
      return total;
    }
    return total + (price * item.quantity);
  }, 0);
}