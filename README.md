# QuantPulse

A professional-grade financial analytics platform built with Turborepo, featuring advanced quantitative analysis tools and a Bloomberg-style terminal interface.

## 📥 Get Started Locally

**New to this repository?** Check out our comprehensive [Local Development Guide](./LOCAL_DEVELOPMENT.md) for step-by-step instructions on setting up the project on your local machine.

**Quick start (automated):**

```bash
# Clone the repository
git clone https://github.com/bennijdam/quantpulse.git
cd quantpulse

# Run the quick start script (handles installation and build)
./scripts/quick-start.sh
```

**Quick start (manual):**

```bash
# Clone the repository
git clone https://github.com/bennijdam/quantpulse.git
cd quantpulse

# Install dependencies
npm install

# Build everything
npm run build

# Start development servers
npm run dev
```

Then visit:
- Terminal: http://localhost:3000
- Marketing: http://localhost:3001
- API: http://localhost:3002/health

## 🏗️ Architecture

This is a Turborepo monorepo containing:

### Apps

- **terminal** - Next.js/React Bloomberg-style trading terminal (port 3000)
- **marketing** - Next.js marketing website (port 3001)  
- **server** - Node.js/Express backend API (port 3002)

### Packages

- **@quantpulse/becker-core** - TypeScript analytics library
  - Mispricing Delta analysis module
  - Optimism Tax calculation module
- **@quantpulse/database** - Prisma ORM with Neon PostgreSQL
- **@quantpulse/ui** - Shared UI components with Tailwind (Bloomberg theme)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

```bash
# Install dependencies
npm install

# Setup Becker analytics with Cloudflare R2 (optional)
# First set environment variables:
export R2_ACCOUNT_ID="your-account-id"
export R2_ACCESS_KEY_ID="your-access-key"
export R2_SECRET_ACCESS_KEY="your-secret-key"
export R2_BUCKET_NAME="quantpulse-data"

# Then run setup
./scripts/setup-becker.sh
```

### Development

```bash
# Run all apps in development mode
npm run dev

# Run specific app
npm run dev --filter=terminal
npm run dev --filter=marketing
npm run dev --filter=server
```

### Building

```bash
# Build all apps and packages
npm run build

# Build specific app
npm run build --filter=terminal
```

### Linting

```bash
# Lint all apps and packages
npm run lint
```

## 📊 Analytics Modules

### Mispricing Delta

Identifies and measures price discrepancies in financial instruments:

```typescript
import { MispricingDelta } from '@quantpulse/becker-core';

const result = MispricingDelta.calculate(
  theoreticalPrice: 100.0,
  marketPrice: 102.5,
  volume: 50000
);

console.log(result.delta); // 2.5% overvalued
console.log(result.confidence); // Confidence score
```

### Optimism Tax

Measures the premium paid due to behavioral biases:

```typescript
import { OptimismTax } from '@quantpulse/becker-core';

const result = OptimismTax.calculate(
  marketPrice: 105.0,
  fundamentalValue: 100.0,
  sentimentScore: 75
);

console.log(result.tax); // Tax percentage
console.log(result.sentiment); // Sentiment score
```

## 🗄️ Database

The database package uses Prisma with Neon PostgreSQL:

```bash
# Generate Prisma client
cd packages/database
npm run db:generate

# Push schema changes
npm run db:push

# Open Prisma Studio
npm run db:studio
```

## 🎨 UI Components

Bloomberg-style components available in `@quantpulse/ui`:

```typescript
import { Terminal, Card, Button } from '@quantpulse/ui';

<Terminal>
  <Card title="Market Data">
    <p>Financial data here</p>
  </Card>
  <Button variant="primary">Execute Trade</Button>
</Terminal>
```

## 🌐 Deployment

### Vercel (Frontend Apps)

The `vercel.json` configuration deploys both Next.js apps:

```bash
vercel deploy
```

### Render (Backend)

The `render.yaml` configuration deploys the Express server:

```bash
# Connect your repo to Render and it will auto-deploy
```

### Cloudflare Workers (Edge Functions)

The `wrangler.toml` configuration for edge deployment:

```bash
npm install -g wrangler
wrangler login
wrangler deploy
```

## 📁 Project Structure

```
quantpulse/
├── apps/
│   ├── terminal/          # Next.js trading terminal
│   ├── marketing/         # Next.js marketing site
│   └── server/            # Express API server
├── packages/
│   ├── becker-core/       # Analytics library
│   ├── database/          # Prisma database
│   └── ui/                # UI components
├── scripts/
│   └── setup-becker.sh    # Setup script
├── package.json           # Root package.json
├── turbo.json            # Turborepo config
├── vercel.json           # Vercel deployment
├── render.yaml           # Render deployment
└── wrangler.toml         # Cloudflare Workers config
```

## 🔧 Tech Stack

- **Monorepo**: Turborepo
- **Frontend**: Next.js 14, React 18, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Database**: Prisma, PostgreSQL (Neon)
- **Styling**: Tailwind CSS
- **Analytics**: Custom TypeScript modules
- **Deployment**: Vercel, Render, Cloudflare Workers
- **Data Storage**: Cloudflare R2

## 📝 License

MIT
