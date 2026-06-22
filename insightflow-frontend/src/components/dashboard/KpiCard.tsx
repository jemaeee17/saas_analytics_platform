interface KpiCardProps {
    title: string;
    value: string | number;
}

export default function KpiCard({
    title,
    value,
}: KpiCardProps) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-500">
                {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-800">
                {value}
            </h2>
        </div>
    );
}