# Configuration API PrestaShop

## Étapes de configuration dans l'admin PrestaShop

1. **Accéder à l'administration**
   - URL : http://localhost:8080/admin-dev
   - Email : admin@example.com
   - Mot de passe : admin123

2. **Activer le Webservice**
   - Aller dans `Paramètres avancés` > `Webservice`
   - Activer le webservice : **OUI**
   - Activer le mode CGI pour PHP : **NON** (sauf si nécessaire)

3. **Créer une clé API**
   - Dans la section "Webservice", cliquer sur "Ajouter une nouvelle clé de webservice"
   - **Clé** : Générer une clé de 32 caractères (bouton "Générer")
   - **Description** : "Frontend React API Key"
   - **Statut** : Activé

4. **Configurer les permissions**
   Pour chaque ressource, cocher les permissions nécessaires :
   
   ### Permissions recommandées pour le frontend :
   - **addresses** : GET
   - **carriers** : GET
   - **cart_rules** : GET
   - **carts** : GET, POST, PUT
   - **categories** : GET
   - **countries** : GET
   - **currencies** : GET
   - **customers** : GET, POST, PUT (si gestion clients)
   - **languages** : GET
   - **orders** : GET, POST, PUT
   - **order_details** : GET
   - **order_states** : GET
   - **products** : GET
   - **product_features** : GET
   - **product_feature_values** : GET
   - **product_options** : GET
   - **product_option_values** : GET
   - **shops** : GET
   - **states** : GET
   - **stock_availables** : GET
   - **zones** : GET

5. **Configuration CORS (si nécessaire)**
   Ajouter dans le fichier `.htaccess` de PrestaShop :
   ```apache
   Header always set Access-Control-Allow-Origin "http://localhost:3000"
   Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
   Header always set Access-Control-Allow-Headers "Content-Type, Authorization"
   ```

## Test de l'API

1. **Récupérer la clé API** générée dans l'admin
2. **Remplacer** `YOUR_API_KEY_HERE` dans le fichier `api-test.http`
3. **Tester** avec REST Client ou Postman

## Format des réponses

L'API PrestaShop retourne du XML par défaut. Pour du JSON, ajouter :
```
Accept: application/json
```

## URLs principales

- **Base API** : `http://localhost:8080/api/`
- **Catégories** : `http://localhost:8080/api/categories`
- **Produits** : `http://localhost:8080/api/products`
- **Commandes** : `http://localhost:8080/api/orders`

## Authentification

Format Basic Auth : `API_KEY:` (mot de passe vide)
En Base64 : `btoa(apiKey + ":")`