import { Profesion } from "./Profesion";

export type User = {
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    edad: number,
    profesion: Profesion,
    fecha_nacimiento: Date
}