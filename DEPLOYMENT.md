# Guide de Déploiement

## 🚀 Options de Déploiement

### 1. Déploiement Local/Développement

#### Prérequis
- Docker Desktop installé et démarré
- Node.js 18+ pour le développement frontend

#### Étapes
```bash
# 1. Cloner et configurer
git clone <repo-url>
cd prestashop-nextjs-ecommerce
cp .env.example .env

# 2. Démarrer le backend
cd backend
./start.sh

# 3. Configurer l'API PrestaShop
# Se connecter à http://localhost:8080/admin-dev
# Aller dans Paramètres avancés > Webservice
# Créer une clé API et la copier dans .env

# 4. Démarrer le frontend
cd ../frontend
npm install
npm run dev
```

### 2. Déploiement VPS (Recommandé pour production)

#### Prérequis
- VPS Ubuntu 22.04+ avec accès root
- Nom de domaine pointant vers le VPS
- 2GB RAM minimum, 4GB recommandé

#### Installation
```bash
# 1. Mise à jour système
sudo apt update && sudo apt upgrade -y

# 2. Installation Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo systemctl enable docker

# 3. Installation Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 4. Cloner le projet
git clone <repo-url>
cd prestashop-nextjs-ecommerce

# 5. Configuration production
cp .env.example .env
nano .env  # Modifier pour production
```

#### Configuration .env pour production
```bash
# Base de données
MYSQL_ROOT_PASSWORD=your_secure_root_password_here
MYSQL_PASSWORD=your_secure_db_password_here

# PrestaShop
PRESTASHOP_DOMAIN=votre-domaine.com
ADMIN_PASSWORD=your_secure_admin_password

# Frontend
NEXT_PUBLIC_PRESTASHOP_URL=https://votre-domaine.com
NEXT_PUBLIC_API_URL=https://votre-domaine.com/api
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

#### SSL avec Let's Encrypt
```bash
# 1. Installation Certbot
sudo apt install certbot

# 2. Génération certificat
sudo certbot certonly --standalone -d votre-domaine.com

# 3. Configuration Nginx
# Modifier nginx.conf avec les chemins des certificats
```

#### Démarrage production
```bash
# Démarrage avec reverse proxy
docker-compose -f docker-compose.full.yml --profile production up -d

# Vérification
docker-compose -f docker-compose.full.yml ps
```

### 3. Déploiement Cloud (Frontend séparé)

#### Option A: Frontend sur Vercel + Backend sur VPS

**Frontend (Vercel)**
```bash
# 1. Push sur GitHub
git push origin main

# 2. Connecter Vercel au repo
# 3. Variables d'environnement Vercel :
NEXT_PUBLIC_PRESTASHOP_URL=https://api.votre-domaine.com
NEXT_PUBLIC_API_URL=https://api.votre-domaine.com/api
NEXT_PUBLIC_SITE_NAME=Mon E-commerce
```

**Backend (VPS)**
```bash
# Déployer seulement PrestaShop + MySQL
docker-compose -f backend/docker-compose.yml up -d
```

#### Option B: Frontend sur Netlify + Backend sur DigitalOcean

**Build Settings Netlify**
```
Build command: cd frontend && npm run build
Publish directory: frontend/out
```

### 4. Déploiement Kubernetes

#### Manifests K8s (exemple)
```yaml
# prestashop-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prestashop
spec:
  replicas: 1
  selector:
    matchLabels:
      app: prestashop
  template:
    metadata:
      labels:
        app: prestashop
    spec:
      containers:
      - name: prestashop
        image: prestashop/prestashop:9.0-apache
        ports:
        - containerPort: 80
        env:
        - name: DB_SERVER
          value: "mysql-service"
        # ... autres variables
```

## 🔧 Maintenance

### Backups
```bash
# Backup MySQL
docker exec ecommerce_mysql mysqldump -u root -p prestashop > backup_$(date +%Y%m%d).sql

# Backup volumes PrestaShop
docker run --rm -v prestashop_data:/data -v $(pwd):/backup alpine tar czf /backup/prestashop_backup_$(date +%Y%m%d).tar.gz /data
```

### Mises à jour
```bash
# 1. Arrêter les services
docker-compose -f docker-compose.full.yml down

# 2. Backup
./scripts/backup.sh

# 3. Pull nouvelles images
docker-compose -f docker-compose.full.yml pull

# 4. Redémarrer
docker-compose -f docker-compose.full.yml up -d
```

### Monitoring
```bash
# Logs en temps réel
docker-compose -f docker-compose.full.yml logs -f

# Utilisation ressources
docker stats

# Santé des conteneurs
docker-compose -f docker-compose.full.yml ps
```

## 📊 Performance

### Optimisations Frontend
- Cache statique des images (Nginx)
- Compression Gzip
- CDN pour les assets statiques
- Service Worker pour cache offline

### Optimisations Backend
- Cache Redis pour API PrestaShop
- Optimisation base de données
- Index MySQL personnalisés
- Pool de connexions

### Monitoring Production
```bash
# Installation monitoring stack
docker run -d --name prometheus prom/prometheus
docker run -d --name grafana grafana/grafana
```

## 🛡️ Sécurité

### Checklist Sécurité
- [ ] Changer tous les mots de passe par défaut
- [ ] Configurer firewall (UFW)
- [ ] SSL/TLS activé
- [ ] Headers de sécurité Nginx
- [ ] Backups automatiques
- [ ] Monitoring logs d'erreur
- [ ] Mises à jour système régulières

### Configuration Firewall
```bash
# UFW basic setup
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

## 🚨 Dépannage Production

### Problèmes communs

**Service ne démarre pas**
```bash
# Vérifier logs
docker-compose logs service_name

# Vérifier configuration
docker-compose config

# Redémarrer service
docker-compose restart service_name
```

**Problème de performance**
```bash
# Vérifier ressources
docker stats
htop
df -h

# Analyser logs
tail -f /var/log/nginx/error.log
```

**Base de données corrompue**
```bash
# Restaurer backup
docker exec -i mysql mysql -u root -p prestashop < backup.sql
```

## 📞 Support

En cas de problème:
1. Vérifier les logs Docker
2. Consulter la documentation PrestaShop
3. Vérifier les issues GitHub
4. Créer une issue avec logs complets

---

**Bonnes pratiques:**
- Toujours tester en staging avant production
- Faire des backups avant les mises à jour
- Monitorer les performances
- Tenir à jour la documentation