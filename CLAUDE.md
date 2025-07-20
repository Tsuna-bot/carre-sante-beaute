# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend Development (Next.js)
```bash
# Navigate to frontend and start development server
cd frontend && npm run dev

# Run type checking
cd frontend && npx tsc --noEmit

# Run linting
cd frontend && npm run lint

# Build for production
cd frontend && npm run build
```

### Backend Development (PrestaShop)
```bash
# Start PrestaShop backend services
cd backend && ./start.sh

# Stop backend services
cd backend && ./stop.sh

# View backend logs
cd backend && docker-compose logs -f

# Access PrestaShop container
cd backend && docker-compose exec prestashop bash
```

### Full Stack Development
```bash
# Start development environment (backend only)
npm run docker:dev

# Start full production stack
npm run docker:full

# Start production with Nginx reverse proxy
npm run docker:prod

# Stop all services
npm run docker:down

# View all logs
npm run logs
```

### Setup Commands
```bash
# Complete setup (backend + frontend)
npm run setup

# Setup backend only
npm run setup:backend

# Setup frontend only
npm run setup:frontend
```

## Architecture Overview

This is a **headless e-commerce** application using PrestaShop as a backend CMS and Next.js as the frontend.

### Backend Architecture
- **PrestaShop 9.0**: Headless CMS providing REST API on port 8080
- **MySQL 8.0**: Database on port 3306
- **phpMyAdmin**: Database management interface on port 8081
- **Docker**: All backend services are containerized

### Frontend Architecture
- **Next.js 14**: React framework with App Router
- **TypeScript**: Full type safety
- **TailwindCSS**: Utility-first CSS framework
- **React Query (@tanstack/react-query)**: API state management and caching
- **Zustand**: Global state management for cart functionality
- **Lenis**: Smooth scrolling

### API Integration
- **PrestaShop API**: RESTful API with Basic Authentication
- **API Layer**: Located in `frontend/src/lib/prestashop-api.ts`
- **Type Definitions**: Located in `frontend/src/types/prestashop.ts`
- **Authentication**: Uses API key + empty password in Basic Auth format

### Key Components Structure

**API Services** (`frontend/src/lib/prestashop-api.ts`):
- `categoriesApi`: Category CRUD operations
- `productsApi`: Product management and search
- `cartApi`: Shopping cart operations
- `customersApi`: Customer management
- `ordersApi`: Order processing

**State Management** (`frontend/src/store/cart.ts`):
- Zustand store with persistence for cart functionality
- Cart operations: add, remove, update quantity, clear

**Frontend Pages**:
- `/`: Homepage with hero section and product carousels
- `/products`: Product listing with search and filters
- `/products/[id]`: Individual product details
- `/categories`: Category listing
- `/categories/[id]`: Products by category
- `/cart`: Shopping cart management
- `/blog`: Blog/news section

## Configuration Files

### Environment Variables
- **Backend**: `backend/.env` - Database credentials, admin settings
- **Frontend**: `frontend/.env.local` - API URLs and keys

### Key Config Files
- `docker-compose.full.yml`: Complete stack deployment
- `backend/docker-compose.yml`: Backend services only
- `nginx.conf`: Reverse proxy configuration for production
- `frontend/next.config.js`: Next.js configuration
- `frontend/tailwind.config.js`: TailwindCSS customization

## PrestaShop API Setup

Before frontend development, configure PrestaShop API:

1. Access admin: http://localhost:8080/admin-dev
2. Navigate to **Advanced Parameters** > **Webservice**
3. Enable webservice and create API key
4. Configure permissions for: categories, products, carts, customers, orders
5. Add API key to `frontend/.env.local` as `NEXT_PUBLIC_API_KEY`

## Development Workflow

1. **Start Backend**: `cd backend && ./start.sh`
2. **Configure API**: Follow PrestaShop API setup above
3. **Start Frontend**: `cd frontend && npm run dev`
4. **Test Integration**: Frontend should connect to PrestaShop API

## Testing

- Use `backend/api-test.http` with REST Client extension
- Test API endpoints before frontend integration
- Verify Docker services with `docker-compose ps`

## Production Deployment

- Development: Backend via Docker, Frontend locally
- Production: Use `docker-compose.full.yml` with Nginx reverse proxy
- See `DEPLOYMENT.md` for detailed deployment instructions

## Common Issues

- **API Connection**: Verify PrestaShop webservice is enabled and API key is configured
- **CORS**: May need to configure PrestaShop CORS headers for cross-origin requests
- **Docker**: Ensure Docker Desktop is running before starting services