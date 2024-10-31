<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use OpenApi\Annotations as OA;
use App\Models\DonHang;
use App\Models\ChiTietDonHang;
use App\Models\User;
use App\Http\Resources\OrderResource;
use App\Http\Resources\OrderDetailResource;
use App\Models\SanPham;




/**
 * @OA\Schema(
 *     schema="OrderResource",
 *     type="object",
 *     @OA\Property(property="MaDonHang", type="integer", example=1),
 *     @OA\Property(property="MaTaiKhoan", type="integer", example=1),
 *     @OA\Property(property="TongTien", type="integer", example=500000),
 *     @OA\Property(property="SoLuong", type="integer", example=1),
 *     @OA\Property(property="Ten", type="string", example="Nguyễn Văn A"),
 *     @OA\Property(property="SDT", type="string", example="0123456789"),
 *     @OA\Property(property="DiaChi", type="string", example="123 Đường ABC, Quận 1, TP.HCM"),
 *     @OA\Property(property="PTTT", type="string", example="Chuyển khoản"),
 *     @OA\Property(property="GhiChu", type="string", example="Ghi chú đơn hàng 1"),
 *     @OA\Property(property="NgayDat", type="string", format="date-time", example="2024-10-29T17:09:04Z"),
 *     @OA\Property(property="NgayGiao", type="string", format="date-time", example="2024-11-01T17:09:04Z"),
 *     @OA\Property(property="TrangThai", type="string", example="Đang xử lý"),
 *     @OA\Property(property="created_at", type="string", format="date-time", example="2024-10-29T17:09:04Z"),
 *     @OA\Property(property="updated_at", type="string", format="date-time", example="2024-10-29T17:09:04Z")
 * )
 */




class OrderApiController extends Controller
{
   

