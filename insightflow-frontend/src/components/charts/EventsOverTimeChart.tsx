import {
    ResponsiveContainer,
    LineChart,
    Line,
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
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold">
                Events Over Time
            </h2>

            <ResponsiveContainer
                width="100%"
                height={400}
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
                        stroke="#3b82f6"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}