import { useState } from "react";

import ProfileSettings from
    "../components/settings/ProfileSettings";

import AppearanceSettings from
    "../components/settings/AppearanceSettings";

import NotificationSettings from
    "../components/settings/NotificationSettings";

import ApiSettings from
    "../components/settings/ApiSettings";

export default function Settings() {

    const [tab, setTab] =
        useState("profile");

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold text-slate-100">
                Settings
            </h1>

            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-3">
                    <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-lg">

                        <button
                            onClick={() =>
                                setTab("profile")
                            }
                            className="block w-full rounded-lg px-3 py-2 text-left text-slate-300 transition hover:bg-slate-800 hover:text-slate-100"
                        >
                            Profile
                        </button>

                        <button
                            onClick={() =>
                                setTab("appearance")
                            }
                            className="block w-full rounded-lg px-3 py-2 text-left text-slate-300 transition hover:bg-slate-800 hover:text-slate-100"
                        >
                            Appearance
                        </button>

                        <button
                            onClick={() =>
                                setTab("notifications")
                            }
                            className="block w-full rounded-lg px-3 py-2 text-left text-slate-300 transition hover:bg-slate-800 hover:text-slate-100"
                        >
                            Notifications
                        </button>

                        <button
                            onClick={() =>
                                setTab("api")
                            }
                            className="block w-full rounded-lg px-3 py-2 text-left text-slate-300 transition hover:bg-slate-800 hover:text-slate-100"
                        >
                            API Access
                        </button>

                    </div>
                </div>

                <div className="col-span-9">

                    {tab === "profile" &&
                        <ProfileSettings />}

                    {tab === "appearance" &&
                        <AppearanceSettings />}

                    {tab === "notifications" &&
                        <NotificationSettings />}

                    {tab === "api" &&
                        <ApiSettings />}

                </div>

            </div>

        </div>
    );
}