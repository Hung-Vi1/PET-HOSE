<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SanPham;
use App\Models\DanhMuc;
use App\Http\Resources\ServiceResource;

/**
 * @OA\Schema(
 *     schema="ServiceResource",
 *     type="object",
 *     title="Service Resource",
 *     properties={
 *         @OA\Property(property="id", type="integer", example=1),
 *         @OA\Property(property="name", type="string", example="Service Name"),
 *         @OA\Property(property="price", type="number", format="float", example=99.99),
 *         @OA\Property(property="description", type="string", example="This is a service description.")
 *     }
 * )
 */
class GetServiceApiController extends Controller
{
        /**
     * @OA\Get(
     *     path="/api/services",
     *     tags={"GetDichVu"},
     *     summary="Lấy danh sách dịch vụ",
     *     description="Trả về danh sách tất cả các dịch vụ.",
     *     @OA\Response(
     *         response=200,
     *         description="Dữ liệu được lấy thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Dữ liệu được lấy thành công"),
     *             @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/ServiceResource"))
     *         )
     *     ),
     *     @OA\Response(response=500, description="Lỗi server")
     * )
     */
    public function index()
    {
        // GET
        try {
            // Truy vấn dịch v và quan hệ danh mục
            $products = SanPham::with('danhMuc')
                ->whereHas('danhMuc', function ($query) {
                    $query->where('loai', '0');
                })
                ->where('Loai', '0')
                ->get();



            return response()->json([
                'status' => 'success',
                'message' => 'Dữ liệu được lấy thành công',
                'data' => ServiceResource::collection($products)
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
     * @OA\Get(
     *     path="/api/services/{MaSP}",
     *     tags={"GetDichVu"},
     *     summary="Lấy thông tin chi tiết dịch vụ",
     *     description="Trả về thông tin chi tiết của dịch vụ dựa trên mã dịch vụ.",
     *     @OA\Parameter(
     *         name="MaSP",
     *         in="path",
     *         required=true,
     *         description="Mã dịch vụ cần lấy thông tin",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lấy dữ liệu thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Lấy dữ liệu thành công"),
     *             @OA\Property(property="data", ref="#/components/schemas/ServiceResource")
     *         )
     *     ),
     *     @OA\Response(response=400, description="Lỗi khi lấy dữ liệu"),
     *     @OA\Response(response=404, description="dịch vụ không tìm thấy")
     * )
     */
    public function show($MaSP)
    {
        //GET
        try {
            $product = SanPham::where('Loai', 0)->findOrFail($MaSP);
            return response()->json([
                'status' => 'success',
                'message' => 'Lấy dữ liệu thành công',
                'data' => new ServiceResource($product)
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
