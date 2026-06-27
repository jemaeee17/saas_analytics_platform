import { api } from "../lib/api";

export const analyticsService = {
    getOverview: async (range: string) => {
        const { data } = await api.get("/analytics/overview", {
            params: { range },
        });
        return data;
    },

    getRegions: async (range: string) => {
        const { data } = await api.get("/analytics/regions", {
            params: { range },
        });
        return data;
    },

    getCategories: async (range: string) => {
        const { data } = await api.get("/analytics/categories", {
            params: { range },
        });
        return data;
    },

    getTrends: async (range: string) => {
        const { data } = await api.get("/analytics/events-over-time", {
            params: { range },
        });
        return data;
    },
};