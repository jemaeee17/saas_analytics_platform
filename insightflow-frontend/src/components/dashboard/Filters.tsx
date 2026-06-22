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
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-lg font-semibold">
                Filters
            </h2>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">

                <select
                    value={filters.region}
                    onChange={(e) =>
                        onChange(
                            "region",
                            e.target.value
                        )
                    }
                    className="rounded-lg border p-3"
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

                <select
                    value={filters.category}
                    onChange={(e) =>
                        onChange(
                            "category",
                            e.target.value
                        )
                    }
                    className="rounded-lg border p-3"
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

                <select
                    value={filters.status}
                    onChange={(e) =>
                        onChange(
                            "status",
                            e.target.value
                        )
                    }
                    className="rounded-lg border p-3"
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

                <input
                    type="date"
                    value={filters.start_date}
                    onChange={(e) =>
                        onChange(
                            "start_date",
                            e.target.value
                        )
                    }
                    className="rounded-lg border p-3"
                />

                <input
                    type="date"
                    value={filters.end_date}
                    onChange={(e) =>
                        onChange(
                            "end_date",
                            e.target.value
                        )
                    }
                    className="rounded-lg border p-3"
                />

            </div>
            
            <div className="mt-4 flex justify-end">
                <button
                    onClick={() => {
                        onChange("region", "");
                        onChange("category", "");
                        onChange("status", "");
                        onChange("start_date", "");
                        onChange("end_date", "");
                    }}
                    className="rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
                >
                    Clear Filters
                </button>
            </div>

        </div>
    );
}