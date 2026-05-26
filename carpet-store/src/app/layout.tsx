import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANADOLU | El Dokuma Halı & Kilim",
  description: "El sanatlarının zirvesi — Türk el dokuma halıları, kilimler ve tekstil eserleri. Türkiye ve dünya geneline kargo.",
  keywords: ["el dokuma halı", "kilim", "türk halısı", "handmade carpet", "turkish rug", "kilim rug"],
  openGraph: {
    title: "ANADOLU | El Dokuma Halı & Kilim",
    description: "El sanatlarının zirvesi — Türk el dokuma halıları, kilimler ve tekstil eserleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fefdfb] text-[#1a1614]">
        {children}
      </body>
    </html>
  );
}
