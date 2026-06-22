import type { Event } from "../../types/event";

interface Props {
    events: Event[];
}

export default function EventsTable({
    events,
}: Props) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold">
                Events
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3 text-left">
                                Event
                            </th>

                            <th className="p-3 text-left">
                                Date
                            </th>

                            <th className="p-3 text-left">
                                Region
                            </th>

                            <th className="p-3 text-left">
                                Category
                            </th>

                            <th className="p-3 text-left">
                                Status
                            </th>

                            <th className="p-3 text-left">
                                Value
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {events.map((event) => (
                            <tr
                                key={event.id}
                                className="border-b hover:bg-slate-50"
                            >
                                <td className="p-3">
                                    {event.event_name}
                                </td>

                                <td className="p-3">
                                    {new Date(
                                        event.event_date
                                    ).toLocaleDateString()}
                                </td>

                                <td className="p-3">
                                    {event.region}
                                </td>

                                <td className="p-3">
                                    {event.category}
                                </td>

                                <td className="p-3">
                                    {event.status}
                                </td>

                                <td className="p-3">
                                    $
                                    {Number(event.value).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}