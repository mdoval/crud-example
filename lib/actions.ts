"use server";

import { db_users } from "@/db/db";
import { User } from "@/types/User";
import { userSchema } from "./zod";

export async function getUsers(): Promise<User[]> {
  return db_users;
}

export async function addUser(previousState: any, formData: FormData) {
  const data = {
    id: 5,
    nombre: formData.get("nombre"),
    apellido: formData.get("apellido"),    
    email: formData.get("email"),
    edad: formData.get("edad"),
    profesion: formData.get("profesion"),
    fecha_nacimiento: formData.get("fecha"),
  };

  const res = userSchema.safeParse(data)
  console.log(res.success)
  console.log(res.error?.flatten);
  return previousState;
}