    /**
     * @OA\Get(
     *     path="/api/orders",
     *     tags={"DonHang"},
     *     summary="Lấy danh sách đơn hàng",
     *     description="Trả về danh sách tất cả các đơn hàng.",
     *     @OA\Response(
     *         response=200,
     *         description="Dữ liệu được lấy thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Dữ liệu được lấy thành công"),
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(ref="#/components/schemas/OrderResource")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Lỗi server",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *             @OA\Property(property="message", type="string", example="Thông báo lỗi"),
     *             @OA\Property(property="data", type="string", nullable=true, example=null)
     *         )
     *     )
     * )
     */
    public function index()
    {
        // GET
        try {
            $orders = DonHang::all();
            return response()->json([
                'status' => 'success',
                'message' => 'Dữ liệu được lấy thành công',
                'data' => OrderResource::collection($orders)
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 500);
        }
    }


    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

    /**
     * @OA\Post(
     *     path="/api/orders",
     *     tags={"DonHang"},
     *     summary="Tạo đơn hàng mới",
     *     description="Tạo một đơn hàng mới cùng với chi tiết đơn hàng.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"MaTaiKhoan", "PTTT", "chi_tiet"},
     *             @OA\Property(property="MaTaiKhoan", type="integer", example=1, description="Mã tài khoản của người đặt hàng"),
     *             @OA\Property(property="PTTT", type="string", example="Chuyển khoản", description="Phương thức thanh toán"),
     *             @OA\Property(property="GhiChu", type="string", example="Ghi chú đơn hàng", description="Ghi chú cho đơn hàng"),
     *             @OA\Property(property="chi_tiet", type="array", @OA\Items(
     *                 @OA\Property(property="MaSP", type="integer", example=1, description="Mã sản phẩm"),
     *                 @OA\Property(property="SoLuong", type="integer", example=2, description="Số lượng sản phẩm"),
     *             )),
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Thêm thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Thêm thành công"),
     *             @OA\Property(property="data", ref="#/components/schemas/OrderResource")
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Lỗi xác thực hoặc dữ liệu không hợp lệ",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *             @OA\Property(property="message", type="string", example="Thông báo lỗi"),
     *             @OA\Property(property="data", type="null")
     *         )
     *     )
     * )
     */
    public function store(Request $request)
    {
        //POST 
        try {
            // Validate dữ liệu đầu vào
            $validatedData = $request->validate([
                'MaTaiKhoan' => 'required|integer|exists:users,MaTaiKhoan', // Kiểm tra tồn tại
                'PTTT' => 'required|string|max:50',
                'GhiChu' => 'nullable|string|max:255',

                'chi_tiet' => 'required|array', // Đảm bảo rằng 'chi_tiet' là một mảng
                'chi_tiet.*.MaSP' => 'required|integer|exists:san_pham,MaSP', // Kiểm tra sản phẩm
                'chi_tiet.*.SoLuong' => 'required|integer|min:1|max:50',
            ], [
                'MaTaiKhoan.required' => 'Vui lòng nhập mã tài khoản',
                'MaTaiKhoan.integer' => 'Mã tài khoản phải là số',
                'MaTaiKhoan.exists' => 'Mã tài khoản không tồn tại',

                'PTTT.required' => 'Vui lòng nhập phương thức thanh toán',
                'PTTT.string' => 'Phương thức thanh toán phải là chuỗi ký tự',
                'PTTT.max' => 'Phương thức thanh toán không được vượt quá 50 ký tự',

                'GhiChu.string' => 'Ghi chú phải là chuỗi ký tự',
                'GhiChu.max' => 'Ghi chú không được vượt quá 255 ký tự',

                'chi_tiet.required' => 'Vui lòng cung cấp chi tiết đơn hàng',
                'chi_tiet.array' => 'Chi tiết đơn hàng phải là một mảng',
                'chi_tiet.*.MaSP.required' => 'Vui lòng nhập mã sản phẩm',
                'chi_tiet.*.SoLuong.required' => 'Vui lòng nhập số lượng',
            ]);


            // Lấy thông tin người dùng từ bảng users
            $user = User::findOrFail($validatedData['MaTaiKhoan']);
            // Khởi tạo trạng thái và ngày đặt
            $validatedData['TrangThai'] = 'dang_xu_ly';
            $validatedData['NgayDat'] = now();    // Thời gian hiện tại
            $validatedData['NgayGiao'] = now()->addDays(4); // Ngày giao cộng 4 ngày

            // Tạo đơn hàng
            $order = DonHang::create([
                'MaTaiKhoan' => $validatedData['MaTaiKhoan'],
                'TongTien' => 0, // Tổng tiền sẽ được tính sau
                'SoLuong' => 0,   // Khởi tạo SoLuong
                'Ten' => $user->Hovaten,       // Lấy tên từ bảng users
                'SDT' => $user->SDT,       // Lấy SDT từ bảng users
                'DiaChi' => $user->DiaChi, // Lấy địa chỉ từ bảng users
                'PTTT' => $validatedData['PTTT'],
                'GhiChu' => $validatedData['GhiChu'],
                'TrangThai' => $validatedData['TrangThai'],
                'NgayDat' => $validatedData['NgayDat'],
                'NgayGiao' => $validatedData['NgayGiao'],
            ]);

            // Lưu chi tiết đơn hàng và tính tổng tiền & số lượng
            $tongTien = 0; // Khởi tạo tổng tiền
            $tongSoLuong = 0; // Khởi tạo tổng số lượng
            foreach ($validatedData['chi_tiet'] as $item) {
                // Lấy giá của sản phẩm từ bảng san_pham
                $sanPham = SanPham::findOrFail($item['MaSP']);
                $DonGia = $sanPham->GiaSP - $sanPham->GiamGia;
                // Tạo chi tiết đơn hàng
                $ctDonHang = ChiTietDonHang::create([
                    'MaDH' => $order->MaDH,
                    'MaSP' => $item['MaSP'],
                    'DonGia' => $DonGia,  // Sử dụng giá từ bảng san_pham
                    'SoLuong' => $item['SoLuong'],
                ]);

                // Cập nhật tổng tiền
                $tongTien += $ctDonHang->DonGia * $ctDonHang->SoLuong;
                $tongSoLuong += $ctDonHang->SoLuong; // Cộng dồn số lượng
            }

            // Cập nhật tổng tiền và số lượng cho đơn hàng
            $order->update([
                'TongTien' => $tongTien,
                'SoLuong' => $tongSoLuong // Cập nhật số lượng
            ]);

            // Trả về thông tin đơn hàng vừa tạo
            return response()->json([
                'status' => 'success',
                'message' => 'Thêm đơn hàng thành công',
                'data' => new OrderResource($order->load('orderDetails')) // Trả về đơn hàng vừa tạo
            ], 201);
        } catch (\Exception $e) {

            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 500);
        }
    }




    public function show($MaDH)
    {
        //GET
        try {
            $orderDetails = ChiTietDonHang::where('MaDH', $MaDH)->get();

            if ($orderDetails->isEmpty()) {
                return response()->json([
                    'status' => 'fail',
                    'message' => 'Không tìm thấy chi tiết đơn hàng',
                    'data' => null
                ], 404);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Lấy dữ liệu thành công',
                'data' => OrderDetailResource::collection($orderDetails)
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
