import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        setLoading(true);

        try {
            const data =
                await authService.register(
                    name,
                    email,
                    password
                );

            login(
                data.token,
                data.user
            );

            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-slate-950">

            {/* Left Side */}
            <div
                className="
                    hidden lg:flex
                    w-1/2
                    flex-col
                    justify-between
                    bg-gradient-to-br
                    from-slate-900
                    via-slate-950
                    to-indigo-950
                    p-12
                    text-white
                "
            >
                <div>
                    <h1 className="text-4xl font-bold">
                        Insightful
                    </h1>

                    <p className="mt-3 text-slate-400">
                        SaaS Analytics Dashboard
                    </p>
                </div>

                <div>
                    <h2 className="text-5xl font-bold leading-tight">
                        Start tracking your
                        business performance.
                    </h2>

                    <p className="mt-6 text-lg text-slate-400">
                        Create your account and gain
                        access to powerful analytics,
                        reports, and insights.
                    </p>

                    <div className="mt-10 space-y-4 text-slate-300">
                        <div>
                            ✓ Analytics Dashboard
                        </div>

                        <div>
                            ✓ Region Performance
                        </div>

                        <div>
                            ✓ Detailed Reports
                        </div>

                        <div>
                            ✓ CSV Export
                        </div>
                    </div>
                </div>

                <div className="text-sm text-slate-500">
                    © 2026 Insightful
                </div>
            </div>

            {/* Right Side */}
            <div
                className="
                    flex flex-1
                    items-center
                    justify-center
                    bg-slate-950
                    px-6
                "
            >
                <div className="w-full max-w-md">

                    <div
                        className="
                            rounded-3xl
                            border border-slate-700
                            bg-slate-900
                            p-10
                            shadow-xl
                        "
                    >
                        <div className="mb-8">
                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    text-slate-100
                                "
                            >
                                Create Account
                            </h2>

                            <p
                                className="
                                    mt-2
                                    text-slate-400
                                "
                            >
                                Get started with Insightful
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <div>
                                <label
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-medium
                                        text-slate-300
                                    "
                                >
                                    Full Name
                                </label>

                                <input
                                    value={name}
                                    onChange={(e) =>
                                        setName(
                                            e.target.value
                                        )
                                    }
                                    placeholder="John Doe"
                                    className="
                                        w-full
                                        rounded-xl
                                        border border-slate-700
                                        bg-slate-800
                                        px-4 py-3
                                        text-slate-100
                                        placeholder:text-slate-500
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-500
                                    "
                                />
                            </div>

                            <div>
                                <label
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-medium
                                        text-slate-300
                                    "
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                    placeholder="john@example.com"
                                    className="
                                        w-full
                                        rounded-xl
                                        border border-slate-700
                                        bg-slate-800
                                        px-4 py-3
                                        text-slate-100
                                        placeholder:text-slate-500
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-500
                                    "
                                />
                            </div>

                            <div>
                                <label
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-medium
                                        text-slate-300
                                    "
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="••••••••"
                                    className="
                                        w-full
                                        rounded-xl
                                        border border-slate-700
                                        bg-slate-800
                                        px-4 py-3
                                        text-slate-100
                                        placeholder:text-slate-500
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-500
                                    "
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    w-full
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-indigo-600
                                    py-3
                                    font-medium
                                    text-white
                                    shadow-lg
                                    transition
                                    hover:from-blue-500
                                    hover:to-indigo-500
                                    disabled:cursor-not-allowed
                                    disabled:opacity-50
                                "
                            >
                                {loading
                                    ? "Creating Account..."
                                    : "Create Account"}
                            </button>
                        </form>

                        <div
                            className="
                                mt-6
                                text-center
                                text-sm
                                text-slate-400
                            "
                        >
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="
                                    font-semibold
                                    text-blue-400
                                    hover:underline
                                "
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

