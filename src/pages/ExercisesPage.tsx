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
    <div className="flex max-w-full flex-col items-center gap-4 p-8">
      {exercises.map((exercise, idx) => (
        <ExerciseProfile key={idx} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExercisesPage;
