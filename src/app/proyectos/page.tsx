import type { Metadata } from "next";
import ComingSoonPage from "./ComingSoonPage";

export const metadata: Metadata = {
    title: "Proyectos - CreappTech | Próximamente",
    description:
        "Portafolio de proyectos de CreappTech. Casos de éxito en automatización empresarial, desarrollo web, sistemas de gestión y soluciones digitales para pymes en Colombia y Latinoamérica.",
    keywords: [
        "proyectos CreappTech",
        "portafolio desarrollo web",
        "casos de éxito",
        "automatización empresarial",
        "proyectos Next.js",
        "soluciones digitales Colombia",
    ],
};

export default function Page() {
    return <ComingSoonPage />;
}
