import { useEffect, useState } from "react";
import { BACKEND_URL } from "./utils/constants";
import UserProfile from "./components/UserProfile";
import ExerciseProfile from "./components/ExerciseProfile";
import NavBar from "./ui/NavBar";

const App: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}user`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchExercises = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}exercise`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        console.log(data);
        setExercises(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
    fetchExercises();
  }, []);

  return (
    <div className="">
      <NavBar />
      {users.map((user, i) => (
        <UserProfile key={i} user={user}></UserProfile>
      ))}

      {exercises.map((exercise, i) => (
        <ExerciseProfile key={i} exercise={exercise}></ExerciseProfile>
      ))}
    </div>
  );
};

export default App;
