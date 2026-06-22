<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\AnalyticsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/health', function () {
    return response()->json(['status' => 'ok', 'message' => 'Insightful API is running!']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

/*Route::middleware('auth:sanctum')->prefix('analytics')->group(function () {
    Route::get('/overview', [AnalyticsController::class, 'overview']);

    Route::get(
        '/events-over-time',
        [AnalyticsController::class, 'eventsOverTime']
    );

    Route::get(
        '/regions',
        [AnalyticsController::class, 'regions']
    );

    Route::get(
        '/categories',
        [AnalyticsController::class, 'categories']
    );

    Route::get(
        '/filters',
        [AnalyticsController::class, 'filters']
    );

    Route::get(
        '/events',
        [AnalyticsController::class, 'events']
    );
});*/

Route::prefix('analytics')->group(function () {

    Route::get('/overview', [AnalyticsController::class, 'overview']);
    Route::get('/events-over-time', [AnalyticsController::class, 'eventsOverTime']);
    Route::get('/regions', [AnalyticsController::class, 'regions']);
    Route::get('/categories', [AnalyticsController::class, 'categories']);
    Route::get('/filters', [AnalyticsController::class, 'filters']);
    Route::get('/events', [AnalyticsController::class, 'events']);

});
