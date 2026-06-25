interface Props {
    value: string;
    onChange: (range: string) => void;
}

const ranges = [
    { label: "7 Days", value: "7d" },
    { label: "30 Days", value: "30d" },
    { label: "90 Days", value: "90d" },
    { label: "1 Year", value: "365d" },
];

export default function DateRangeFilter({
    value,
    onChange,
}: Props) {
    return (
        <div
            className="
                inline-flex items-center
                rounded-2xl

                border border-slate-200
                bg-white

                p-1
                shadow-sm

                dark:border-slate-800
                dark:bg-slate-900
            "
        >

            {ranges.map((range) => {

                const active =
                    value === range.value;

                return (
                    <button
                        key={range.value}
                        onClick={() =>
                            onChange(range.value)
                        }
                        className={`
                            rounded-xl
                            px-5 py-2.5

                            text-sm font-medium

                            transition-all duration-200

                            ${active
                                ? `
                                        bg-gradient-to-r
                                        from-blue-600
                                        to-indigo-600

                                        text-white
                                        shadow-md
                                      `
                                : `
                                        text-slate-600

                                        hover:bg-slate-100
                                        hover:text-slate-900

                                        dark:text-slate-400
                                        dark:hover:bg-slate-800
                                        dark:hover:text-white
                                      `
                            }
                        `}
                    >
                        {range.label}
                    </button>
                );
            })}

        </div>
    );
}