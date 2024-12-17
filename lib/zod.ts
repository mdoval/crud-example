import { z } from "zod";

export const userSchema = z.object({
    nombre: z.string({required_error: "Se necesita un nombre"}),
    apellido: z.string({required_error: "Se requiere un Apellido"}),
    email: z.string({required_error: "Se requiere un Email"}).email({message: "El Email no es valido"}),
    edad: z.number({required_error: "Se requiere una edad"})
})