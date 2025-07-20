# E-commerce PrestaShop + Next.js

Un stack e-commerce moderne combinant PrestaShop comme CMS headless et Next.js pour le frontend.

## 🚀 Stack Technologique

### Backend
- **PrestaShop 9.0** - CMS e-commerce avec API REST
- **MySQL 8.0** - Base de données
- **Docker** - Containerisation

### Frontend
- **Next.js 14** - Framework React avec SSR
- **TypeScript** - Typage statique
- **TailwindCSS** - Framework CSS utilitaire
- **React Query** - Gestion du cache et des requêtes API
- **Zustand** - Gestion d'état (panier)
- **Heroicons** - Icônes

## 📁 Structure du Projet

```
prestashop-ecommerce/
├── backend/                 # Configuration PrestaShop
│   ├── docker-compose.yml  # Services backend
│   ├── .env                 # Variables d'environnement
│   ├── start.sh            # Script de démarrage
│   └── api-setup.md        # Guide configuration API
├── frontend/               # Application Next.js
│   ├── src/
│   │   ├── app/            # Pages App Router
│   │   ├── components/     # Composants React
│   │   ├── lib/           # API et utilitaires
│   │   ├── store/         # Gestion d'état
│   │   └── types/         # Types TypeScript
│   ├── Dockerfile         # Build frontend
│   └── next.config.js     # Configuration Next.js
├── docker-compose.full.yml # Stack complet
├── nginx.conf             # Reverse proxy
└── README.md              # Ce fichier
```

## 🛠️ Installation et Démarrage

### Prérequis
- Docker Desktop
- Node.js 18+ (pour le développement local)
- Git

### 1. Cloner le projet
```bash
git clone <your-repo-url>
cd prestashop-ecommerce
```

### 2. Configuration environnement
```bash
cp .env.example .env
# Éditer .env avec vos valeurs
```

### 3. Démarrage Backend (PrestaShop)
```bash
cd backend
./start.sh
```

**Accès:**
- PrestaShop: http://localhost:8080
- Admin: http://localhost:8080/admin-dev
- phpMyAdmin: http://localhost:8081

### 4. Configuration API PrestaShop
1. Se connecter à l'admin PrestaShop
2. Aller dans `Paramètres avancés` > `Webservice`
3. Activer le webservice
4. Créer une clé API et configurer les permissions
5. Copier la clé dans `.env` : `NEXT_PUBLIC_API_KEY=votre_clé`

### 5. Démarrage Frontend
```bash
cd frontend
npm install
npm run dev
```

**Accès Frontend:** http://localhost:3000

## 🐳 Déploiement avec Docker

### Développement
```bash
# Backend seulement
cd backend
docker-compose up -d

# Frontend en local
cd frontend
npm run dev
```

### Production (Stack complet)
```bash
# Copier les variables d'environnement
cp .env.example .env

# Démarrer tous les services
docker-compose -f docker-compose.full.yml up -d

# Avec reverse proxy
docker-compose -f docker-compose.full.yml --profile production up -d
```

## 📊 Monitoring et Logs

```bash
# Voir les logs
docker-compose logs -f

# Status des conteneurs
docker-compose ps

# Redémarrer un service
docker-compose restart prestashop
```

## 🔧 Développement

### Frontend
```bash
cd frontend

# Développement
npm run dev

# Build
npm run build

# Linting
npm run lint

# Types
npm run type-check
```

### API Testing
Utiliser le fichier `backend/api-test.http` avec REST Client (VS Code) ou Postman.

## 🌐 Configuration Production

### 1. Variables d'environnement
```bash
# .env pour production
PRESTASHOP_DOMAIN=votre-domaine.com
NEXT_PUBLIC_PRESTASHOP_URL=https://votre-domaine.com
NEXT_PUBLIC_API_URL=https://votre-domaine.com/api
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

### 2. SSL/HTTPS
- Configurer les certificats dans `nginx.conf`
- Décommenter la configuration SSL
- Rediriger HTTP vers HTTPS

### 3. Sécurité
- Changer tous les mots de passe par défaut
- Utiliser des clés API sécurisées
- Configurer un firewall
- Activer les backups MySQL

## 🚀 Déploiement Recommandé

### Option 1: VPS avec Docker
1. Cloner le projet sur le serveur
2. Configurer `.env` pour production
3. Lancer avec `docker-compose.full.yml`
4. Configurer un reverse proxy (Nginx)

### Option 2: Services Cloud
- **Frontend**: Vercel, Netlify
- **Backend**: DigitalOcean Apps, AWS ECS
- **Base de données**: MySQL managé

### Option 3: Kubernetes
Utiliser les Dockerfiles fournis pour créer des déploiements K8s.

## 📝 API PrestaShop

### Endpoints principaux
```
GET    /api/products          # Liste des produits
GET    /api/products/{id}     # Détail produit
GET    /api/categories        # Liste des catégories
GET    /api/categories/{id}   # Détail catégorie
POST   /api/carts            # Créer un panier
POST   /api/orders           # Créer une commande
```

### Authentification
```bash
Authorization: Basic {base64(api_key:)}
Accept: application/json
```

## 🎨 Personnalisation

### Frontend
- Modifier `src/app/layout.tsx` pour le layout général
- Personnaliser `tailwind.config.js` pour les couleurs/styles
- Ajouter des composants dans `src/components/`

### PrestaShop
- Personnaliser via l'admin PrestaShop
- Ajouter des modules via le volume `prestashop_modules`
- Modifier les thèmes via `prestashop_themes`

## 🐛 Dépannage

### Problèmes courants

**Docker Desktop non démarré**
```bash
# macOS
open -a Docker
```

**API PrestaShop non accessible**
- Vérifier que le webservice est activé
- Contrôler la clé API et les permissions
- Vérifier les CORS

**Frontend ne se connecte pas au backend**
- Vérifier les URLs dans `.env.local`
- Contrôler que PrestaShop est démarré
- Vérifier les logs avec `docker-compose logs`

## 📚 Ressources

- [Documentation PrestaShop](https://devdocs.prestashop-project.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Développé avec ❤️ en utilisant PrestaShop et Next.js**