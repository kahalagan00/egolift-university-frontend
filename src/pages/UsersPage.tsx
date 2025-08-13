import { useEffect, useState } from "react";
import { getUsersApi } from "../services/apiUsers";
import UserProfile from "../components/UserProfile";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersResult = await getUsersApi();
      console.log(usersResult);
      setUsers(usersResult);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex max-w-full flex-col items-center gap-4 p-8">
      {users.map((user, idx) => (
        <UserProfile key={idx} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
