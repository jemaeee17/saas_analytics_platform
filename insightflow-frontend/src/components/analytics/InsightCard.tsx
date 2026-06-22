interface Props {
    title: string;
    value: string | number;
    description: string;
}

export default function InsightCard({
    title,
    value,
    description,
}: Props) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-sm text-slate-500">
                {title}
            </h3>

            <p className="mt-2 text-3xl font-bold">
                {value}
            </p>

            <p className="mt-2 text-sm text-slate-500">
                {description}
            </p>
        </div>
    );
}