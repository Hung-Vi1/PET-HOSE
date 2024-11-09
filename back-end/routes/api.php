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
// use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\UserController;

// Auth::routes(['reset' => true]);

Route::post('/dangnhap', [UserController::class, 'dangnhap']);
Route::post('/dangki', [UserController::class, 'dangki']);
Route::post('/guiemail', [UserController::class, 'GuiEmail']);

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
Route::post('/products/store', [ProductApiController::class, 'store']);
Route::get('/products/{MaSP}', [ProductApiController::class, 'show']);
Route::get('/products/sanPhamTheoDM/{MaDanhMuc}', [ProductApiController::class, 'sanPhamTheoDM']);
Route::put('/products/update/{MaSP}', [ProductApiController::class, 'update']);
Route::delete('/products/destroy/{MaSP}', [ProductApiController::class, 'destroy']);

use App\Http\Controllers\OrderApiController;
// Route để lấy danh sách đơn hàng
Route::get('/orders', [OrderApiController::class, 'index']);
Route::post('/orders', [OrderApiController::class, 'store']);
Route::get('/orders/{MaDH}', [OrderApiController::class, 'show']);
Route::put('/orders/{MaDH}', [OrderApiController::class, 'update']);
Route::delete('/orders/{MaDH}', [OrderApiController::class, 'destroy']);