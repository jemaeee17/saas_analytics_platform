interface CategoryData {
    category: string;
    count: number;
}

interface Props {
    data: CategoryData[];
}

export default function CategoryPerformanceTable({
    data,
}: Props) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">
                Category Performance
            </h2>

            <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                        <th className="pb-3">
                            Category
                        </th>

                        <th className="pb-3 text-right">
                            Events
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr
                            key={item.category}
                            className="border-b last:border-0"
                        >
                            <td className="py-3">
                                {item.category}
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