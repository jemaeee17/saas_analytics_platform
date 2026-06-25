import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { authService } from "../services/auth.service";

const AuthContext = createContext<any>(null);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token =
            localStorage.getItem("token");

        if (!token) {
            setLoading(false);
            return;
        }

        authService
            .me(token)
            .then(setUser)
            .catch(() => {
                localStorage.removeItem(
                    "token"
                );
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    const login = (
        token: string,
        user: any
    ) => {
        localStorage.setItem(
            "token",
            token
        );

        setUser(user);
    };

    const logout = async () => {

        const token =
            localStorage.getItem("token");

        if (token) {
            try {
                await authService.logout(
                    token
                );
            } catch { }
        }

        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login,
                logout,
                loading,
                isAuthenticated:
                    !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () =>
    useContext(AuthContext);