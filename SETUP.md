# QuantPulse Monorepo - Setup Complete

## Overview
This repository is a complete Turborepo monorepo for QuantPulse, a Bloomberg-style financial analytics platform.

## Structure

```
quantpulse/
├── apps/
│   ├── terminal/          # Next.js/React Bloomberg-style terminal UI
│   ├── marketing/         # Next.js marketing website
│   └── server/            # Node.js/Express backend API
├── packages/
│   ├── becker-core/       # TypeScript analytics modules
│   ├── database/          # Prisma ORM with Neon PostgreSQL
│   └── ui/                # Shared Tailwind UI components
├── turbo.json             # Turborepo configuration
├── package.json           # Root workspace configuration
├── vercel.json            # Frontend deployment config
├── render.yaml            # Backend deployment config
└── wrangler.toml          # Cloudflare Workers/R2 config
```

## Features Implemented

### ✅ Apps
1. **Terminal** (Next.js 14.2.35)
   - Bloomberg-style dark interface
   - MetricsCard components for analytics display
   - TerminalPanel components for data presentation
   - Integrates becker-core analytics modules
   - Responsive design with Tailwind CSS

2. **Marketing** (Next.js 14.2.35)
   - Clean marketing website
   - Feature highlights
   - Call-to-action for terminal access
   - Responsive design

3. **Server** (Node.js/Express)
   - RESTful API endpoints
   - Analytics routes for Mispricing Delta and Optimism Tax
   - Health check endpoint
   - TypeScript for type safety

### ✅ Packages
1. **becker-core**
   - `MispricingDelta` module: Calculates price discrepancies
   - `OptimismTax` module: Analyzes systematic wealth transfer in prediction markets
   - `setup-becker.sh`: Cloudflare R2 setup script
   - TypeScript with full type definitions
   - Based on research in market microstructure

2. **database**
   - Prisma ORM configuration
   - Schema for MarketData, AnalyticsResult, and User models
   - Neon PostgreSQL support
   - Connection pooling ready
   - Migration scripts

3. **ui**
   - `TerminalPanel`: Bloomberg-style panel component
   - `MetricsCard`: Financial metrics display component
   - Bloomberg color theme:
     - Black background (#000000)
     - Orange accents (#FF6600)
     - Green text (#00FF00)
     - Terminal-style borders and fonts

### ✅ Infrastructure
- **Vercel** configuration for frontend apps
- **Render** configuration for backend deployment
- **Cloudflare Workers** configuration for edge functions
- **Cloudflare R2** setup for data storage

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Development
```bash
# Start all apps
npm run dev

# Build all apps
npm run build

# Run linters
npm run lint
```

### Individual Apps
```bash
# Terminal (port 3000)
cd apps/terminal && npm run dev

# Marketing (port 3001)
cd apps/marketing && npm run dev

# Server (port 3002)
cd apps/server && npm run dev
```

## Environment Variables

See `.env.example` for required environment variables:
- Database connection strings (Neon PostgreSQL)
- Cloudflare R2 credentials
- Cloudflare KV namespace ID
- Server port configuration

## Analytics Modules

### Mispricing Delta
Identifies pricing inefficiencies in financial markets by comparing expected vs actual prices.

**Usage:**
```typescript
import { MispricingDelta } from '@quantpulse/becker-core'

const result = MispricingDelta.calculate(marketData)
```

### Optimism Tax
Analyzes the systematic wealth transfer from optimistic traders to market makers, based on research by Jonathan Becker on prediction market microstructure.

**Usage:**
```typescript
import { OptimismTax } from '@quantpulse/becker-core'

const result = OptimismTax.calculate(bullishSentiment, tradingVolume, volatility)
```

## Deployment

### Frontend (Vercel)
```bash
vercel deploy
```

### Backend (Render)
Connect your GitHub repository to Render. It will automatically use `render.yaml`.

### Edge Functions (Cloudflare)
```bash
# Set up R2 bucket
./packages/becker-core/scripts/setup-becker.sh

# Deploy to Cloudflare
wrangler deploy
```

## Build System

The project uses Turborepo for efficient monorepo management:
- Parallel task execution
- Intelligent caching
- Dependency graph awareness
- Shared configurations

## Security

- ✅ Next.js updated to secure version (14.2.35)
- ✅ CodeQL security analysis passed with 0 vulnerabilities
- ✅ Proper gitignore configuration
- ✅ No secrets in code

## Tech Stack

- **Framework**: Next.js 14, React 18
- **Backend**: Node.js, Express
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma, Neon PostgreSQL
- **Monorepo**: Turborepo
- **Infrastructure**: Vercel, Render, Cloudflare Workers/R2

## License
MIT

## Credits
Analytics modules inspired by research in prediction market microstructure and systematic pricing inefficiencies, particularly the work of Jonathan Becker on the "optimism tax" phenomenon.
