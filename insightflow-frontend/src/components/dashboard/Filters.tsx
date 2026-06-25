interface Props {
    filters: {
        region: string;
        category: string;
        status: string;
        start_date: string;
        end_date: string;
    };

    onChange: (
        name: string,
        value: string
    ) => void;

}

export default function Filters({
    filters,
    onChange,
}: Props) {

    const activeFilters = [
        filters.region,
        filters.category,
        filters.status,
        filters.start_date,
        filters.end_date,
    ].filter(Boolean).length;

    return (
        <div
            className="
            rounded-2xl
            border border-slate-200

            bg-white

            p-6

            shadow-sm

            dark:border-slate-800
            dark:bg-slate-900
        "
        >

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2
                        className="
                        text-lg
                        font-semibold

                        text-slate-900

                        dark:text-white
                    "
                    >
                        Filters
                    </h2>

                    <p
                        className="
                        text-sm
                        text-slate-500

                        dark:text-slate-400
                    "
                    >
                        Refine analytics data
                    </p>

                </div>

                <div
                    className="
                    rounded-xl

                    bg-blue-50

                    px-3 py-1

                    text-sm
                    font-medium

                    text-blue-600

                    dark:bg-blue-950/40
                    dark:text-blue-400
                "
                >
                    {activeFilters} Active
                </div>

            </div>

            {/* Controls */}
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">

                {/* Region */}
                <div>

                    <label
                        className="
                        mb-2 block
                        text-sm
                        font-medium

                        text-slate-600

                        dark:text-slate-400
                    "
                    >
                        Region
                    </label>

                    <select
                        value={filters.region}
                        onChange={(e) =>
                            onChange(
                                "region",
                                e.target.value
                            )
                        }
                        className="
                        w-full

                        rounded-xl

                        border border-slate-200

                        bg-white

                        px-4 py-3

                        text-slate-700

                        transition-all

                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        focus:outline-none

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-200
                        dark:focus:ring-blue-900/30
                    "
                    >
                        <option value="">
                            All Regions
                        </option>

                        <option value="Asia">
                            Asia
                        </option>

                        <option value="Europe">
                            Europe
                        </option>

                        <option value="North America">
                            North America
                        </option>

                        <option value="South America">
                            South America
                        </option>

                    </select>

                </div>

                {/* Category */}
                <div>

                    <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-400">
                        Category
                    </label>

                    <select
                        value={filters.category}
                        onChange={(e) =>
                            onChange(
                                "category",
                                e.target.value
                            )
                        }
                        className="
                        w-full rounded-xl

                        border border-slate-200

                        bg-white

                        px-4 py-3

                        text-slate-700

                        transition-all

                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        focus:outline-none

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-200
                        dark:focus:ring-blue-900/30
                    "
                    >
                        <option value="">
                            All Categories
                        </option>

                        <option value="Sales">
                            Sales
                        </option>

                        <option value="Marketing">
                            Marketing
                        </option>

                        <option value="Product">
                            Product
                        </option>

                        <option value="Support">
                            Support
                        </option>

                    </select>

                </div>

                {/* Status */}
                <div>

                    <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-400">
                        Status
                    </label>

                    <select
                        value={filters.status}
                        onChange={(e) =>
                            onChange(
                                "status",
                                e.target.value
                            )
                        }
                        className="
                        w-full rounded-xl

                        border border-slate-200

                        bg-white

                        px-4 py-3

                        text-slate-700

                        transition-all

                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        focus:outline-none

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-200
                        dark:focus:ring-blue-900/30
                    "
                    >
                        <option value="">
                            All Statuses
                        </option>

                        <option value="Completed">
                            Completed
                        </option>

                        <option value="Pending">
                            Pending
                        </option>

                        <option value="Failed">
                            Failed
                        </option>

                    </select>

                </div>

                {/* Start Date */}
                <div>

                    <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-400">
                        Start Date
                    </label>

                    <input
                        type="date"
                        value={filters.start_date}
                        onChange={(e) =>
                            onChange(
                                "start_date",
                                e.target.value
                            )
                        }
                        className="
                        w-full rounded-xl

                        border border-slate-200

                        bg-white

                        px-4 py-3

                        text-slate-700

                        transition-all

                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        focus:outline-none

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-200
                        dark:focus:ring-blue-900/30
                    "
                    />

                </div>

                {/* End Date */}
                <div>

                    <label className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-400">
                        End Date
                    </label>

                    <input
                        type="date"
                        value={filters.end_date}
                        onChange={(e) =>
                            onChange(
                                "end_date",
                                e.target.value
                            )
                        }
                        className="
                        w-full rounded-xl

                        border border-slate-200

                        bg-white

                        px-4 py-3

                        text-slate-700

                        transition-all

                        focus:border-blue-500
                        focus:ring-4
                        focus:ring-blue-100
                        focus:outline-none

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-200
                        dark:focus:ring-blue-900/30
                    "
                    />

                </div>

            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">

                <button
                    onClick={() => {
                        onChange("region", "");
                        onChange("category", "");
                        onChange("status", "");
                        onChange("start_date", "");
                        onChange("end_date", "");
                    }}
                    className="
                    rounded-xl

                    border border-slate-200

                    px-5 py-3

                    text-sm
                    font-medium

                    text-slate-700

                    transition-all

                    hover:bg-slate-50

                    dark:border-slate-700
                    dark:text-slate-300
                    dark:hover:bg-slate-800
                "
                >
                    Clear Filters
                </button>

            </div>

        </div>
    );

}
