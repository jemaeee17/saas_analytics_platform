import { useState } from "react";
import { useReports } from "../hooks/useReports";

import DateRangeFilter from "../components/reports/DateRangeFilter";
import ReportHeader from "../components/reports/ReportHeader";
import ExecutiveSummary from "../components/reports/ExecutiveSummary";
import RegionTable from "../components/reports/RegionTable";
import CategoryTable from "../components/reports/CategoryTable";
import TrendChart from "../components/reports/TrendChart";
import InsightsPanel from "../components/reports/InsightsPanel";
import ExportCsvButton from "../components/reports/ExportCsvButton";
import ExportPdfButton
    from "../components/reports/ExportPdfButton";

export default function Reports() {
    const [range, setRange] = useState("30d");

    const {
        loading,
        overview,
        regions,
        categories,
        trends,
    } = useReports(range);

    if (loading || !overview) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <div
                    className="
                    h-10 w-10
                    animate-spin
                    rounded-full
                    border-4
                    border-blue-600
                    border-t-transparent
                "
                />
            </div>
        );
    }

    const pdfData = [
        {
            metric: "Total Events",
            value: overview.total_events,
        },
        {
            metric: "Success Rate",
            value: `${overview.success_rate}%`,
        },
        {
            metric: "Top Region",
            value: overview.top_region,
        },
        {
            metric: "Average Value",
            value: `$${overview.average_value}`,
        },
    ];

    return (
        <div
            className="
            min-h-screen
            space-y-6
            bg-slate-50
            p-6

            dark:bg-slate-950
        "
        >

            <div className="flex flex-col gap-2">

                <p
                    className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider

                    text-slate-500

                    dark:text-slate-400
                "
                >
                    Time Range
                </p>

                <DateRangeFilter
                    value={range}
                    onChange={setRange}
                />

            </div>

            <ReportHeader range={range} />

            <ExecutiveSummary overview={overview} />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                <RegionTable data={regions} />

                <CategoryTable data={categories} />

            </div>

            <TrendChart data={trends} />

            <InsightsPanel overview={overview} />

            <div className="flex gap-3">

                <ExportCsvButton
                    rows={regions}
                />

                <ExportPdfButton
                    rows={pdfData}
                />

            </div>

        </div>
    );
}