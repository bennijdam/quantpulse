export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-terminal-orange">
            QuantPulse
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional Financial Analytics Platform
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Bloomberg-style terminal with advanced analytics for mispricing detection,
            market intelligence, and quantitative research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Terminal</h3>
            <p className="text-gray-600">
              Real-time market data and analytics in a professional Bloomberg-style interface
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Analytics</h3>
            <p className="text-gray-600">
              Advanced modules for mispricing detection and optimism tax analysis
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Data</h3>
            <p className="text-gray-600">
              Powered by Cloudflare R2 for fast, global data delivery
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/terminal"
            className="inline-block bg-terminal-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Launch Terminal
          </a>
        </div>
      </div>
    </main>
  )
}
