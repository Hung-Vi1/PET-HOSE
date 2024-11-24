<?php

namespace App\Http\Controllers;

use App\Models\ChiTietDonHang;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\DonHang;  // Model của bảng DonHang
use App\Models\vnpay;  // Model của bảng DonHang
use App\Models\User;
use App\Models\SanPham; // Model
use App\Http\Resources\OrderResource;
use App\Http\Resources\OrderDetailResource;
use Illuminate\Support\Facades\DB;
use Swagger\Annotations as SWG;

class VnpayApiController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/Store/VnPay",
     *     tags={"VNPAY"},
     *     summary="Thanh toán đơn hàng qua VNPAY",
     *     description="Tiến hành thanh toán đơn hàng qua cổng VNPAY, sau khi tạo đơn hàng thành công.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"Mataikhoan", "PTTT", "chi_tiet"},
     *             @OA\Property(property="Mataikhoan", type="integer", example=1, description="Mã tài khoản của người đặt hàng"),
     *             @OA\Property(property="PTTT", type="string", example="Chuyển khoản", description="Phương thức thanh toán"),
     *             @OA\Property(property="GhiChu", type="string", example="Ghi chú đơn hàng", description="Ghi chú cho đơn hàng"),
     *             @OA\Property(property="Discount", type="number", example=10, description="Giảm giá (nếu có)"),
     *             @OA\Property(
     *                 property="chi_tiet",
     *                 type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="MaSP", type="integer", example=1, description="Mã sản phẩm"),
     *                     @OA\Property(property="SoLuong", type="integer", example=2, description="Số lượng sản phẩm")
     *                 ),
     *                 description="Chi tiết các sản phẩm trong đơn hàng"
     *             ),
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Thanh toán thành công, chuyển hướng đến VNPAY",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Thêm đơn hàng thành công"),
     *             @OA\Property(property="url", type="string", example="https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?..."),
     *             @OA\Property(property="data", ref="#/components/schemas/OrderResource")
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Lỗi xác thực hoặc dữ liệu không hợp lệ",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *             @OA\Property(property="message", type="string", example="Thông báo lỗi chi tiết"),
     *             @OA\Property(property="data", type="null")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Lỗi xử lý trong quá trình thanh toán",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *             @OA\Property(property="message", type="string", example="Thanh toán thất bại"),
     *             @OA\Property(property="data", type="null")
     *         )
     *     )
     * )
     */

    public function VNPAY(Request $request)
    {
        error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
        date_default_timezone_set('Asia/Ho_Chi_Minh');

        $vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "http://127.0.0.1:8000/Store/VnPay";
        $vnp_TmnCode = "WRPOFVZJ"; // Mã website tại VNPAY
        $vnp_HashSecret = "UI3TQRXZD5YVALKJDIQFBF2VMS9V57VC"; // Thay bằng mã bí mật của bạn

        // Validate dữ liệu đầu vào
        $validatedData = $request->validate([
            'Mataikhoan' => 'required|integer|exists:users,Mataikhoan',
            'PTTT' => 'required|string|max:50',
            'GhiChu' => 'nullable|string|max:255',
            'Discount' => 'nullable|numeric|min:0',
            'chi_tiet' => 'required|array',
            'chi_tiet.*.MaSP' => 'required|integer|exists:san_pham,MaSP',
            'chi_tiet.*.SoLuong' => 'required|integer|min:1|max:50',
        ]);

        try {
            $user = User::findOrFail($validatedData['Mataikhoan']);
            $discount = $validatedData['Discount'] ?? 0;

            // Tính tổng tiền và số lượng
            $tongTien = 0;
            $tongSoLuong = 0;
            foreach ($validatedData['chi_tiet'] as $item) {
                $sanPham = SanPham::findOrFail($item['MaSP']);
                $DonGia = $sanPham->GiaSP - $sanPham->GiamGia;
                $tongTien += $DonGia * $item['SoLuong'];
                $tongSoLuong += $item['SoLuong'];
            }

            $tongTien -= $discount; // Áp dụng giảm giá

            $vnp_TxnRef = uniqid(); //Mã đơn hàng. Trong thực tế Merchant cần insert đơn hàng vào DB và gửi mã này sang VNPAY
            $vnp_OrderInfo = 'Thanh toán VNPAY';
            $vnp_OrderType = 'billpayment';
            $vnp_Amount = $tongTien * 100;

            $vnp_Locale = 'vn';
            $vnp_BankCode = 'NCB';
            $vnp_IpAddr = $_SERVER['REMOTE_ADDR'];



            $vnp_Bill_Country = 'VN';
            $vnp_Bill_State = 2;
            // Invoice
            $vnp_Inv_Phone = $user->SDT;
            $vnp_Inv_Email = $user->Email;
            $vnp_Inv_Customer = $user->Hovaten;
            $vnp_Inv_Address = $user->DiaChi;


            $inputData = array(
                "vnp_Version" => "2.1.0",
                "vnp_TmnCode" => $vnp_TmnCode,
                "vnp_Amount" => $vnp_Amount,

                "vnp_Command" => "pay",
                "vnp_CreateDate" => date('YmdHis'),
                "vnp_CurrCode" => "VND",
                "vnp_IpAddr" => $vnp_IpAddr,
                "vnp_Locale" => $vnp_Locale,
                "vnp_OrderInfo" => $vnp_OrderInfo,
                "vnp_OrderType" => $vnp_OrderType,
                "vnp_ReturnUrl" => $vnp_Returnurl,
                "vnp_TxnRef" => $vnp_TxnRef,
                "vnp_Bill_Mobile" => $user->SDT,
                "vnp_Bill_Email" => $user->Email,
                "vnp_Bill_Address" => $user->DiaChi,
                "vnp_Bill_Country" => $vnp_Bill_Country,
                "vnp_Inv_Phone" => $vnp_Inv_Phone,
                "vnp_Inv_Email" => $vnp_Inv_Email,
                "vnp_Inv_Customer" => $vnp_Inv_Customer,
                "vnp_Inv_Address" => $vnp_Inv_Address
            );

            //var_dump($inputData);
            ksort($inputData);
            $query = "";
            $i = 0;
            $hashdata = "";
            foreach ($inputData as $key => $value) {
                if ($i == 1) {
                    $hashdata .= '&' . urlencode($key) . "=" . urlencode($value);
                } else {
                    $hashdata .= urlencode($key) . "=" . urlencode($value);
                    $i = 1;
                }
                $query .= urlencode($key) . "=" . urlencode($value) . '&';
            }

            $vnp_Url = $vnp_Url . "?" . $query;
            if (isset($vnp_HashSecret)) {
                $vnpSecureHash =   hash_hmac('sha512', $hashdata, $vnp_HashSecret); //  
                $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Tạo yêu cầu thanh toán thành công',
                'url' => $vnp_Url,
                'data' => [
                    'Mataikhoan' => $validatedData['Mataikhoan'],
                    'chi_tiet' => $validatedData['chi_tiet'],
                    'TongTien' => $tongTien,
                    'SoLuong' => $tongSoLuong,
                    'Discount' => $discount,
                    'PTTT' => $validatedData['PTTT'],
                    'GhiChu' => $validatedData['GhiChu'],
                    'vnp_TxnRef' => $vnp_TxnRef,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
            ], 500);
        }
    }






    public function handleVNPayCallback(Request $request)
    {
        $vnp_HashSecret = "UI3TQRXZD5YVALKJDIQFBF2VMS9V57VC"; // Thay bằng mã bí mật của bạn
        $inputData = $request->all();

        // Lấy chữ ký từ request
        $vnp_SecureHash = $inputData['vnp_SecureHash'] ?? '';
        unset($inputData['vnp_SecureHash']);
        ksort($inputData);

        // Tạo hashdata để kiểm tra chữ ký
        $hashdata = urldecode(http_build_query($inputData));
        $secureHash = hash_hmac('sha256', $hashdata, $vnp_HashSecret);

        // Kiểm tra chữ ký
        if ($secureHash !== $vnp_SecureHash) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Chữ ký không hợp lệ',
            ], 400);
        }

        // Lưu thông tin giao dịch vào bảng vnpay
        try {
            vnpay::create([
                'vnp_Amount' => $inputData['vnp_Amount'] ?? null,
                'vnp_BankCode' => $inputData['vnp_BankCode'] ?? null,
                'vnp_BankTranNo' => $inputData['vnp_BankTranNo'] ?? null,
                'vnp_CardType' => $inputData['vnp_CardType'] ?? null,
                'vnp_OrderInfo' => $inputData['vnp_OrderInfo'] ?? null,
                'vnp_PayDate' => $inputData['vnp_PayDate'] ?? null,
                'vnp_ResponseCode' => $inputData['vnp_ResponseCode'] ?? null,
                'vnp_TmnCode' => $inputData['vnp_TmnCode'] ?? null,
                'vnp_TransactionNo' => $inputData['vnp_TransactionNo'] ?? null,
                'vnp_TransactionStatus' => $inputData['vnp_TransactionStatus'] ?? null,
                'vnp_TxnRef' => $inputData['vnp_TxnRef'] ?? null,
                'vnp_SecureHash' => $vnp_SecureHash,
            ]);

            // Kiểm tra mã phản hồi
            if ($inputData['vnp_ResponseCode'] == '00') {
                // Cập nhật trạng thái đơn hàng thành "hoàn thành"
                $order = DonHang::where('MaDH', $inputData['vnp_TxnRef'])->first();
                if ($order) {
                    $order->update(['TrangThai' => 'hoan_thanh']);
                }

                return response()->json([
                    'status' => 'success',
                    'message' => 'Thanh toán thành công',
                ]);
            } else {
                return response()->json([
                    'status' => 'fail',
                    'message' => 'Thanh toán thất bại',
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Lỗi khi lưu giao dịch: ' . $e->getMessage(),
            ], 500);
        }
    }
}
