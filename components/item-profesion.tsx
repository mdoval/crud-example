import { Profesion } from "@/types/Profesion";

export default function ProfesionItem({profesion}: {profesion: Profesion}) {
    return(
        <span className={`badge badge-soft ${profesion.estilo} text-xs`}>{profesion.descripcion}</span>
    )
}