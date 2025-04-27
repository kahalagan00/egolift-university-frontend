import { ExerciseType } from "../utils/constants";

interface ExerciseProfileProps {
  exercise: ExerciseType;
}

const ExerciseProfile = ({ exercise }: ExerciseProfileProps) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:w-xl w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/docs/images/blog/image-4.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {exercise.exerciseName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Category: {exercise.category}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Difficulty: {exercise.difficulty}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Likability: {exercise.likability}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Popularity: {exercise.popularity}
        </p>
      </div>
    </div>
  );
};

export default ExerciseProfile;
