<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
/**
 * @OA\Info(
 *     title="API Documentation",
 *     version="1.0.0",
 *     description="API documentation for the application",
 * )
 */
class UserController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/dangnhap",
     *     summary="Đăng nhập tài khoản",
     *     tags={"Users"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"Email", "Matkhau"},
     *             @OA\Property(property="Email", type="string", format="email", example="truongminhthien222004@gmail.com"),
     *             @OA\Property(property="Matkhau", type="string", format="password", example="thien123"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="access_token", type="string", example="1|abc123456")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     )
     * )
     */
    public function dangnhap(Request $request)
    {
        // Validate input
        $credentials = $request->validate([
            'Email' => 'required|email',
            'Matkhau' => 'required|string',
        ]);
    
        // Đổi tên các trường cho phù hợp với Laravel (email và password)
        $credentials = [
            'email' => $credentials['Email'],
            'password' => $credentials['Matkhau'],
        ];
    
        // Kiểm tra thông tin đăng nhập
        // if (!Auth::attempt($credentials)) {
        //     return response()->json([
        //         'message' => 'The provided credentials are incorrect.'
        //     ], 401);
        // }

        if (Auth::attempt(['email' => 'truongminhthien222004@gmail.com', 'password' => '$2y$12$egUdE/iUZwPbPbNHCt72huk2QcPx38/3h9mCE0jHpLUwiRALUB0SW'])) {
            return response()->json([
                'message' => 'thanhcong.'
            ], 401);
        } else {
            return response()->json([
                'message' => 'that bai.'
            ], 401);
        }
        
    
        // Lấy người dùng sau khi đăng nhập thành công
        $user = Auth::user();
    
        // Tạo token cho người dùng
        $token = $user->createToken('auth_token')->plainTextToken;
    
        // Trả về token cho client
        return response()->json([
            'token_type' => 'Bearer',
            'access_token' => $token,
        ]);
    }




    /**
     * Thêm mới một người dùng
     * 
     * @OA\Post(
     *     path="/api/dangki",
     *     summary="Đăng kí tài khoản",
     *     tags={"Users"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"Hovaten", "Email", "Diachi", "SDT", "Matkhau",},
     *             @OA\Property(property="Hovaten", type="string", example="Trương Minh Thiện"),
     *             @OA\Property(property="Email", type="string", format="email", example="truongminhthien222004@gmail.com"),
     *             @OA\Property(property="Matkhau", type="string", format="password", example="thien123"),
     *             @OA\Property(property="SDT", type="string", example="0354895845"),
     *             @OA\Property(property="Diachi", type="string", example="294 -296 Đồng Đen - Quận Tân Bình - Hồ Chí Minh"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Người dùng đã đăng kí thành công tài khoản",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="User created successfully"),
     *             @OA\Property(property="user", type="object")
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Dữ liệu không hợp lệ"
     *     )
     * )
     */
    public function dangki(Request $request)
    {
        // Validate dữ liệu đầu vào
        $validator = Validator::make($request->all(), [
            'Hovaten' => 'required|string|max:255',
            'SDT' => 'required|string|max:255',
            'Diachi' => 'required|string|max:255',
            'Email' => 'required|string|email|max:255|unique:users',
            'Matkhau' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Tạo người dùng mới
        $user = User::create([
            'Hovaten' => $request->Hovaten,
            'SDT' => $request->SDT,
            'Email' => $request->Email,
            'Diachi' => $request->Diachi,
            'Quyen' => 0,
            'Matkhau' => bcrypt($request->Matkhau),
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ], 201);
    }



    /**
     * Xóa một người dùng
     * 
     * @OA\Delete(
     *     path="/api/users/{id}",
     *     summary="Xóa người dùng",
     *     tags={"Users"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *         description="ID của người dùng"
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Người dùng đã bị xóa",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="User deleted successfully")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy người dùng"
     *     )
     * )
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }



    /**
     * Cập nhật thông tin người dùng
     * 
     * @OA\Put(
     *     path="/api/users/{id}",
     *     summary="Cập nhật thông tin người dùng",
     *     tags={"Users"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer"),
     *         description="ID của người dùng"
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name", "email"},
     *             @OA\Property(property="name", type="string", example="Jane Doe"),
     *             @OA\Property(property="email", type="string", format="email", example="jane@example.com"),
     *             @OA\Property(property="password", type="string", format="password", example="password123", nullable=true)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Người dùng đã được cập nhật thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="User updated successfully"),
     *             @OA\Property(property="user", type="object")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Không tìm thấy người dùng"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Dữ liệu không hợp lệ"
     *     )
     * )
     */
    public function update(Request $request, $id)
    {
        // Kiểm tra người dùng có tồn tại không
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Validate dữ liệu đầu vào
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'password' => 'nullable|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Cập nhật thông tin người dùng
        $user->name = $request->name;
        $user->email = $request->email;

        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user
        ], 200);
    }
}
