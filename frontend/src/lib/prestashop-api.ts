import axios from 'axios';
import { Category, Product, Cart, Customer, Order } from '@/types/prestashop';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

// Configuration Axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  auth: {
    username: API_KEY,
    password: '',
  },
});

// Intercepteur pour gestion d'erreurs
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Helper pour extraire les données de l'API PrestaShop
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractData<T>(response: any): T | T[] {
  const keys = Object.keys(response);
  const dataKey = keys.find(key => key !== 'prestashop');
  return dataKey ? response[dataKey] : response;
}

// API Catégories
export const categoriesApi = {
  getAll: async (): Promise<Category[]> => {
    const response = await api.get('/categories');
    const data = extractData<Category>(response.data) as Category[];
    return Array.isArray(data) ? data : [data];
  },

  getById: async (id: number): Promise<Category> => {
    const response = await api.get(`/categories/${id}`);
    return extractData<Category>(response.data) as Category;
  },

  getByParent: async (parentId: number): Promise<Category[]> => {
    const categories = await categoriesApi.getAll();
    return categories.filter(cat => cat.id_parent === parentId);
  },
};

// API Produits
export const productsApi = {
  getAll: async (limit?: number, offset?: number): Promise<Product[]> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {};
    if (limit) params.limit = limit;
    if (offset) params.offset = offset;
    
    const response = await api.get('/products', { params });
    const data = extractData<Product>(response.data) as Product[];
    return Array.isArray(data) ? data : [data];
  },

  getById: async (id: number): Promise<Product> => {
    const response = await api.get(`/products/${id}`);
    return extractData<Product>(response.data) as Product;
  },

  getByCategory: async (categoryId: number): Promise<Product[]> => {
    const products = await productsApi.getAll();
    return products.filter(product => 
      product.id_category_default === categoryId ||
      product.categories?.some(cat => cat.id === categoryId)
    );
  },

  search: async (query: string): Promise<Product[]> => {
    const products = await productsApi.getAll();
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase())
    );
  },
};

// API Panier
export const cartApi = {
  create: async (cart: Partial<Cart>): Promise<Cart> => {
    const response = await api.post('/carts', {
      cart: {
        id_currency: 1,
        id_lang: 1,
        ...cart,
      },
    });
    return extractData<Cart>(response.data) as Cart;
  },

  getById: async (id: number): Promise<Cart> => {
    const response = await api.get(`/carts/${id}`);
    return extractData<Cart>(response.data) as Cart;
  },

  update: async (id: number, cart: Partial<Cart>): Promise<Cart> => {
    const response = await api.put(`/carts/${id}`, { cart });
    return extractData<Cart>(response.data) as Cart;
  },
};

// API Clients
export const customersApi = {
  create: async (customer: Partial<Customer>): Promise<Customer> => {
    const response = await api.post('/customers', {
      customer: {
        active: true,
        ...customer,
      },
    });
    return extractData<Customer>(response.data) as Customer;
  },

  getById: async (id: number): Promise<Customer> => {
    const response = await api.get(`/customers/${id}`);
    return extractData<Customer>(response.data) as Customer;
  },

  getByEmail: async (email: string): Promise<Customer[]> => {
    const response = await api.get(`/customers?filter[email]=${email}`);
    const data = extractData<Customer>(response.data) as Customer[];
    return Array.isArray(data) ? data : [data];
  },
};

// API Commandes
export const ordersApi = {
  create: async (order: Partial<Order>): Promise<Order> => {
    const response = await api.post('/orders', {
      order: {
        current_state: 1,
        ...order,
      },
    });
    return extractData<Order>(response.data) as Order;
  },

  getById: async (id: number): Promise<Order> => {
    const response = await api.get(`/orders/${id}`);
    return extractData<Order>(response.data) as Order;
  },

  getByCustomer: async (customerId: number): Promise<Order[]> => {
    const response = await api.get(`/orders?filter[id_customer]=${customerId}`);
    const data = extractData<Order>(response.data) as Order[];
    return Array.isArray(data) ? data : [data];
  },
};

// Fonction utilitaire pour construire l'URL d'image
export const getImageUrl = (productId: number, imageId?: number): string => {
  const baseUrl = process.env.NEXT_PUBLIC_PRESTASHOP_URL || 'http://localhost:8080';
  if (imageId) {
    return `${baseUrl}/img/p/${productId}/${imageId}.jpg`;
  }
  return `${baseUrl}/img/p/${productId}/${productId}.jpg`;
};

export default api;