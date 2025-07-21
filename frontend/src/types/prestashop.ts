// Types pour l'API PrestaShop

export interface Category {
  id: number;
  name: string;
  description?: string;
  id_parent: number;
  level_depth: number;
  active: boolean;
  link_rewrite: string;
  meta_title?: string;
  meta_description?: string;
  associations?: {
    products?: Array<{ id: number }>;
  };
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  description_short?: string;
  price: string;
  id_default_image?: number;
  reference?: string;
  ean13?: string;
  active: boolean;
  quantity?: number;
  id_category_default: number;
  brand?: string;
  image?: any; // StaticImageData from Next.js ou string pour URL
  categories?: Array<{ id: number }>;
  images?: Array<{ id: number; id_image: number }>;
  features?: Array<{
    id: number;
    id_feature_value: number;
  }>;
  associations?: {
    categories?: Array<{ id: number }>;
    images?: Array<{ id: number }>;
    product_features?: Array<{
      id: number;
      id_feature_value: number;
    }>;
  };
}

export interface CartItem {
  id: number;
  id_product: number;
  id_product_attribute?: number;
  quantity: number;
  price: string;
  product?: Product;
}

export interface Cart {
  id?: number;
  id_customer?: number;
  id_currency: number;
  id_lang: number;
  associations?: {
    cart_rows?: CartItem[];
  };
}

export interface Customer {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  birthday?: string;
  newsletter?: boolean;
  optin?: boolean;
  active?: boolean;
}

export interface Order {
  id?: number;
  id_customer: number;
  id_cart: number;
  id_currency: number;
  id_lang: number;
  payment: string;
  module: string;
  total_paid: string;
  total_paid_tax_incl: string;
  total_paid_tax_excl: string;
  current_state: number;
  associations?: {
    order_rows?: Array<{
      id: number;
      product_id: number;
      product_attribute_id: number;
      product_quantity: number;
      product_price: string;
      product_name: string;
    }>;
  };
}

export interface ApiResponse<T> {
  [key: string]: T[];
}

export interface ApiSingleResponse<T> {
  [key: string]: T;
}

// Types pour le store Zustand
export interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getItemsCount: () => number;
}