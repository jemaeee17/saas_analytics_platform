<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class AnalyticsController extends Controller
{
    public function overview()
    {
        $totalEvents = Event::count();

        $successRate = (
            Event::where('status', 'Completed')->count()
            / max($totalEvents, 1)
        ) * 100;

        $averageValue = Event::avg('value');

        $topRegion = Event::selectRaw('region, COUNT(*) as total')
            ->groupBy('region')
            ->orderByDesc('total')
            ->first();

        return response()->json([
            'total_events' => $totalEvents,
            'success_rate' => round($successRate, 2),
            'average_value' => round($averageValue, 2),
            'top_region' => $topRegion?->region,
        ]);
    }

    public function eventsOverTime()
    {
        return response()->json(
            Event::selectRaw(
                'DATE(event_date) as date, COUNT(*) as count'
            )
                ->groupBy('date')
                ->orderBy('date')
                ->get()
        );
    }

    public function regions()
    {
        return response()->json(
            Event::selectRaw(
                'region, COUNT(*) as count'
            )
                ->groupBy('region')
                ->orderByDesc('count')
                ->get()
        );
    }

    public function categories()
    {
        return response()->json(
            Event::selectRaw(
                'category, COUNT(*) as count'
            )
                ->groupBy('category')
                ->orderByDesc('count')
                ->get()
        );
    }

    public function filters()
    {
        return response()->json([
            'regions' => Event::distinct()
                ->pluck('region'),

            'categories' => Event::distinct()
                ->pluck('category'),

            'statuses' => Event::distinct()
                ->pluck('status'),
        ]);
    }

    public function events(Request $request)
    {
        $query = Event::query();

        if ($request->filled('region')) {
            $query->where('region', $request->region);
        }

        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if (
            $request->filled('start_date') &&
            $request->filled('end_date')
        ) {
            $query->whereBetween(
                'event_date',
                [
                    $request->start_date,
                    $request->end_date
                ]
            );
        }

        return response()->json(
            $query->latest('event_date')
                ->paginate(25)
        );
    }
}
