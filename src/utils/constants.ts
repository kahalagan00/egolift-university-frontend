// URLs
export const BACKEND_URL = "http://localhost:8080/api/v1/";

// Images
export const COMPANY_LOGO = "company_logo_2.svg";

// Types
export type UserType = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  weight: number;
  height: number;
};

export type ExerciseType = {
  exerciseName: string;
  category: string;
  popularity: number;
  likability: number;
  difficulty: number;
};
