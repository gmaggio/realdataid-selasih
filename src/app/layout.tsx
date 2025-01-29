import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SELASIH',
  description: 'Sistem Elektronik Layanan Standar Industri Hijau',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
