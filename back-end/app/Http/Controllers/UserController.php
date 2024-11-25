<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Mail\SendEmail;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\UserResource;

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
        $credentials = Validator::make($request->all(), [
            'Email' => 'required|email',
            'Matkhau' => 'required|string',
        ]);

        if ($credentials->fails()) {
            return response()->json($credentials->errors(), 400);
        }

        $user = User::where('Email', $request->Email)->first();

        $canlogin = false;
        if ($user) {
            $canlogin = Hash::check($request->Matkhau, $user->Matkhau);
        }
        if ($canlogin) {
            Auth::login($user);
            return response()->json([
                'message' => 'Đăng nhập thành công!',
                'user' => Auth::user()
            ], 201);
        } else {
            return response()->json([
                'message' => 'Email hoặc mật khẩu không đúng!',
                'user' => $user,
            ], 400);
        }
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
            'Matkhau' => Hash::make($request->Matkhau),
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ], 201);
    }

    /**
     * Thêm mới một người dùng
     * 
     * @OA\Post(
     *     path="/api/guiemail",
     *     summary="Gữi email cấp lại mật khẩu",
     *     tags={"Users"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"Email" },
     *             @OA\Property(property="Email", type="string", format="email", example="truongminhthien222004@gmail.com"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Gữi email đặt lại mật khẩu thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Gữi email đặt lại mật khẩu thành công"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Dữ liệu không hợp lệ"
     *     )
     * )
     */
    public function GuiEmail(Request $request)
    {
        $request->validate([
            'Email' => 'required|email|max:255',
        ], [
            'Email.required' => 'Email là bắt buộc.',
            'Email.email' => 'Email không đúng định dạng.',
            'Email.max' => 'Email không được vượt quá :max ký tự.',
        ]);

        $user = User::where('Email', $request->Email)->first();
        if (!$user) {
            return response()->json([
                'message' => 'Email không phải email đăng ký tài khoản của bạn!',
            ], 400);
        } else {
            $token = \Str::random(40);
            $user->update(['remember_token' => $token]);
            if ($user->wasChanged('remember_token')) {
                $subject = 'Đặt lại mật khẩu của bạn';
                Mail::to($user->Email)->send(new SendEmail($subject, ['name' => $user->Hovaten]));
                return response()->json([
                    'message' => 'Email hoặc mật khẩu không đúng!',
                    'user' => $user,
                    'token' => $token
                ], 200);
            }
        }
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
     *             required={"ThuCung", "Hovaten", "Email", "DiaChi", "SDT", "Matkhau",},
     *             @OA\Property(property="Hovaten", type="string", example="Trương Minh Thiện"),
     *             @OA\Property(property="Email", type="string", format="email", example="truongminhthien222004@gmail.com"),
     *             @OA\Property(property="ThuCung", type="string", example="Chó"),
     *             @OA\Property(property="SDT", type="string", example="0354895845"),
     *             @OA\Property(property="DiaChi", type="string", example="294 -296 Đồng Đen - Quận Tân Bình - Hồ Chí Minh"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Người dùng đã được cập nhật thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Cập nhật thành công"),
     *             @OA\Property(property="status", type="boolean", example=true),
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
            'Hovaten' => 'required|string|max:255',
            'ThuCung' => 'required|string|max:255',
            'SDT' => 'required|string|max:255',
            'DiaChi' => 'required|string|max:255',
            'Email' => 'required|string|email|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        } else {
            // Cập nhật thông tin người dùng
        $user->Hovaten = $request->Hovaten;
        $user->SDT = $request->SDT;
        $user->DiaChi = $request->DiaChi;
        $user->Email = $request->Email;
        $user->ThuCung = $request->ThuCung;

        $user->save();

        return response()->json([
            'message' => 'Cập nhật tài khoản thành công!',
            'status' => true,
            'user' => $user
        ], 200);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/users/show/{Mataikhoan}",
     *     tags={"Users"},
     *     summary="Lấy thông tin tài khoản",
     *     description="Trả về thông tin chi tiết của một danh mục cụ thể.",
     *     @OA\Parameter(
     *         name="Mataikhoan",
     *         in="path",
     *         required=true,
     *         description="ID user cần lấy",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lấy dữ liệu thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Lấy dữ liệu thành công"),
     *          
     *         )
     *     ),
     *     @OA\Response(response=400, description="Lỗi khi lấy dữ liệu"),
     *     @OA\Response(response=404, description="Danh mục không tìm thấy")
     * )
     */

    public function show($Mataikhoan)
    {
        //GET
        try {
            $user = User::findOrFail($Mataikhoan);
            return response()->json([
                'status' => 'success',
                'message' => 'Lấy dữ liệu thành công',
                'data' => new UserResource($user)
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 400);
        }
    }
}
