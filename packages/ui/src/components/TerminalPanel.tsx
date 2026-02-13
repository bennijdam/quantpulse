import React from 'react'

interface TerminalPanelProps {
  title: string
  children: React.ReactNode
}

export function TerminalPanel({ title, children }: TerminalPanelProps) {
  return (
    <div className="border-2 border-terminal-border bg-terminal-black p-4 rounded">
      <div className="border-b border-terminal-border pb-2 mb-4">
        <h2 className="text-terminal-orange font-bold text-lg">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  )
}
