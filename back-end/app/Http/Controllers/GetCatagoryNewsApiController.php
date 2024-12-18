<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\CatagoryNewsResource;
use App\Models\DanhMucBaiViet;

/**
 * @OA\Schema(
 *     schema="CatagoryNewsResource",
 *     type="object",
 *     @OA\Property(property="MaDMBV", type="integer", example=1),
 *     @OA\Property(property="TenDMBV", type="string", example="Danh mục bài viết 1"),
 * )
 */
class GetCatagoryNewsApiController extends Controller
{
        /**
     * @OA\Get(
     *     path="/api/catagorysNews",
     *     tags={"GetDanhMucBaiViet"},
     *     summary="Lấy danh sách danh mục bài viết",
     *     description="Trả về danh sách tất cả các danh mục bài viết.",
     *     @OA\Response(
     *         response=200,
     *         description="Dữ liệu được lấy thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Dữ liệu được lấy thành công"),
     *             @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/CatagoryNewsResource"))
     *         )
     *     ),
     *     @OA\Response(response=500, description="Lỗi server")
     * )
     */

     public function index()
     {
         // GET
         try {
             $categorysNews = DanhMucBaiViet::all();
             return response()->json([
                 'status' => 'success',
                 'message' => 'Dữ liệu được lấy thành công',
                 'data' => CatagoryNewsResource::collection($categorysNews)
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
      *     path="/api/catagorysNews/{MaDMBV}",
      *     tags={"GetDanhMucBaiViet"},
      *     summary="Lấy thông tin danh mục",
      *     description="Trả về thông tin chi tiết của một danh mục cụ thể.",
      *     @OA\Parameter(
      *         name="MaDMBV",
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
      *             @OA\Property(property="data", ref="#/components/schemas/CatagoryNewsResource")
      *         )
      *     ),
      *     @OA\Response(response=400, description="Lỗi khi lấy dữ liệu"),
      *     @OA\Response(response=404, description="Danh mục không tìm thấy")
      * )
      */
     public function show($MaDMBV)
     {
         //GET
         try {
             $categoryNew = DanhMucBaiViet::findOrFail($MaDMBV);
             return response()->json([
                 'status' => 'success',
                 'message' => 'Lấy dữ liệu thành công',
                 'data' => new CatagoryNewsResource($categoryNew)
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
