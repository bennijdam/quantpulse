export interface MarketData {
  timestamp: Date
  symbol: string
  price: number
  volume: number
  bid?: number
  ask?: number
}

export interface AnalyticsResult {
  metric: string
  value: number
  timestamp: Date
  confidence?: number
  metadata?: Record<string, unknown>
}

export interface MispricingData {
  expectedPrice: number
  actualPrice: number
  delta: number
  factors: {
    intrinsicValue?: number
    marketSentiment?: number
    liquidityPremium?: number
  }
}

export interface OptimismTaxData {
  baseRate: number
  optimismPremium: number
  totalTax: number
  marketConditions: {
    bullishSentiment: number
    tradingVolume: number
    volatility: number
  }
}
