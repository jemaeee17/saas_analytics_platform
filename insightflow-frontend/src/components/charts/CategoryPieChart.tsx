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
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
];

export default function CategoryPieChart({
    data,
}: Props) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold">
                Category Distribution
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="category"
                        outerRadius={100}
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
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}