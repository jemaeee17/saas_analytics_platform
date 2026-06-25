import { jsPDF } from "jspdf";
import { FileText } from "lucide-react";

interface Props {
    rows: any[];
}

export default function ExportPdfButton({
    rows,
}: Props) {

    const exportPdf = () => {

        if (!rows.length) return;

        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text(
            "Insightful Analytics Report",
            14,
            20
        );

        doc.setFontSize(10);
        doc.text(
            `Generated: ${new Date().toLocaleString()}`,
            14,
            28
        );

        let y = 45;

        Object.keys(rows[0]).forEach(
            (header, index) => {
                doc.setFont(
                    "helvetica",
                    "bold"
                );

                doc.text(
                    header,
                    14 + index * 40,
                    y
                );
            }
        );

        y += 10;

        rows.forEach((row) => {

            Object.values(row).forEach(
                (value, index) => {

                    doc.setFont(
                        "helvetica",
                        "normal"
                    );

                    doc.text(
                        String(value),
                        14 + index * 40,
                        y
                    );

                }
            );

            y += 10;

            if (y > 270) {
                doc.addPage();
                y = 20;
            }

        });

        doc.save(
            "analytics-report.pdf"
        );

    };

    return (
        <button
            onClick={exportPdf}
            className="
                flex items-center gap-2
                rounded-xl
                bg-red-600
                px-5 py-3
                font-medium
                text-white
                transition
                hover:bg-red-700
            "
        >
            <FileText size={18} />
            Export PDF
        </button>
    );
}