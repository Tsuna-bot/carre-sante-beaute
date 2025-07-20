#!/bin/bash

echo "🐳 Démarrage de PrestaShop avec Docker..."

# Vérifier si Docker Desktop est lancé
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker Desktop n'est pas démarré."
    echo "📱 Veuillez lancer Docker Desktop et réessayer."
    echo ""
    echo "Sur macOS, vous pouvez lancer Docker Desktop avec :"
    echo "open -a Docker"
    exit 1
fi

echo "✅ Docker Desktop est en cours d'exécution"

# Démarrer les services
echo "🚀 Lancement des conteneurs..."
docker-compose up -d

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 PrestaShop est maintenant en cours de démarrage !"
    echo ""
    echo "📍 Accès aux services :"
    echo "   • PrestaShop Frontend : http://localhost:8080"
    echo "   • PrestaShop Admin    : http://localhost:8080/admin-dev"
    echo "   • phpMyAdmin          : http://localhost:8081"
    echo ""
    echo "⏳ L'installation peut prendre quelques minutes la première fois..."
    echo "📊 Suivre les logs : docker-compose logs -f"
else
    echo "❌ Erreur lors du démarrage des conteneurs"
    exit 1
fi