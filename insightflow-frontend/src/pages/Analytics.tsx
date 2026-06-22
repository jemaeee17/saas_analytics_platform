import { useEffect, useState } from "react";

import { api } from "../lib/api";

import KpiCard from "../components/dashboard/KpiCard";

import TrendAnalysisChart from "../components/analytics/TrendAnalysisChart";
import RegionPerformanceTable from "../components/analytics/RegionPerformanceTable";
import CategoryPerformanceTable from "../components/analytics/CategoryPerformanceTable";

import type { OverviewData } from "../types/analytics";

export default function Analytics() {
  const [overview, setOverview] =
    useState<OverviewData | null>(null);

  const [regions, setRegions] =
    useState([]);

  const [categories, setCategories] =
    useState([]);

  const [trendData, setTrendData] =
    useState([]);

  useEffect(() => {
    api.get("/analytics/overview")
      .then((res) => {
        setOverview(res.data);
      });

    api.get("/analytics/regions")
      .then((res) => {
        setRegions(res.data);
      });

    api.get("/analytics/categories")
      .then((res) => {
        setCategories(res.data);
      });

    api.get("/analytics/events-over-time")
      .then((res) => {
        setTrendData(res.data);
      })
      .catch(console.error);
  }, []);

  if (!overview) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="text-slate-500">
          Detailed performance insights
        </p>
      </div>

      {/* Insights Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <KpiCard
          title="Total Events"
          value={overview.total_events}
        />

        <KpiCard
          title="Success Rate"
          value={`${overview.success_rate}%`}
        />

        <KpiCard
          title="Average Value"
          value={`$${overview.average_value}`}
        />

        <KpiCard
          title="Top Region"
          value={overview.top_region}
        />

      </div>

      {/* Trend Analysis */}
      <TrendAnalysisChart
        data={trendData}
      />

      {/* Performance Tables */}
      <div className="grid gap-6 lg:grid-cols-2">

        <RegionPerformanceTable
          data={regions}
        />

        <CategoryPerformanceTable
          data={categories}
        />

      </div>

    </div>
  );

}