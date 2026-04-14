import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BCI - Banco de Comércio e Indústria Angola",
  description:
    "Oferecemos orientação especializada e soluções personalizadas para potencializar seus investimentos. Excelência em investimentos com nossa corretora de valores. Acesse nosso site para explorar oportunidades de investimento, obter insights financeiros e alcançar seus objetivos financeiros com confiança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
