<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# WS Car Service - Backend API

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

Sistema de backend profesional diseñado para la gestión integral de servicios de vehículos, usuarios y autenticación segura. Construido con **NestJS** y **Prisma ORM**, ofreciendo una arquitectura escalable y eficiente.

---

## 🚀 Características Principales

- **Autenticación Robusta**: Implementación de JWT (JSON Web Tokens) y soporte para verificación via OTP (One-Time Password).
- **Gestión de Usuarios**: Registro, verificación de cuenta y perfiles de usuario.
- **Control de Vehículos**: CRUD completo de vehículos asociados a usuarios, incluyendo seguimiento de kilometraje y fechas de servicio.
- **Documentación Interactiva**: Integración completa con Swagger para pruebas de endpoints.
- **Arquitectura Limpia**: Estructura modular siguiendo las mejores prácticas de NestJS.
- **Containerización**: Listo para desplegar con Docker y Docker Compose.

---

## 🛠️ Stack Tecnológico

- **Framework**: [NestJS](https://nestjs.com/) (v11+)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Base de Datos**: MySQL / MariaDB
- **Lenguaje**: TypeScript
- **Documentación**: Swagger / OpenAPI
- **Validación**: Class-validator & Class-transformer

---

## 📋 Requisitos Previos

- [Node.js](https://nodejs.org/) (v20 o superior recomendado)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) (opcional para ejecución en contenedores)
- Instancia de MySQL/MariaDB (si se corre localmente)

---

## ⚙️ Configuración del Entorno

Crea un archivo `.env` en la raíz del proyecto basado en el siguiente ejemplo:

```env
DATABASE_URL="mysql://usuario:password@localhost:3306/ws_car_service"
JWT_SECRET="tu_secreto_super_seguro"
PORT=3000
```

---

## 🚀 Instalación y Ejecución

### Opción 1: Desarrollo Local

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Generar cliente de Prisma**:
   ```bash
   npx prisma generate
   ```

3. **Ejecutar migraciones**:
   ```bash
   npx prisma migrate dev
   ```

4. **Iniciar la aplicación**:
   ```bash
   # Modo desarrollo
   npm run start:dev

   # Modo producción
   npm run start:prod
   ```

### Opción 2: Con Docker (Recomendado)

```bash
docker-compose up -d --build
```
Esto levantará la API y la base de Datos automáticamente.

---

## 📖 Documentación de la API

Una vez que la aplicación esté en ejecución, puedes acceder a la documentación interactiva en:

🔗 **[http://localhost:3000/api/docs](http://localhost:3000/api/docs)**

Aquí podrás probar todos los endpoints disponibles, incluyendo la autenticación y la gestión de vehículos.

---

## 🧪 Pruebas

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Cobertura de tests
npm run test:cov
```

---

## 📂 Estructura del Proyecto (Módulos)

- `src/modules/auth`: Lógica de autenticación, JWT y OTP.
- `src/modules/users`: Gestión de perfiles y usuarios.
- `src/modules/vehicles`: Lógica de negocio para la gestión de vehículos.
- `src/common`: Filtros globales, interceptores y utilidades.

---

## 📄 Licencia

Este proyecto está bajo la licencia [UNLICENSED](LICENSE).

---

<p align="center">Desarrollado con ❤️ para la gestión eficiente de servicios automotrices.</p>
