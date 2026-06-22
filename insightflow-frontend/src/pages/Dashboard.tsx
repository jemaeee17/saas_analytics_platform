import { useEffect, useState } from "react";

import KpiCard from "../components/dashboard/KpiCard";
import EventsOverTimeChart from
    "../components/charts/EventsOverTimeChart";
import RegionBarChart from
    "../components/charts/RegionBarChart";
import CategoryPieChart from
    "../components/charts/CategoryPieChart";
import Filters from
    "../components/dashboard/Filters";
import EventsTable from
    "../components/dashboard/EventsTable";

import { api } from "../lib/api";

import type { OverviewData } from "../types/analytics";

export default function Dashboard() {
    const [overview, setOverview] =
        useState<OverviewData | null>(null);
    const [eventsOverTime, setEventsOverTime] =
        useState([]);
    const [regions, setRegions] = useState([]);
    const [categories, setCategories] =
        useState([]);
    const [filters, setFilters] =
        useState({
            region: "",
            category: "",
            status: "",
            start_date: "",
            end_date: "",
        });
    const [events, setEvents] = useState([]);

    useEffect(() => {
        api.get("/analytics/overview")
            .then((res) => {
                setOverview(res.data);
            })
        api.get("/analytics/events-over-time")
            .then((res) => {
                setEventsOverTime(res.data);
            })
        api.get("/analytics/regions")
            .then((res) => {
                setRegions(res.data);
            })
        api.get("/analytics/categories")
            .then((res) => {
                setCategories(res.data);
            })
            .catch(console.error);
    }, []);

    const handleFilterChange = (
        name: string,
        value: string
    ) => {
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const fetchEvents = () => {
        api.get("/analytics/events", {
            params: filters,
        })
            .then((res) => {
                setEvents(res.data.data);
            })
            .catch(console.error);
    };

    useEffect(() => {
        fetchEvents();
    }, [filters]);

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
                    Dashboard
                </h1>

                <p className="text-slate-500">
                    Analytics Overview
                </p>
            </div>

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

            <EventsOverTimeChart
                data={eventsOverTime}
            />

            <div className="grid gap-6 lg:grid-cols-2">
                <RegionBarChart
                    data={regions}
                />

                <CategoryPieChart
                    data={categories}
                />
            </div>

            <Filters
                filters={filters}
                onChange={handleFilterChange}
            />

            <EventsTable
                events={events}
            />

        </div>
    );
}