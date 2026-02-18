#!/bin/sh
set -e

# Exporta explícitamente la variable
export DATABASE_URL="$DATABASE_URL"

# Indica a Prisma que use tsx para cargar el archivo de configuración
export PRISMA_CONFIG_LOADER=tsx

echo "DATABASE_URL configurada. Ejecutando migraciones..."

# Ejecuta migrate deploy para aplicar migraciones pendientes en producción
npx prisma migrate deploy

echo "Iniciando aplicación..."
# Ejecuta el comando pasado (usualmente CMD del Dockerfile)
exec "$@"