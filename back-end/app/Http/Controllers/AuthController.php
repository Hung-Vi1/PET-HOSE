<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'refresh']]);
    }



    public function login(Request $request)
    {
        // Validate input
        $credentials = Validator::make($request->all(), [
            'Email' => 'required|email',
            'Matkhau' => 'required|string',
        ]);
    
        if ($credentials->fails()) {
            return response()->json($credentials->errors(), 400);
        }
    
        // Lấy thông tin người dùng dựa trên email
        $user = User::where('Email', $request->Email)->first();
    
        // Kiểm tra mật khẩu
        $canlogin = false;
        if ($user) {
            $canlogin = Hash::check($request->Matkhau, $user->Matkhau);
        }
    
        if ($canlogin) {
            // Đăng nhập người dùng
            Auth::login($user);
    
            // Tạo JWT Token
            $token = JWTAuth::fromUser($user);
    
            // Tạo refresh token (nếu cần)
            $refreshToken = $this->createRefreshToken();
    
            // Trả về kết quả
            return response()->json([
                'message' => 'Đăng nhập thành công!',
                'user' => $user,
                'access_token' => $token,
                'refresh_token' => $refreshToken,
                'token_type' => 'bearer',
                'expires_in' => JWTAuth::factory()->getTTL() * 120, // Token TTL (thời gian sống)
            ], 201);
        } else {
            return response()->json([
                'message' => 'Email hoặc mật khẩu không đúng!',
            ], 400);
        }
    }
    



    public function me()
    {
        try {
            return response()->json(auth()->user());
        }catch (JWTexception $exception) {
            return response()->json(['error' => 'user không tồn tại'], 500);
        }
    }

    public function refresh()
    {
        $refreshToken = request('refresh_token');
        try {
            $decoded = JWTAuth::getJWTProvider()->decode($refreshToken);
            $user = User::find($decoded['user_id']);
            if(!$user){
                return response()->json(['error' => 'User không tồn tại'], 404);
            }
            JWTAuth::invalidate(JWTAuth::getToken());
            $token = auth()->login($user); // tạo token mới
            $refreshToken = $this->createRefreshToken();
            return $this->respondWithToken($token, $refreshToken);
        }catch (JWTexception $exception) {
            return response()->json(['error' => 'Token không tồn tại'], 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            // Lấy token từ header
            $token = JWTAuth::parseToken();
    
            // Vô hiệu hóa token
            JWTAuth::invalidate($token);
    
            return response()->json(['message' => 'Đăng xuất thành công!'], 200);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Token không hợp lệ hoặc đã hết hạn'], 401);
        }
    }
    



    private function respondWithToken($token, $refreshToken)
    {
        return response()->json([
            'access_token' => $token,
            'refresh_token' => $refreshToken,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
        ]);
    }

    private function createRefreshToken(){
        $data = [
            'user_id' => auth()->user()->Mataikhoan,
            'random' => rand() . time(),
            'exp' => time() + config('jwt.refresh_ttl')
        ];
        $refreshToken = JWTAuth::getJWTProvider()->encode($data);
        return $refreshToken;
    }
}
