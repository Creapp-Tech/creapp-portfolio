import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Creapp-Tech | Portafolio",
  description: "Soluciones tecnológicas simples y eficientes para pymes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
