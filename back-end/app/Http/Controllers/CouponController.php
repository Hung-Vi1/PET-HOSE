<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coupon;

class CouponController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/coupons/validate",
     *     summary="Validate a coupon code",
     *     tags={"Coupons"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"code"},
     *             @OA\Property(property="code", type="string", example="DISCOUNT10"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Valid coupon details",
     *         @OA\JsonContent(
     *             @OA\Property(property="type", type="string", example="percentage"),
     *             @OA\Property(property="value", type="number", format="float", example=10),
     *             @OA\Property(property="min_order_value", type="number", format="float", example=100)
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Coupon not found",
     *         @OA\JsonContent(@OA\Property(property="error", type="string", example="Coupon not found"))
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid coupon (expired or limit exceeded)",
     *         @OA\JsonContent(@OA\Property(property="error", type="string", example="Coupon expired"))
     *     )
     * )
     */
    public function validateCoupon(Request $request)
    {
        $coupon = Coupon::where('code', $request->input('code'))->first();
    
        if (!$coupon) {
            return response()->json(['error' => 'Không tìm thấy mã giảm giá'], 404);
        }
    
        // Kiểm tra nếu mã giảm giá đã hết hạn
        if ($coupon->expiry_date && $coupon->expiry_date < now()) {
            return response()->json(['error' => 'Mã giảm giá đã hết hạn'], 400);
        }
    
        // Kiểm tra nếu mã giảm giá đã hết lượt sử dụng
        if ($coupon->usage_limit <= 0) {
            return response()->json(['error' => 'Mã giảm giá đã hết lượt sử dụng'], 400);
        }
    
        // Giảm usage_limit đi 1 khi mã giảm giá hợp lệ
        $coupon->usage_limit -= 1;
    
        // Lưu lại thay đổi sau khi giảm usage_limit
        $coupon->save();
    
        return response()->json([
            'type' => $coupon->type,
            'value' => $coupon->value,
            'min_order_value' => $coupon->min_order_value,
        ]);
    }
    

    /**
     * @OA\Post(
     *     path="/api/coupons/apply",
     *     summary="Apply a coupon code to calculate the discount",
     *     tags={"Coupons"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"code", "order_total"},
     *             @OA\Property(property="code", type="string", example="vi"),
     *             @OA\Property(property="order_total", type="number", format="float", example=50000),
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Discount applied successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="original_total", type="number", format="float", example=200),
     *             @OA\Property(property="discount", type="number", format="float", example=20),
     *             @OA\Property(property="discounted_total", type="number", format="float", example=180)
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Coupon not found",
     *         @OA\JsonContent(@OA\Property(property="error", type="string", example="Coupon not found"))
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Order total does not meet the minimum requirement",
     *         @OA\JsonContent(@OA\Property(property="error", type="string", example="Order value is less than the minimum required"))
     *     )
     * )
     */
    public function applyCoupon(Request $request)
    {
        $coupon = Coupon::where('code', $request->input('code'))->first();

        if (!$coupon) {
            return response()->json(['error' => 'Không có mã giảm giá'], 404);
        }

        // Kiểm tra nếu mã giảm giá đã hết lượt sử dụng
        if ($coupon->usage_limit <= 0) {
            return response()->json(['error' => 'Mã giảm giá đã hết lượt sử dụng'], 400);
        }

        $orderTotal = $request->input('order_total');

        if ($orderTotal < $coupon->min_order_value) {
            return response()->json(['error' => 'Giá trị đơn hàng thấp hơn mức tối thiểu yêu cầu'], 400);
        }

        // Tính toán mức giảm giá
        $discount = $coupon->type === 'percentage'
            ? $orderTotal * ($coupon->value / 100)
            : $coupon->value;

        $discountedTotal = $orderTotal - $discount;

        // Giảm usage_limit đi 1 sau khi áp dụng mã giảm giá
        $coupon->usage_limit -= 1;

        // Nếu usage_limit = 0, cập nhật lại trạng thái mã giảm giá
        if ($coupon->usage_limit == 0) {
            // Bạn có thể thêm logic cập nhật trạng thái mã giảm giá ở đây, ví dụ:
            // $coupon->status = 'expired';
        }

        // Lưu lại mã giảm giá với usage_limit đã được giảm
        $coupon->save();

        return response()->json([
            'original_total' => $orderTotal,
            'discount' => $discount,
            'discounted_total' => $discountedTotal,
        ]);
    }
}
