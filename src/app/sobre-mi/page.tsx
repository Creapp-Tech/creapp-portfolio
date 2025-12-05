import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
    title: "Sobre Mí - John | Fundador de CreappTech",
    description:
        "Conoce a John, fundador de CreappTech. Especialista en automatización empresarial, desarrollo web con Next.js, sistemas de gestión ISO, y soluciones digitales para pymes en Colombia y Latinoamérica.",
    keywords: [
        "John CreappTech",
        "fundador CreappTech",
        "desarrollador web Colombia",
        "automatización empresarial",
        "consultor tecnológico",
        "Next.js developer",
        "soluciones digitales pymes",
        "transformación digital Colombia",
    ],
};

export default function Page() {
    return <AboutPage />;
}
