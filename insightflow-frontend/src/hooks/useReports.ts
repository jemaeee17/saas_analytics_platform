import { useEffect, useState } from "react";
import { analyticsService } from "../services/analytics.service";
import type { OverviewData } from "../types/reports";

export const useReports = (range: string) => {
    const [loading, setLoading] = useState(true);

    const [overview, setOverview] =
        useState<OverviewData | null>(null);
    const [regions, setRegions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);

                const [
                    overviewData,
                    regionData,
                    categoryData,
                    trendData,
                ] = await Promise.all([
                    analyticsService.getOverview(range),
                    analyticsService.getRegions(range),
                    analyticsService.getCategories(range),
                    analyticsService.getTrends(range),
                ]);

                console.log("overview", overviewData);
                console.log("regions", regionData);
                console.log("categories", categoryData);
                console.log("trends", trendData);

                setOverview(overviewData);
                setRegions(regionData);
                setCategories(categoryData);
                setTrends(trendData);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();

    }, [range]);

    return {
        loading,
        overview,
        regions,
        categories,
        trends,
    };

};
