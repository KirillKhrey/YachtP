import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/Home/HomePage";
import AuthPage from "../pages/Auth/AuthPage";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;