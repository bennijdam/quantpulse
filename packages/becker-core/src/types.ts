export interface MispricingResult {
  delta: number;
  confidence: number;
  timestamp: Date;
  underlying?: string;
}

export interface OptimismTaxResult {
  tax: number;
  sentiment: number;
  timestamp: Date;
  underlying?: string;
}

export interface MarketData {
  price: number;
  volume: number;
  timestamp: Date;
}
