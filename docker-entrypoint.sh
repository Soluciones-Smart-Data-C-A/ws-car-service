#!/bin/sh
set -e

echo "Esperando a MySQL..."
until mysqladmin ping -h"db" -P3306 --silent; do
  sleep 2
done

# Exporta explícitamente la variable (aunque ya debería estarlo)
export DATABASE_URL="$DATABASE_URL"

# Indica a Prisma que use tsx para cargar el archivo de configuración
export PRISMA_CONFIG_LOADER=tsx

echo "DATABASE_URL es: $DATABASE_URL"
echo "Ejecutando migraciones..."

# Ejecuta migrate deploy para usar las carpetas de migraciones
npx prisma migrate deploy

echo "Iniciando app..."
# Permite ejecutar el comando pasado por docker-compose o el CMD por defecto
exec "$@"