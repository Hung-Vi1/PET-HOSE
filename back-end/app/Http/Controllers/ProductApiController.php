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
    /**
     * Display a listing of the resource.
     */

    /**
     * @OA\Get(
     *     path="/api/products",
     *     tags={"SanPham"},
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
     *     path="/api/products/sanPhamTheoDM/{MaDanhMuc}",
     *     tags={"SanPham"},
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
            $products = SanPham::where('MaDanhMuc', $MaDanhMuc)->get();

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
     * Store a newly created resource in storage.
     */


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
     *             @OA\Property(property="MaDanhMuc", type="integer", description="Mã danh mục sản phẩm"),
     *             @OA\Property(property="TenSanPham", type="string", description="Tên sản phẩm"),
     *             @OA\Property(property="GiaSP", type="number", description="Giá sản phẩm"),
     *             @OA\Property(property="GiamGia", type="number", description="Giảm giá sản phẩm"),
     *             @OA\Property(property="MoTa", type="string", description="Mô tả chi tiết sản phẩm"),
     *             @OA\Property(property="HinhAnh", type="string", format="url",  description="URL của hình ảnh sản phẩm"),
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
    // Tú sửa
    public function store(Request $request)
    {
        // Xác thực dữ liệu
        $request->validate([
            'MaDanhMuc' => 'required|integer',
            'TenSanPham' => 'required|string|max:255',
            'GiaSP' => 'required|integer',
            'GiamGia' => 'nullable|integer',
            'MoTa' => 'required|string',
            'HinhAnh' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'SoLuong' => 'required|integer',
            'LuotXem' => 'nullable|integer',
            'LuotBan' => 'nullable|integer',
            'TrangThai' => 'nullable|string',
        ]);

        // Lưu hình ảnh
        if ($request->file('HinhAnh')) {
            $imageName = time() . '.' . $request->file('HinhAnh')->getClientOriginalExtension();
            $path = public_path('image/product'); // Đường dẫn đến thư mục lưu
            $request->file('HinhAnh')->move($path, $imageName); // Di chuyển hình ảnh vào thư mục
        }


        // Tạo sản phẩm
        $product = SanPham::create([
            'MaDanhMuc' => $request->MaDanhMuc,
            'TenSanPham' => $request->TenSanPham,
            'GiaSP' => $request->GiaSP,
            'GiamGia' => $request->GiamGia,
            'MoTa' => $request->MoTa,
            'HinhAnh' => $imageName, // Chỉ lưu tên hình ảnh
            'SoLuong' => $request->SoLuong,
            'LuotXem' => $request->LuotXem ?? 0,
            'LuotBan' => $request->LuotBan ?? 0,
            'TrangThai' => $request->TrangThai ?? '1',
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Thêm sản phẩm thành công',
            'data' => $product,
        ], 201);
    }
    // Hết phần Tú sửa
    /* public function store(Request $request)
    {
        //POST 
        try {
            $validatedData = $request->validate([
                'MaDanhMuc' => 'required|exists:danh_muc,MaDanhMuc', // Kiểm tra mã danh mục tồn tại
                'TenSanPham' => 'required',
                'GiaSP' => 'required|numeric',
                'GiamGia' => 'nullable|numeric',
                'HinhAnh' => 'required',
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
            $validatedData['ThoiGian'] = now();    // Thời gian hiện tại

            $product = SanPham::create($validatedData);
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
    } */

    /**
     * Display the specified resource.
     */

    /**
     * @OA\Get(
     *     path="/api/products/{MaSP}",
     *     tags={"SanPham"},
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
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
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

    // Tú sửa
    public function update(Request $request, $MaSP)
    {
        // PUT
        try {
            $validatedData = $request->validate([
                'MaDanhMuc' => 'required|exists:danh_muc,MaDanhMuc',
                'TenSanPham' => 'required',
                'GiaSP' => 'required|numeric',
                'GiamGia' => 'nullable|numeric',
                'HinhAnh' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Chỉ cần hình ảnh
                'MoTa' => 'required',
                'SoLuong' => 'required|integer',
                'LuotXem' => 'nullable|integer',
                'LuotBan' => 'nullable|integer',
                'ThoiGian' => 'nullable|date',
                'TrangThai' => 'nullable|integer'
            ], [
                'MaDanhMuc.required' => 'Vui lòng nhập mã danh mục',
                'MaDanhMuc.exists' => 'Danh mục không tồn tại',
                'TenSanPham.required' => 'Vui lòng nhập tên sản phẩm',
                'GiaSP.required' => 'Vui lòng nhập giá sản phẩm',
                'HinhAnh.image' => 'Hình ảnh không hợp lệ',
                'HinhAnh.mimes' => 'Hình ảnh phải là kiểu: jpeg, png, jpg, gif',
                'MoTa.required' => 'Vui lòng nhập mô tả'
            ]);

            $product = SanPham::findOrFail($MaSP);

            // Nếu có tệp hình ảnh mới, xử lý tệp và cập nhật
            if ($request->hasFile('HinhAnh')) {
                // Xóa hình ảnh cũ nếu có
                if ($product->HinhAnh) {
                    Storage::disk('public')->delete($product->HinhAnh);
                }
                // Lưu hình ảnh mới
                $path = $request->file('HinhAnh')->store('image/product', 'public');
                $validatedData['HinhAnh'] = $path;
            }

            // Cập nhật thông tin sản phẩm
            $product->update($validatedData);

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
    // Hết phần Tú sửa
    /* public function update(Request $request, $MaSP)
    {
        // PUT
        try {
            $validatedData = $request->validate([
                'MaDanhMuc' => 'required|exists:danh_muc,MaDanhMuc',
                'TenSanPham' => 'required',
                'GiaSP' => 'required|numeric',
                'GiamGia' => 'nullable|numeric',
                'HinhAnh' => 'required',
                'MoTa' => 'required',
                'SoLuong' => 'required|integer',
                'LuotXem' => 'nullable|integer',
                'LuotBan' => 'nullable|integer',
                'ThoiGian' => 'nullable|date',
                'TrangThai' => 'nullable|integer'
            ], [
                'MaDanhMuc.required' => 'Vui lòng nhập mã danh mục',
                'MaDanhMuc.exists' => 'Danh mục không tồn tại',
                'TenSanPham.required' => 'Vui lòng nhập tên sản phẩm',
                'GiaSP.required' => 'Vui lòng nhập giá sản phẩm',
                'HinhAnh.required' => 'Vui lòng nhập ảnh',
                'MoTa.required' => 'Vui lòng nhập mô tả'
            ]);

            $product = SanPham::findOrFail($MaSP);
            $product->update($validatedData);

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
    } */

    /**
     * Remove the specified resource from storage.
     */


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
        //DELETE
        try {
            $product = SanPham::findOrFail($MaSP);
            $product->delete();
            return response()->json([
                'status' => "success",
                'message' => 'Xóa thành công',
                'data' => null,
            ], 204);
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
     *     path="/api/products/reseach",
     *     tags={"SanPham"},
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
     *         response=201,
     *         description="Kết quả tìm kiếm",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="success"),
     *             @OA\Property(property="products", type="object")
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Lỗi khi tìm kiếm sản phẩm",
     *         @OA\JsonContent(
     *             @OA\Property(property="status", type="string", example="fail"),
     *         )
     *     )
     * )
     */
    public function reseachproduct(Request $request)
    {
        // Validate dữ liệu đầu vào
        $validator = Validator::make($request->all(), [
            'TenSanPham' => 'required|string|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        } else {
        $products = SanPham::search($request->TenSanPham);
        return response()->json([
            'status' => "success",
            'products' => $products,
        ], 200);
        }
    }


}
