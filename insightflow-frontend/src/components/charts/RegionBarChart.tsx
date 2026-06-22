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
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold">
                Events by Region
            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="region" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="count"
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}