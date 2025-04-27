import { UserType } from "../utils/constants";

interface UserProfileProps {
  user: UserType;
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="rounded-lg bg-blue-200 p-4 my-4 max-w-[400px]">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>{user.birthDate}</p>
      <p>{user.weight}</p>
      <p>{user.height}</p>
    </div>
  );
};

export default UserProfile;
