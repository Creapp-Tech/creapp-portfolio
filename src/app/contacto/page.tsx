import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
    title: "Contacto - CreappTech | Consultoría Gratuita",
    description:
        "Contáctanos para una consultoría gratuita. Desarrollo web, automatización empresarial, hosting y soluciones digitales en Colombia y Latinoamérica. WhatsApp: +57 318 180 5585",
    keywords: [
        "contacto CreappTech",
        "consultoría gratuita",
        "desarrollo web Colombia",
        "automatización empresarial",
        "contacto desarrollo web",
        "WhatsApp CreappTech",
        "servicios tecnológicos Colombia",
        "presupuesto desarrollo web",
    ],
};

export default function Page() {
    return <ContactPage />;
}
