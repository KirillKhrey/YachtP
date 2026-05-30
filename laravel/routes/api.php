<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// ==========================
// 🔧 TEST
// ==========================
Route::get('/test', function () {
    return response()->json([
        'status' => 'ok',
        'message' => 'API работает'
    ]);
});

// ==========================
// 🔐 AUTH (public)
// ==========================
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

// ==========================
// 👤 AUTHENTICATED USERS
// ==========================
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
});