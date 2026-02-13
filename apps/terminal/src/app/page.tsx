import { TerminalPanel, MetricsCard } from '@quantpulse/ui'
import { MispricingDelta, OptimismTax } from '@quantpulse/becker-core'

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-terminal-orange">
            QUANTPULSE TERMINAL
          </h1>
          <p className="text-terminal-text-dim mt-2">
            Advanced Financial Analytics Platform
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <MetricsCard
            title="Mispricing Delta"
            value="Loading..."
            trend="up"
          />
          <MetricsCard
            title="Optimism Tax"
            value="Loading..."
            trend="down"
          />
        </div>

        <TerminalPanel title="Analytics Dashboard">
          <div className="space-y-4">
            <p className="text-terminal-text">
              Welcome to the QuantPulse Terminal - your Bloomberg-style analytics platform.
            </p>
            <p className="text-terminal-text-dim text-sm">
              Analytics modules ready for market data integration.
            </p>
          </div>
        </TerminalPanel>
      </div>
    </main>
  )
}
