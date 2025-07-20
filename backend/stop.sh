#!/bin/bash

echo "🛑 Arrêt de PrestaShop Docker..."

docker-compose down

if [ $? -eq 0 ]; then
    echo "✅ Tous les conteneurs ont été arrêtés"
else
    echo "❌ Erreur lors de l'arrêt des conteneurs"
fi