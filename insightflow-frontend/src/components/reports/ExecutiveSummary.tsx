import {
    Activity,
    TrendingUp,
    Globe,
    DollarSign,
} from "lucide-react";

interface Props {
    overview: any;
}

export default function ExecutiveSummary({
    overview,
}: Props) {

    if (!overview) return null;

    const cards = [
        {
            title: "Total Events",
            value: overview.total_events,
            icon: <Activity size={22} />,
            color:
                "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
            change: "+8.4%",
        },
        {
            title: "Success Rate",
            value: `${overview.success_rate}%`,
            icon: <TrendingUp size={22} />,
            color:
                "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
            change: "+4.2%",
        },
        {
            title: "Top Region",
            value: overview.top_region,
            icon: <Globe size={22} />,
            color:
                "bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
            change: "Leading",
        },
        {
            title: "Average Value",
            value: `$${Number(
                overview.average_value
            ).toLocaleString()}`,
            icon: <DollarSign size={22} />,
            color:
                "bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
            change: "+12.1%",
        },
    ];

    return (
        <div>

            <div className="mb-6">

                <h2
                    className="
                        text-xl
                        font-semibold
                        text-slate-900
                        dark:text-white
                    "
                >
                    Executive Summary
                </h2>

                <p
                    className="
                        text-sm
                        text-slate-500
                        dark:text-slate-400
                    "
                >
                    Key performance metrics for the selected period
                </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {cards.map((card) => (

                    <div
                        key={card.title}
                        className="
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

                        <div className="flex items-center justify-between">

                            <p
                                className="
                                    text-sm
                                    font-medium
                                    text-slate-500
                                    dark:text-slate-400
                                "
                            >
                                {card.title}
                            </p>

                            <div
                                className={`
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-xl
                                    ${card.color}
                                `}
                            >
                                {card.icon}
                            </div>

                        </div>

                        <h3
                            className="
                                mt-4
                                text-3xl
                                font-bold
                                text-slate-900
                                dark:text-white
                            "
                        >
                            {card.value}
                        </h3>

                        <p
                            className="
                                mt-3
                                text-sm
                                font-medium
                                text-green-600
                                dark:text-green-400
                            "
                        >
                            ↑ {card.change}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}