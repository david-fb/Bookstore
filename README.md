# Bookstore

![Bookstore Page](https://raw.githubusercontent.com/david-fb/Bookstore/refs/heads/main/public/page.webp)

## 📋 Description
This repository contains a simple online store built with Nuxt.js, designed for users to complete purchases without the need for registration. The project integrates a payment gateway for secure transactions. Ideal for small businesses or as a foundation for e-commerce projects.

## 🚀 Project Structure

### Frontend (Nuxt)
```
src/
├── application/    # Application layer - Use cases and application logic
├── composables/    # Vue composables for reusable stateful logic
├── domain/        # Domain layer - Business rules and entities
├── infrastructure/# Infrastructure layer - External services and implementations
└── presentation/  # Presentation layer - UI components and views        
```

## 🛠️ Technologies

### Frontend
- Nuxt.js v3.15.1
- Vue.js v3

## ⚙️ Requisitos Previos
- Node.js (v18 o superior)
- npm

## 🚀 Instalación y Configuración

### Frontend (Nuxt)
```bash
# Install dependencies
npm install

# Setting environment variables
cp .env.example .env

# Start in development mode
npm run dev

# Build for production
npm run build
```

## 🔧 Setting up the Environment (.env)
```env
NUXT_PUBLIC_API_BASE=http://localhost:8000/api/v1
```

## 🧪 Test
```bash
# Running tests
npx vitest
```

![Front test](https://raw.githubusercontent.com/david-fb/Bookstore/refs/heads/main/public/front.png)