import { OptimismTaxResult, MarketData } from '../types';

/**
 * Optimism Tax Analytics Module
 * Measures the premium paid due to behavioral biases and market sentiment
 */
export class OptimismTax {
  /**
   * Calculate optimism tax based on sentiment indicators
   * @param marketPrice - Current market price
   * @param fundamentalValue - Value based on fundamentals
   * @param sentimentScore - Sentiment score (-100 to 100)
   * @returns OptimismTaxResult with tax and sentiment metrics
   */
  static calculate(
    marketPrice: number,
    fundamentalValue: number,
    sentimentScore: number = 0
  ): OptimismTaxResult {
    // Optimism tax is the premium over fundamental value
    const rawTax = ((marketPrice - fundamentalValue) / fundamentalValue) * 100;
    
    // Adjust tax based on sentiment (positive sentiment increases tax)
    const sentimentAdjustment = (sentimentScore / 100) * 0.5;
    const tax = rawTax * (1 + sentimentAdjustment);

    return {
      tax,
      sentiment: sentimentScore,
      timestamp: new Date(),
    };
  }

  /**
   * Estimate sentiment score from price momentum and volume
   * @param marketData - Recent market data points
   * @returns Sentiment score between -100 and 100
   */
  static estimateSentiment(marketData: MarketData[]): number {
    if (marketData.length < 2) {
      return 0;
    }

    // Calculate price momentum
    const recentData = marketData.slice(-10);
    const priceChange = 
      ((recentData[recentData.length - 1].price - recentData[0].price) / 
       recentData[0].price) * 100;

    // Calculate volume trend
    const avgVolume = recentData.reduce((sum, d) => sum + d.volume, 0) / recentData.length;
    const recentVolume = recentData[recentData.length - 1].volume;
    const volumeChange = ((recentVolume - avgVolume) / avgVolume) * 100;

    // Combine price and volume momentum for sentiment
    // Positive price change + increasing volume = high optimism
    const sentiment = (priceChange * 0.7 + volumeChange * 0.3);
    
    // Clamp to -100 to 100 range
    return Math.max(-100, Math.min(100, sentiment));
  }

  /**
   * Analyze historical data to identify periods of excessive optimism
   * @param marketData - Historical market data
   * @param fundamentalValues - Corresponding fundamental values
   * @returns Array of periods with high optimism tax
   */
  static identifyOptimismPeriods(
    marketData: MarketData[],
    fundamentalValues: number[]
  ): OptimismTaxResult[] {
    if (marketData.length !== fundamentalValues.length || marketData.length < 10) {
      return [];
    }

    const results: OptimismTaxResult[] = [];

    for (let i = 10; i < marketData.length; i++) {
      const sentiment = this.estimateSentiment(marketData.slice(i - 10, i + 1));
      const result = this.calculate(
        marketData[i].price,
        fundamentalValues[i],
        sentiment
      );
      result.timestamp = marketData[i].timestamp;
      
      // Only include periods with significant optimism tax
      if (result.tax > 5.0) {
        results.push(result);
      }
    }

    return results;
  }
}
