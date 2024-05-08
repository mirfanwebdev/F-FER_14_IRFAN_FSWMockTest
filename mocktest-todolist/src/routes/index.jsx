import AuthRoute from "../hoc/AuthRoute";
import ProtectedRoute from "../hoc/ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import { createBrowserRouter } from "react-router-dom";
import CreateTodoPage from "../pages/CreateTodoPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthRoute>
        <LoginPage />
      </AuthRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Homepage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/add",
    element: (
      <ProtectedRoute>
        <CreateTodoPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
