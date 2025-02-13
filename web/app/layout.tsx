import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Sombras Celestes",
  description: "Coletânea de poesias, prosas e contos do autor Leo L. Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
