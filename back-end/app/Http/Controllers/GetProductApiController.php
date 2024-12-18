<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use OpenApi\Annotations as OA;
use App\Models\SanPham;
use App\Models\DanhMuc;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

/**
 * @OA\Schema(
 *     schema="ProductResource",
 *     type="object",
 *     title="Product Resource",
 *     properties={
 *         @OA\Property(property="id", type="integer", example=1),
 *         @OA\Property(property="name", type="string", example="Product Name"),
 *         @OA\Property(property="price", type="number", format="float", example=99.99),
 *         @OA\Property(property="description", type="string", example="This is a product description.")
 *     }
 * )
 */
class GetProductApiController extends Controller
{
        /**
     * @OA\Get(
     *     path="/api/products",
     *     tags={"GetSanPham"},
     *     summary="Lấy danh sách sản phẩm",
     *     description="Trả về danh sách tất cả các sản phẩm.",
     *     @OA\Response(
     *         response=200,
     *         description="Dữ liệu được lấy thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Dữ liệu được lấy thành công"),
     *             @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/ProductResource"))
     *         )
     *     ),
     *     @OA\Response(response=500, description="Lỗi server")
     * )
     */
    public function index()
    {
        // GET
        try {
            // Truy vấn sản phẩm và quan hệ danh mục
            $products = SanPham::with('danhMuc')
                ->whereHas('danhMuc', function ($query) {
                    $query->where('loai', '0');
                })
                ->where('Loai', '1')
                ->get();



            return response()->json([
                'status' => 'success',
                'message' => 'Dữ liệu được lấy thành công',
                'data' => ProductResource::collection($products)
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
     *     path="/api/products/{MaSP}",
     *     tags={"GetSanPham"},
     *     summary="Lấy thông tin chi tiết sản phẩm",
     *     description="Trả về thông tin chi tiết của sản phẩm dựa trên mã sản phẩm.",
     *     @OA\Parameter(
     *         name="MaSP",
     *         in="path",
     *         required=true,
     *         description="Mã sản phẩm cần lấy thông tin",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lấy dữ liệu thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Lấy dữ liệu thành công"),
     *             @OA\Property(property="data", ref="#/components/schemas/ProductResource")
     *         )
     *     ),
     *     @OA\Response(response=400, description="Lỗi khi lấy dữ liệu"),
     *     @OA\Response(response=404, description="Sản phẩm không tìm thấy")
     * )
     */
    public function show($MaSP)
    {
        //GET
        try {
            $product = SanPham::findOrFail($MaSP);
            return response()->json([
                'status' => 'success',
                'message' => 'Lấy dữ liệu thành công',
                'data' => new ProductResource($product)
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 400);
        }
    }


    /**
     * @OA\Get(
     *     path="/api/products/sanPhamTheoDM/{MaDanhMuc}",
     *     tags={"GetSanPham"},
     *     summary="Lấy danh sách sản phẩm theo mã danh mục",
     *     description="Trả về danh sách sản phẩm thuộc một danh mục cụ thể, chỉ khi danh mục có parent_id.",
     *     @OA\Parameter(
     *         name="MaDanhMuc",
     *         in="path",
     *         required=true,
     *         description="Mã danh mục cần lấy sản phẩm",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lấy dữ liệu thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Dữ liệu được lấy thành công"),
     *             @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/ProductResource"))
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Danh mục không tồn tại hoặc không có parent_id",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *             @OA\Property(property="message", type="string", example="Danh mục không tồn tại hoặc không có parent_id"),
     *             @OA\Property(property="data", type="null")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Lỗi máy chủ",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *             @OA\Property(property="message", type="string", example="Lỗi máy chủ"),
     *             @OA\Property(property="data", type="null")
     *         )
     *     )
     * )
     */
    public function sanPhamTheoDM($MaDanhMuc)
    {
        try {
            // Kiểm tra nếu danh mục có parent_id khác null
            $danhMuc = DanhMuc::where('MaDanhMuc', $MaDanhMuc)->whereNotNull('parent_id')->first();

            // Nếu không tìm thấy danh mục hoặc không có parent_id
            if (!$danhMuc) {
                return response()->json([
                    'status' => 'fail',
                    'message' => 'Danh mục không tồn tại hoặc không có danh mục con',
                    'data' => null
                ], 404);
            }

            // Lấy danh sách sản phẩm theo mã danh mục từ cơ sở dữ liệu
            $products = SanPham::where('MaDanhMuc', $MaDanhMuc)->where('Loai', '1')->get();

            return response()->json([
                'status' => 'success',
                'message' => 'Dữ liệu được lấy thành công',
                'data' => ProductResource::collection($products)
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
     * @OA\Post(
     *     path="/api/products/search",
     *     tags={"GetSanPham"},
     *     summary="Tìm kiếm sản phẩm",
     *     description="Tìm kiếm sản phẩm từ danh sách.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"TenSanPham"},
     *             @OA\Property(property="TenSanPham", type="string", example="Thức ăn cho chó"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Tìm kiếm thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Tìm kiếm thành công"),
     *             @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/ProductResource"))
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Lỗi khi tìm kiếm sản phẩm",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *             @OA\Property(property="errors", type="object")
     *         )
     *     )
     * )
     */
    public function searchProduct(Request $request)
    {
        // Validate dữ liệu đầu vào
        $validator = Validator::make($request->all(), [
            'TenSanPham' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'fail',
                'errors' => $validator->errors()
            ], 400);
        }

        // Tìm kiếm sản phẩm
        $products = SanPham::where('TenSanPham', 'LIKE', '%' . $request->TenSanPham . '%')->where("Loai", 1)->get();

        if ($products->isEmpty()) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Không tìm thấy sản phẩm nào.'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Tìm kiếm thành công',
            'data' => ProductResource::collection($products),
        ], 200);
    }
}
