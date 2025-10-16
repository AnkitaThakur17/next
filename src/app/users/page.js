import BackButton from "@/app/components/BackButton";
import Link from "next/link";

const users = [
  { id: 101, name: "User 101" },
  { id: 102, name: "User 102" },
  { id: 103, name: "User 103" },
  { id: 104, name: "User 104"},
  {id: 105, name: "User 105"}
];

export default function UsersPage() {
  return (
<div className="bg-white min-h-screen">

    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-400">Users List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              href={`/users/${user.id}`}
              className="text-blue-500 hover:underline"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
      <BackButton/>
    </div>

</div>
  );
}
