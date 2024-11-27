import { Profesion } from "@/types/Profesion";
import { User } from "@/types/User";

export const db_users: User[] = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    email: "juanperez@correo.com",
    edad: 35,
    profesion: { id: 1, descripcion: "Medico", estilo: "badge-primary"},
    fecha_nacimiento: new Date("12/12/2024"),
  },
  {
    id: 2,
    nombre: "Pedro",
    apellido: "Gomez",
    email: "pedrogomez@correo.com",
    edad: 40,
    profesion: { id: 2, descripcion: "Heladero", estilo: "badge-info" },
    fecha_nacimiento: new Date("04/30/2024"),
  },  {
    id: 3,
    nombre: "Andrea",
    apellido: "Lopez",
    email: "andreslopez@correo.com",
    edad: 28,
    profesion: { id: 1, descripcion: "Medico", estilo: "badge-primary" },
    fecha_nacimiento: new Date("05/19/2024"),
  },  {
    id: 4,
    nombre: "Benjamin",
    apellido: "Rodriguez",
    email: "benjaminrodriguez@correo.com",
    edad: 35,
    profesion: { id: 3, descripcion: "Mecanico", estilo: "badge-success" },
    fecha_nacimiento: new Date("09/11/2024"),
  }
];

export const db_profesiones: Profesion[] = [
    {id: 1, descripcion: "Medico", estilo: "badge-primary"},
    {id: 2, descripcion: "Heladero", estilo: "badge-info"},
    {id: 3, descripcion: "Mecanico", estilo: "badge-success"}
]
