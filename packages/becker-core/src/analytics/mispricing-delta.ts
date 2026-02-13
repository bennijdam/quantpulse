import { MispricingResult, MarketData } from '../types';

/**
 * Mispricing Delta Analytics Module
 * Identifies and measures price discrepancies in financial instruments
 */
export class MispricingDelta {
  /**
   * Calculate mispricing delta between theoretical and market price
   * @param theoreticalPrice - Calculated fair value
   * @param marketPrice - Current market price
   * @param volume - Trading volume for confidence weighting
   * @returns MispricingResult with delta and confidence metrics
   */
  static calculate(
    theoreticalPrice: number,
    marketPrice: number,
    volume: number = 0
  ): MispricingResult {
    const delta = ((marketPrice - theoreticalPrice) / theoreticalPrice) * 100;
    
    // Simple confidence metric based on volume (would be more sophisticated in production)
    const confidence = Math.min(100, Math.log10(volume + 1) * 10);

    return {
      delta,
      confidence,
      timestamp: new Date(),
    };
  }

  /**
   * Analyze time series of market data to identify mispricing patterns
   * @param marketData - Array of historical market data points
   * @returns Array of mispricing results
   */
  static analyzeTimeSeries(marketData: MarketData[]): MispricingResult[] {
    if (marketData.length < 2) {
      return [];
    }

    const results: MispricingResult[] = [];
    
    // Simple moving average as theoretical price baseline
    const window = Math.min(20, marketData.length);
    
    for (let i = window; i < marketData.length; i++) {
      const slice = marketData.slice(i - window, i);
      const avgPrice = slice.reduce((sum, d) => sum + d.price, 0) / window;
      
      const result = this.calculate(
        avgPrice,
        marketData[i].price,
        marketData[i].volume
      );
      
      result.timestamp = marketData[i].timestamp;
      results.push(result);
    }

    return results;
  }

  /**
   * Determine if mispricing delta exceeds threshold for trading signal
   * @param delta - Calculated mispricing delta
   * @param threshold - Threshold percentage for signal generation
   * @returns Trading signal: 'BUY', 'SELL', or 'HOLD'
   */
  static generateSignal(delta: number, threshold: number = 2.0): 'BUY' | 'SELL' | 'HOLD' {
    if (delta > threshold) {
      return 'SELL'; // Market price above theoretical - overvalued
    } else if (delta < -threshold) {
      return 'BUY'; // Market price below theoretical - undervalued
    }
    return 'HOLD';
  }
}
