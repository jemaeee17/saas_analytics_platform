import {
    LayoutDashboard,
    BarChart3,
    FileText,
    Settings,
    LogOut,
} from "lucide-react";

import {
    NavLink,
    useNavigate,
} from "react-router-dom";

import { useAuth }
    from "../../context/AuthContext";

export default function Sidebar() {

    const { user, logout } =
        useAuth();

    const navigate =
        useNavigate();

    const linkClass = ({
        isActive,
    }: {
        isActive: boolean;
    }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200
    ${isActive
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
            : `
                text-slate-600
                hover:bg-slate-100
                hover:text-slate-900

                dark:text-slate-300
                dark:hover:bg-slate-800
                dark:hover:text-white
              `
        }`;

    return (
        <aside
            className="
            fixed left-0 top-0
            flex h-screen w-72 flex-col

            border-r border-slate-200
            bg-white

            dark:border-slate-800
            dark:bg-slate-950
        "
        >

            {/* Logo */}
            <div
                className="
                flex h-[81px]
                items-center

                border-b border-slate-200
                px-6

                dark:border-slate-800
            "
            >
                <div className="flex items-center gap-3">

                    <div
                        className="
                        flex h-11 w-11
                        items-center justify-center

                        rounded-xl

                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600

                        font-bold
                        text-white

                        shadow-lg
                    "
                    >
                        I
                    </div>

                    <div>

                        <h1
                            className="
                            text-xl
                            font-bold
                            text-slate-900

                            dark:text-white
                        "
                        >
                            Insightful
                        </h1>

                        <p
                            className="
                            text-sm
                            text-slate-500

                            dark:text-slate-400
                        "
                        >
                            SaaS Analytics
                        </p>

                    </div>

                </div>
            </div>

            {/* Navigation Label */}
            <div className="px-4 pt-5 pb-2">

                <p
                    className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider

                    text-slate-400

                    dark:text-slate-500
                "
                >
                    Navigation
                </p>

            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2 p-4">

                <NavLink
                    to="/"
                    className={linkClass}
                >
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

            {/* User Section */}
            <div
                className="
                border-t border-slate-200
                bg-slate-50
                p-4

                dark:border-slate-800
                dark:bg-slate-950
            "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                        flex h-12 w-12
                        items-center justify-center
                        overflow-hidden

                        rounded-xl

                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600

                        font-bold
                        text-white

                        shadow-lg
                        ring-2 ring-white

                        dark:ring-slate-800
                    "
                    >

                        {user?.profile_photo ? (

                            <img
                                src={`http://localhost:8000/storage/${user.profile_photo}`}
                                alt={user.name}
                                className="
                                h-full
                                w-full
                                object-cover
                            "
                            />

                        ) : (

                            user?.name?.charAt(0)

                        )}

                    </div>

                    <div className="min-w-0 flex-1">

                        <div
                            className="
                            truncate
                            font-medium
                            text-slate-900

                            dark:text-white
                        "
                        >
                            {user?.name}
                        </div>

                        <div
                            className="
                            truncate
                            text-sm
                            text-slate-500

                            dark:text-slate-400
                        "
                        >
                            {user?.email}
                        </div>

                    </div>

                </div>

                <div
                    className="
                    mt-4
                    text-center
                    text-xs

                    text-slate-400

                    dark:text-slate-500
                "
                >
                    Insightful v1.0
                </div>

                <button
                    onClick={async () => {
                        await logout();
                        navigate("/login");
                    }}
                    className="
                    mt-4
                    flex w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border border-red-200
                    bg-white

                    px-4 py-3

                    font-medium
                    text-red-600

                    shadow-sm
                    transition-all

                    hover:bg-red-50
                    hover:shadow

                    dark:border-red-900/50
                    dark:bg-slate-950
                    dark:text-red-400
                    dark:hover:bg-red-950/30
                "
                >
                    <LogOut size={18} />
                    Sign Out
                </button>

            </div>

        </aside>
    );

}
