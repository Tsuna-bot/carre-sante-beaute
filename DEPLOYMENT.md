# Guide de Déploiement - Carré Santé Beauté

## Options de Déploiement

### Option 1 : Vercel (Recommandé)

1. **Installation de Vercel CLI :**

   ```bash
   npm install -g vercel
   ```

2. **Déploiement :**

   ```bash
   cd frontend
   vercel
   ```

3. **Configuration automatique :**
   - Vercel détectera automatiquement que c'est un projet Next.js
   - Le déploiement se fera automatiquement à chaque push sur GitHub

### Option 2 : Netlify

1. **Build du projet :**

   ```bash
   cd frontend
   npm run build
   ```

2. **Déploiement via Netlify CLI :**
   ```bash
   npm install -g netlify-cli
   netlify deploy --dir=.next --prod
   ```

### Option 3 : GitHub Pages

1. **Configuration dans package.json :**

   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "npm run export && touch out/.nojekyll"
     }
   }
   ```

2. **Déploiement :**
   ```bash
   npm run deploy
   ```

## Variables d'Environnement

Créez un fichier `.env.local` dans le dossier `frontend` :

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
```

## Commandes Utiles

### Développement local

```bash
cd frontend
npm run dev
```

### Build de production

```bash
cd frontend
npm run build
```

### Test local de production

```bash
cd frontend
npm run start
```

## Structure du Projet

```
Prestashop/
├── frontend/          # Application Next.js
├── backend/           # API Prestashop
└── docker-compose.yml # Configuration Docker
```

## Liens Utiles

- **Repository GitHub :** https://github.com/Tsuna-bot/carre-sante-beaute.git
- **Documentation Next.js :** https://nextjs.org/docs
- **Documentation Vercel :** https://vercel.com/docs
