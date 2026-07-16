import { Navbar } from '@/components/layout/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
}
