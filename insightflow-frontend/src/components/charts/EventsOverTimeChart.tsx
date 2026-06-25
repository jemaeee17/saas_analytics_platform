import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

interface Props {
    data: {
        date: string;
        count: number;
    }[];
}

export default function EventsOverTimeChart({
    data,
}: Props) {
    return (
        <div
            className="
                rounded-2xl
                border border-slate-200 dark:border-slate-800
                bg-white dark:bg-slate-900
                p-6
                shadow-sm
            "
        >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Events Over Time
                    </h2>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Daily event activity trends
                    </p>
                </div>

                <div
                    className="
                        rounded-lg
                        bg-blue-50 dark:bg-blue-500/10
                        px-3 py-1
                        text-sm font-medium
                        text-blue-600 dark:text-blue-400
                    "
                >
                    Last 90 Days
                </div>
            </div>

            <ResponsiveContainer
                width="100%"
                height={380}
            >
                <AreaChart data={data}>
                    <defs>
                        <linearGradient
                            id="colorEvents"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#2563eb"
                                stopOpacity={0.35}
                            />

                            <stop
                                offset="95%"
                                stopColor="#2563eb"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="currentColor"
                        className="text-slate-200 dark:text-slate-700"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fill: "#64748b",
                            fontSize: 12,
                        }}
                        tickFormatter={(value) =>
                            new Date(value).toLocaleDateString(
                                "en-US",
                                {
                                    month: "short",
                                    day: "numeric",
                                }
                            )
                        }
                    />

                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fill: "#64748b",
                            fontSize: 12,
                        }}
                    />

                    <Tooltip
                        contentStyle={{
                            borderRadius: "12px",
                            border: "1px solid #e2e8f0",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,0.08)",
                        }}
                        labelFormatter={(value) =>
                            new Date(
                                value as string
                            ).toLocaleDateString(
                                "en-US",
                                {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                }
                            )
                        }
                    />

                    <Area
                        type="monotone"
                        dataKey="count"
                        name="Events"
                        stroke="#2563eb"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorEvents)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}