export interface User {
    id: number;
    name: string;
    email: string;
    profile_photo?: string | null;
}

export interface AuthResponse {
    message: string;
    user: User;
    token: string;
}