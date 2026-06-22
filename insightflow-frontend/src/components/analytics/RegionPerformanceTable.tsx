interface RegionData {
    region: string;
    count: number;
}

interface Props {
    data: RegionData[];
}

export default function RegionPerformanceTable({
    data,
}: Props) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">
                Region Performance
            </h2>

            <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                        <th className="pb-3">
                            Region
                        </th>

                        <th className="pb-3 text-right">
                            Events
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr
                            key={item.region}
                            className="border-b last:border-0"
                        >
                            <td className="py-3">
                                {item.region}
                            </td>

                            <td className="py-3 text-right font-medium">
                                {item.count}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}