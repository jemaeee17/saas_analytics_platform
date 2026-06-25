import { api } from "../lib/api";

export const profileService = {

    updateProfile: async (
        formData: FormData
    ) => {

        const { data } =
            await api.post(
                "/profile?_method=PUT",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data",
                    },
                }
            );

        return data;
    },

    updatePassword: async (
        payload: {
            current_password: string;
            password: string;
            password_confirmation: string;
        }
    ) => {

        const { data } =
            await api.put(
                "/profile/password",
                payload
            );

        return data;
    },
};