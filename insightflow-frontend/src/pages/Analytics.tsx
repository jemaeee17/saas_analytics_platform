import { useEffect, useState } from "react";

import { api } from "../lib/api";
import {
  Globe,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";

import InsightCard from "../components/analytics/InsightCard";

import KpiCard from "../components/dashboard/KpiCard";

import TrendAnalysisChart from "../components/analytics/TrendAnalysisChart";
import RegionPerformanceTable from "../components/analytics/RegionPerformanceTable";
import CategoryPerformanceTable from "../components/analytics/CategoryPerformanceTable";

import type { OverviewData } from "../types/analytics";

type CategoryData = {
  category: string;
  count: number;
};

export default function Analytics() {
  const [overview, setOverview] =
    useState<OverviewData | null>(null);

  const [regions, setRegions] =
    useState([]);

  const [categories, setCategories] =
    useState<CategoryData[]>([]);

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

  return (
    <div className="space-y-8">

      <div>
        <h1
          className="
            text-3xl
            font-bold

            text-slate-900

            dark:text-white
        "
        >
          Analytics
        </h1>

        <p
          className="
            text-slate-500

            dark:text-slate-400
        "
        >
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

      {/* Insight Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <InsightCard
          title="Top Region"
          value={overview.top_region}
          description="Region generating the highest event volume."
          icon={<Globe size={22} />}
        />

        <InsightCard
          title="Top Category"
          value={categories[0]?.category ?? "N/A"}
          description="Most active category this period."
          icon={<BarChart3 size={22} />}
        />

        <InsightCard
          title="Success Trend"
          value="+4.2%"
          description="Success rate improved compared to last month."
          icon={<TrendingUp size={22} />}
        />

        <InsightCard
          title="Performance"
          value="Strong"
          description="Overall analytics performance remains healthy."
          icon={<Target size={22} />}
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