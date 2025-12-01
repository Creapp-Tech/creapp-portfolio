import type { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
    title: "Servicios - CreappTech | Automatización, Desarrollo Web, Hosting",
    description:
        "Soluciones tecnológicas empresariales: automatización con n8n, desarrollo web, hosting, dominios, Google Workspace, sistemas de gestión ISO 9001, SaaS personalizado y más. Servicio en Colombia y Latinoamérica.",
    keywords: [
        "automatización empresarial",
        "hosting web Colombia",
        "desarrollo web",
        "n8n automatización",
        "Google Workspace",
        "hosting VPS",
        "dominios",
        "correo empresarial",
        "ISO 9001",
        "SaaS",
        "branding corporativo",
    ],
};

export default function Page() {
    return <ServicesPage />;
}
