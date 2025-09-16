import { useEffect, useState } from "react";
import { User, UserList } from "./UserList";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useUsers = () => {
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

  return users;
};

export const UsersContainer = () => {
  const [users, setUsers] = useState<User[]>([]);
  // const users = useUsers();

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
