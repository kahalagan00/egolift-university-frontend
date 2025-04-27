import { BACKEND_URL } from "../utils/constants";

export const getExercisesApi = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}exercise`);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData.message || "Something went wrong when trying to get Exercises"
      );
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
