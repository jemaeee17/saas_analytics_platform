export default function ApiSettings() {
    return (
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-slate-100">
                API Access
            </h2>

            <div className="
                rounded-lg
                border border-slate-800
                bg-slate-900
                p-4
                font-mono
                text-slate-300
            ">
                ***************
            </div>

            <button
                className="
                    mt-4
                    rounded-lg
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    px-4
                    py-2
                    font-medium
                    text-white
                    shadow-lg
                    transition
                    hover:from-blue-500
                    hover:to-indigo-500
                "
            >
                Generate New Key
            </button>
        </div>
    );
}