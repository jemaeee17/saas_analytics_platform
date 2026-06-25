import type { ReactNode } from "react";

interface Props {
    title: string;
    value: string | number;
    description: string;
    icon?: ReactNode;
}

export default function InsightCard({
    title,
    value,
    description,
    icon,
}: Props) {
    return (
        <div
            className="
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-md

                dark:border-slate-800
                dark:bg-slate-900
            "
        >
            <div className="flex items-center justify-between">

                <div>

                    <p
                        className="
                            text-sm font-medium
                            text-slate-500
                            dark:text-slate-400
                        "
                    >
                        {title}
                    </p>

                    <h3
                        className="
                            mt-3 text-4xl font-bold
                            text-slate-900
                            dark:text-white
                        "
                    >
                        {value}
                    </h3>

                </div>

                {icon && (
                    <div
                        className="
                            rounded-xl
                            bg-blue-50
                            p-3
                            text-blue-600

                            dark:bg-blue-500/10
                            dark:text-blue-400
                        "
                    >
                        {icon}
                    </div>
                )}

            </div>

            <div
                className="
                    mt-4 border-t
                    border-slate-100
                    pt-4

                    dark:border-slate-700
                "
            >
                <p
                    className="
                        text-sm leading-relaxed
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    {description}
                </p>
            </div>
        </div>
    );
}