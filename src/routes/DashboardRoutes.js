import { Route, Routes, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import LegalPage from "pages/LegalPage/LegalPage";
import AboutPage from "pages/AboutPage/AboutPage";

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/account/:id" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}