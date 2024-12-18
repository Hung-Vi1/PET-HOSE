<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\NewsResource;
use App\Models\BaiViet;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

/**
 * @OA\Schema(
 *     schema="NewsResource",
 *     type="object",
 *     @OA\Property(property="id", type="integer", example=1),
 *     @OA\Property(property="Mataikhoan", type="integer", example=1),
 *     @OA\Property(property="MaDMBV", type="integer", example=1),
 *     @OA\Property(property="TieuDe", type="string", example="Bài viết về công nghệ"),
 *     @OA\Property(property="Hinh", type="string", example="https://example.com/image.jpg"),
 *     @OA\Property(property="NoiDung", type="string", example="Đây là nội dung của bài viết."),
 *     @OA\Property(property="ChiTiet", type="string", example="Chi tiết bài viết về công nghệ mới."),
 *     @OA\Property(property="LuotXem", type="integer", example=150),
 *     @OA\Property(property="BinhLuan", type="string", example="20"),
 *     @OA\Property(property="TrangThai", type="string", example=1)
 * )
 */
class GetNewsApiController extends Controller
{
        /**
     * @OA\Get(
     *     path="/api/News",
     *     tags={"GetBaiViet"},
     *     summary="Lấy danh sách  bài viết",
     *     description="Trả về danh sách tất cả các  bài viết.",
     *     @OA\Response(
     *         response=200,
     *         description="Dữ liệu được lấy thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Dữ liệu được lấy thành công"),
     *             @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/NewsResource"))
     *         )
     *     ),
     *     @OA\Response(response=500, description="Lỗi server")
     * )
     */
    public function index()
    {
        // GET
        try {
            $News = BaiViet::all();
            return response()->json([
                'status' => 'success',
                'message' => 'Dữ liệu được lấy thành công',
                'data' => NewsResource::collection($News)
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
     *     path="/api/News/{id}",
     *     tags={"GetBaiViet"},
     *     summary="Lấy thông tin chi tiết bài viết",
     *     description="Trả về thông tin chi tiết của một bài viết cụ thể.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID của bài viết cần lấy thông tin",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lấy dữ liệu thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Lấy dữ liệu thành công"),
     *             @OA\Property(property="data", ref="#/components/schemas/NewsResource")
     *         )
     *     ),
     *     @OA\Response(response=400, description="Lỗi khi lấy dữ liệu"),
     *     @OA\Response(response=404, description="Danh mục không tìm thấy")
     * )
     */
    public function show($id)
    {
        //GET
        try {
            $news = BaiViet::findOrFail($id);
            // Tăng lượt xem lên 1
            $news->increment('LuotXem');
            return response()->json([
                'status' => 'success',
                'message' => 'Lấy dữ liệu thành công',
                'data' => new NewsResource($news)
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
