import {
    LayoutDashboard,
    BarChart3,
    FileText,
    Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition ${isActive
            ? "bg-blue-500 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`;

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-white">
            {/* Logo */}
            <div className="border-b p-6">
                <h1 className="text-xl font-bold">
                    Insightful
                </h1>

                <p className="text-sm text-gray-500">
                    Analytics Dashboard
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2 p-4">
                <NavLink to="/" className={linkClass}>
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    to="/analytics"
                    className={linkClass}
                >
                    <BarChart3 size={20} />
                    <span>Analytics</span>
                </NavLink>

                <NavLink
                    to="/reports"
                    className={linkClass}
                >
                    <FileText size={20} />
                    <span>Reports</span>
                </NavLink>

                <NavLink
                    to="/settings"
                    className={linkClass}
                >
                    <Settings size={20} />
                    <span>Settings</span>
                </NavLink>
            </nav>

            {/* User */}
            <div className="border-t p-4">
                <div className="font-medium">
                    John Doe
                </div>

                <div className="text-sm text-gray-500">
                    john@example.com
                </div>
            </div>
        </aside>
    );
}