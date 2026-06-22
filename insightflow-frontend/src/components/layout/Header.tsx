export default function Header() {
    return (
        <header className="flex items-center justify-between bg-white border-b px-8 py-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">
                    Dashboard
                </h1>

                <p className="text-sm text-slate-500">
                    SaaS Analytics Overview
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="font-medium">
                        John Doe
                    </p>

                    <p className="text-sm text-slate-500">
                        Admin
                    </p>
                </div>
            </div>
        </header>
    );
}