import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

interface TrendData {
    date: string;
    count: number;
}

interface Props {
    data: TrendData[];
}

export default function TrendAnalysisChart({
    data,
}: Props) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-semibold">
                    Trend Analysis
                </h2>

                <p className="text-sm text-slate-500">
                    Event activity over time
                </p>
            </div>

            <div className="h-96">
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="date"
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

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="count"
                            stroke="#2563eb"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}