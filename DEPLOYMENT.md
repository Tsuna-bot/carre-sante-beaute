# Guide de Déploiement - Carré Santé Beauté

## Structure du Projet

```
Prestashop/
├── frontend/          # Application Next.js
├── backend/           # API Prestashop
├── .github/workflows/ # GitHub Actions
└── docker-compose.yml # Configuration Docker
```

## Options de Déploiement

### Option 1 : GitHub Pages (Recommandé - Plus Simple)

**Avantages :**

- ✅ Gratuit et illimité
- ✅ Déploiement automatique à chaque push
- ✅ Configuration simple
- ✅ Pas besoin de compte externe

**Configuration automatique :**

1. **Le workflow GitHub Actions est déjà configuré**
2. **Activez GitHub Pages dans les settings de votre repo :**

   - Allez dans Settings > Pages
   - Source : "GitHub Actions"
   - Cliquez sur "Save"

3. **Votre site sera accessible à :**
   `https://tsuna-bot.github.io/carre-sante-beaute/`

### Option 2 : Vercel

1. **Installation de Vercel CLI :**

   ```bash
   npm install -g vercel
   ```

2. **Déploiement depuis le root :**

   ```bash
   vercel
   ```

3. **Configuration automatique :**
   - Vercel détectera automatiquement la configuration dans `vercel.json`
   - Le build se fera dans le dossier `frontend/`
   - Le déploiement se fera automatiquement à chaque push sur GitHub

### Option 3 : Netlify

1. **Build du projet :**

   ```bash
   cd frontend
   npm run build
   ```

2. **Déploiement via Netlify CLI :**
   ```bash
   npm install -g netlify-cli
   netlify deploy --dir=frontend/out --prod
   ```

## Variables d'Environnement

Créez un fichier `.env.local` dans le dossier `frontend` :

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=https://tsuna-bot.github.io/carre-sante-beaute
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

### Déploiement manuel GitHub Pages

```bash
cd frontend
npm run deploy
```

## Liens Utiles

- **Repository GitHub :** https://github.com/Tsuna-bot/carre-sante-beaute.git
- **Site déployé :** https://tsuna-bot.github.io/carre-sante-beaute/
- **Documentation Next.js :** https://nextjs.org/docs
- **Documentation GitHub Pages :** https://pages.github.com/
