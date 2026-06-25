interface Props {
    rows: any[];
}

export default function ExportCsvButton({
    rows,
}: Props) {
    const exportCsv = () => {
        if (!rows.length) return;

        const csv = [
            Object.keys(rows[0]).join(","),
            ...rows.map((r) =>
                Object.values(r).join(",")
            ),
        ].join("\n");

        const blob = new Blob([csv], {
            type: "text/csv",
        });

        const url =
            window.URL.createObjectURL(blob);

        const a =
            document.createElement("a");

        a.href = url;
        a.download = "analytics-report.csv";
        a.click();
    };

    return (
        <button
            onClick={exportCsv}
            className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
            Export CSV
        </button>
    );
}