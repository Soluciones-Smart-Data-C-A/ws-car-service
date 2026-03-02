# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Copy package files first
COPY package*.json ./
COPY prisma ./prisma/

# Install ALL dependencies
RUN npm install

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Robust Prisma Environment
ENV DATABASE_URL="mysql://root@localhost:3306/car_service"
ENV PRISMA_SKIP_POSTINSTALL_GENERATE=true

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Stage 3: Production
FROM node:20-alpine AS production

# Install mysql-client for healthcheck
RUN apk add --no-cache mysql-client

WORKDIR /app

# Environment defaults
ENV NODE_ENV=production
ENV PORT=3000

# Copy artifacts from builder with correct ownership
COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/prisma ./prisma
COPY --from=builder --chown=node:node /app/prisma.config.ts ./
COPY --from=builder --chown=node:node /app/docker-entrypoint.sh ./

# Incluir cliente de prisma generado y configuración TS para el seeder
COPY --from=builder --chown=node:node /app/src/generated ./src/generated
COPY --from=builder --chown=node:node /app/tsconfig.json ./

# Setup entrypoint
RUN sed -i 's/\r$//' ./docker-entrypoint.sh && chmod +x ./docker-entrypoint.sh

# Security: Run as non-root user
USER node

# Expose port
EXPOSE 3000

# Execution
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["npm", "run", "start:prod"]
