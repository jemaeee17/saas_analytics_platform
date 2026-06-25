interface Props {
    data: any[];
}

export default function RegionTable({
    data,
}: Props) {
    return (
        <div
            className="
                rounded-2xl
                border border-slate-200
                bg-white
                shadow-sm

                dark:border-slate-800
                dark:bg-slate-900
            "
        >

            <div
                className="
                    flex items-center justify-between
                    border-b p-5

                    dark:border-slate-800
                "
            >

                <div>

                    <h2
                        className="
                            text-lg
                            font-semibold
                            text-slate-900

                            dark:text-white
                        "
                    >
                        Region Performance
                    </h2>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500

                            dark:text-slate-400
                        "
                    >
                        Event distribution across regions
                    </p>

                </div>

                <div
                    className="
                        rounded-full
                        bg-blue-100
                        px-3 py-1
                        text-xs
                        font-medium
                        text-blue-700

                        dark:bg-blue-900/30
                        dark:text-blue-400
                    "
                >
                    {data.length} Regions
                </div>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr
                            className="
                                border-b
                                bg-slate-50

                                dark:border-slate-800
                                dark:bg-slate-800/50
                            "
                        >

                            <th
                                className="
                                    px-5 py-4
                                    text-left
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wider
                                    text-slate-500

                                    dark:text-slate-400
                                "
                            >
                                Region
                            </th>

                            <th
                                className="
                                    px-5 py-4
                                    text-right
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wider
                                    text-slate-500

                                    dark:text-slate-400
                                "
                            >
                                Events
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {Array.isArray(data) &&
                            data.map((row, index) => (

                                <tr
                                    key={row.region}
                                    className="
                                        border-b border-slate-100
                                        transition-colors
                                        hover:bg-slate-50
                                        last:border-0

                                        dark:border-slate-800
                                        dark:hover:bg-slate-800/50
                                    "
                                >

                                    <td className="px-5 py-4">

                                        <div className="flex items-center gap-3">

                                            <div
                                                className="
                                                    flex h-8 w-8
                                                    items-center justify-center

                                                    rounded-lg

                                                    bg-blue-100
                                                    text-sm font-semibold
                                                    text-blue-600

                                                    dark:bg-blue-950/40
                                                    dark:text-blue-400
                                                "
                                            >
                                                {index + 1}
                                            </div>

                                            <span
                                                className="
                                                    font-medium
                                                    text-slate-800

                                                    dark:text-slate-200
                                                "
                                            >
                                                {row.region}
                                            </span>

                                        </div>

                                    </td>

                                    <td className="px-5 py-4 text-right">

                                        <span
                                            className="
                                                rounded-full
                                                bg-slate-100
                                                px-3 py-1
                                                text-sm
                                                font-semibold
                                                text-slate-700

                                                dark:bg-slate-800
                                                dark:text-slate-300
                                            "
                                        >
                                            {row.count.toLocaleString()}
                                        </span>

                                    </td>

                                </tr>

                            ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}