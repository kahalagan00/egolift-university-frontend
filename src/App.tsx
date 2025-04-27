import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import ExercisesPage from "./pages/ExercisesPage";
import WorkoutsPage from "./pages/WorkoutsPage";
import UsersPage from "./pages/UsersPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />}></Route>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="exercises" element={<ExercisesPage />} />
          <Route path="workouts" element={<WorkoutsPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>

        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
