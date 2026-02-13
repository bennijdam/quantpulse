import React from 'react'

interface MetricsCardProps {
  title: string
  value: string | number
  trend?: 'up' | 'down' | 'neutral'
  subtitle?: string
}

export function MetricsCard({ title, value, trend = 'neutral', subtitle }: MetricsCardProps) {
  const trendColors = {
    up: 'text-terminal-text',
    down: 'text-terminal-red',
    neutral: 'text-terminal-yellow',
  }

  const trendSymbols = {
    up: '▲',
    down: '▼',
    neutral: '●',
  }

  return (
    <div className="border-2 border-terminal-border bg-terminal-black p-4 rounded">
      <div className="text-terminal-text-dim text-sm mb-2">{title}</div>
      <div className="flex items-baseline gap-2">
        <span className={`text-2xl font-bold ${trendColors[trend]}`}>
          {value}
        </span>
        <span className={trendColors[trend]}>{trendSymbols[trend]}</span>
      </div>
      {subtitle && (
        <div className="text-terminal-text-dim text-xs mt-1">{subtitle}</div>
      )}
    </div>
  )
}
