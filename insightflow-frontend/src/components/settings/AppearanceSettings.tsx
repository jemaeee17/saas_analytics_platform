import { Palette }
    from "lucide-react";

import { useTheme }
    from "../../context/ThemeContext";

export default function AppearanceSettings() {

    const {
        theme,
        setTheme,
    } = useTheme();

    return (
        <div className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm

            dark:border-slate-700
            dark:bg-slate-900
        ">
            <div className="mb-6 flex items-center gap-3">

                <Palette
                    className="
                        text-indigo-600
                    "
                />

                <h2 className="
                    text-xl
                    font-semibold

                    dark:text-white
                ">
                    Appearance
                </h2>

            </div>

            <label className="
                mb-2 block
                text-sm
                font-medium
                text-slate-600

                dark:text-slate-300
            ">
                Theme
            </label>

            <select
                value={theme}
                onChange={(e) =>
                    setTheme(
                        e.target.value as
                        | "light"
                        | "dark"
                        | "system"
                    )
                }
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    px-4
                    py-3

                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-white
                "
            >
                <option value="light">
                    Light
                </option>

                <option value="dark">
                    Dark
                </option>

                <option value="system">
                    System
                </option>

            </select>
        </div>
    );
}