// prisma.config.ts
import { config } from 'dotenv';
import { defineConfig } from 'prisma/config';

// Carga explícitamente el archivo .env si existe, pero en Docker confiamos en las variables de entorno
config();

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        // Si process.env.DATABASE_URL no está definido, lanza un error descriptivo
        url: process.env.DATABASE_URL ?? (() => {
            throw new Error('DATABASE_URL is not defined in environment variables')
        })(),
    },
});