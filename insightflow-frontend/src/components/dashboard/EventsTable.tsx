import type { Event } from "../../types/event";

interface Props {
    events: Event[];
}

const statusStyles = {
    Completed:
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",


    Pending:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",

    Failed:
        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",

};

export default function EventsTable({
    events,
}: Props) {
    return (
        <div
            className="
rounded-2xl
border border-slate-200
            bg-white

            p-6

            shadow-sm

            dark:border-slate-800
            dark:bg-slate-900
        "
        >

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2
                        className="
                        text-lg
                        font-semibold

                        text-slate-900

                        dark:text-white
                    "
                    >
                        Events
                    </h2>

                    <p
                        className="
                        text-sm
                        text-slate-500

                        dark:text-slate-400
                    "
                    >
                        Recent analytics activity
                    </p>

                </div>

                <div
                    className="
                    rounded-xl

                    bg-blue-50
                    px-3 py-1

                    text-sm
                    font-medium

                    text-blue-600

                    dark:bg-blue-950/40
                    dark:text-blue-400
                "
                >
                    {events.length} Events
                </div>

            </div>

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead>

                        <tr
                            className="
                            border-b
                            border-slate-200

                            dark:border-slate-800
                        "
                        >

                            <th className="pb-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Event
                            </th>

                            <th className="pb-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Date
                            </th>

                            <th className="pb-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Region
                            </th>

                            <th className="pb-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Category
                            </th>

                            <th className="pb-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Status
                            </th>

                            <th className="pb-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Value
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {events.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={6}
                                    className="
                                    py-12
                                    text-center

                                    text-slate-500

                                    dark:text-slate-400
                                "
                                >
                                    No events found.
                                </td>

                            </tr>

                        ) : (

                            events.map((event) => (

                                <tr
                                    key={event.id}
                                    className="
                                    border-b
                                    border-slate-100

                                    transition

                                    hover:bg-slate-50

                                    dark:border-slate-800
                                    dark:hover:bg-slate-800/50
                                "
                                >

                                    <td className="py-4">

                                        <div
                                            className="
                                            font-medium
                                            text-slate-900

                                            dark:text-white
                                        "
                                        >
                                            {event.event_name}
                                        </div>

                                    </td>

                                    <td className="py-4 text-slate-600 dark:text-slate-400">
                                        {new Date(
                                            event.event_date
                                        ).toLocaleDateString()}
                                    </td>

                                    <td className="py-4 text-slate-600 dark:text-slate-400">
                                        {event.region}
                                    </td>

                                    <td className="py-4 text-slate-600 dark:text-slate-400">
                                        {event.category}
                                    </td>

                                    <td className="py-4">

                                        <span
                                            className={`
                                            inline-flex
                                            items-center

                                            rounded-full

                                            px-3 py-1

                                            text-xs
                                            font-semibold

                                            ${statusStyles[
                                                event.status as keyof typeof statusStyles
                                                ] ??
                                                "bg-slate-100 text-slate-600"
                                                }
                                        `}
                                        >
                                            {event.status}
                                        </span>

                                    </td>

                                    <td
                                        className="
                                        py-4

                                        font-semibold

                                        text-slate-900

                                        dark:text-white
                                    "
                                    >
                                        $
                                        {Number(
                                            event.value
                                        ).toLocaleString()}
                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );

}
