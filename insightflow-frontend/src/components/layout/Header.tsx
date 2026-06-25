import { CalendarDays } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
    const { user } = useAuth();

    const today = new Date().toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        }
    );

    return (
        <header
            className="
            flex h-[81px]
            items-center justify-between

            border-b border-slate-200
            bg-white

            px-8
            shadow-sm

            dark:border-slate-800
            dark:bg-slate-950
        "
        >

            {/* Left */}
            <div>

                <h1
                    className="
                    text-3xl
                    font-bold
                    text-slate-900

                    dark:text-white
                "
                >
                    Dashboard
                </h1>

                <p
                    className="
                    mt-1
                    text-sm
                    text-slate-500

                    dark:text-slate-400
                "
                >
                    SaaS Analytics Overview
                </p>

            </div>

            {/* Right */}
            <div className="flex items-center gap-6">

                {/* Date */}
                <div
                    className="
                    hidden md:flex
                    items-center gap-2

                    rounded-xl

                    bg-slate-50
                    px-4 py-2

                    text-sm
                    text-slate-600

                    dark:bg-slate-900
                    dark:text-slate-300
                "
                >
                    <CalendarDays size={16} />
                    {today}
                </div>

                {/* User */}
                <div className="flex items-center gap-3">

                    <div className="text-right">

                        <p
                            className="
                            font-semibold
                            text-slate-800

                            dark:text-white
                        "
                        >
                            {user?.name}
                        </p>

                        <p
                            className="
                            text-sm
                            text-slate-500

                            dark:text-slate-400
                        "
                        >
                            Admin
                        </p>

                    </div>

                    <div
                        className="
                        flex h-11 w-11
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

                </div>

            </div>

        </header>
    );

}
