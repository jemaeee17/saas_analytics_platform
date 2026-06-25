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

    const maxCount = Math.max(
        ...data.map((item) => item.count)
    );

    const categoryColors = [
        "from-blue-500 to-indigo-600",
        "from-emerald-500 to-green-600",
        "from-amber-500 to-orange-600",
        "from-rose-500 to-red-600",
    ];

    return (
        <div
            className="
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                hover:shadow-md

                dark:border-slate-800
                dark:bg-slate-900
            "
        >

            {/* Header */}
            <div className="mb-6">

                <h2
                    className="
                        text-xl
                        font-semibold
                        text-slate-900

                        dark:text-white
                    "
                >
                    Category Performance
                </h2>

                <p
                    className="
                        text-sm
                        text-slate-500

                        dark:text-slate-400
                    "
                >
                    Most active business categories
                </p>

            </div>

            <div className="space-y-4">

                {data.map((item, index) => {

                    const percentage =
                        (item.count / maxCount) * 100;

                    return (
                        <div
                            key={item.category}
                            className="
                                rounded-xl
                                border border-slate-100
                                p-4
                                transition
                                hover:bg-slate-50

                                dark:border-slate-800
                                dark:hover:bg-slate-800/50
                            "
                        >

                            <div className="mb-2 flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <div
                                        className={`
                                            flex h-8 w-8 items-center justify-center
                                            rounded-full text-xs font-bold text-white
                                            bg-gradient-to-r
                                            ${categoryColors[index % categoryColors.length]}
                                        `}
                                    >
                                        {index + 1}
                                    </div>

                                    <div>

                                        <div
                                            className="
                                                font-medium
                                                text-slate-800

                                                dark:text-slate-200
                                            "
                                        >
                                            {item.category}
                                        </div>

                                        {index === 0 && (
                                            <div
                                                className="
                                                    text-xs
                                                    font-medium
                                                    text-emerald-600

                                                    dark:text-emerald-400
                                                "
                                            >
                                                Top Category
                                            </div>
                                        )}

                                    </div>

                                </div>

                                <div className="text-right">

                                    <div
                                        className="
                                            font-bold
                                            text-slate-900

                                            dark:text-white
                                        "
                                    >
                                        {item.count.toLocaleString()}
                                    </div>

                                    <div
                                        className="
                                            text-xs
                                            text-slate-500

                                            dark:text-slate-400
                                        "
                                    >
                                        Events
                                    </div>

                                </div>

                            </div>

                            {/* Progress Bar */}
                            <div
                                className="
                                    h-2
                                    overflow-hidden
                                    rounded-full

                                    bg-slate-100

                                    dark:bg-slate-800
                                "
                            >

                                <div
                                    className={`
                                        h-full rounded-full bg-gradient-to-r
                                        ${categoryColors[index % categoryColors.length]}
                                    `}
                                    style={{
                                        width: `${percentage}%`,
                                    }}
                                />

                            </div>

                        </div>
                    );

                })}

            </div>

        </div>
    );
}