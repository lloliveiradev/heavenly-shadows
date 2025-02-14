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
        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="anonymous"></script>
      </head>
      <body className="scrollbar-rounded">
        {children}
      </body>
    </html>
  );
}
