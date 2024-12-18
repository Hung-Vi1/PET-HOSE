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
class ProductApiController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'refresh']]);
    }



    /**
     * @OA\Post(
     *     path="/api/products/store",
     *     tags={"SanPham"},
     *     summary="Thêm sản phẩm mới",
     *     description="Thêm sản phẩm vào danh sách.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"MaDanhMuc", "TenSanPham", "GiaSP", "HinhAnh", "MoTa"},
     *             @OA\Property(property="MaDanhMuc", type="integer", example=3, description="Mã danh mục sản phẩm"),
     *             @OA\Property(property="TenSanPham", type="string", example="tên sản phẩm", description="Tên sản phẩm"),
     *             @OA\Property(property="GiaSP", type="number", example=100000, description="Giá sản phẩm"),
     *             @OA\Property(property="GiamGia", type="number", example=0, description="Giảm giá sản phẩm"),
     *             @OA\Property(property="MoTa", type="string", description="Mô tả chi tiết sản phẩm"),
     *             @OA\Property(property="SoLuong", type="integer", example=100, nullable=true),
     *             @OA\Property(property="HinhAnh", type="string", example="anh.png",  description="URL của hình ảnh sản phẩm"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Thêm sản phẩm thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Thêm thành công"),
     *             @OA\Property(property="data", ref="#/components/schemas/ProductResource")
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Lỗi khi thêm sản phẩm",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *             @OA\Property(property="message", type="string", example="Lỗi mô tả chi tiết"),
     *             @OA\Property(property="data", type="null")
     *         )
     *     )
     * )
     */

    public function store(Request $request)
    {
        
        //POST 
        try {
            $validatedData = $request->validate([
                'MaDanhMuc' => 'required|exists:danh_muc,MaDanhMuc', // Kiểm tra mã danh mục tồn tại
                'TenSanPham' => 'required',
                'GiaSP' => 'required|numeric',
                'GiamGia' => 'nullable|numeric',
                'HinhAnh' => 'required|image|mimes:jpeg,png,jpg,gif',
                'MoTa' => 'required',
            ], [
                'MaDanhMuc.required' => 'Vui lòng nhập mã danh mục',
                'MaDanhMuc.exists' => 'Danh mục không tồn tại',
                'TenSanPham.required' => 'Vui lòng nhập tên sản phẩm',
                'GiaSP.required' => 'Vui lòng nhập tên sản phẩm',
                'HinhAnh.required' => 'Vui lòng nhập ảnh',
                'MoTa.required' => 'Vui lòng nhập ảnh'
            ]);
            // Gán giá trị mặc định
            $validatedData['SoLuong'] = 0;        // Số lượng mặc định là 0
            $validatedData['LuotXem'] = 0;         // Lượt xem mặc định là 0
            $validatedData['LuotBan'] = 0;         // Lượt bán mặc định là 0
            $validatedData['TrangThai'] = 1;       // Trạng thái mặc định là 1
            $validatedData['Loai'] = 1;       // Trạng thái mặc định là 1
            $validatedData['ThoiGian'] = now();    // Thời gian hiện tại

            // Lưu hình ảnh
            if ($request->file('HinhAnh')) {
                $imageName = time() . '.' . $request->file('HinhAnh')->getClientOriginalExtension();
                $path = public_path('image/product'); // Đường dẫn đến thư mục lưu
                $request->file('HinhAnh')->move($path, $imageName); // Di chuyển hình ảnh vào thư mục
            }
            $product = SanPham::create([
                'MaDanhMuc' => $validatedData['MaDanhMuc'],
                'TenSanPham' => $validatedData['TenSanPham'],
                'GiaSP' => $validatedData['GiaSP'],
                'GiamGia' => $validatedData['GiamGia'],
                'MoTa' => $validatedData['MoTa'],
                'SoLuong' => $validatedData['SoLuong'],
                'HinhAnh' => $imageName,
                'LuotXem' => $validatedData['LuotXem'],
                'LuotBan' => $validatedData['LuotBan'],
                'ThoiGian' => $validatedData['ThoiGian'],
                'TrangThai' => $validatedData['TrangThai'],
                'Loai' => $validatedData['Loai'],
            ]);
            return response()->json([
                'status' => 'success',
                'message' => 'Thêm thành công',
                'data' => new ProductResource($product)
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 400);
        }
    }




    /**
     * @OA\Put(
     *     path="/api/products/update/{MaSP}",
     *     tags={"SanPham"},
     *     summary="Cập nhật thông tin sản phẩm",
     *     description="Cập nhật thông tin sản phẩm dựa trên mã sản phẩm.",
     *     @OA\Parameter(
     *         name="MaSP",
     *         in="path",
     *         required=true,
     *         description="Mã sản phẩm cần cập nhật",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="MaDanhMuc", type="integer", example=1),
     *             @OA\Property(property="TenSanPham", type="string", example="Sản phẩm A"),
     *             @OA\Property(property="GiaSP", type="number", format="float", example=100000),
     *             @OA\Property(property="GiamGia", type="number", format="float", example=0),
     *             @OA\Property(property="MoTa", type="string", example="Mô tả sản phẩm A"),
     *             @OA\Property(property="SoLuong", type="integer", example=10),
     *             @OA\Property(property="HinhAnh", type="string", example="hinh_anh_a.jpg"),
     *             @OA\Property(property="LuotXem", type="integer", example=0),
     *             @OA\Property(property="LuotBan", type="integer", example=0),
     *             @OA\Property(property="ThoiGian", type="string", format="date-time", example="2024-10-24 12:00:00"),
     *             @OA\Property(property="TrangThai", type="integer", example=1)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Cập nhật thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Cập nhật thành công"),
     *             @OA\Property(property="data", ref="#/components/schemas/ProductResource")
     *         )
     *     ),
     *     @OA\Response(response=400, description="Lỗi khi cập nhật dữ liệu"),
     *     @OA\Response(response=404, description="Sản phẩm không tìm thấy")
     * )
     */
    public function update(Request $request, $MaSP)
    {
        try {
            $validatedData = $request->validate([
                'MaDanhMuc' => 'required|exists:danh_muc,MaDanhMuc',
                'TenSanPham' => 'required',
                'GiaSP' => 'required|numeric',
                'GiamGia' => 'nullable|numeric',
                'HinhAnh' => 'nullable',
                'MoTa' => 'required',
                'SoLuong' => 'required|integer',
                'TrangThai' => 'nullable|integer'
            ]);

            $product = SanPham::findOrFail($MaSP);
            $imageName = $product->HinhAnh;

            if ($request->hasFile('HinhAnh')) {
                $path = public_path('image/product');

                // Xóa hình ảnh cũ
                if ($product->HinhAnh) {
                    $oldFilePath = $path . '/' . $product->HinhAnh;
                    if (file_exists($oldFilePath)) {
                        unlink($oldFilePath); // Xóa hình cũ
                    }
                }

                // Lưu hình ảnh mới
                $imageName = time() . '.' . $request->file('HinhAnh')->getClientOriginalExtension();
                $request->file('HinhAnh')->move($path, $imageName);
            }


            $product->update([
                'MaDanhMuc' => $validatedData['MaDanhMuc'],
                'TenSanPham' => $validatedData['TenSanPham'],
                'GiaSP' => $validatedData['GiaSP'],
                'GiamGia' => $validatedData['GiamGia'],
                'MoTa' => $validatedData['MoTa'],
                'SoLuong' => $validatedData['SoLuong'],
                'HinhAnh' => $imageName,
                'TrangThai' => $validatedData['TrangThai'] ?? 1,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Cập nhật thành công',
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
     * @OA\Delete(
     *     path="/api/products/destroy/{MaSP}",
     *     tags={"SanPham"},
     *     summary="Xóa sản phẩm",
     *     description="Xóa sản phẩm theo mã sản phẩm (MaSP).",
     *     @OA\Parameter(
     *         name="MaSP",
     *         in="path",
     *         description="Mã sản phẩm cần xóa",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Xóa thành công",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="message", type="string", example="Xóa thành công"),
     *             @OA\Property(property="data", type="null")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Lỗi server",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *             @OA\Property(property="message", type="string", example="Lỗi chi tiết"),
     *             @OA\Property(property="data", type="null")
     *         )
     *     )
     * )
     */


    public function destroy(string $MaSP)
    {
        try {
            // Tìm sản phẩm theo mã MaSP
            $product = SanPham::findOrFail($MaSP);


            $path = public_path('image/product');


            $oldFilePath = $path . '/' . $product->HinhAnh;
            // Kiểm tra nếu tệp hình ảnh tồn tại và xóa
            if (file_exists($oldFilePath)) {
                if (unlink($oldFilePath)) {
                    // Nếu xóa hình ảnh thành công, có thể thông báo hoặc ghi log
                    // echo "Xóa hình ảnh thành công.";
                } else {
                    // Nếu không thể xóa hình ảnh
                    return response()->json([
                        'status' => 'fail',
                        'message' => 'Không thể xóa hình ảnh',
                        'data' => null
                    ], 500);
                }
            }


            // Xóa sản phẩm
            $product->delete();

            // Trả về phản hồi thành công
            return response()->json([
                'status' => "success",
                'message' => 'Xóa thành công',
                'data' => null,
            ], 204);
        } catch (ModelNotFoundException $e) {
            // Nếu không tìm thấy sản phẩm, trả về mã lỗi 404
            return response()->json([
                'status' => 'fail',
                'message' => 'Sản phẩm không tồn tại',
                'data' => null
            ], 404);
        } catch (\Exception $e) {
            // Xử lý các lỗi khác và trả về mã lỗi 500
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage(),
                'data' => null
            ], 500);
        }
    }
}
