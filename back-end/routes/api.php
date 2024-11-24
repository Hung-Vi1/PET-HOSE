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
Route::get('/users/show/{Mataikhoan}', [UserController::class, 'show']); 

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
Route::get('/products/locSanPhamTheoGia', [ProductApiController::class, 'locSanPhamTheoGia']);
Route::put('/products/update/{MaSP}', [ProductApiController::class, 'update']);
Route::delete('/products/destroy/{MaSP}', [ProductApiController::class, 'destroy']);

use App\Http\Controllers\ServiceApiController;
Route::get('/services', [ServiceApiController::class, 'index']);
Route::post('/services/store', [ServiceApiController::class, 'store']);
Route::get('/services/{MaSP}', [ServiceApiController::class, 'show']);
Route::put('/services/update/{MaSP}', [ServiceApiController::class, 'update']);
Route::delete('/services/destroy/{MaSP}', [ServiceApiController::class, 'destroy']);

use App\Http\Controllers\OrderApiController;
// Route để lấy danh sách đơn hàng
Route::get('/orders', [OrderApiController::class, 'index']);
Route::get('/orders/{Mataikhoan}', [OrderApiController::class, 'orders']);
Route::post('/orders', [OrderApiController::class, 'store']);
Route::get('/orderDetails/{MaDH}', [OrderApiController::class, 'show']);
Route::put('/orders/{MaDH}', [OrderApiController::class, 'update']);
Route::delete('/orders/{MaDH}', [OrderApiController::class, 'destroy']);
Route::post('/order/VnPay', [OrderApiController::class, 'vnpay_payment']);

use App\Http\Controllers\ServiceOrderApiController;
Route::get('/orderServices', [ServiceOrderApiController::class, 'index']);
Route::get('/orderServices/{Mataikhoan}', [ServiceOrderApiController::class, 'orders']);
Route::post('/orderServices', [ServiceOrderApiController::class, 'store']);
Route::get('/orderDetailServices/{MaDH}', [ServiceOrderApiController::class, 'show']);
Route::delete('/orderDetailServices/{MaDH}', [ServiceOrderApiController::class, 'destroy']);

use App\Http\Controllers\CatagoryNewsApiController;
Route::get('/catagorysNews', [CatagoryNewsApiController::class, 'index']);
Route::post('/catagorysNews/store', [CatagoryNewsApiController::class, 'store']);
Route::get('/catagorysNews/{MaDMBV}', [CatagoryNewsApiController::class, 'show']);
Route::put('/catagorysNews/update/{MaDMBV}', [CatagoryNewsApiController::class, 'update']);
Route::delete('/catagorysNews/destroy/{MaDMBV}', [CatagoryNewsApiController::class, 'destroy']);

use App\Http\Controllers\NewsApiController;
Route::get('/News', [NewsApiController::class, 'index']);
Route::get('/News/{id}', [NewsApiController::class, 'show']);
Route::post('/News/store', [NewsApiController::class, 'store']);
Route::put('/News/{id}', [NewsApiController::class, 'update']);
Route::delete('/News/{id}', [NewsApiController::class, 'destroy']);

use App\Http\Controllers\ContactApiController;
Route::get('/contacts', [ContactApiController::class, 'index']);
Route::get('/contacts/{MaLienHe}', [ContactApiController::class, 'show']);
Route::post('/contacts/store', [ContactApiController::class, 'store']);
Route::put('/contacts/update/{MaLienHe}', [ContactApiController::class, 'update']);
Route::delete('/contacts/destroy/{MaLienHe}', [ContactApiController::class, 'destroy']);

use App\Http\Controllers\CouponController;
Route::post('/coupons/validate', [CouponController::class, 'validateCoupon']);
Route::post('/coupons/apply', [CouponController::class, 'applyCoupon']);

use App\Http\Controllers\VnpayApiController;
Route::post('/Store/VnPay', [VnpayApiController::class, 'VNPAY']);
Route::get('/vnpay/callback', [VnpayApiController::class, 'callback'])->name('vnpay.callback');



