import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "INGRASAS S.A.S. – Materias Primas de Origen Animal y Soluciones para la Industria",
  description: "Suministramos materias primas de origen animal para diferentes aplicaciones industriales y desarrollamos soluciones especializadas para la gestión y valorización de materiales grasos.",
  keywords: "ingrasas, rendering animal, materias primas de origen animal, aceite de pollo, nutrición animal, biocombustibles, oleoquímica, jabonería, economía circular, colombia",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ContactModal />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
