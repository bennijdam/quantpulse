# QuantPulse Setup Guide

This guide walks you through setting up the QuantPulse monorepo from scratch.

## Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- PostgreSQL database (Neon recommended) for production

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all dependencies for the monorepo including all apps and packages.

### 2. Environment Setup

Copy the example environment files and configure them:

#### Database Package
```bash
cd packages/database
cp .env.example .env
# Edit .env and add your Neon PostgreSQL connection string
```

#### Server App
```bash
cd apps/server
cp .env.example .env
# Configure server environment variables
```

### 3. Setup Database

```bash
cd packages/database
npm run db:generate  # Generate Prisma Client
npm run db:push      # Push schema to database
```

### 4. Build All Packages

```bash
npm run build
```

This will build all apps and packages in the correct order using Turborepo.

### 5. Start Development

```bash
npm run dev
```

This will start all development servers:
- Terminal: http://localhost:3000
- Marketing: http://localhost:3001
- Server API: http://localhost:3002

Or start individual apps:
```bash
npm run dev --filter=terminal
npm run dev --filter=marketing
npm run dev --filter=server
```

## Becker Analytics Setup (Optional)

The Becker analytics module integrates with Cloudflare R2 for data storage.

### 1. Setup R2 Credentials

Set the following environment variables:

```bash
export R2_ACCOUNT_ID="your-cloudflare-account-id"
export R2_ACCESS_KEY_ID="your-r2-access-key-id"
export R2_SECRET_ACCESS_KEY="your-r2-secret-access-key"
export R2_BUCKET_NAME="quantpulse-data"  # Optional, defaults to quantpulse-data
```

### 2. Run Setup Script

```bash
./scripts/setup-becker.sh
```

This script will:
- Verify your R2 credentials
- Install all dependencies
- Build the becker-core analytics package
- Setup the data directory structure
- Configure Wrangler for R2 access

### 3. Sync Data with R2

Use Wrangler CLI to interact with R2:

```bash
# Upload data
wrangler r2 object put quantpulse-data/market-data/sample.json --file ./data/sample.json

# Download data
wrangler r2 object get quantpulse-data/market-data/sample.json --file ./data/sample.json

# List objects
wrangler r2 object list quantpulse-data
```

## Project Structure

```
quantpulse/
├── apps/
│   ├── terminal/          # Trading terminal (Next.js)
│   │   ├── src/
│   │   │   └── app/       # Next.js App Router
│   │   └── package.json
│   ├── marketing/         # Marketing site (Next.js)
│   │   ├── src/
│   │   │   └── app/       # Next.js App Router
│   │   └── package.json
│   └── server/            # API server (Express)
│       ├── src/
│       │   ├── index.ts
│       │   └── routes/
│       └── package.json
├── packages/
│   ├── becker-core/       # Analytics library
│   │   └── src/
│   │       ├── analytics/
│   │       │   ├── mispricing-delta.ts
│   │       │   └── optimism-tax.ts
│   │       └── types.ts
│   ├── database/          # Prisma database
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── src/
│   └── ui/                # UI components
│       └── src/
│           └── components/
├── scripts/
│   └── setup-becker.sh
├── package.json
├── turbo.json
├── vercel.json
├── render.yaml
└── wrangler.toml
```

## Development Workflow

### Building

Build all packages:
```bash
npm run build
```

Build specific package:
```bash
npm run build --filter=@quantpulse/becker-core
npm run build --filter=terminal
```

### Linting

Lint all packages:
```bash
npm run lint
```

Lint specific package:
```bash
npm run lint --filter=terminal
```

### Formatting

Format all code:
```bash
npm run format
```

## Deployment

### Frontend Apps (Vercel)

The `vercel.json` file configures deployment for both Next.js apps:

```bash
vercel deploy
```

### Backend (Render)

The `render.yaml` file configures the Express server deployment. Connect your repository to Render for automatic deployments.

### Edge Functions (Cloudflare Workers)

The `wrangler.toml` file configures edge function deployment:

```bash
wrangler deploy
```

## Analytics Usage

### Mispricing Delta

```typescript
import { MispricingDelta } from '@quantpulse/becker-core';

// Calculate mispricing delta
const result = MispricingDelta.calculate(100.0, 102.5, 50000);
console.log(`Delta: ${result.delta}%`);
console.log(`Confidence: ${result.confidence}`);

// Generate trading signal
const signal = MispricingDelta.generateSignal(result.delta, 2.0);
console.log(`Signal: ${signal}`); // 'BUY', 'SELL', or 'HOLD'
```

### Optimism Tax

```typescript
import { OptimismTax } from '@quantpulse/becker-core';

// Calculate optimism tax
const result = OptimismTax.calculate(105.0, 100.0, 75);
console.log(`Tax: ${result.tax}%`);
console.log(`Sentiment: ${result.sentiment}`);
```

## Database

### Prisma Commands

```bash
cd packages/database

# Generate Prisma Client
npm run db:generate

# Push schema changes
npm run db:push

# Open Prisma Studio
npm run db:studio
```

### Schema Updates

1. Edit `packages/database/prisma/schema.prisma`
2. Run `npm run db:push` to apply changes
3. Run `npm run db:generate` to update the Prisma Client

## Troubleshooting

### Build Errors

If you encounter build errors, try:

```bash
# Clean all build artifacts
rm -rf node_modules apps/*/node_modules packages/*/node_modules
rm -rf apps/*/.next apps/*/dist packages/*/dist

# Reinstall dependencies
npm install

# Rebuild
npm run build
```

### Database Connection Issues

Verify your `DATABASE_URL` in `packages/database/.env`:

```
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

For Neon, get the connection string from your Neon dashboard.

### R2 Access Issues

Verify your R2 credentials:

```bash
wrangler r2 bucket list
```

If this fails, check your account ID and access keys.

## Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)
- [Neon Documentation](https://neon.tech/docs)

## Support

For issues and questions, please open an issue on the GitHub repository.
