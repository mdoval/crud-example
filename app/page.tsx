import AddUser from "@/components/add-user";
import ModalWindow from "@/components/modal";
import Table from "@/components/table";
import { getUsers } from "@/lib/actions";


export default function Home() {
  const users = getUsers();

  return (
    <div>
      <div className="mt-4 mb-4 text-right">
      <AddUser />
      </div>
      <div>
        <Table data={users} />
      </div>
    </div>
  );
}
