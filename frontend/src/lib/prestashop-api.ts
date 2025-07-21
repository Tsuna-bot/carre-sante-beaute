import axios, { AxiosError, AxiosResponse } from 'axios';
import { Category, Product, Cart, Customer, Order } from '@/types/prestashop';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

if (!API_KEY) {
  console.warn('⚠️ NEXT_PUBLIC_API_KEY is not set in environment variables');
}

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
  timeout: 10000,
});

interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const apiError: ApiError = {
      message: 'Une erreur est survenue',
      status: error.response?.status,
      code: error.code,
    };

    if (error.response?.data) {
      apiError.message = typeof error.response.data === 'string' 
        ? error.response.data 
        : 'Erreur de l\'API';
    } else if (error.message) {
      apiError.message = error.message;
    }

    console.error('API Error:', apiError);
    return Promise.reject(apiError);
  }
);

function extractData<T>(response: unknown): T | T[] {
  if (!response || typeof response !== 'object') {
    throw new Error('Invalid API response format');
  }

  const responseObj = response as Record<string, unknown>;
  const keys = Object.keys(responseObj);
  const dataKey = keys.find(key => key !== 'prestashop');
  
  if (!dataKey) {
    throw new Error('No valid data key found in API response');
  }

  return responseObj[dataKey] as T | T[];
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
    const params: Record<string, number> = {};
    if (limit) params.limit = limit;
    if (offset) params.offset = offset;
    
    const response = await api.get('/products', { params });
    const data = extractData<Product>(response.data);
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