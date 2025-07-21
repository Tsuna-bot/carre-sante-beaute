// Données statiques pour remplacer l'API PrestaShop
import product1Image from "@/assets/manucurist-soin-active-plump-15ml.jpg";
import product2Image from "@/assets/manucurist-soin-active-glow-grape-15ml.jpg";
import product3Image from "@/assets/le-gel-douche-surgras-est-un-nettoyant-multi-usages-3en1-adapte-pour-le-lavage-du-visage-du-corps-et-des-cheveux.jpg";
import product4Image from "@/assets/le-1er-vernis-soin-embellisseur-effet-highlighter-pour-renforcer-et-illuminer-naturellement-les-ongles-.jpg";
import product5Image from "@/assets/le-1er-vernis-soin-embellisseur-effet-cc-polish-pour-lisser-les-stries-gommer-les-imperfections-et-unifier-la-surface-de-l-ongle.jpg";

// Catégories statiques
export const mockCategories = [
  {
    id: 1,
    name: "Soins du visage",
    description: "Produits pour le soin et la beauté du visage",
    id_parent: 0,
    level_depth: 1,
    active: true,
    link_rewrite: "soins-visage",
    meta_title: "Soins du visage",
    meta_description: "Découvrez notre gamme de soins pour le visage"
  },
  {
    id: 2,
    name: "Soins du corps",
    description: "Produits pour le soin du corps",
    id_parent: 0,
    level_depth: 1,
    active: true,
    link_rewrite: "soins-corps",
    meta_title: "Soins du corps",
    meta_description: "Découvrez notre gamme de soins pour le corps"
  },
  {
    id: 3,
    name: "Soins des ongles",
    description: "Produits pour le soin et l'embellissement des ongles",
    id_parent: 0,
    level_depth: 1,
    active: true,
    link_rewrite: "soins-ongles",
    meta_title: "Soins des ongles",
    meta_description: "Découvrez notre gamme de soins pour les ongles"
  },
  {
    id: 4,
    name: "Beauté",
    description: "Produits de beauté et maquillage",
    id_parent: 0,
    level_depth: 1,
    active: true,
    link_rewrite: "beaute",
    meta_title: "Beauté",
    meta_description: "Découvrez notre gamme de produits de beauté"
  },
  {
    id: 5,
    name: "Accessoires",
    description: "Accessoires de beauté et bien-être",
    id_parent: 0,
    level_depth: 1,
    active: true,
    link_rewrite: "accessoires",
    meta_title: "Accessoires",
    meta_description: "Découvrez notre gamme d'accessoires"
  }
];

// Produits statiques
export const mockProducts = [
  {
    id: 1,
    name: "Manucurist Active Glow Grape 15ml",
    description: "Le 1er vernis soin embellisseur effet gloss lilas pour nourrir les ongles en profondeur et réhausser leur éclat naturel !",
    description_short: "Vernis soin embellisseur effet gloss lilas",
    price: "15.99",
    id_default_image: 1,
    reference: "3222383",
    ean13: "",
    active: true,
    quantity: 10,
    id_category_default: 3,
    brand: "Ageti",
    image: product2Image,
    categories: [{ id: 3 }],
    images: [{ id: 1, id_image: 1 }]
  },
  {
    id: 2,
    name: "Manucurist Active Plump 15ml",
    description: "Le 1er vernis soin embellisseur au collagène pour des ongles hydratés et visuellement repulpés !",
    description_short: "Vernis soin embellisseur au collagène",
    price: "15.99",
    id_default_image: 2,
    reference: "3222406",
    ean13: "",
    active: true,
    quantity: 8,
    id_category_default: 3,
    brand: "Ageti",
    image: product1Image,
    categories: [{ id: 3 }],
    images: [{ id: 2, id_image: 2 }]
  },
  {
    id: 3,
    name: "Manucurist Active Shine 15ml",
    description: "Le 1er vernis soin embellisseur effet highlighter pour renforcer et illuminer naturellement les ongles !",
    description_short: "Vernis soin embellisseur effet highlighter",
    price: "15.99",
    id_default_image: 3,
    reference: "3222765",
    ean13: "",
    active: true,
    quantity: 12,
    id_category_default: 3,
    brand: "Ageti",
    image: product4Image,
    categories: [{ id: 3 }],
    images: [{ id: 3, id_image: 3 }]
  },
  {
    id: 4,
    name: "Manucurist Active Smooth 00 15ml",
    description: "Le 1er vernis soin embellisseur effet CC Polish pour lisser les stries, gommer les imperfections et unifier la surface de l'ongle !",
    description_short: "Vernis soin embellisseur effet CC Polish",
    price: "15.99",
    id_default_image: 4,
    reference: "3222703",
    ean13: "",
    active: true,
    quantity: 15,
    id_category_default: 3,
    brand: "Ageti",
    image: product5Image,
    categories: [{ id: 3 }],
    images: [{ id: 4, id_image: 4 }]
  },
  {
    id: 5,
    name: "Beau Terra Gel Douche Surgras Aloe Vera 1L",
    description: "Le gel douche surgras est un nettoyant multi-usages 3en1 adapté pour le lavage du visage, du corps et des cheveux. Enrichi à l'aloe vera pour une hydratation optimale.",
    description_short: "Gel douche surgras 3en1 à l'aloe vera",
    price: "6.99",
    id_default_image: 5,
    reference: "0816769",
    ean13: "",
    active: true,
    quantity: 20,
    id_category_default: 2,
    brand: "Beau Terra",
    image: product3Image,
    categories: [{ id: 2 }],
    images: [{ id: 5, id_image: 5 }]
  },
  {
    id: 6,
    name: "Crème Hydratante Visage Bio 50ml",
    description: "Crème hydratante naturelle pour le visage, enrichie en actifs bio pour une peau douce et éclatante.",
    description_short: "Crème hydratante bio pour visage",
    price: "24.90",
    id_default_image: 6,
    reference: "BIO001",
    ean13: "",
    active: true,
    quantity: 25,
    id_category_default: 1,
    brand: "Nature Care",
    image: product1Image,
    categories: [{ id: 1 }],
    images: [{ id: 6, id_image: 6 }]
  },
  {
    id: 7,
    name: "Sérum Anti-Âge Premium 30ml",
    description: "Sérum anti-âge concentré aux peptides et acide hyaluronique pour réduire les signes de vieillissement.",
    description_short: "Sérum anti-âge aux peptides",
    price: "45.00",
    id_default_image: 7,
    reference: "SERUM001",
    ean13: "",
    active: true,
    quantity: 18,
    id_category_default: 1,
    brand: "Premium Skin",
    image: product2Image,
    categories: [{ id: 1 }],
    images: [{ id: 7, id_image: 7 }]
  },
  {
    id: 8,
    name: "Baume Corps Réparateur 200ml",
    description: "Baume corps ultra-nourrissant pour peaux sèches et sensibles, formule enrichie en beurre de karité.",
    description_short: "Baume corps au beurre de karité",
    price: "18.50",
    id_default_image: 8,
    reference: "BAUME001",
    ean13: "",
    active: true,
    quantity: 30,
    id_category_default: 2,
    brand: "Comfort Care",
    image: product3Image,
    categories: [{ id: 2 }],
    images: [{ id: 8, id_image: 8 }]
  }
];

