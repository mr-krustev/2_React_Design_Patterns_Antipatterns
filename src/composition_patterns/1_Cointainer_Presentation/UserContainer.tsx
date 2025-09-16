import { useEffect, useState } from "react";
import { User, UserList } from "./UserList";

export const UsersContainer = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setUsers([
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Doe" },
        { id: "3", name: "John Smith" },
      ]);
    }, 2000);
  }, []);

  return <UserList data={users} />;
};
