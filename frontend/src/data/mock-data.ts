// Données mock pour remplacer les appels API en mode statique
export const mockCategories = [
  {
    id: 1,
    name: "Soins Visage",
    description: "Découvrez notre gamme complète de soins pour le visage",
    image: "/images/categories/soins-visage.jpg"
  },
  {
    id: 2,
    name: "Soins Corps",
    description: "Prenez soin de votre corps avec nos produits naturels",
    image: "/images/categories/soins-corps.jpg"
  },
  {
    id: 3,
    name: "Maquillage",
    description: "Sublimez votre beauté avec notre sélection makeup",
    image: "/images/categories/maquillage.jpg"
  },
  {
    id: 4,
    name: "Parfums",
    description: "Des fragrances uniques pour tous les goûts",
    image: "/images/categories/parfums.jpg"
  }
];

export const mockProducts = [
  {
    id: 1,
    name: "Crème Hydratante Jour",
    description: "Crème hydratante enrichie en vitamines pour une peau éclatante",
    price: 29.90,
    image: "/images/products/creme-jour.jpg",
    category_id: 1,
    stock: 15,
    featured: true
  },
  {
    id: 2,
    name: "Sérum Anti-Âge",
    description: "Sérum concentré aux peptides pour lutter contre les signes du temps",
    price: 45.00,
    image: "/images/products/serum-anti-age.jpg",
    category_id: 1,
    stock: 8,
    featured: true
  },
  {
    id: 3,
    name: "Gel Douche Relaxant",
    description: "Gel douche aux huiles essentielles pour un moment de détente",
    price: 12.50,
    image: "/images/products/gel-douche.jpg",
    category_id: 2,
    stock: 22,
    featured: false
  },
  {
    id: 4,
    name: "Rouge à Lèvres Mat",
    description: "Rouge à lèvres longue tenue, fini mat velouté",
    price: 18.90,
    image: "/images/products/rouge-levres.jpg",
    category_id: 3,
    stock: 12,
    featured: true
  },
  {
    id: 5,
    name: "Eau de Parfum Florale",
    description: "Parfum délicat aux notes florales et fruitées",
    price: 65.00,
    image: "/images/products/parfum-floral.jpg",
    category_id: 4,
    stock: 5,
    featured: true
  },
  {
    id: 6,
    name: "Masque Purifiant",
    description: "Masque à l'argile verte pour purifier et matifier",
    price: 24.90,
    image: "/images/products/masque-purifiant.jpg",
    category_id: 1,
    stock: 18,
    featured: false
  },
  {
    id: 7,
    name: "Huile Corps Nourrissante",
    description: "Huile précieuse pour nourrir intensément la peau",
    price: 32.00,
    image: "/images/products/huile-corps.jpg",
    category_id: 2,
    stock: 10,
    featured: true
  },
  {
    id: 8,
    name: "Palette Yeux Smoky",
    description: "6 teintes pour créer un regard smoky intense",
    price: 34.90,
    image: "/images/products/palette-yeux.jpg",
    category_id: 3,
    stock: 7,
    featured: false
  }
];

export const mockNewProducts = mockProducts.slice(0, 4);
export const mockFeaturedProducts = mockProducts.filter(p => p.featured);

export const mockBlogPosts = [
  {
    id: 1,
    title: "Les secrets d'une peau parfaite",
    excerpt: "Découvrez nos conseils d'experts pour une routine beauté efficace",
    image: "/images/blog/peau-parfaite.jpg",
    date: "2024-01-15",
    author: "Dr. Sophie Martin"
  },
  {
    id: 2,
    title: "Tendances maquillage printemps 2024",
    excerpt: "Les couleurs et techniques qui feront sensation cette saison",
    image: "/images/blog/tendances-makeup.jpg",
    date: "2024-01-10",
    author: "Emma Beauté"
  },
  {
    id: 3,
    title: "Guide des parfums selon votre personnalité",
    excerpt: "Comment choisir le parfum qui vous correspond vraiment",
    image: "/images/blog/guide-parfums.jpg",
    date: "2024-01-05",
    author: "Pierre Fragrance"
  }
];

// Images par défaut si les images ne sont pas disponibles
export const getProductImage = (productId: number) => {
  return `/images/products/product-${productId}.jpg`;
};

export const getCategoryImage = (categoryId: number) => {
  return `/images/categories/category-${categoryId}.jpg`;
};