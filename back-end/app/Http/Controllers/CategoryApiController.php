<?php

// UserApiController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DanhMuc;
use App\Http\Resources\CategoryResource;

class CategoryApiController extends Controller
{
    public function index()
    {
        // GET
        try {
            $categorys = DanhMuc::all();
            return response()->json([
                'status' => 'success',
                'message' => 'Dữ liệu được lấy thành công',
                'data' => CategoryResource::collection($categorys)
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 500);
        }
    }
    public function store(Request $request)
    {
        //POST 
        try {
            $validatedData = $request->validate([
                'name' => 'required',

                'email' => 'required|email|unique:users',
                'password' => 'required|min:6',
            ], [
                'name.required' => 'Vui lòng nhập tên',
                'email.required' => 'Vui lòng nhập email',
                'email.email' => 'Vui lòng nhập đúng định dạng email',
                'email.unique' => 'Email này đã có người đăng kí',
                'password.required' => 'Vui lòng nhập password',
                'password.min' => 'Vui lòng nhập password 6 kí tự trở lên'
            ]);
            $user = DanhMuc::Create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);
            return response()->json([
                'status' => 'success',
                'message' => 'Thêm thành công',
                'data' => new CategoryResource($user)
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 400);
        }
    }
    public function show($id)
    {
        //GET
        try {
            $category = DanhMuc::findOrFail($id);
            return response()->json([
                'status' => 'success',
                'message' => 'Lấy dữ liệu thành công',
                'data' => new CategoryResource($category)
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 400);
        }
    }

    public function update(Request $request, $id)
    {
        //PUT PATCH 
        try {
            $validatedData = $request->validate([
                'name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:6',
            ], [
                'name.required' => 'Vui lòng nhập tên',
                'email.required' => 'Vui lòng nhập email',
                'email.email' => 'Vui lòng nhập đúng định dạng email',
                'email.unique' => 'Email này đã có người đăng kí',
                'password.required' => 'Vui lòng nhập password',
                'password.min' => 'Vui lòng nhập password 6 kí tự trở lên'
            ]);
            $user = DanhMuc::findOrFail($id);
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);
            return response()->json([
                'status' => 'success',
                'message' => 'User updated successfully',
                'data' => new CategoryResource($user),
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 500);
        }
    }
    public function destroy($id)
    {
        //DELETE
        try {
            $category = DanhMuc::findOrFail($id);
            $category->delete();
            return response()->json([
                'status' => "success",
                'message' => 'Xóa thành công',

                'data' => null,
            ], 204);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 500);
        }
    }
}
