# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma
RUN ls -la prisma/ && ls -la prisma/migrations || echo "No migrations folder"

# Install dependencies
RUN npm install

# Copy source code and prisma folder
COPY . .
# Aseguramos que la carpeta prisma se copie explícitamente si se desea redundancia o para verificar en el log
COPY prisma ./prisma
RUN ls -la prisma/ && (ls -la prisma/migrations || echo "No migrations folder found in prisma/")

# Generate Prisma client
RUN DATABASE_URL="mysql://root:root@localhost:3306/car_service" npx prisma generate

# Build the application
RUN npm run build

# Production Stage
FROM node:20-alpine AS production

RUN apk add --no-cache mysql-client

WORKDIR /app

# Copy only necessary files from build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/package*.json ./
COPY prisma.config.ts ./

# Copy entrypoint to the correct WORKDIR
COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh
ENTRYPOINT ["./docker-entrypoint.sh"]

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:prod"]
