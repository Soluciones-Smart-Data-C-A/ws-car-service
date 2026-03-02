import { defineConfig } from 'prisma/config';

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
        seed: "ts-node prisma/seed.ts",
    },
    datasource: {
        url: process.env.DATABASE_URL || 'mysql://root@localhost:3306/car_service',
    },
});