<?php

use App\Http\Controllers\Api\MenuItemController;
use App\Http\Controllers\Api\ReviewController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Menu Items
Route::get('/api/menu-items', [MenuItemController::class, 'index']);

// Reviews
Route::get('/api/menu-items/{menuItem}/reviews', [ReviewController::class, 'index']);
Route::post('/api/reviews', [ReviewController::class, 'store']);
