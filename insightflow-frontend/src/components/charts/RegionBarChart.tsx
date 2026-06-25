import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

interface Props {
    data: {
        region: string;
        count: number;
    }[];
}

export default function RegionBarChart({
    data,
}: Props) {
    return (
        <div
            className="
                rounded-2xl border border-slate-200
                bg-white p-6 shadow-sm
                dark:border-slate-800
                dark:bg-slate-900
            "
        >
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2
                        className="
                            text-lg font-semibold text-slate-900
                            dark:text-white
                        "
                    >
                        Events by Region
                    </h2>

                    <p
                        className="
                            text-sm text-slate-500
                            dark:text-slate-400
                        "
                    >
                        Regional event distribution
                    </p>
                </div>

                <div
                    className="
                        rounded-lg bg-indigo-50
                        px-3 py-1 text-sm font-medium
                        text-indigo-600
                        dark:bg-indigo-500/10
                        dark:text-indigo-400
                    "
                >
                    Top Regions
                </div>
            </div>

            <ResponsiveContainer
                width="100%"
                height={320}
            >
                <BarChart data={data}>
                    <CartesianGrid
                        stroke="#e5e7eb"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="region"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fill: "#64748b",
                            fontSize: 12,
                        }}
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
                        cursor={{
                            fill: "#f8fafc",
                        }}
                        contentStyle={{
                            borderRadius: "12px",
                            border: "1px solid #e2e8f0",
                            boxShadow:
                                "0 4px 12px rgba(0,0,0,0.08)",
                            backgroundColor: "#ffffff",
                        }}
                    />

                    <Bar
                        dataKey="count"
                        fill="#4f46e5"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}