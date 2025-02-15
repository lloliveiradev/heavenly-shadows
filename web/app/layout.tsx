import type { Metadata } from "next";
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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=KoHo:wght@500&amp;display=swap" rel="stylesheet"></link>
      </head>
      <body className="scrollbar-rounded">
        {children}
      </body>
    </html>
  );
}
