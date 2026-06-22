import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-100">
            <Sidebar />

            <div className="ml-64 flex min-h-screen flex-col">
                <Header />

                <main className="flex-1 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}