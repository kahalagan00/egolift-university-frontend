import { useEffect, useState } from "react";
import ExerciseProfile from "../components/ExerciseProfile";
import { getExercisesApi } from "../services/apiExercises";

const ExercisesPage: React.FC = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersResult = await getExercisesApi();
      console.log(usersResult);
      setExercises(usersResult);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-8 gap-4 max-w-full flex flex-col items-center">
      {exercises.map((exercise) => (
        <ExerciseProfile exercise={exercise} />
      ))}
    </div>
  );
};

export default ExercisesPage;
