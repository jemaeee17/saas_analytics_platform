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
    data: any[];
}

export default function TrendChart({
    data,
}: Props) {
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
                            text-lg
                            font-semibold
                            text-slate-900

                            dark:text-white
                        "
                    >
                        Event Trends
                    </h2>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500

                            dark:text-slate-400
                        "
                    >
                        Daily event activity over the selected period
                    </p>

                </div>

                <div
                    className="
                        rounded-full
                        bg-green-100
                        px-3 py-1
                        text-xs
                        font-medium
                        text-green-700

                        dark:bg-green-900/30
                        dark:text-green-400
                    "
                >
                    Trending Up
                </div>

            </div>

            <div className="h-[400px]">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
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
                            stroke="#334155"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="date"
                            tickFormatter={(value) =>
                                new Date(
                                    value
                                ).toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "short",
                                        day: "numeric",
                                    }
                                )
                            }
                            tick={{
                                fill: "#94a3b8",
                                fontSize: 12,
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{
                                fill: "#94a3b8",
                                fontSize: 12,
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#0f172a",
                                border:
                                    "1px solid #334155",
                                borderRadius: "12px",
                                color: "#f8fafc",
                                boxShadow:
                                    "0 10px 25px rgba(0,0,0,.35)",
                            }}
                            labelStyle={{
                                color: "#f8fafc",
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="count"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorEvents)"
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}