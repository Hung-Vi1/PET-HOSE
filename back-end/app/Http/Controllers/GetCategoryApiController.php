<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use OpenApi\Annotations as OA;
use App\Models\DanhMuc;
use App\Http\Resources\CategoryResource;

/**
 * @OA\Schema(
 *     schema="CategoryResource",
 *     type="object",
 *     @OA\Property(property="MaDanhMuc", type="integer", example=1),
 *     @OA\Property(property="TenDM", type="string", example="Danh mục 1"),
 *     @OA\Property(property="parent_id", type="integer", example=null),
 *     @OA\Property(property="loai", type="integer", example=0)
 * )
 */
class GetCategoryApiController extends Controller
{

        /**
     * @OA\Get(
     *     path="/api/category",
     *     tags={"GetDanhMuc"},
     *     summary="Lấy danh sách danh mục",
     *     description="Trả về danh sách tất cả các danh mục.",
     *     @OA\Response(
     *         response=200,
     *         description="Dữ liệu được lấy thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Dữ liệu được lấy thành công"),
     *             @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/CategoryResource"))
     *         )
     *     ),
     *     @OA\Response(response=500, description="Lỗi server")
     * )
     */
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

    /**
     * @OA\Get(
     *     path="/api/category/{MaDanhMuc}",
     *     tags={"GetDanhMuc"},
     *     summary="Lấy thông tin danh mục",
     *     description="Trả về thông tin chi tiết của một danh mục cụ thể.",
     *     @OA\Parameter(
     *         name="MaDanhMuc",
     *         in="path",
     *         required=true,
     *         description="ID của danh mục cần lấy thông tin",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lấy dữ liệu thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Lấy dữ liệu thành công"),
     *             @OA\Property(property="data", ref="#/components/schemas/CategoryResource")
     *         )
     *     ),
     *     @OA\Response(response=400, description="Lỗi khi lấy dữ liệu"),
     *     @OA\Response(response=404, description="Danh mục không tìm thấy")
     * )
     */
    public function show($MaDanhMuc)
    {
        //GET
        try {
            $category = DanhMuc::findOrFail($MaDanhMuc);
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
}
