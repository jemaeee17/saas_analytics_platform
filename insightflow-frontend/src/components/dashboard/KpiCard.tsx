import type { ReactNode } from "react";

interface KpiCardProps {
    title: string;
    value: string | number;
    change?: string;
    icon?: ReactNode;
}

export default function KpiCard({
    title,
    value,
    change,
    icon,
}: KpiCardProps) {
    return (
        <div
            className="
            group
            rounded-2xl
            border border-slate-200

            bg-white

            p-6

            shadow-sm
            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-xl

            dark:border-slate-800
            dark:bg-slate-900
        "
        >

            <div className="flex items-start justify-between">

                <div>

                    <p
                        className="
                        text-sm
                        font-medium

                        text-slate-500

                        dark:text-slate-400
                    "
                    >
                        {title}
                    </p>

                </div>

                {icon && (

                    <div
                        className="
                        flex h-11 w-11
                        items-center justify-center

                        rounded-xl

                        bg-blue-50
                        text-blue-600

                        transition-all

                        group-hover:scale-110

                        dark:bg-blue-950/40
                        dark:text-blue-400
                    "
                    >
                        {icon}
                    </div>

                )}

            </div>

            <h2
                className="
                mt-5

                text-4xl
                font-bold

                tracking-tight

                text-slate-900

                dark:text-white
            "
            >
                {value}
            </h2>

            {change && (

                <div className="mt-4">

                    <span
                        className="
                        inline-flex
                        items-center

                        rounded-full

                        bg-green-100

                        px-3 py-1

                        text-xs
                        font-semibold

                        text-green-700

                        dark:bg-green-900/30
                        dark:text-green-400
                    "
                    >
                        ↑ {change}
                    </span>

                </div>

            )}

        </div>
    );

}
