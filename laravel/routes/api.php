<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ModerationController;

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

    // auth
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);

    // profile
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::put('/profile', [ProfileController::class, 'update']);

});


// ==========================
// 🛡 MODERATOR + ADMIN
// ==========================
Route::middleware(['auth:sanctum', 'role:admin,moderator'])->group(function () {

    // moderation
    Route::get('/moderation/requests', [ModerationController::class, 'requests']);
    Route::post('/moderation/requests/{id}/approve', [ModerationController::class, 'approve']);
    Route::post('/moderation/requests/{id}/reject', [ModerationController::class, 'reject']);

    // users list (для модерации/админа)
    Route::get('/users', [UserController::class, 'index']);
});


// ==========================
// 🔴 ADMIN ONLY
// ==========================
Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {

    // user roles management
    Route::patch('/users/{user}/role', [UserController::class, 'updateRole']);

    // tasks CRUD
    Route::post('/tasks', [TaskController::class, 'store']);
    Route::put('/tasks/{task}', [TaskController::class, 'update']);
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy']);

    // events CRUD
    Route::post('/events', [EventController::class, 'store']);
    Route::put('/events/{event}', [EventController::class, 'update']);
    Route::delete('/events/{event}', [EventController::class, 'destroy']);
});