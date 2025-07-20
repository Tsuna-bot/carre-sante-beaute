# Guide de Déploiement sur Vercel

Ce guide explique comment déployer la landing page Carré Santé Beauté sur Vercel.

## Préparation

Le projet a été configuré pour fonctionner en mode démo sur Vercel :

- ✅ Homepage utilise des données statiques
- ✅ Gestion gracieuse de l'absence d'API
- ✅ Pages API remplacées par des notices explicatives
- ✅ Images optimisées pour le web
- ✅ Configuration Vercel prête

## Étapes de Déploiement

### Option 1: Via GitHub (Recommandé)

1. **Push sur GitHub**
   ```bash
   git add .
   git commit -m "Préparation déploiement Vercel"
   git push origin main
   ```

2. **Connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub
   - Cliquer "New Project"
   - Sélectionner le repository
   - Configurer le projet :
     - **Framework Preset**: Next.js
     - **Root Directory**: `.` (racine)
     - **Build Command**: `cd frontend && npm run build`
     - **Output Directory**: `frontend/.next`
     - **Install Command**: `cd frontend && npm install`

3. **Variables d'Environnement**
   Dans les paramètres Vercel, ajouter :
   ```
   NEXT_PUBLIC_SITE_NAME=Carré Santé Beauté
   NEXT_PUBLIC_PRESTASHOP_URL=https://demo.prestashop.com
   NEXT_PUBLIC_API_URL=https://demo.prestashop.com/api
   ```

### Option 2: Vercel CLI

1. **Installer Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Se connecter**
   ```bash
   vercel login
   ```

3. **Déployer**
   ```bash
   vercel --prod
   ```

## Configuration Optimale

Le projet est configuré avec :

- **Vercel.json** pour router vers le dossier frontend
- **Next.config.js** optimisé pour Vercel
- **Images statiques** pour de meilleures performances
- **Headers de sécurité** configurés
- **Pages d'erreur gracieuses** pour les fonctionnalités nécessitant l'API

## Fonctionnalités Disponibles en Démo

✅ **Page d'accueil complète** avec :
- Hero section avec image
- Caroussel de produits
- Section nouveautés
- Section institut
- Caroussel blog
- Newsletter
- Footer

✅ **Navigation** :
- Menu responsive
- Liens vers toutes les sections
- Recherche (UI seulement)

⚠️ **Fonctionnalités limitées** :
- Pages produits/catégories (affichent un message explicatif)
- Panier (redirige vers homepage)
- Fonctionnalités nécessitant l'API PrestaShop

## URL de Démo

Une fois déployé, le site sera accessible via :
`https://your-project-name.vercel.app`

## Personnalisation Post-Déploiement

Pour personnaliser :

1. **Domaine personnalisé** : Configurer dans les paramètres Vercel
2. **Analytics** : Activer Vercel Analytics
3. **Performance** : Utiliser Vercel Speed Insights

## Support

- 📧 Contact: [votre-email]
- 📚 Documentation Vercel: https://vercel.com/docs
- 🔧 Repository: [lien-github]