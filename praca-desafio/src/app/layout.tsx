import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praça - Explorar",
  description: "Encontre as melhores praças para viver experiências incríveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
