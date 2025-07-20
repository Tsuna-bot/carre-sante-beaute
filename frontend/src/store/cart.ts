import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, CartStore } from '@/types/prestashop';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (product: Product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.id_product === product.id);

        if (existingItem) {
          // Mettre à jour la quantité si le produit existe déjà
          get().updateQuantity(product.id, existingItem.quantity + quantity);
        } else {
          // Ajouter un nouveau produit
          const newItem: CartItem = {
            id: Date.now(), // ID temporaire
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

// Fonction utilitaire pour calculer le total
function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    return total + (parseFloat(item.price) * item.quantity);
  }, 0);
}