// Articles de blog statiques
export const mockBlogPosts = [
  {
    id: 1,
    slug: "routine-soins",
    title: "Ma routine de soins quotidienne",
    content: "Découvrez les étapes essentielles d'une routine de soins efficace pour préserver la beauté de votre peau.",
    excerpt: "Les secrets d'une routine beauté réussie",
    date: "2024-01-15",
    category: "Conseils",
    image: product1Image
  },
  {
    id: 2,
    slug: "tendances-2024",
    title: "Les tendances beauté 2024",
    content: "Explorez les dernières tendances en matière de beauté et de soins pour cette année.",
    excerpt: "Ce qui va marquer l'année 2024",
    date: "2024-01-10",
    category: "Tendances",
    image: product2Image
  },
  {
    id: 3,
    slug: "vitamine-c-peau",
    title: "Les bienfaits de la vitamine C pour la peau",
    content: "Tout ce qu'il faut savoir sur les bienfaits de la vitamine C dans vos soins du visage.",
    excerpt: "Un actif incontournable pour votre peau",
    date: "2024-01-05",
    category: "Actifs",
    image: product3Image
  },
  {
    id: 4,
    slug: "conseils-beaute",
    title: "5 conseils beauté d'experts",
    content: "Nos experts partagent leurs conseils essentiels pour sublimer votre beauté naturelle.",
    excerpt: "Les secrets des professionnels",
    date: "2024-01-01",
    category: "Conseils",
    image: product4Image
  },
  {
    id: 5,
    slug: "produits-naturels",
    title: "Pourquoi choisir des produits naturels ?",
    content: "Découvrez les avantages des cosmétiques naturels pour votre peau et l'environnement.",
    excerpt: "Une beauté plus respectueuse",
    date: "2023-12-20",
    category: "Bio & Naturel",
    image: product5Image
  }
];

// Nouveautés statiques (produits récents)
export const mockNews = [
  {
    id: 1,
    title: "Nouvelle collection printemps",
    description: "Découvrez notre nouvelle collection de soins pour le printemps",
    image: "/assets/news/dermadv-dermatopic-cr-cicareparatrice-100ml.jpg",
    date: "2024-03-01"
  },
  {
    id: 2,
    title: "Sérum révolutionnaire",
    description: "Le nouveau sérum anti-âge qui révolutionne les soins",
    image: "/assets/news/la-rosee-vis-masque-en-stick-regenerant-75ml.jpg",
    date: "2024-02-15"
  },
  {
    id: 3,
    title: "Gamme bio exclusive",
    description: "Une gamme 100% bio certifiée pour tous types de peau",
    image: "/assets/news/nhco-effluvium-168u.jpg",
    date: "2024-02-01"
  },
  {
    id: 4,
    title: "Parfum signature",
    description: "Notre nouveau parfum signature aux notes florales",
    image: "/assets/news/rg-cologne-neroli-100ml.jpg",
    date: "2024-01-20"
  }
];

// Simulation d'une API avec Promise pour maintenir la compatibilité
export const mockApi = {
  categories: {
    getAll: () => Promise.resolve(mockCategories),
    getById: (id: number) => Promise.resolve(mockCategories.find(cat => cat.id === id)),
    getByParent: (parentId: number) => Promise.resolve(mockCategories.filter(cat => cat.id_parent === parentId))
  },
  products: {
    getAll: () => Promise.resolve(mockProducts),
    getById: (id: number) => Promise.resolve(mockProducts.find(product => product.id === id)),
    getByCategory: (categoryId: number) => Promise.resolve(mockProducts.filter(product => product.id_category_default === categoryId)),
    search: (query: string) => Promise.resolve(mockProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase())
    ))
  },
  blog: {
    getAll: () => Promise.resolve(mockBlogPosts),
    getBySlug: (slug: string) => Promise.resolve(mockBlogPosts.find(post => post.slug === slug))
  },
  news: {
    getAll: () => Promise.resolve(mockNews)
  }
};