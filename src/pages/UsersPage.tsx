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
    <div className="p-8 gap-4 max-w-full flex flex-col items-center">
      {users.map((user) => (
        <UserProfile user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
