import { useState } from "react";

export const initUsers = [
  {
    id: 1,
    name: "Petr Ivanov",
    language: "Java",
    age: 18,
  },
  {
    id: 2,
    name: "Katya Petrova",
    language: "JS",
    age: 21,
  },
  {
    id: 3,
    name: "Alex Koval",
    language: "Ruby",
    age: 24,
  },
  {
    id: 4,
    name: "Igor Sadovskiy",
    language: "Python",
    age: 26,
  },
];

type UserModel = {
  id: number;
  name: string;
  language: string;
  age: number;
};

type UserProps = {
  user: UserModel;
  deleteUser: (user: UserModel) => void;
};

export const User = ({ user, deleteUser }: UserProps) => {
  const { name, age, language } = user;
  const [isOpen, toggle] = useState(false);

  const userDescription = (
    <div className="User__description">
      <div>Age: {age}</div>
      <div>Language: {language}</div>
    </div>
  );
  return (
    <div className="User">
      <h1 className="User__title">
        <span
          className="User__toggleDescription"
          onClick={() => toggle(!isOpen)}
        >
          {isOpen ? "▼" : "►"}
        </span>
        {name}
      </h1>
      {isOpen && userDescription}
      <button onClick={() => deleteUser(user)} className="User__deleteUserBtn">
        ✕
      </button>
    </div>
  );
};

export const UserList = () => {
  const [users, modifyUserList] = useState(initUsers);

  const deleteUser = (deletingUser: UserModel) =>
    modifyUserList(users.filter((user) => user.id !== deletingUser.id));

  return (
    <div className="UserList">
      {users.map((user, i) => (
        <User key={i} user={user} deleteUser={deleteUser} />
      ))}
    </div>
  );
};
