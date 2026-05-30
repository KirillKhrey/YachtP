import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "../components/layout/Layout";
import HomePage from "../pages/Home/HomePage";
import AuthPage from "../pages/Auth/AuthPage";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

export default function AppRouter() {
  return (
    <Routes>
      {/* публичный роут */}
      <Route path="/auth" element={<AuthPage />} />

      {/* защищённая зона */}
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