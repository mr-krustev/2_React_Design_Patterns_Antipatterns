// This would usually be in a types file.
export type User = {
  id: string;
  name: string;
};

type UserListProps = {
  data: User[];
};

export const UserList = ({ data }: UserListProps) => {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
