import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

interface Props {
    data: {
        category: string;
        count: number;
    }[];
}

const COLORS = [
    "#2563eb",
    "#10b981",
    "#f59e0b",
    "#ef4444",
];

export default function CategoryPieChart({
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
                        Category Distribution
                    </h2>

                    <p
                        className="
                            text-sm text-slate-500
                            dark:text-slate-400
                        "
                    >
                        Event breakdown by category
                    </p>
                </div>

                <div
                    className="
                        rounded-lg bg-blue-50
                        px-3 py-1 text-sm font-medium
                        text-blue-600
                        dark:bg-blue-500/10
                        dark:text-blue-400
                    "
                >
                    {data.length} Categories
                </div>
            </div>

            <ResponsiveContainer
                width="100%"
                height={320}
            >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="category"
                        innerRadius={70}
                        outerRadius={110}
                        paddingAngle={4}
                    >
                        {data.map((_, index) => (
                            <Cell
                                key={index}
                                fill={
                                    COLORS[
                                    index %
                                    COLORS.length
                                    ]
                                }
                            />
                        ))}
                    </Pie>

                    <Tooltip
                        contentStyle={{
                            borderRadius: "12px",
                            border: "1px solid #e2e8f0",
                            boxShadow:
                                "0 4px 12px rgba(0,0,0,0.08)",
                            backgroundColor: "#ffffff",
                        }}
                    />

                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}