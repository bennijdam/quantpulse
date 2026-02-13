# Database Package

This package provides database access using Prisma ORM with Neon PostgreSQL.

## Setup

1. Set your database URL in `.env`:

```
DATABASE_URL="postgresql://user:password@your-neon-db.neon.tech/quantpulse?sslmode=require"
DIRECT_DATABASE_URL="postgresql://user:password@your-neon-db.neon.tech/quantpulse?sslmode=require"
```

2. Generate Prisma client:

```bash
npm run db:generate
```

3. Push schema to database:

```bash
npm run db:push
```

## Usage

```typescript
import { prisma } from '@quantpulse/database'

// Query market data
const marketData = await prisma.marketData.findMany({
  where: { symbol: 'AAPL' },
  orderBy: { timestamp: 'desc' },
  take: 10
})
```

## Neon Setup

1. Create a Neon account at https://neon.tech
2. Create a new project
3. Copy the connection string
4. Add to your `.env` file

Neon provides serverless PostgreSQL with:
- Instant database provisioning
- Automatic scaling
- Branching for development
- Built-in connection pooling
