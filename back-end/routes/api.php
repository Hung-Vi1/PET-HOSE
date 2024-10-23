<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


use App\Http\Controllers\UserController;
Route::post('/dangnhap', [UserController::class, 'dangnhap']);
Route::post('/dangki', [UserController::class, 'dangki']); 
Route::delete('/users/{id}', [UserController::class, 'destroy']);
Route::put('/users/{id}', [UserController::class, 'update']); 

use App\Http\Controllers\CategoryApiController;
Route::get('/category', [CategoryApiController::class, 'index']);
Route::get('/category/{MaDanhMuc}', [CategoryApiController::class, 'show']);
Route::post('/category/store', [CategoryApiController::class, 'store']);
Route::put('/category/update/{MaDanhMuc}', [CategoryApiController::class, 'update']);
Route::delete('/category/destroy/{MaDanhMuc}', [CategoryApiController::class, 'destroy']);


use App\Http\Controllers\ProductApiController;
Route::get('/products', [ProductApiController::class, 'index']);