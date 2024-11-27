import { db_users } from "@/db/db";
import { User } from "@/types/User";

export function getUsers(): User[] {
    return db_users
}