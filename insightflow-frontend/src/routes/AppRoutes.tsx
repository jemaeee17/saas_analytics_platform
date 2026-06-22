import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Login from "../pages/Login";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/login" element={<Login />} />

            <Route element={<MainLayout />}>

                <Route path="/" element={<Dashboard />} />

                <Route
                    path="/analytics"
                    element={<Analytics />}
                />

                <Route
                    path="/reports"
                    element={<Reports />}
                />

                <Route
                    path="/settings"
                    element={<Settings />}
                />

            </Route>

        </Routes>
    );
}