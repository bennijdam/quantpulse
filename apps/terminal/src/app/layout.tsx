import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QuantPulse Terminal',
  description: 'Financial analytics terminal with Bloomberg-style interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
