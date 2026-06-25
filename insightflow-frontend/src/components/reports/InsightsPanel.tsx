import {
    Globe,
    TrendingUp,
    DollarSign,
    Activity,
} from "lucide-react";

interface Props {
    overview: any;
}

export default function InsightsPanel({
    overview,
}: Props) {

    if (!overview) return null;

    const insights = [
        {
            title: "Top Region",
            value: overview.top_region,
            description:
                "Currently generates the highest event volume.",
            icon: <Globe size={20} />,
            color:
                "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
        },
        {
            title: "Success Rate",
            value: `${overview.success_rate}%`,
            description:
                "Overall event completion performance.",
            icon: <TrendingUp size={20} />,
            color:
                "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
        },
        {
            title: "Average Value",
            value: `$${Number(
                overview.average_value
            ).toLocaleString()}`,
            description:
                "Average value generated per event.",
            icon: <DollarSign size={20} />,
            color:
                "bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
        },
        {
            title: "Total Events",
            value: overview.total_events,
            description:
                "Total events recorded during this period.",
            icon: <Activity size={20} />,
            color:
                "bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
        },
    ];

    return (
        <div
            className="
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm

                dark:border-slate-800
                dark:bg-slate-900
            "
        >

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2
                        className="
                            text-xl
                            font-semibold
                            text-slate-900

                            dark:text-white
                        "
                    >
                        Key Insights
                    </h2>

                    <p
                        className="
                            text-sm
                            text-slate-500

                            dark:text-slate-400
                        "
                    >
                        AI-generated summary of performance metrics
                    </p>

                </div>

                <div
                    className="
                        rounded-full
                        bg-green-100
                        px-3 py-1
                        text-sm
                        font-medium
                        text-green-700

                        dark:bg-green-900/30
                        dark:text-green-400
                    "
                >
                    Updated
                </div>

            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                {insights.map((item) => (

                    <div
                        key={item.title}
                        className="
                            rounded-xl
                            border border-slate-200
                            p-5
                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:shadow-md

                            dark:border-slate-800
                            dark:hover:bg-slate-800/50
                        "
                    >

                        <div className="flex items-center justify-between">

                            <div
                                className={`
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-xl
                                    ${item.color}
                                `}
                            >
                                {item.icon}
                            </div>

                        </div>

                        <p
                            className="
                                mt-4
                                text-sm
                                text-slate-500

                                dark:text-slate-400
                            "
                        >
                            {item.title}
                        </p>

                        <h3
                            className="
                                mt-1
                                text-xl
                                font-bold
                                text-slate-900

                                dark:text-white
                            "
                        >
                            {item.value}
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-slate-500

                                dark:text-slate-400
                            "
                        >
                            {item.description}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}