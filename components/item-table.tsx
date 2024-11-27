import { User } from "@/types/User";
import ProfesionItem from "./item-profesion";

export default function ItemTable({user}: {user: User}) {
  return (
    <tr className="hover">
      <td className="text-nowrap">{user.nombre}</td>
      <td className="text-nowrap">{user.apellido}</td>
      <td>{user.email}</td>
      <td>
        <ProfesionItem profesion={user.profesion} />
      </td>
      <td className="text-nowrap">{user.edad}</td>
      <td className="text-nowrap">{user.fecha_nacimiento.toString()}</td>
      <td>
        <button
          className="btn btn-circle btn-text btn-sm"
          aria-label="Action button"
        >
          <span className="icon-[tabler--pencil]"></span>
        </button>
        <button
          className="btn btn-circle btn-text btn-sm"
          aria-label="Action button"
        >
          <span className="icon-[tabler--trash]"></span>
        </button>
        <button
          className="btn btn-circle btn-text btn-sm"
          aria-label="Action button"
        >
          <span className="icon-[tabler--dots-vertical]"></span>
        </button>
      </td>
    </tr>
  );
}
