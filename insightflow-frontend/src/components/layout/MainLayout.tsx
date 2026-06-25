import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div
            className="
            min-h-screen

            bg-slate-100

            dark:bg-slate-950
        "
        >
            <Sidebar />

            <div className="ml-72 flex min-h-screen flex-col">

                <Header />

                <main
                    className="
                    flex-1
                    p-8

                    bg-slate-100

                    dark:bg-slate-950
                "
                >
                    <Outlet />
                </main>

            </div>

        </div>
    );

}
