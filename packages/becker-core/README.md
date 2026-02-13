# Becker Core Analytics

TypeScript analytics modules for financial market analysis.

## Modules

### Mispricing Delta

Calculates the delta between expected and actual market prices to identify potential mispricing opportunities.

Based on research in:
- Historical price analysis
- Fundamental valuation models
- Market microstructure analysis
- Liquidity considerations

**Usage:**

```typescript
import { MispricingDelta } from '@quantpulse/becker-core'

const marketData = {
  timestamp: new Date(),
  symbol: 'AAPL',
  price: 150.25,
  volume: 1000000,
  bid: 150.20,
  ask: 150.30
}

const result = MispricingDelta.calculate(marketData)
console.log(result)
// {
//   metric: 'mispricing-delta',
//   value: 0.0,
//   timestamp: Date,
//   confidence: 0.0,
//   metadata: { ... }
// }
```

### Optimism Tax

Analyzes the "optimism tax" - the systematic wealth transfer from optimistic traders to market makers in prediction markets.

Based on research by Jonathan Becker:
- "The Microstructure of Wealth Transfer in Prediction Markets"
- Order flow analysis
- Bid-ask spread asymmetries
- YES/NO outcome premium analysis

**Usage:**

```typescript
import { OptimismTax } from '@quantpulse/becker-core'

const result = OptimismTax.calculate(
  0.75,  // bullishSentiment (0-1)
  1000000,  // tradingVolume
  0.15   // volatility
)

console.log(result)
// {
//   metric: 'optimism-tax',
//   value: 0.0075,
//   timestamp: Date,
//   confidence: 0.75,
//   metadata: { ... }
// }
```

## Setup

### Cloudflare R2 Data Storage

Run the setup script to configure Cloudflare R2 for data storage:

```bash
export R2_ACCOUNT_ID=your_account_id
export R2_ACCESS_KEY_ID=your_access_key
export R2_SECRET_ACCESS_KEY=your_secret_key
export R2_BUCKET_NAME=quantpulse-analytics

./scripts/setup-becker.sh
```

This will:
1. Verify environment variables
2. Create data directories
3. Generate configuration file
4. Set up R2 bucket configuration

## Development

```bash
# Build
npm run build

# Lint
npm run lint

# Test
npm run test
```

## License

MIT
