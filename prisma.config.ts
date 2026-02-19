import { defineConfig } from 'prisma/config';

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        url: process.env.DATABASE_URL || 'mysql://root:12369*@localhost:3306/car_service',
    },
});