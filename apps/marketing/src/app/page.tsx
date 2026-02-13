export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            QuantPulse
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Advanced Financial Analytics Platform
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional-grade quantitative analysis tools powered by cutting-edge
            analytics. Discover mispricing opportunities and optimize your trading
            strategies.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-amber-400">Mispricing Delta</h3>
            <p className="text-gray-300">
              Identify and exploit market inefficiencies with advanced delta analysis
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-amber-400">Optimism Tax</h3>
            <p className="text-gray-300">
              Measure and account for behavioral biases in market pricing
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-amber-400">Real-time Terminal</h3>
            <p className="text-gray-300">
              Bloomberg-style interface for professional traders
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
