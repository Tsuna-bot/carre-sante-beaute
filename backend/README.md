# PrestaShop Backend (Headless CMS)

Configuration Docker pour PrestaShop 9.0 utilisé comme CMS headless.

## Services inclus

- **PrestaShop 9.0** : CMS e-commerce sur `http://localhost:8080`
- **MySQL 8.0** : Base de données sur port `3306`
- **phpMyAdmin** : Interface web pour MySQL sur `http://localhost:8081`

## Démarrage rapide

1. Copier le fichier d'environnement :
```bash
cp .env.example .env
```

2. Modifier les variables dans `.env` si nécessaire

3. Lancer les services :
```bash
docker-compose up -d
```

4. Accéder à PrestaShop :
   - **Frontend** : http://localhost:8080
   - **Admin** : http://localhost:8080/admin-dev
   - **phpMyAdmin** : http://localhost:8081

## Comptes par défaut

- **Admin PrestaShop** : admin@example.com / admin123
- **MySQL root** : root / admin123
- **MySQL user** : prestashop_user / prestashop_pass

## API REST

L'API REST sera accessible sur :
```
http://localhost:8080/api/
```

Configuration nécessaire dans l'admin PrestaShop :
Paramètres avancés > Webservice

## Volumes persistants

- `mysql_data` : Données MySQL
- `prestashop_data` : Fichiers PrestaShop
- `prestashop_modules` : Modules
- `prestashop_themes` : Thèmes

## Commandes utiles

```bash
# Démarrer les services
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter les services
docker-compose down

# Redémarrer un service
docker-compose restart prestashop

# Accéder au container PrestaShop
docker-compose exec prestashop bash
```