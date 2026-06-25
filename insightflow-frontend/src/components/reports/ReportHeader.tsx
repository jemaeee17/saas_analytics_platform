import {
    Calendar,
    Clock3,
    CheckCircle2,
} from "lucide-react";

interface Props {
    range: string;
}

export default function ReportHeader({
    range,
}: Props) {

    const rangeLabel =
        {
            "7d": "7 Days",
            "30d": "30 Days",
            "90d": "90 Days",
            "365d": "1 Year",
        }[range] || range;

    return (
        <div
            className="
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                hover:shadow-md

                dark:border-slate-800
                dark:bg-slate-900
            "
        >

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>

                    <h2
                        className="
                            text-xl
                            font-bold
                            text-slate-900

                            dark:text-white
                        "
                    >
                        Analytics Report
                    </h2>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500

                            dark:text-slate-400
                        "
                    >
                        Generated automatically from current analytics data
                    </p>

                </div>

                <div
                    className="
                        rounded-full
                        bg-green-100
                        px-4 py-2
                        text-sm
                        font-medium
                        text-green-700

                        dark:bg-green-900/30
                        dark:text-green-400
                    "
                >
                    Ready to Export
                </div>

            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

                {/* Period */}

                <div
                    className="
                        rounded-xl
                        bg-slate-50
                        p-4

                        dark:bg-slate-800
                    "
                >

                    <div
                        className="
                            mb-2
                            flex items-center gap-2

                            text-slate-500

                            dark:text-slate-400
                        "
                    >
                        <Calendar size={16} />

                        <span className="text-sm">
                            Period
                        </span>

                    </div>

                    <p
                        className="
                            font-semibold
                            text-slate-900

                            dark:text-white
                        "
                    >
                        {rangeLabel}
                    </p>

                </div>

                {/* Generated */}

                <div
                    className="
                        rounded-xl
                        bg-slate-50
                        p-4

                        dark:bg-slate-800
                    "
                >

                    <div
                        className="
                            mb-2
                            flex items-center gap-2

                            text-slate-500

                            dark:text-slate-400
                        "
                    >
                        <Clock3 size={16} />

                        <span className="text-sm">
                            Generated
                        </span>

                    </div>

                    <p
                        className="
                            font-semibold
                            text-slate-900

                            dark:text-white
                        "
                    >
                        {new Date().toLocaleDateString()}
                    </p>

                </div>

                {/* Status */}

                <div
                    className="
                        rounded-xl
                        bg-slate-50
                        p-4

                        dark:bg-slate-800
                    "
                >

                    <div
                        className="
                            mb-2
                            flex items-center gap-2

                            text-slate-500

                            dark:text-slate-400
                        "
                    >
                        <CheckCircle2 size={16} />

                        <span className="text-sm">
                            Status
                        </span>

                    </div>

                    <p
                        className="
                            font-semibold
                            text-green-600

                            dark:text-green-400
                        "
                    >
                        Ready
                    </p>

                </div>

            </div>

        </div>
    );
}