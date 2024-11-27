import { User } from "@/types/User";
import ItemTable from "./item-table";

export default function Table({ data }: { data: User[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Profesion</th>
            <th>Edad</th>
            <th>Fecha de Nacimiento</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            return <ItemTable user={data} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
