import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QuantPulse - Financial Analytics Platform',
  description: 'Advanced quantitative financial analytics for trading professionals',
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
