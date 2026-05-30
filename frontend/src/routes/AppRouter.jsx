import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/Home/HomePage";
import AuthPage from "../pages/Auth/AuthPage";

function AppRouter() {
  return (
    <Routes>
       <Route path="/auth" element={<AuthPage />} />

       <Route element={<Layout />}>
         <Route path="/" element={<HomePage />} />
       </Route>
    </Routes>
  );
}

export default AppRouter;