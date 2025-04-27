import { ExerciseType } from "../utils/constants";

interface ExerciseProfileProps {
  exercise: ExerciseType;
}

const ExerciseProfile = ({ exercise }: ExerciseProfileProps) => {
  return (
    <div className="rounded-lg bg-cyan-200 p-4 my-4 max-w-[400px]">
      <h1>{exercise.exerciseName}</h1>
      <p>{exercise.category}</p>
      <p>{exercise.difficulty}</p>
      <p>{exercise.popularity}</p>
      <p>{exercise.likability}</p>
    </div>
  );
};

export default ExerciseProfile;
