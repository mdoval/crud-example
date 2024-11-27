import Table from "@/components/table";
import { getUsers } from "@/lib/actions";

export default function Home() {
  const users = getUsers()

  return (
    <div>
      <div>
        <Table data={users} />
      </div>
      <div>Botones</div>
    </div>
  );
}
