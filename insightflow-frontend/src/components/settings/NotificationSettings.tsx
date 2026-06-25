export default function NotificationSettings() {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
            <h2 className="mb-2 text-xl font-semibold text-slate-100">
                Notifications
            </h2>

            <p className="mb-6 text-sm text-slate-400">
                Choose which notifications you'd like to receive.
            </p>

            <div className="space-y-4">
                <label className="flex items-center gap-3 text-slate-300">
                    <input
                        type="checkbox"
                        className="
                            h-4 w-4 rounded
                            border-slate-600
                            bg-slate-800
                            text-blue-600
                            focus:ring-blue-500/20
                        "
                    />
                    Weekly Reports
                </label>

                <label className="flex items-center gap-3 text-slate-300">
                    <input
                        type="checkbox"
                        className="
                            h-4 w-4 rounded
                            border-slate-600
                            bg-slate-800
                            text-blue-600
                            focus:ring-blue-500/20
                        "
                    />
                    Monthly Reports
                </label>

                <label className="flex items-center gap-3 text-slate-300">
                    <input
                        type="checkbox"
                        className="
                            h-4 w-4 rounded
                            border-slate-600
                            bg-slate-800
                            text-blue-600
                            focus:ring-blue-500/20
                        "
                    />
                    Event Alerts
                </label>
            </div>
        </div>
    );
}