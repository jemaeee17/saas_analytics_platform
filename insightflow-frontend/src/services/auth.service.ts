import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        Accept: "application/json",
    },
});

export const authService = {

    async login(email: string, password: string) {
        const { data } = await api.post("/login", {
            email,
            password,
        });

        return data;
    },

    async register(
        name: string,
        email: string,
        password: string
    ) {
        const { data } = await api.post("/register", {
            name,
            email,
            password,
        });

        return data;
    },

    async me(token: string) {
        const { data } = await api.get("/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    },

    async logout(token: string) {
        const { data } = await api.post(
            "/logout",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return data;
    },
};