#!/bin/sh
set -e

# Extraer host y puerto de DATABASE_URL
if [ -n "$DATABASE_URL" ]; then
  # Parsing simple
  DB_HOST_PORT=$(echo $DATABASE_URL | sed -e 's|.*://[^@]*@||' -e 's|/.*||')
  DB_HOST=$(echo $DB_HOST_PORT | cut -d: -f1)
  DB_PORT=$(echo $DB_HOST_PORT | cut -s -d: -f2)
  DB_PORT=${DB_PORT:-3306}

  echo "🔍 Diagnóstico de conexión:"
  echo "Host: $DB_HOST"
  echo "Puerto: $DB_PORT"
  
  # Usar nc (netcat) para verificar si el puerto está abierto (más fiable que mysqladmin ping para diagnóstico)
  echo "Esperando a que el puerto $DB_PORT en $DB_HOST esté abierto..."
  
  MAX_RETRIES=30
  COUNT=0
  
  while ! nc -z "$DB_HOST" "$DB_PORT"; do
    COUNT=$((COUNT+1))
    if [ $COUNT -ge $MAX_RETRIES ]; then
      echo "❌ ERROR: No se pudo conectar a $DB_HOST:$DB_PORT tras $MAX_RETRIES intentos."
      echo "Sugerencia: Si es una DB de Coolify, usa el nombre del servicio (ej: mysql) en lugar de host.docker.internal."
      exit 1
    fi
    echo "[$COUNT/$MAX_RETRIES] Reintentando conexión..."
    sleep 2
  done
  
  echo "✅ ¡Puerto abierto! La base de datos es accesible."
fi

echo "🚀 Ejecutando migraciones de Prisma..."
npx prisma migrate deploy

echo "🎬 Iniciando aplicación..."
exec "$@"