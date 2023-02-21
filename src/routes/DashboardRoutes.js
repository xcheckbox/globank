import { Route, Routes, Navigate } from "react-router-dom"
import { Navbar } from "../shared/Navbar"
import DashboardPage from "../pages/DashboardPage/DashboardPage"

export const DashboardRoutes = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}