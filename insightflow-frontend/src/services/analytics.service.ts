import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/analytics",
    headers: {
        Accept: "application/json",
    },
});

export const analyticsService = {
    getOverview: async (range: string) => {
        const { data } = await api.get("/overview", {
            params: { range },
        });

        return data;

    },

    getRegions: async (range: string) => {
        const { data } = await api.get("/regions", {
            params: { range },
        });

        return data;
    },

    getCategories: async (range: string) => {
        const { data } = await api.get("/categories", {
            params: { range },
        });

        return data;

    },

    getTrends: async (range: string) => {
        const { data } = await api.get("/events-over-time", {
            params: { range },
        });

        return data;


    },
};
