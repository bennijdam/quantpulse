# QuantPulse

A Bloomberg-style financial analytics platform built with Turborepo.

## What is QuantPulse?

QuantPulse is a professional-grade financial analytics platform featuring:

- **Terminal**: Real-time market data and analytics in a Bloomberg-style interface
- **Analytics**: Advanced modules for mispricing detection and optimism tax analysis
- **Data Infrastructure**: Powered by Cloudflare R2 for fast, global data delivery

## Project Structure

This monorepo contains:

### Apps

- **terminal**: Next.js/React terminal application with Bloomberg-style UI
- **marketing**: Next.js marketing website
- **server**: Node.js/Express backend API

### Packages

- **becker-core**: TypeScript analytics modules (Mispricing Delta, Optimism Tax)
- **database**: Prisma ORM with Neon PostgreSQL
- **ui**: Shared Tailwind UI components with Bloomberg theme

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
cd packages/database
npm run db:generate
cd ../..

# Start development
npm run dev
```

### Environment Setup

Create `.env` files in each app with required variables:

#### Terminal & Marketing Apps

```env
# No special env vars required for development
```

#### Server App

```env
PORT=3002
DATABASE_URL="postgresql://user:password@localhost:5432/quantpulse"
```

#### Becker Analytics

Set up Cloudflare R2 for data storage:

```bash
export R2_ACCOUNT_ID=your_account_id
export R2_ACCESS_KEY_ID=your_access_key
export R2_SECRET_ACCESS_KEY=your_secret_key
export R2_BUCKET_NAME=quantpulse-analytics

# Run setup script
./packages/becker-core/scripts/setup-becker.sh
```

## Available Scripts

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps and packages
- `npm run lint` - Lint all code
- `npm run test` - Run tests
- `npm run clean` - Clean all build artifacts

## Analytics Modules

### Mispricing Delta

Calculates the delta between expected and actual market prices to identify potential mispricing opportunities.

```typescript
import { MispricingDelta } from '@quantpulse/becker-core'

const result = MispricingDelta.calculate(marketData)
```

### Optimism Tax

Analyzes the "optimism tax" - the systematic wealth transfer from optimistic traders to market makers in prediction markets, based on research by Jonathan Becker.

```typescript
import { OptimismTax } from '@quantpulse/becker-core'

const result = OptimismTax.calculate(bullishSentiment, tradingVolume, volatility)
```

## Deployment

### Frontend Apps (Vercel)

The terminal and marketing apps are configured for Vercel deployment:

```bash
vercel deploy
```

### Backend Server (Render)

The server is configured for Render deployment using `render.yaml`:

```bash
# Connect your GitHub repo to Render
# Render will automatically deploy using render.yaml
```

### Edge Functions (Cloudflare Workers)

Edge functions are configured with `wrangler.toml`:

```bash
wrangler deploy
```

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: Prisma, Neon PostgreSQL
- **Monorepo**: Turborepo
- **Infrastructure**: Vercel (frontend), Render (backend), Cloudflare R2/Workers (edge)

## License

MIT

## Credits

Analytics modules based on research in prediction market microstructure and systematic pricing inefficiencies.
