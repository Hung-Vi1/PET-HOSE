<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\DanhMuc;
use App\Models\SanPham;
use App\Models\DonHang;
use App\Models\LienHe;
use App\Models\BaiViet;
use App\Models\DanhMucBaiViet;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Tạo dữ liệu mẫu cho danh mục
        $danhMucs = [

            // danh mục chính
            ['MaDanhMuc' => '1', 'TenDM' => 'Chó cảnh', 'parent_id' => null, 'loai' => '0'],
            ['MaDanhMuc' => '2', 'TenDM' => 'Mèo cảnh', 'parent_id' => null, 'loai' => '0'],

            // danh mục con của chó
            ['MaDanhMuc' => '3', 'TenDM' => 'Thức ăn cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '4', 'TenDM' => 'Phụ kiện cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '5', 'TenDM' => 'Khay vệ sinh cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '6', 'TenDM' => 'Tã cho chó, Bỉm cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '7', 'TenDM' => 'Miếng lót vệ sinh cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '8', 'TenDM' => 'Lồng chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '9', 'TenDM' => 'Nhà cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '10', 'TenDM' => 'Chuồng chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '11', 'TenDM' => 'Quây chó, Hàng rào chắn chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '12', 'TenDM' => 'Nệm cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '13', 'TenDM' => 'Bình nước, Bát ăn cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '14', 'TenDM' => 'Đồ chơi cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '15', 'TenDM' => 'Vật dụng chăm sóc chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '16', 'TenDM' => 'Sữa tắm cho chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '17', 'TenDM' => 'Lược chải lông chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '18', 'TenDM' => 'Kềm cắt móng chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '19', 'TenDM' => 'Máy sấy lông chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '20', 'TenDM' => 'Tông đơ cắt lông chó', 'parent_id' => 1, 'loai' => '0'],
            ['MaDanhMuc' => '21', 'TenDM' => 'Thuốc thú y cho chó', 'parent_id' => 1, 'loai' => '0'],


            // danh mục con của mèo
            ['MaDanhMuc' => '22', 'TenDM' => 'Thức ăn cho mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '23', 'TenDM' => 'Lồng mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '24', 'TenDM' => 'Phụ kiện cho mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '25', 'TenDM' => 'Khay vệ sinh, Nhà vệ sinh cho mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '26', 'TenDM' => 'Cát mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '27', 'TenDM' => 'Máy lọc nước cho mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '28', 'TenDM' => 'Bát ăn cho mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '29', 'TenDM' => 'Đệm cho mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '30', 'TenDM' => 'Đồ chơi cho mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '31', 'TenDM' => 'Vật dụng chăm sóc mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '32', 'TenDM' => 'Sữa tắm cho mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '33', 'TenDM' => 'Lược chải lông mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '34', 'TenDM' => 'Kìm cắt móng mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '35', 'TenDM' => 'Nhà cho mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '36', 'TenDM' => 'Chuồng mèo', 'parent_id' => 2, 'loai' => '0'],
            ['MaDanhMuc' => '37', 'TenDM' => 'Thuốc thú y cho mèo', 'parent_id' => 2, 'loai' => '0'],
        ];

        foreach ($danhMucs as $danhMuc) {
            DanhMuc::create($danhMuc);
        }

        // Tạo dữ liệu mẫu cho sản phẩm
        $sanPhams = [
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Xương cho chó gặm sạch răng VEGEBRAND 360 Bone Prevent Tartar',
                'GiaSP' => 10000,
                'GiamGia' => 0,
                'MoTa' => 'Thành phần dinh dưỡng Xương cho chó gặm sạch răng VEGEBRAND 360 Bone Prevent Tartar với các thành phần như ngũ cốc, thịt và động vật. Dẫn xuất có nguồn gốc thực vật, rau, khoáng chất. Vitamin E. Feroh Sulphate Monohydrate, Zinc Sulphate Monohydrate, Mangan Sulphate Monohydrate. Màu sắc, hương vị, chất bảo quản.
                            Phân tích đảm bảo: Protein thô (tối thiểu) 10%. Chất béo thô (tối thiểu) 0,4%. Sợi thô (tối đa) 4%. Tro (tối đa) 5%. Độ ẩm (tối đa) 16%. Canxi (tối thiểu) 0,05%. Photpho (tối thiểu) 0,04%. Natri (tối thiểu) 0,02%.
                        ',
                'SoLuong' => 100,
                'HinhAnh' => 'xuong-cho-cho-gam-sach-rang-vegebrand-360-bone-prevent-tartar-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Thức ăn cho chó con cỡ nhỏ ROYAL CANIN Mini Puppy',
                'GiaSP' => 250000,
                'GiamGia' => 20000,
                'MoTa' => 'Thức ăn cho chó con cỡ nhỏ ROYAL CANIN Mini Puppy dành cho các giống chó con dưới 10 tháng tuổi. Với công thức đặc chế riêng cho nhu cầu dinh dưỡng của chó con thuộc các giống cỡ nhỏ. Thức ăn cho chó con (các giống chó cỡ nhỏ) được nghiên cứu để cung cấp dinh dưỡng theo nhu cầu thực tế của chó con.
                            Duy trì sức đề kháng cho chó con: chất chống oxy hóa CELT. Hỗ trợ hệ tiêu hóa hoạt động ổn định: L.I.P, đường FOS. Cung cấp dinh dưỡng toàn diện cho chó: chế biến theo công thức cung cấp năng lượng cao.',
                'SoLuong' => 100,
                'HinhAnh' => 'thuc-an-cho-cho-con-co-nho-royal-canin-mini-puppy1-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Bánh thưởng cho chó vị thịt bò VEGEBRAND Orgo Freshening Biscuit Bacon Beef',
                'GiaSP' => 25000,
                'GiamGia' => 4000,
                'MoTa' => 'Bánh thưởng cho chó vị thịt bò VEGEBRAND Orgo Freshening Biscuit Bacon Beef có tác dụng làm sạch răng cho chó vị thịt bò. Sản phẩm có chứa các thành phần bạc hà tự nhiên kết hợp với hương vị thịt bò, có khả năng loại bỏ các vi khuẩn gây hôi miệng cho chú chó của bạn một cách nhanh chóng. Sản phẩm có thể kết hợp dùng để huấn luyện.',
                'SoLuong' => 100,
                'HinhAnh' => 'banh-thuong-cho-cho-vi-thit-bo-vegebrand-orgo-freshening-biscuit-bacon-beef-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Pate cho chó vị thịt bò IRIS OHYAMA One Care Beef',
                'GiaSP' => 35000,
                'GiamGia' => 0,
                'MoTa' => 'Pate cho chó vị thịt bò IRIS OHYAMA One Care Beef là sản phẩm dành cho tất cả giống chó. Với thành phần hoàn toàn từ tự nhiên và thịt bò.',
                'SoLuong' => 100,
                'HinhAnh' => 'pate-cho-cho-vi-thit-bo-iris-one-care-beef100g-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Pate cho chó nước sốt vị thịt bò PEDIGREE Pouch Beef',
                'GiaSP' => 25000,
                'GiamGia' => 0,
                'MoTa' => 'Pate cho chó nước sốt vị thịt bò PEDIGREE Pouch Beef với hương vị kích thích dành cho cún biếng ăn, có thể trộn với cơm, hạt khô để tạo mùi cho thức ăn. Ngoài ra trong trường hợp không có thức ăn sẵn cho vật nuôi, có thể dùng để cho cún ăn trực tiếp.',
                'SoLuong' => 100,
                'HinhAnh' => 'pate-cho-cho-nuoc-sot-vi-thit-bo-pedigree-pouch-beef-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Thức ăn cho chó Poodle con ROYAL CANIN Poodle Puppy',
                'GiaSP' => 185000,
                'GiamGia' => 0,
                'MoTa' => 'Thức ăn cho chó Poodle con ROYAL CANIN Poodle Puppy dành riêng cho tất cả các giống chó Teacup, Tiny Poodle, Toy Poodle, Standard Poodle dưới 10 tháng tuổi.',
                'SoLuong' => 100,
                'HinhAnh' => 'thuc-an-cho-cho-poodle-con-royal-canin-poodle-puppy1-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Xương cho chó vị thịt bò VEGEBRAND Orgo Nutrients Beef',
                'GiaSP' => 25000,
                'GiamGia' => 0,
                'MoTa' => 'Xương cho chó vị thịt bò VEGEBRAND Orgo Nutrients Beef dành cho các giống chó có kích thước trung bình có chứa vị thịt bò.',
                'SoLuong' => 100,
                'HinhAnh' => 'xuong-cho-cho-vi-thit-bo-le-vegebrand-orgo-nutrients-beef-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Xương Canxi cho chó VEGEBRAND Orgo High Calcium Cheese',
                'GiaSP' => 50000,
                'GiamGia' => 0,
                'MoTa' => 'Xương Canxi cho chó VEGEBRAND Orgo High Calcium Cheese có hàm lượng canxi cao, đáp ứng tốt cho mọi giống chó ở mọi độ tuổi khác nhau. Với thành phần pho mát chất lượng cao từ nguyên liệu thô cùng công thức sữa thơm ngon có hàm lượng canxi cao giúp cho sự phát triển xương tốt hơn, răng chắc khỏe, loại bỏ mảng bám cao răng, giúp răng trắng hơn, không gây mùi hôi khó chịu và cải thiện khả năng gặm – nhai của cún cưng.',
                'SoLuong' => 100,
                'HinhAnh' => 'xuong-canxi-cho-cho-vegebrand-orgo-high-calcium-cheese.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS OHYAMA Benefit For Eyes & Liver',
                'GiaSP' => 35000,
                'GiamGia' => 0,
                'MoTa' => 'Pate cho chó hỗ trợ chức năng gan và sáng mắt IRIS OHYAMA Benefit For Eyes & Liver là sản phẩm dành cho tất cả giống chó. Với thành phần hoàn toàn từ tự nhiên.',
                'SoLuong' => 100,
                'HinhAnh' => 'pate-cho-cho-ho-tro-chuc-nang-gan-va-sang-mat-iris-benefit-for-eyes-liver-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Xương gặm cho chó Poodle VEGEBRAND 360 For Poodles Bone',
                'GiaSP' => 50000,
                'GiamGia' => 0,
                'MoTa' => 'Xương gặm cho chó Poodle VEGEBRAND 360 For Poodles Bone vị thịt vịt phù hợp với giống chó Poodle trong mọi giai đoạn phát triển.',
                'SoLuong' => 100,
                'HinhAnh' => 'xuong-gam-cho-cho-poodle-vegebrand-360-for-poodles-bone-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Thức ăn cho chó Poodle MKB All Life Stages Formula Nutrition',
                'GiaSP' => 315000,
                'GiamGia' => 0,
                'MoTa' => 'Thức ăn cho chó Poodle MKB All Life Stages Formula Nutrition, dành riêng cho chó Poodle, bao gồm tất cả các giai đoạn phát triển.',
                'SoLuong' => 100,
                'HinhAnh' => 'thuc-an-cho-cho-poodle-mkb-all-life-stages-formula-nutrition-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 3, // iPhone
                'TenSanPham' => 'Pate cho chó hỗ trợ hệ tiêu hóa IRIS OHYAMA Benefit For Enteric Canal',
                'GiaSP' => 35000,
                'GiamGia' => 0,
                'MoTa' => 'Pate cho chó hỗ trợ hệ tiêu hóa IRIS OHYAMA Benefit For Enteric Canal là sản phẩm dành cho tất cả giống chó.',
                'SoLuong' => 100,
                'HinhAnh' => 'pate-cho-cho-ho-tro-he-tieu-hoa-iris-benefit-for-enteric-canal-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],




            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Vòng cổ chó mèo kèm dây dắt cỡ mini HAND IN HAND',
                'GiaSP' => 70000,
                'GiamGia' => 0,
                'MoTa' => 'Vòng cổ chó mèo kèm dây dắt cỡ mini Hand In Hand được làm bằng chất liệu 100% nylon cao cấp, cực bền, cực chắc. Dành cho những chú chó cỡ nhỏ, chó mèo con.',
                'SoLuong' => 100,
                'HinhAnh' => 'vong-co-cho-meo-kem-day-dat-co-mini-hand-in-hand-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Chuông lục lạc cho chó mèo PAW nhiều sắc màu',
                'GiaSP' => 10000,
                'GiamGia' => 0,
                'MoTa' => 'Chuông lục lạc cho chó mèo PAW nhiều sắc màu với đầy đủ sắc màu và kích cỡ khác nhau. Phù hợp với tất cả các giống chó mèo.',
                'SoLuong' => 100,
                'HinhAnh' => 'chuong-luc-lac-cho-cho-meo-paw-nhieu-sac-mau-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Rọ mõm chó hình mỏ vịt PAW Aduck',
                'GiaSP' => 75000,
                'GiamGia' => 0,
                'MoTa' => 'Rọ mõm chó hình mỏ vịt PAW Aduck là sản phẩm dành cho tất cả giống chó.',
                'SoLuong' => 100,
                'HinhAnh' => 'ro-mom-cho-hinh-mo-vit-paw-aduck-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Vòng cổ chó mèo kèm dây dắt cỡ bé HAND IN HAND',
                'GiaSP' => 80000,
                'GiamGia' => 0,
                'MoTa' => 'Vòng cổ chó mèo kèm dây dắt cỡ bé HAND IN HAND được làm bằng chất liệu 100% nylon cao cấp, cực bền, cực chắc.',
                'SoLuong' => 100,
                'HinhAnh' => 'vong-co-cho-meo-kem-day-dat-co-be-hand-in-hand-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Xích cho chó kèm vòng cổ HAND IN HAND Reflective Collar Leash',
                'GiaSP' => 200000,
                'GiamGia' => 0,
                'MoTa' => 'Xích cho chó kèm vòng cổ HAND IN HAND Reflective Collar Leash là sản phẩm dành cho tất cả giống chó.',
                'SoLuong' => 100,
                'HinhAnh' => 'xich-cho-cho-kem-vong-co-hand-in-hand-reflective-collar-leash-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Rọ mõm chó bằng da HAND IN HAND Dog Muzzle',
                'GiaSP' => 75000,
                'GiamGia' => 0,
                'MoTa' => 'Rọ mõm cho chó bằng da HAND IN HAND Dog Muzzle là sản phẩm dành cho tất cả giống chó.',
                'SoLuong' => 100,
                'HinhAnh' => 'ro-mom-cho-cho-gia-da-hand-in-hand-dog-muzzle-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Bảng tên cho chó mèo PAW Quick-Tag Pet ID',
                'GiaSP' => 50000,
                'GiamGia' => 0,
                'MoTa' => 'Bảng tên cho chó mèo PAW Quick-Tag Pet ID sử dụng công nghệ sản xuất tiên tiến hình cục xương rất đáng yêu. Kích thước size nhỏ 4×2 cm.',
                'SoLuong' => 100,
                'HinhAnh' => 'bang-ten-cho-cho-meo-paw-quick-tag-pet-id-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Xích cho chó đai ngực cỡ mini HAND IN HAND',
                'GiaSP' => 80000,
                'GiamGia' => 0,
                'MoTa' => 'Xích cho chó đai ngực Hand In Hand là sản phẩm dành cho tất cả giống chó cỡ mini.',
                'SoLuong' => 100,
                'HinhAnh' => 'xich-cho-cho-dai-nguc-co-mini-hand-in-hand-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Chuông lục lạc cho chó mèo PAW hình mặt đáng yêu',
                'GiaSP' => 25000,
                'GiamGia' => 0,
                'MoTa' => 'Chuông lục lạc cho chó mèo PAW hình mặt đáng yêu. Với đầy đủ sắc màu và kích cỡ khác nhau. Phù hợp với tất cả các giống chó mèo.',
                'SoLuong' => 100,
                'HinhAnh' => 'chuong-luc-lac-cho-cho-meo-paw-hinh-mat-dang-yeu-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Xích cho chó đai ngực cỡ bé HAND IN HAND',
                'GiaSP' => 100000,
                'GiamGia' => 0,
                'MoTa' => 'Xích cho chó đai ngực HAND IN HAND là sản phẩm dành cho tất cả giống chó cỡ bé.',
                'SoLuong' => 100,
                'HinhAnh' => 'xich-cho-cho-dai-nguc-co-be-hand-in-hand-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Vòng cổ cho chó cỡ nhỏ PAW bằng da đính cườm cao cấp',
                'GiaSP' => 170000,
                'GiamGia' => 0,
                'MoTa' => 'Vòng cổ cho chó cỡ nhỏ PAW bằng da đính cườm cao cấp là sản phẩm dành cho tất cả giống chó cỡ nhỏ.',
                'SoLuong' => 100,
                'HinhAnh' => 'vong-co-cho-cho-co-nho-paw-bang-da-dinh-cuom-cao-cap-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 4, // iPhone
                'TenSanPham' => 'Dây dắt chó mèo đi dạo tự cuốn DELE 009 Retractable Leash',
                'GiaSP' => 175000,
                'GiamGia' => 0,
                'MoTa' => 'Dây dắt chó mèo đi dạo tự cuốn DELE 009 Retractable Leash là sản phẩm phù hợp cho những giống chó dưới 40kg.',
                'SoLuong' => 100,
                'HinhAnh' => 'dat-cho-meo-di-dao-tu-cuon-dele-009-retractable-leash-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],





            [
                'MaDanhMuc' => 5,
                'TenSanPham' => 'Khay vệ sinh cho chó MAKAR Dog Toilet Trays Small',
                'GiaSP' => 220000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho chó MAKAR Dog Toilet Trays Small với thiết kế thông minh được làm từ 100% nhựa tổng hợp cao cấp an toàn với thú cưng và môi trường. Phù hợp với tất cả các giống chó và giới tính đực cái có trọng lượng dưới 5kg.',
                'SoLuong' => 100,
                'HinhAnh' => 'khay-ve-sinh-cho-cho-makar-dog-toilet-trays-small-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 5,
                'TenSanPham' => 'Xẻng xúc phân chó mèo PAW bằng nhựa cao cấp đủ màu',
                'GiaSP' => 40000,
                'GiamGia' => 0,
                'MoTa' => 'Xẻng xúc phân chó mèo PAW bằng nhựa cao cấp đủ màu Plastic Black Cat Litter Scoop với nhiều màu sắc khác nhau cho bạn lựa chọn. Màu sắc đen, xanh nước biển, xanh lá cây, hồng. Kích thước 26.5 cm.',
                'SoLuong' => 100,
                'HinhAnh' => 'xeng-xuc-phan-cho-meo-soleil-bang-nhua-cao-cap-du-mau.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 5,
                'TenSanPham' => 'Khay vệ sinh cho chó thành cao IRIS OHYAMA TRT500',
                'GiaSP' => 395000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho chó thành cao IRIS OHYAMA TRT500 với thiết kế hình vuông nhỏ gọn, thuận tiện cho việc cún cưng đi vệ sinh. Sử dụng chất liệu nhựa tổng hợp chất lượng cao. Có tính đàn hồi giúp chó mèo dẫm lên cảm thấy thoải mái. Phù hợp với tất cả các giống chó mèo, giới tính đực và cái.',
                'SoLuong' => 100,
                'HinhAnh' => 've-sinh-cho-cho-thanh-cao-iris-trt500-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 5,
                'TenSanPham' => 'Khay vệ sinh cho chó đi đúng chỗ IRIS OHYAMA FTT',
                'GiaSP' => 245000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho chó đi đúng chỗ IRIS OHYAMA FTT sử dụng chất liệu nhựa tổng hợp chất lượng cao. Có tính đàn hồi giúp chó mèo dẫm lên cảm thấy thoải mái. Khay hướng dẫn chó đi vệ sinh đúng chỗ trong nhà với màu sắc đa dạng, bền và chịu lực tốt, tuổi thọ dài. Sử dụng kết hợp với nước xịt hướng dẫn vệ sinh đúng chỗ đảm bảo sẽ huấn luyện cún cưng thành công 100%.',
                'SoLuong' => 100,
                'HinhAnh' => 'khay-ve-sinh-cho-cho-di-dung-cho-iris-ftt-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 5,
                'TenSanPham' => 'Khay vệ sinh cho chó thành cao SAWYER PET Toilet',
                'GiaSP' => 280000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho chó thành cao SAWYER PET Toilet giúp bạn huấn luyện chó cưng đi vệ sinh đúng chỗ quy định. Thiết kế nhỏ gọn phù hợp với không gian của mọi gia đình. Thích hợp với tất cả các giống chó mèo lớn, nhỏ, đực và cái.',
                'SoLuong' => 100,
                'HinhAnh' => 've-sinh-cho-cho-thanh-cao-sawyer-pet-toilet-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 5,
                'TenSanPham' => 'Khay vệ sinh cho chó thành cao IRIS OHYAMA TRT650',
                'GiaSP' => 495000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho chó thành cao IRIS OHYAMA TRT650 với thiết kế hình vuông nhỏ gọn, thuận tiện cho việc cún cưng đi vệ sinh. Phù hợp với các giống chó lớn nhỏ khác nhau như Poodle, Phốc, Phốc sóc…',
                'SoLuong' => 100,
                'HinhAnh' => 've-sinh-cho-cho-thanh-cao-iris-trt650-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 5,
                'TenSanPham' => 'Khay vệ sinh cho chó MAKAR Dog Toilet Trays Medium',
                'GiaSP' => 290000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho chó MAKAR Dog Toilet Trays Medium với thiết kế thông minh được làm từ 100% nhựa tổng hợp cao cấp an toàn với thú cưng và môi trường. Phù hợp với tất cả các giống chó và giới tính đực cái có trọng lượng dưới 10kg.',
                'SoLuong' => 100,
                'HinhAnh' => 'khay-ve-sinh-cho-cho-makar-dog-toilet-trays-medium-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 5,
                'TenSanPham' => 'Khay vệ sinh cho chó MAKAR Dog Toilet Trays Large',
                'GiaSP' => 365000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho chó MAKAR Dog Toilet Trays Large với thiết kế thông minh được làm từ 100% nhựa tổng hợp cao cấp an toàn với thú cưng và môi trường. Phù hợp với tất cả các giống chó và giới tính đực cái có trọng lượng dưới 20kg.',
                'SoLuong' => 100,
                'HinhAnh' => 'khay-ve-sinh-cho-cho-makar-dog-toilet-trays-large-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],


            [
                'MaDanhMuc' => 22,
                'TenSanPham' => 'Pate cho mèo vị cá ngừ nguyên chất CAT SEA FISH Pure Tuna Meat',
                'GiaSP' => 30000,
                'GiamGia' => 0,
                'MoTa' => 'Pate cho mèo vị cá ngừ nguyên chất CAT SEA FISH Pure Tuna Meat là thức ăn dinh dưỡng cho mèo phù hợp với tất cả các giống và độ tuổi.',
                'SoLuong' => 100,
                'HinhAnh' => 'pate-cho-meo-vi-ca-ngu-nguyen-chat-cat-sea-fish-pure-tuna-meat-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 22,
                'TenSanPham' => 'Thức ăn cho mèo con ROYAL CANIN Kitten',
                'GiaSP' => 130000,
                'GiamGia' => 0,
                'MoTa' => 'Thức ăn cho mèo con ROYAL CANIN Kitten dành riêng cho mèo con dưới 12 tháng tuổi.',
                'SoLuong' => 100,
                'HinhAnh' => 'thuc-an-cho-meo-con-royal-canin-kitten1-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 22,
                'TenSanPham' => 'Pate cho mèo vị nước sốt cá ngừ WHISKAS Tuna Flavour Sauce',
                'GiaSP' => 25000,
                'GiamGia' => 0,
                'MoTa' => 'Pate cho mèo vị nước sốt cá ngừ WHISKAS Tuna Flavour Saucevới nhiều hương vị thơm ngon đặc trưng dành riêng cho mèo. Thực phẩm có tác dụng cân bằng dinh dưỡng hàng ngày, lựa chọn những thành phần thịt – cá tươi ngon nhất trong chế biến, giàu protein, các vitamin & khoáng chất thiết yếu và không có chất bảo quản.',
                'SoLuong' => 100,
                'HinhAnh' => 'pate-cho-meo-vi-nuoc-sot-ca-ngu-whiskas-tuna-flavour-sauce1-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 22,
                'TenSanPham' => 'Pate cho mèo CIAO Tuna & Whitebait vị cá ngừ và cá chạch trắng',
                'GiaSP' => 20000,
                'GiamGia' => 0,
                'MoTa' => 'Pate cho mèo CIAO Tuna & Whitebait vị cá ngừ và cá chạch trắng dạng gói.',
                'SoLuong' => 100,
                'HinhAnh' => 'pate-cho-meo-ciao-tuna-whitebait-ca-ngu-va-ca-chach-trang-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 22,
                'TenSanPham' => 'Thức ăn cho mèo trưởng thành ROYAL CANIN Indoor 27',
                'GiaSP' => 125000,
                'GiamGia' => 0,
                'MoTa' => 'Thức ăn cho mèo trưởng thành ROYAL CANIN Indoor 27 dành cho tất cả giống mèo sống trong nhà trên 12 tháng (Royal Canin Adult 1 tuổi).',
                'SoLuong' => 100,
                'HinhAnh' => 'thuc-an-cho-meo-truong-thanh-royal-canin-indoor-27-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 22,
                'TenSanPham' => 'Bình sữa cho chó mèo sơ sinh BOBO Pet Milk Bottle',
                'GiaSP' => 50000,
                'GiamGia' => 0,
                'MoTa' => 'Bình sữa cho chó mèo sơ sinh BOBO Pet Milk Bottle được thiết kế độc đáo với núm vú giả hoàn toàn phù hợp với đặc tính sinh lý của chó mèo. Do miệng mèo con, chó con nhỏ hơn của trẻ em sơ sinh rất nhiều, khi cho mèo con, chó con uống sữa phải sử dụng thiết kế miệng nhỏ. Sau khi sử dụng có thể dùng bàn chải trong gói làm  sạch bình sữa. Sản phẩm này rất thích hợp cho chó mới sinh, khi sữa của chó mẹ không đủ có thể dùng sản phầm này đựng sữa cho chó con, khi chó con bị bệnh cũng sử dụng để cho uống thuốc.',
                'SoLuong' => 100,
                'HinhAnh' => 'binh-sua-cho-cho-meo-so-sinh-bobo-pet-milk-bottle-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 22,
                'TenSanPham' => 'Pate cho mèo mẹ và mèo con CATIDEA Mother & Baby Cat',
                'GiaSP' => 30000,
                'GiamGia' => 0,
                'MoTa' => 'Sản phẩm được làm từ nguyên liệu hoàn toàn tự nhiên. Bao gồm nhiều loại trái cây và rau củ. Không cho thêm ngũ cốc và tinh bột. Thành phần dinh dưỡng chính bao gồm: nước, thịt gà, cá ngừ, cá hồi, thịt bò, cà rốt, miền nam: dưa, cá tươi, cá mòi, dầu nành, Gelatin, Vitamin và khoáng chất, nước sốt, Choline Chloride.',
                'SoLuong' => 100,
                'HinhAnh' => 'pate-cho-meo-me-va-meo-con-catidea-mother-baby-cat-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 22,
                'TenSanPham' => 'Pate cho mèo vị cá ngừ thanh cua CAT SEA FISH Tuna Surimi',
                'GiaSP' => 30000,
                'GiamGia' => 0,
                'MoTa' => 'CAT SEA FISH Tuna With Surimi không đơn giản chỉ ngon và giá trị dinh dưỡng cao. Thanh cua có cấu trúc linh hoạt, có chứa một lượng lớn các sợi protein. Trở thành một thành phần dinh dưỡng tốt.

Protein của pate là protein chất lượng tốt, tỉ lệ hấp thụ cao. Giàu thiamine, riboflavin, niacin, vitamin D và một lượng Canxi, phốt pho, sắt nhất định và các khoáng chất khác. Hàm lượng chất béo thấp, nhưng các axit béo có trong lại có vai trò tránh hạ đường huyết. Bảo vệ tim mạch và phòng chống ung thư. Thịt cá giàu vitamin D, canxi, phốt pho, và có hiệu quả chống loãng xương. Sản phẩm sẽ làm cho chú mèo của bạn ngon miệng hơn.

',
                'SoLuong' => 100,
                'HinhAnh' => 'pate-cho-meo-vi-ca-ngu-thit-cua-cat-sea-fish-tuna-surimi-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],


            [
                'MaDanhMuc' => 23,
                'TenSanPham' => 'Túi đựng chó mèo ANIME hình họa tiết White Cats',
                'GiaSP' => 300000,
                'GiamGia' => 0,
                'MoTa' => 'Túi đựng chó mèo ANIME hình họa tiết White Cats phù hợp với tất cả giống chó và mèo.

Lợi ích chính
Túi đựng chó mèo ANIME hình họa tiết White Cats được dùng khi ra đường, đi chơi rất tiện lợi, an toàn và tạo cảm giác thoải mái cho vật nuôi.
Chất liệu túi không thấm nước và dễ làm vệ sinh làm sạch. Dễ dàng tháo gấp gọn lại khi cần.
Màu sắc, kích thước & kiểu dáng đa dạng để khách hàng lựa chọn.',
                'SoLuong' => 100,
                'HinhAnh' => 'tui-dung-cho-meo-anime-hinh-hoa-tiet-white-cats.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 23,
                'TenSanPham' => 'Túi đựng chó mèo ANIME dạng lưới',
                'GiaSP' => 330000,
                'GiamGia' => 0,
                'MoTa' => 'Túi đựng chó mèo ANIME dạng lưới phù hợp với tất cả giống chó và mèo.

Lợi ích chính
Túi đựng chó mèo ANIME dạng lưới được sử dụng khi ra đường, đi chơi rất tiện lợi, an toàn và tạo cảm giác thoải mái cho vật nuôi
Chất liệu túi không thấm nước và dễ làm vệ sinh làm sạch. Dễ dàng tháo gấp gọn lại khi cần
Sản phẩm có 3 màu xanh, hồng và đen để bạn lựa chọn theo sở thích.',
                'SoLuong' => 100,
                'HinhAnh' => 'tui-dung-cho-meo-anime-dang-luoi-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 23,
                'TenSanPham' => 'Túi đựng chó mèo ANIME hình họa tiết Dark Cats',
                'GiaSP' => 300000,
                'GiamGia' => 0,
                'MoTa' => 'Túi đựng chó mèo ANIME hình họa tiết Dark Cats phù hợp với tất cả giống chó và mèo.

Lợi ích chính
Túi đựng chó mèo ANIME hình họa tiết Dark Cats được dùng khi ra đường, đi chơi rất tiện lợi, an toàn và tạo cảm giác thoải mái cho vật nuôi.
Chất liệu túi không thấm nước và dễ làm vệ sinh làm sạch. Dễ dàng tháo gấp gọn lại khi cần.
Màu sắc, kích thước & kiểu dáng đa dạng để khách hàng lựa chọn.',
                'SoLuong' => 100,
                'HinhAnh' => 'tui-dung-cho-meo-anime-hinh-hoa-tiet-dark-cats-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 23,
                'TenSanPham' => 'Lồng vận chuyển chó mèo AUPET BP27 Pet Kennel',
                'GiaSP' => 600000,
                'GiamGia' => 0,
                'MoTa' => 'Lồng vận chuyển chó mèo AUPET BP27 Kennel với tiêu chuẩn an toàn quốc tế, phù hợp với các yêu cầu của hàng không trong quy định về vận chuyển vật nuôi. Sản phẩm được giải thương hiệu công nghiệp vật nuôi đáng tin cậy năm 2010 tại Đức. Lồng vận chuyển hàng không cho chó mèo sử dụng nguyên liệu nhựa PP ABS không mùi nhập khẩu có khả năng chịu được trọng lượng lớn, người trưởng thành đứng lên trên lồng cũng không có vấn đề gì.

Sản phẩm với thiết kế luồng khí tuần hoàn thông gió mạnh nhiều lỗ không khí đối lưu ở mọi nơi trong lồng. Thiết kế cửa bên với chất liệu chống ăn mòn, chống axit, chịu được ma sát, khó bị gỉ. Rất an toàn khi sử dụng và có độ bền cao. Sản phẩm được thiết kế tay cầm sẽ không khiến mỏi tay khi xách thời gian dài cùng với bánh xe trượt khóa an toàn.',
                'SoLuong' => 100,
                'HinhAnh' => 'long-van-chuyen-cho-meo-aupet-bp27-pet-kennel-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 23,
                'TenSanPham' => 'Balo đựng chó mèo dáng hộp mặt lưới LOFFE Pet Space Backpack',
                'GiaSP' => 565000,
                'GiamGia' => 0,
                'MoTa' => 'Balo đựng chó mèo dáng hộp mặt lưới LOFFE Pet Space Backpack là sản phẩm túi vũ trụ phi hành gia dùng để vận chuyển, mang, đựng các giống thú cưng như chó, mèo, thỏ, hamster cỡ vừa và nhỏ. Có thể đeo phía trước ngực, sau lưng hoặc xách tay tùy ý.',
                'SoLuong' => 100,
                'HinhAnh' => 'balo-dung-cho-meo-dang-hop-mat-luoi-loffe-pet-space-backpack123-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 23,
                'TenSanPham' => 'Balo đựng chó mèo phi hành gia LOFFE Outdoor Transparent',
                'GiaSP' => 535000,
                'GiamGia' => 0,
                'MoTa' => 'Balo đựng chó mèo phi hành gia LOFFE Outdoor Transparent là sản phẩm túi vũ trụ dùng để vận chuyển, mang, đựng các giống thú cưng như chó, mèo, thỏ, hamster cỡ vừa và nhỏ. Sản phẩm có kèm 2 nắp: 1 nắp cầu lồi để thú cưng nhìn được ra bên ngoài, 1 nắp nhựa để lấy thoáng cho balo.',
                'SoLuong' => 100,
                'HinhAnh' => 'balo-dung-cho-meo-phi-hanh-gia-loffe-outdoor-transparent-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 23,
                'TenSanPham' => 'Balo phi hành gia cho chó mèo LOFFE The U-Pet Backpack',
                'GiaSP' => 435000,
                'GiamGia' => 0,
                'MoTa' => 'Balo phi hành gia cho chó mèo LOFFE The U-Pet Backpack phù hợp với tất cả giống chó và mèo có trọng lượng dưới 15kg.

Lợi ích chính
Balo phi hành gia cho chó mèo LOFFE The U-Pet Backpack là một sản phẩm hoàn toàn mới sản xuất trong năm 2016 dành riêng cho thú cưng.
Tạo nên một không gian thú vị và an toàn hơn cho vật nuôi. Cho phép thú cưng tận hưởng ánh nắng mặt trời, phong cảnh và tương tác với thế giới bên ngoài.
Vận chuyển thú cưng đi chơi, đi du lịch với sản phẩm này bạn sẽ cảm thấy hạnh phúc ngoài sức tưởng tượng của chính bạn. Những chú mèo thích nó. Chó cũng sẽ thích nó. Và bạn cũng sẽ rất thích nó.
Sản phẩm được tích hợp dây xích an toàn, tấm lưới lỗ thông gió, lót mềm mại tạo cho thú cưng cảm giác thoải mái, tiện lợi và an toàn.
Chất liệu không gây độc hại: Cotton, ABS, PC, Polyester, EPE, Acrylic… hoàn toàn có thể giặt trong nước ấm và xà phòng.
Màu sắc: xanh lá cây, xanh biển, vàng, hồng.',
                'SoLuong' => 100,
                'HinhAnh' => 'balo-phi-hanh-gia-cho-cho-meo-loffe-the-u-pet-backpack11-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 23,
                'TenSanPham' => 'Balo đựng chó mèo phi hành gia LOFFE Panoramic',
                'GiaSP' => 525000,
                'GiamGia' => 0,
                'MoTa' => 'Balo đựng chó mèo phi hành gia LOFFE Panoramic là sản phẩm túi vũ trụ dùng để vận chuyển, mang, đựng các giống thú cưng như chó, mèo, thỏ, hamster cỡ vừa và nhỏ. Sản phẩm có kèm sẵn 2 nắp cầu lồi và lắp lấy gió.

Lợi ích chính
Tạo nên một không gian thú vị và an toàn hơn cho vật nuôi. Cho phép thú cưng tận hưởng ánh nắng mặt trời, phong cảnh và tương tác với thế giới bên ngoài.
Vận chuyển thú cưng đi chơi, đi du lịch với sản phẩm này bạn sẽ cảm thấy hạnh phúc ngoài sức tưởng tượng của chính bạn.
Sản phẩm được tích hợp dây xích an toàn, tấm lưới lỗ thông gió, lót mềm mại tạo cho thú cưng cảm giác thoải mái, tiện lợi và an toàn.
Chất liệu không gây độc hại: Cotton, ABS, PC, Polyester, EPE, Acrylic… hoàn toàn có thể giặt trong nước ấm và xà phòng.
Balo đựng chó mèo phi hành gia LOFFE Panoramic được thiết kế nhiều lỗ thông khí giúp cho thú cưng một không gian thoải mái. Sản phẩm có nhiều màu sắc để lựa chọn.',
                'SoLuong' => 100,
                'HinhAnh' => 'balo-dung-cho-meo-phi-hanh-gia-loffe-panoramic-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],





            [
                'MaDanhMuc' => 25,
                'TenSanPham' => 'Khay vệ sinh cho mèo MAKAR Cat Litter Station',
                'GiaSP' => 250000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho mèo MAKAR Cat Litter Station phù hợp cho mèo con và các giống mèo cỡ nhỏ. Màu sắc: nâu cà phê, xanh biển, hồng, trắng kem. Kích thước: 46 x 36,3 x 11cm. Với kích thước nhỏ gọn, không chiếm diện tích quá lớn. Sản phẩm có độ bền cao, hình thức đẹp, màu sắc đa dạng.

Lợi ích chính
Khay vệ sinh cho mèo MAKAR Cat Litter Station chuyên dùng cho mèo con trên dưới 3 tháng tuổi. Hoặc các giống mèo cỡ nhỏ. Kích thước nhỏ giúp mèo đi vệ sinh dễ dàng, không tốn sức. Lối ra khay vệ sinh có thiết kế dạng lưới giúp làm sạch cát ở chân mèo. Giữ cát không bị rơi ra ngoài làm bẩn sàn nhà. Khay vệ sinh nửa trong suốt, bên trong rộng rãi, đủ diện tích để mèo thoải mái đi vệ sinh. Phù hợp cho tất cả các loại cát mèo thông dụng. Từ cát thủy tinh, mùn cưa, cát dạng sỏi… đều có thể sử dụng. Đảm bảo mèo cưng có một không gian riêng tư yên tĩnh để đi vệ  sinh.',
                'SoLuong' => 100,
                'HinhAnh' => 'khay-ve-sinh-cho-meo-makar-cat-litter-station-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 25,
                'TenSanPham' => 'Nhà vệ sinh cho mèo IRIS OHYAMA WNT510',
                'GiaSP' => 480000,
                'GiamGia' => 0,
                'MoTa' => 'Nhà vệ sinh cho mèo IRIS OHYAMA WNT510 có nắp đậy. Thương hiệu đến từ Nhật Bản với sản phẩm không mùi không bẩn, kích thước lớn, mèo thoải mái đi vệ sinh. Cửa ra vào rộng rãi, ngăn cát rơi ra ngoài. Chất lượng tốt, siêu bền, bị ném mạnh xuống đất vẫn không bị nứt vỡ hay bong tróc. Thời gian sử dụng lâu dài, không gian rộng đủ cho một chú mèo trưởng thành. Kích thước 39 x 51 x 40cm, cửa 23,5 x 19,5cm. Màu sắc đỏ, xanh da trời, hồng, be.

Lợi ích chính
Nhà vệ sinh cho mèo IRIS OHYAMA WNT510 tạo không gian riêng tư, giúp mèo đi vệ sinh dễ dàng hơn. Hình thức đẹp, hài hòa với không gian ngôi nhà. Tặng kèm xẻng xúc cát và thuốc khử mùi. Tiết kiệm thời gian cho chủ nuôi, giúp bảo vệ môi trường và an toàn cho người sử dụng.

Với chất liệu có khả năng kháng khuẩn, bề mặt trơn nhẵn, chống bám bụi. Siêu bền, chống va đập, chống ăn mòn, oxi hóa. Gia tăng ion bạc, ngăn chặn sự phát triển của vi khuẩn có hại cho đường ruột. Sản phẩm phù hợp cho các loại cát thủy tinh, cát dạng sỏi, viên nén mùn cưa. Dùng được cho các giống mèo cỡ lớn, hay mèo béo khoảng 10kg ra vào thoải mái, không sợ chật chội.',
                'SoLuong' => 100,
                'HinhAnh' => 'nha-ve-sinh-cho-meo-iris-wnt510-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 25,
                'TenSanPham' => 'Khay vệ sinh cho mèo MAKAR General Cat Litter Box',
                'GiaSP' => 250000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho mèo MAKAR General Cat Litter Box với nhiều màu sắc: cà phê, trắng kem, hồng, xanh biển. Kích thước 50 x 38 x 20 cm. Sản phẩm cỡ vừa với thiết kế hình trứng hết sức độc đáo. Phù hợp với không gian ngôi nhà của bạn.

Lợi ích chính
Khay vệ sinh cho mèo MAKAR General Cat Litter Box giúp ngăn cát theo chân mèo rơi ra ngoài, làm bẩn sàn nhà. Bạn sẽ không phải lo lắng khi dọn vệ sinh. Thích hợp cho nhiều giống mèo, không gian rộng rãi thuận tiện cho việc dọn dẹp. Là đồ dùng không thể thiếu để huấn luyện mèo đi vệ sinh đúng chỗ. Đồng thời tạo ra không gian sạch sẽ cho ngôi nhà bạn. Sản phẩm được làm từ 100% nhựa PP nhập khẩu. Đảm bảo an toàn cho sức khỏe. Sản phẩm có chất lượng cao, không bị bong tróc, phai màu.',
                'SoLuong' => 100,
                'HinhAnh' => 'khay-ve-sinh-cho-meo-makar-general-cat-litter-box-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 25,
                'TenSanPham' => 'Nhà vệ sinh cho mèo MAKAR Luxury Cat Litter Box',
                'GiaSP' => 750000,
                'GiamGia' => 0,
                'MoTa' => 'Nhà vệ sinh cho mèo MAKAR Luxury Cat Litter Box với không gian rộng rãi, thoải mái, tiện nghi. Có nhiều màu sắc để chọn lựa: trắng kem, hồng, cà phê, xanh biển, xám. Kích thước 62 x 46 x 44 cm.

Lợi ích chính
Nhà vệ sinh cho mèo MAKAR Luxury Cat Litter Box có nắp đậy chất lượng cao. Không gian rộng rãi, thông thoáng phù hợp với nhu cầu của mèo. Thiết kế bo tròn các góc, không có cạnh sắc nhọn. Rất an toàn cho mèo và chủ nhân. Màu sắc trang nhã, hài hòa với không gian ngôi nhà của bạn. Nhà vệ sinh có nắp che, đảm bảo tính riêng tư cho mèo, ngăn mùi, giữ không khí trong nhà luôn sạch sẽ. Bên trong thùng có thêm một lớp vách ngăn, không cho cát hoặc chất lỏng chảy ra ngoài.

Trên nắp thùng có chỗ để cài xẻng xúc cát. Sản phẩm có tặng kèm 2 cuộn túi đựng rác có thể phân hủy. Rất thuận tiện cho bạn làm vệ sinh bồn cát cho mèo. Nhà vệ sinh có thiết kế giúp lau sạch cát dính ở chân mèo, tránh việc mèo sau khi chui ra sẽ mang theo cát làm bẩn sàn nhà. Dưới đáy thùng có đệm lót, bạn sẽ không phải lo lắng về việc sàn nhà bị xước khi di chuyển thùng.',
                'SoLuong' => 100,
                'HinhAnh' => 'nha-ve-sinh-cho-meo-makar-luxury-cat-litter-box-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 25,
                'TenSanPham' => 'Nhà vệ sinh cho mèo AUPET Hello Kitty',
                'GiaSP' => 580000,
                'GiamGia' => 0,
                'MoTa' => 'Nhà vệ sinh cho mèo AUPET Hello Kitty có nắp đậy chống mùi phòng ngừa vi khuẩn phát sinh. Với thiết kế lấy ý tưởng từ chính hình dạng của một chú mèo tạo ra một sản phẩm rất dễ thương.  Màu sắc xanh da trời và hồng nhạt. Kích thước sản phẩm 60x40x50 cm.

Lợi ích chính
Nhà vệ sinh cho mèo AUPET Hello Kitty hình tai mèo độc đáo, thân thiện. Mèo nhỏ đến lớn đều có thể sử dụng. Cửa mở ra theo 2 hướng, ngăn chất thải của mèo bắn ra ngoài. Thiết kế ngăn mùi hiệu quả, kháng khuẩn, giữ vệ sinh cho không gian ngôi nhà của bạn. Giúp cho chú mèo của bạn đi vệ sinh đúng chỗ và sạch sẽ hơn mà không tỏa mùi khó chịu ra bên ngoài. Giúp cho môi trường trong nhà trong lành hơn.

Nhà vệ sinh có nắp đậy, cửa mở theo 2 hướng giúp phòng ngừa mèo bới cát ra ngoài, rất dễ làm sạch. Chốt mở chìm hai bên không ảnh hưởng mỹ quan, thiết kế chắc chắn nhưng dễ dàng tháo lắp. Giá cài xẻng xúc cát có hình đuôi mèo độc đáo. Phù hợp cho các loại cát thủy tinh hoặc cát dạng sỏi. Phần đế dạng lưới giảm tối đa khả năng làm xước sàn nhà khi di chuyển

Chất liệu nhựa PVC an toàn cho môi trường và sức khỏe của mèo và người. Nhà vệ sinh có nắp đậy giúp mèo cảm thấy riêng tư, yên tâm đi vệ sinh. Sản phẩm có chốt mở chìm ở hai bên, đảm bảo chắc chắn mà không ảnh hưởng đến tính thẩm mỹ. Tặng kèm xẻng xúc cát hình đuôi mèo.',
                'SoLuong' => 100,
                'HinhAnh' => 'nha-ve-sinh-cho-meo-aupet-hello-kitty-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 25,
                'TenSanPham' => 'Khay vệ sinh cho mèo MAKAR Deodorized Cat Litter Box',
                'GiaSP' => 500000,
                'GiamGia' => 0,
                'MoTa' => 'Khay vệ sinh cho mèo MAKAR Deodorized Cat Litter Box size lớn với không gian rộng rãi, thành cao. Một sản phẩm được thiết kế dành riêng cho mèo dùng khi đi vệ sinh. Mang tới một không gian riêng tư yên tĩnh. Phù hợp cho cả mèo con và mèo lớn.

Lợi ích chính
Khay vệ sinh cho mèo MAKAR Deodorized Cat Litter Box đủ cao để tránh làm đổ cát ra nền nhà. Không gian cực lớn có thể chứa nhiều cát mèo hơn và giảm thời gian thay đổi. Giảm thiểu mùi hôi và đảm bảo sạch sẽ cho không gian sống của bạn. Thích hợp cho việc huấn luyện mèo đi vệ sinh. Giúp ngăn ngừa vi khuẩn và loại bỏ mùi không mong muốn. Thuận tiện khi sử dụng. Dưới hộp, có một tấm bảo vệ ở góc cả 4 mặt để chống trầy xước, trầy xước trên sàn hoặc thảm.

Mua sản phẩm tặng kèm xẻng xúc phân.',
                'SoLuong' => 100,
                'HinhAnh' => 've-sinh-cho-meo-makar-deodorized-cat-litter-box-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 25,
                'TenSanPham' => 'Nhà vệ sinh cho mèo 3 cửa MAKAR MCGW',
                'GiaSP' => 875000,
                'GiamGia' => 0,
                'MoTa' => 'Nhà vệ sinh cho mèo 3 cửa MAKAR MCGW siêu lớn và rộng rãi, dễ dàng hơn trong việc xúc cát vệ sinh mà không bị vương vãi khắp mọi nơi. Nhà vệ sinh cho mèo 3 cửa MAKAR MCGW có 5 màu sắc nổi bật cá tính để lựa chọn, kết hợp với thiết kế mới lạ phong cách. Tặng ngay xẻng xúc cát khi mua nhà vệ sinh cho mèo 3 cửa MAKAR MCGW.',
                'SoLuong' => 100,
                'HinhAnh' => 'nha-ve-sinh-cho-meo-3-cua-makar-mcgw-400x401.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 25,
                'TenSanPham' => 'Lưới nhựa gài khay vệ sinh cho mèo MAKAR Grid Box',
                'GiaSP' => 190000,
                'GiamGia' => 0,
                'MoTa' => 'Lưới nhựa gài khay vệ sinh cho mèo MAKAR Grid Box với chất liệu bền, đẹp, chịu lực tốt. Dễ dàng cọ rửa, vệ sinh hàng ngày. Sản phẩm bán rời dùng để lọc cát khi bạn đã mua Khay vệ sinh cho mèo MAKAR General Cat Litter Box trước đó.

Lợi ích chính
Lưới khay vệ sinh cho mèo được đặt trong khay vệ sinh, giúp  bạn có thể dễ dàng kiểm soát vấn đề vệ sinh cho mèo sạch sẽ nhất. Phần lưới với hàng trăm lỗ nhỏ mini giúp bạn sàng lọc cát mỗi khi mèo cưng đi vệ sinh. Phần cát bị vón cục sẽ được giữ lại và loại bỏ. Điều này giúp bạn tiết kiệm được cát vệ sinh cho mèo cưng. Đồng thời giảm tỷ lệ cát rơi vãi ra ngoài sàn nhà vô cùng hiệu quả. Việc vệ sinh khay cũng trở nên dễ dàng và thuận tiện hơn.

Lưu ý khi sử dụng
Lưới nhựa gài khay vệ sinh cho mèo MAKAR Grid Box chỉ sử dụng kết hợp được với Khay vệ sinh cho mèo MAKAR General Cat Litter Box.',
                'SoLuong' => 100,
                'HinhAnh' => 'luoi-khay-ve-sinh-cho-meo-400x400.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
            ],





            //dịch vụ
            [
                'MaDanhMuc' => 1,
                'TenSanPham' => 'tắm cho chó',
                'GiaSP' => 100000,
                'GiamGia' => 0,
                'MoTa' => 'Bảng giá spa cho chó, dịch vụ tắm cho mèo giá rẻ trọn gói đã bao gồm gói tắm gội toàn diện, sấy khô, chải lông rụng, cắt dũa móng, vệ sinh tai theo yêu cầu. Giá dịch vụ thực tế dựa theo hiện trạng kích cỡ, trọng lượng và độ dài của lông.',
                'SoLuong' => 100,
                'HinhAnh' => 'tam-cho-cho-1.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 0, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 1,
                'TenSanPham' => 'cạo lông cho chó',
                'GiaSP' => 120000,
                'GiamGia' => 0,
                'MoTa' => 'Bảng giá spa cho chó, dịch vụ tắm cho mèo giá rẻ trọn gói đã bao gồm gói tắm gội toàn diện, sấy khô, chải lông rụng, cắt dũa móng, vệ sinh tai theo yêu cầu. Giá dịch vụ thực tế dựa theo hiện trạng kích cỡ, trọng lượng và độ dài của lông.',
                'SoLuong' => 100,
                'HinhAnh' => '4j90v09niygp05fz5i8f6wikl6u0_cao-long-mau-cho-poodle_(5).webp',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 0, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 2,
                'TenSanPham' => 'tắm cho mèo',
                'GiaSP' => 100000,
                'GiamGia' => 0,
                'MoTa' => 'Bảng giá spa cho chó, dịch vụ tắm cho mèo giá rẻ trọn gói đã bao gồm gói tắm gội toàn diện, sấy khô, chải lông rụng, cắt dũa móng, vệ sinh tai theo yêu cầu. Giá dịch vụ thực tế dựa theo hiện trạng kích cỡ, trọng lượng và độ dài của lông.',
                'SoLuong' => 100,
                'HinhAnh' => 'co-nen-tam-cho-meo-con2-1200x800.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 0, // 1: sản phẩm , 0: dịch vụ
            ],
            [
                'MaDanhMuc' => 2,
                'TenSanPham' => 'cạo lông cho mèo',
                'GiaSP' => 120000,
                'GiamGia' => 0,
                'MoTa' => 'Bảng giá spa cho chó, dịch vụ tắm cho mèo giá rẻ trọn gói đã bao gồm gói tắm gội toàn diện, sấy khô, chải lông rụng, cắt dũa móng, vệ sinh tai theo yêu cầu. Giá dịch vụ thực tế dựa theo hiện trạng kích cỡ, trọng lượng và độ dài của lông.',
                'SoLuong' => 100,
                'HinhAnh' => 'dat-meo-nam-nghien-de-cao-long_304a273f54aa45aca43f0015fc7aa037.jpg',
                'LuotXem' => 0,
                'LuotBan' => 0,
                'ThoiGian' => now(),
                'TrangThai' => 1, // 1: ẩn , 0: hiện
                'Loai' => 0, // 1: sản phẩm , 0: dịch vụ
            ],

            // Thêm các sản phẩm khác ở đây...
        ];

        foreach ($sanPhams as $sanPham) {
            SanPham::create($sanPham);
        }

        $users = [
            [
                'MaTaiKhoan' => 1,
                'Hovaten' => 'Nguyễn Văn A',
                'SDT' => '0123456789',
                'Email' => 'nguyenvana@example.com',
                'ThuCung' => 'Chó',
                'DiaChi' => '123 Đường ABC, Quận 1, TP.HCM',
                'Quyen' => 1, // Ví dụ: 1 cho admin
                'Matkhau' => bcrypt('password1'), // Mã hóa mật khẩu
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'MaTaiKhoan' => 2,
                'Hovaten' => 'Trần Thị B',
                'SDT' => '0987654321',
                'Email' => 'tranthib@example.com',
                'ThuCung' => 'Mèo',
                'DiaChi' => '456 Đường DEF, Quận 2, TP.HCM',
                'Quyen' => 2, // Ví dụ: 2 cho user
                'Matkhau' => bcrypt('password2'), // Mã hóa mật khẩu
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'MaTaiKhoan' => 3,
                'Hovaten' => 'Lê Văn C',
                'SDT' => '0912345678',
                'Email' => 'levanc@example.com',
                'ThuCung' => 'Chó',
                'DiaChi' => '789 Đường GHI, Quận 3, TP.HCM',
                'Quyen' => 2, // Ví dụ: 2 cho user
                'Matkhau' => bcrypt('password3'), // Mã hóa mật khẩu
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Bạn có thể thêm nhiều người dùng khác ở đây
        ];

        foreach ($users as $user) {
            User::create($user); // Sử dụng mô hình User để chèn dữ liệu
        }

        $categoryNews = [
            [
                'MaDMBV' => 1,
                'TenDMBV' => 'Chó cảnh',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'MaDMBV' => 2,
                'TenDMBV' => 'Mèo cảnh',
                'created_at' => now(),
                'updated_at' => now(),
            ]
            
            // Bạn có thể thêm nhiều người dùng khác ở đây
        ];

        foreach ($categoryNews as $categoryNew) {
            DanhMucBaiViet::create($categoryNew); // Sử dụng mô hình User để chèn dữ liệu
        }

        $news = [
            [
                'id' => 1,
                'Mataikhoan' => 1,
                'MaDMBV' => 1,
                'TieuDe' => '3 cách trị ve chó và diệt bọ chét chó hiệu quả nhất',
                'Hinh' => 'cach-tri-ve-cho-thumbnail.jpeg',
                'NoiDung' => 'Bọ chét và ve chó là 2 loại ký sinh trùng thường gặp mang đến rủi ro sức khỏe cho chó cưng. Việc tìm phương pháp cách trị ve chó và cách diệt bọ chét chó hiệu quả là mối quan tâm hàng đầu. Pet Mart giới thiệu các giải pháp an toàn, từ thuốc trị đến phương pháp tự nhiên, để bảo vệ bạn và thú cưng từ những ký sinh trùng gây hại này.',
                'ChiTiet' => 'Phân biệt sự khác nhau giữa ve chó và bọ chét
Cả ve và bọ chét đều hút máu và gây hại cho chó cưng, nhưng việc phòng tránh và cách trị ve chó, cách diệt bọ chét là cần thiết để đảm bảo sức khỏe cho vật chủ. Điều quan trọng là phải tiêu diệt cả trong môi trường ngoại vi để ngăn chặn tái nhiễm.

Ve chó (Ixodida)
Ve chó còn được biết đến với nhiều tên gọi như bét hoặc tích là một phần của họ nhện với kích thước trung bình từ 3 đến 5 mm. Thuộc phân lớp Acari, ve chó là loại ký sinh trùng bên ngoài chuyên hút máu động vật có vú, chim và đôi khi cả bò sát cũng như lưỡng cư. Ve chó hiện phổ biến khắp thế giới, đặc biệt ở các vùng ấm áp, ẩm ướt như Việt Nam.

Phân biệt giữa 2 loại ve chó chính – ve cứng (họ Ixodidae) và ve mềm (họ Argasidae) – chúng ta thấy rằng cả hai có vòng đời bao gồm trứng, ấu trùng, nhộng và trưởng thành, nhưng ve cứng trải qua 3 giai đoạn chủ nhân khác nhau và mất ít nhất 1 năm để hoàn thành vòng đời.

Ve chó không chỉ hút máu và gây tổn thương da, mà còn là nguồn truyền bệnh như Lyme, Ehrlichiosis và Babesiosis (bệnh ký sinh trùng máu). Việc phòng tránh và cách trị ve chó đòi hỏi sự chú ý đặc biệt từ các chủ nhân nuôi chó.

Bọ chét (Ctenocephalides canis)
Bọ chét chó là một loài ký sinh trùng sống trên nhiều loại động vật có vú, trong đó chó và mèo là hai vật chủ chính. Bọ chét chó có thể trải qua vòng đời từ hai đến ba tuần, phụ thuộc vào điều kiện nhiệt độ và môi trường, với một chu kỳ phát triển kéo dài từ 7 tháng đến 1 năm.

Bên cạnh việc hút máu và gây dị ứng da, bọ chét chó còn là nguyên nhân truyền các bệnh nhiễm khuẩn nguy hiểm như Rickettsia (bệnh sốt mò) và Babesiosis (bệnh ký sinh trùng máu). Việc kiểm soát bọ chét đòi hỏi các giải pháp toàn diện từ việc cách trị ve chó, cách diệt bọ chét trên cơ thể chó đến việc kiểm soát môi trường sống.

Cách diệt bọ chét, ve rận là điều quan trọng
Ve rận và bọ chét không chỉ là một mối phiền toái thông thường mà còn là nguồn gốc của nhiều vấn đề sức khỏe nghiêm trọng đối với thú cưng. Ve rận hút máu không chỉ gây ngứa ngáy, rụng lông, và các bệnh về da, mà còn làm cho chó của bạn trở nên ốm yếu và suy nhược. Một cách trị ve chó, cách diệt bọ chét kịp thời và hiệu quả là bước đầu tiên để bảo vệ sức khỏe lâu dài của thú cưng bạn.

Bọ chét và ve rận không chỉ gây hại cho chó mà còn đối với con người, đặc biệt là trẻ em thường xuyên chơi cùng thú cưng. Những loại ve rận này có thể dễ dàng chuyển từ chó sang người, gây ra các phản ứng như ngứa, sưng đỏ và đau rát. Ve rận và bọ chét không chỉ khiến chó và chủ nhân phải ngứa ngáy, mà còn mang theo nhiều loại bệnh nặng hơn.

Bọ chét và ve chó là loại ngoại ký sinh, sống bằng cách hút máu từ vật chủ. Vết cắn của chúng không chỉ gây đau và ngứa, mà còn có thể gây ra các phản ứng dị ứng, viêm da, thiếu máu và nhiễm trùng. Điều này có thể dẫn đến các vấn đề sức khỏe nghiêm trọng hơn như tê liệt và thậm chí tử vong. Đó là lý do tại sao việc loại bỏ bọ chét và ve khỏi chó và môi trường sống là vô cùng quan trọng.

Thuốc trị ve chó, thuốc diệt bọ chét tốt nhất
Khi thú cưng của bạn bị nhiễm ve và bọ chét, việc lựa chọn thuốc trị ve chó, thuốc diệt bọ chét hiệu quả là vô cùng quan trọng. Chúng ta sẽ khám phá các loại thuốc trị ve chó hàng đầu, được khuyên dùng bởi các bác sĩ thú y, để đảm bảo sức khỏe cho thú cưng và ngăn chặn sự lây lan của ký sinh trùng.

⭐ NEXGARD Afoxolaner: nổi bật với khả năng tiêu diệt bọ chét và ve chó trong vòng 8 giờ, ngăn chặn hiệu quả sự sinh sản của ký sinh trùng.
⭐ MERIAL Frontline Plus: là thuốc nhỏ gáy chống ve chó và bọ chét với khả năng lan tỏa khắp cơ thể và duy trì hiệu quả dài lâu. An toàn ngay cả khi tắm cho chó, đặc biệt phù hợp cho chó đang mang thai và nuôi con.
Bravecto Chews: với khả năng bảo vệ lên đến ba tháng, là sự lựa chọn tối ưu cho những thú cưng đặc biệt. Dạng nhai dễ dùng này đảm bảo an toàn cho chó con từ 6 tháng tuổi và nặng từ 4.4 pounds.
K9 Advantix: cung cấp các lựa chọn điều trị tại chỗ với hiệu quả ngay tức thì, đặc biệt an toàn cho những thú cưng có tiền sử co giật hoặc nhạy cảm với thuốc.
Revolution: với phạm vi bảo vệ rộng lớn chống lại các loại ký sinh trùng bao gồm giun tim và ve tai.
Advantage: giải pháp xịt chống ve chó và bảo vệ môi trường sống.
Luôn tuân thủ theo chỉ định của bác sĩ thú y khi sử dụng các loại thuốc này. Các phương pháp uống, tiêm, nhỏ gáy và bôi ngoài da có thể kết hợp để mang lại hiệu quả tối đa. Bảo quản thuốc ở nhiệt độ thường và tránh xa tầm tay của trẻ em.', 
                'LuotXem' => 0, 
                'BinhLuan' => 0, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'Mataikhoan' => 1,
                'MaDMBV' => 1,
                'TieuDe' => '25 bài học huấn luyện chó tại nhà ai cũng làm được',
                'Hinh' => 'hand-signals-dog-174281723-resized-56a26a895f9b58b7d0c9fdf9_2c91e0c109fb4a5fb2845ebe26054845.jpg',
                'NoiDung' => 'Huấn luyện chó tại nhà không chỉ giúp tăng cường mối quan hệ giữa chó và chủ, mà còn giúp chó phát triển tốt hơn về tâm lý và hành vi. Mỗi chủ nhân đều muốn cún cưng của mình biết vâng lời, hiểu mình và có thể thực hiện những bài học cơ bản như: đi vệ sinh đúng chỗ, bắt tay, đứng, ngồi… Nhưng làm thế nào để áp dụng các cách huấn luyện chó một cách hiệu quả? Không phải ai cũng biết làm sao để cún yêu nhanh chóng tiếp thu bài học.',
                'ChiTiet' => "Thông qua bài viết này, Pet Mart sẽ hướng dẫn bạn từng bước, cụ thể và chi tiết. Dành chút thời gian mỗi ngày, chỉ 5-10 phút, và bạn sẽ thấy sự tiến bộ rõ rệt từ cún yêu của mình.

Tiêu chí để huấn luyện chó dễ dàng hơn
Để huấn luyện chó một cách hiệu quả, chúng ta cần nắm vững một số tiêu chí quan trọng dựa vào nhu cầu và sở thích của chó, cũng như kỹ thuật và phương pháp huấn luyện phù hợp. Hãy nhớ rằng mỗi chó là một cá nhân riêng biệt và có thể cần một phương pháp huấn luyện chó khác nhau. Hãy luôn lắng nghe và quan sát chó của bạn để biết được gì là tốt nhất cho chúng.

Hiểu rõ đặc điểm và tính cách của chó: Mỗi loài chó có một đặc điểm và tính cách riêng. Để huấn luyện hiệu quả, bạn cần phải hiểu rõ chúng. Điều này giúp bạn biết được loại thưởng nào chó yêu thích nhất, từ đó áp dụng phương pháp khen ngợi thích hợp.
Sử dụng phương pháp khen ngợi: Chó rất phản ứng tốt với sự khen ngợi và thưởng. Mỗi khi chó làm đúng, hãy khen ngợi nó và cho nó một phần thưởng như thức ăn hoặc đồ chơi.
Lựa chọn môi trường huấn luyện phù hợp: Môi trường huấn luyện nên yên tĩnh và không bị xao lạc. Nên chọn những nơi ít người và xe cộ qua lại.
Đảm bảo chế độ ăn uống và dinh dưỡng: Chế độ ăn uống cân đối và dinh dưỡng đầy đủ giúp chó luôn khỏe mạnh, tinh nghịch và sẵn sàng cho việc huấn luyện.
Kiên nhẫn và nhất quán: Huấn luyện chó cần sự kiên nhẫn và nhất quán. Bạn cần lặp lại các bài tập nhiều lần cho đến khi chó hiểu và thực hiện chính xác.
Khí hậu và điều kiện môi trường: Lựa chọn thời điểm và nơi huấn luyện phù hợp với điều kiện khí hậu và môi trường. Ví dụ, trong những ngày nắng nóng, nên chọn huấn luyện vào buổi sáng sớm hoặc chiều mát.
Xác định vai trò lãnh đạo: Để chó nghe lời, bạn cần chứng minh mình là người lãnh đạo. Làm điều này không chỉ giúp chó nghe lời mà còn giúp tăng cường mối quan hệ giữa bạn và chó.
Tận dụng bản năng tự nhiên của chó: Mỗi chó có bản năng tự nhiên riêng, như bản năng săn mồi, bảo vệ lãnh thổ. Bạn có thể tận dụng những bản năng này để giúp việc huấn luyện trở nên dễ dàng hơn.
Các phương pháp huấn luyện chó phổ biến
Phương pháp huấn luyện chó hiện đại không chỉ dựa vào việc dạy chúng lắng nghe mệnh lệnh, mà còn xoay quanh việc hiểu rõ nhu cầu, tính cách và bản năng của chúng. Để có một người bạn bốn chân vừa thông minh vừa ngoan ngoãn, hãy xem xét những phương pháp cách huấn luyện chó như sau:

Dạy chó nghe lời chủ: Mục tiêu chính ở đây là giúp chó hiểu và tuân thủ các lệnh cơ bản như “ngồi”, “nằm” và “ở yên”. Điều quan trọng là phải thực hiện việc huấn luyện một cách nhất quán và kiên trì.
Huấn luyện sự nhanh nhẹn: Dành cho chó tham gia các hoạt động thể thao như chạy đua, vượt chướng ngại vật. Kỹ năng này đòi hỏi sự tập trung cao độ và phản xạ nhanh.
Huấn luyện nghiệp vụ: Chó có khả năng học hỏi và thực hiện nhiều công việc giống như con người. Từ công việc chăn dắt gia súc, tìm kiếm, cứu hộ cho đến việc hỗ trợ người khuyết tật. Tuy nhiên, không phải giống chó nào cũng phù hợp với mọi loại công việc.
Kết hợp trò chơi và huấn luyện: Trò chơi không chỉ giúp chó giải trí mà còn giúp chúng phát triển tư duy và kỹ năng vận động. Các trò chơi như “đuổi bắt”, “nhảy lên”, “tìm kiếm” giúp kích thích trí óc và tăng cường sự nhanh nhẹn cho chú chó.
Trên tất cả, việc huấn luyện chó cần phải dựa trên sự hiểu biết sâu rộng về bản chất và nhu cầu của chúng. Mỗi giống chó có những đặc điểm và tính cách riêng, do đó việc áp dụng phương pháp phù hợp sẽ giúp quá trình huấn luyện diễn ra hiệu quả và suôn sẻ hơn. Đồng thời, hãy nhớ rằng sự kiên nhẫn và tình yêu là chìa khóa để dạy dỗ và cách huấn luyện chó một cách hiệu quả.

Hướng dẫn các cách huấn luyện chó tại nhà
Dựa trên dữ liệu và xu hướng tìm kiếm của người đọc, chúng tôi sẽ mang đến cho bạn một hướng dẫn huấn luyện chó chi tiết và dễ dàng áp dụng. Từ việc xác định lệnh cơ bản cho tới kỹ thuật thưởng phạt, chúng ta sẽ cùng nhau khám phá những bí mật giúp chú chó của bạn trở nên nghe lời và thông minh hơn mỗi ngày. Đừng bỏ lỡ cơ hội biến không gian nhà bạn thành một lớp học thú vị cho chú chó yêu quý!

Cách dạy chó đi vệ sinh đúng chỗ
Việc dạy chó đi vệ sinh đúng chỗ là một trong những bài huấn luyện chó quan trọng nhất. Điều này không chỉ giữ cho ngôi nhà của bạn sạch sẽ mà còn giúp chó phát triển thói quen tốt từ nhỏ. Huấn luyện dạy chó đi vệ sinh đúng chỗ là một nhiệm vụ quan trọng, yêu cầu sự kiên nhẫn và nhất quán. Tuy nhiên, với các bước hướng dẫn sau, bạn hoàn toàn có thể đạt được kết quả mong muốn và giúp chó con phát triển một thói quen vệ sinh tốt.

Xác định vị trí cố định: Chọn một nơi cố định trong nhà làm “khu vệ sinh” cho chó. Điều này giúp chó dễ dàng nhớ và tập trung vào khu vực đó mỗi khi cần đi vệ sinh.
Sử dụng khay vệ sinh chuyên dụng: Khay vệ sinh cho chó với lớp báo cũ sẽ giúp chó dễ dàng đánh mùi và đi vệ sinh đúng chỗ. Hãy giữ lại một chút giấy báo sau mỗi lần dọn dẹp khay.
Quan sát dấu hiệu: Chó con thường có những dấu hiệu nhận biết trước khi cần đi vệ sinh, như đi lòng vòng hoặc đánh hơi. Lúc này, hãy dẫn chó đến khu vệ sinh của mình.
Khen ngợi và tương tác: Khi chó con đi vệ sinh đúng chỗ, hãy khen ngợi và vuốt ve nó. Điều này sẽ khích lệ chó và giúp nó nhớ lâu hơn.
Xử lý khi chó đi vệ sinh sai chỗ: Trong trường hợp chó đi vệ sinh sai chỗ, hãy la mắng nó ngay lập tức. Điều này giúp chó hiểu và nhớ lâu.
Cách dạy chó nằm ngủ trong chuồng
Chó là một loài động vật quen với tự do, nên việc giữ chúng trong một không gian nhỏ như chuồng chó đôi khi gặp sự kháng cự. Tuy nhiên, việc này lại rất quan trọng trong nhiều trường hợp như khi bạn ra ngoài hay vận chuyển chó đi xa. Để giảm thiểu sự kháng cự và giúp chó cảm thấy thoải mái khi ở trong chuồng, bạn cần áp dụng một số kỹ thuật huấn luyện chó hiệu quả.

Huấn luyện chó ngủ trong chuồng không chỉ giúp bạn có thể giữ chó an toàn mà còn giúp chó cảm thấy thoải mái và yên bình khi ở trong một không gian nhỏ. Bằng cách giới thiệu chuồng từ từ và tăng cường thời gian chó ở trong chuồng, bạn có thể giúp chó quen với việc này một cách dễ dàng và hiệu quả.

Tạo sự quen thuộc với chuồng: Bắt đầu bằng cách giới thiệu chuồng chó đến chó con một cách từ từ. Đặt chuồng ở nơi chó thường ở và cho chó tham quan, khám phá nó. Điều này giúp chó không cảm thấy xa lạ với chuồng.
Huấn luyện từng bước: Đầu tiên, nhốt chó trong chuồng trong một khoảng thời gian ngắn, và chờ đến khi nó im lặng trước khi mở cửa cho nó ra ngoài. Mỗi lần huấn luyện, hãy gia tăng thời gian nhốt chó ở trong chuồng.
Thử nghiệm di chuyển chuồng: Khi chó đã quen với chuồng, bạn có thể di chuyển chuồng đến các vị trí khác trong nhà. Dần dần, đặt chuồng ở ngoài tầm nhìn của chó, giúp chó làm quen với việc ở một mình trong chuồng.
Tạo điều kiện thoải mái cho chó: Đặt những món đồ yêu thích của chó vào chuồng, như một chiếc nệm cho chó hay một món đồ chơi cho chó. Điều này giúp chó cảm thấy chuồng là một nơi thoải mái và an toàn.
Cách dạy chó làm quen với vòng cổ, dây xích
Đối với nhiều chủ nhân, việc dạy chó làm quen với vòng cổ và dây xích là một thách thức. Tuy nhiên, bằng cách tiếp cận khoa học và kiên nhẫn, bạn có thể giúp chó của mình cảm thấy thoải mái và an toàn. Với những bước huấn luyện chó sau, bạn có thể giúp chó của mình làm quen nhanh chóng và an toàn với vòng cổ và dây xích, giúp việc dắt dẫn và kiểm soát chó trở nên dễ dàng hơn.

Bắt đầu từ vòng cổ mảnh: Khi bắt đầu, hãy sử dụng một vòng cổ mỏng và đeo cho chó. Điều này giúp chó làm quen dần với cảm giác có vật gì đó xung quanh cổ mình mà không gây áp lực quá mạnh.
Huấn luyện đi bên cạnh: Hãy dẫn dắt chó đi bên cạnh bạn, giữ cho dây xích được căng nhưng không quá chật. Nếu chó ngồi xuống hoặc cảm thấy khó chịu, hãy nhẹ nhàng kéo và dỗ dành nó.
Thử nghiệm với dây xích: Trong trường hợp chó không chịu nghe lời, bạn có thể thu ngắn sợi xích và giữ chó trong vị trí đó khoảng 1 giờ. Sau đó, thả chó ra và bạn sẽ thấy nó trở nên dễ bảo hơn.
Lựa chọn phù hợp: Mỗi giống chó có kích thước và tính cách riêng biệt. Do đó, việc lựa chọn vòng cổ và dây xích phù hợp với kích thước và tính cách của chó là rất quan trọng.
Cách dạy chó đi cạnh chủ bằng dây dắt
Kỹ thuật huấn luyện chó đi cạnh chủ khi ra đường không chỉ giúp bạn dắt chó một cách an toàn mà còn thể hiện mối quan hệ gắn bó giữa chó và chủ. Dưới đây là hướng dẫn chi tiết để chó của bạn luôn đi bên cạnh bạn mà không kéo lê hay giật dây. Qua sự luyện tập, chó của bạn sẽ trở nên nghe lời hơn và bạn sẽ có những buổi dạo chơi thoải mái và vui vẻ cùng thú cưng của mình.

Bắt đầu với việc sử dụng Clicker: Khi chó kéo dây hãy dừng lại và đứng im cho đến khi chó dừng lại và quay lại nhìn bạn. Bấm clicker ngay khi dây không còn bị căng. Tiếp cận chó, vuốt ve và thưởng cho nó.
Tạo thói quen đi cạnh: Lặp lại bước 1 nhiều lần cho đến khi chó không còn kéo dây. Khi đi bộ, thay đổi hướng di chuyển đột ngột (rẽ trái, rẽ phải) để chó luôn quan sát và theo chân bạn.
Đối phó với chó to hoặc khó khăn: Chó cần biết bạn là người chỉ đạo và quyết định hướng đi. Khi chó kéo mạnh, giữ thăng bằng, sau đó giật nhẹ dây để nó biết hành động của mình không phù hợp. Khi chó tuân thủ, bấm clicker và thưởng cho nó.
Cách dạy chó đi sát chân chủ
Huấn luyện chó lệnh “Sát chân” không chỉ giúp bạn dễ dàng kiểm soát chó khi dắt dạo mà còn tăng cường mức độ gắn kết giữa chủ và chó. Với sự kiên nhẫn và theo hướng dẫn cụ thể trên, bạn sẽ nhanh chóng có một chú chó biết tuân lệnh và luôn sát cạnh bạn mỗi khi cần.

Mục tiêu của lệnh “Sát chân”: Lệnh này giúp chó chạy đến và ngồi sát chân trái của chủ, cả hai cùng hướng về phía trước. Điều này giúp bạn dễ dàng kiểm soát chó và kết hợp với các lệnh khác khi đi dạo.
Cách thực hiện: Đứng đối diện với chó, hai chân song song, người thẳng. Trong tay nên cầm thức ăn hoặc thanh huấn luyện, đặt gần mũi chó. Dùng tay cầm thức ăn, tạo một đường vòng cung từ trước mặt chó ra ngoài bên trái, sau đó đưa về phía cạp quần và nâng cao. Chó sẽ tự động theo và ngồi đúng vị trí cạnh chân trái của bạn. Để chó quen với lệnh, lặp lại nhiều lần. Khi chó ngồi đúng vị trí, bấm clicker và thưởng cho nó.
Áp dụng lệnh: Sau khi chó đã quen với động tác, bắt đầu sử dụng lệnh “Sát chân”. Mỗi khi chó thực hiện đúng, bấm clicker và thưởng thức ăn. Luyện tập thường xuyên giúp chó nhớ lâu và thực hiện chính xác.
Lưu ý khi huấn luyện: Đổi cách thưởng từ thức ăn sang đồ chơi, giúp chó không chỉ quan tâm đến thức ăn. Luôn kiên nhẫn và nhất quán trong việc huấn luyện. Tạo môi trường thoáng đãng và không tiếng ồn để chó tập trung tốt hơn.
Cách dạy chó đi cầu thang lên xuống
Dạy chó leo cầu thang không chỉ là một kỹ năng giúp chó di chuyển linh hoạt trong nhà, mà còn là bài tập tăng cường sức khỏe. Tuy nhiên, việc huấn luyện chó leo cầu thang đòi hỏi sự kiên nhẫn và hiểu biết về cấu trúc cơ thể của chó. Và chủ nhân cần luôn quan tâm và chăm sóc chó, đảm bảo an toàn và sức khỏe cho thú cưng của mình.

Tầm quan trọng: Một số chủ nhân sống ở chung cư hoặc nhà có nhiều tầng, nơi mà việc dạy chó leo cầu thang trở nên thiết yếu. Tuy nhiên, không phải chó nào cũng tự tin khi bước lên những bậc cầu thang.
Lựa chọn cầu thang phù hợp: Đối với chó, khoảng cách tối ưu giữa các bậc cầu thang nên là 60cm và chiều cao từ 12-15cm. Một số chó có thể gặp khó khăn khi leo cầu thang do khoảng cách giữa các bậc quá ngắn, khiến chó phải áp dụng sức lực nhiều hơn trên từng khớp xương.
Hướng dẫn chó vượt qua nỗi sợ: Bước đầu khích lệ chó bằng cách sử dụng đồ chơi hoặc thưởng ăn. Khi chó đã quen với việc leo cầu thang, chủ nhân có thể tăng tốc độ để chó có thể di chuyển nhanh chóng và linh hoạt hơn. Sử dụng các lệnh như “lên”, “xuống” để hướng dẫn chó và giúp chó hiểu rõ mục tiêu của việc học.
Lưu ý về sức khỏe: Đối với những chó già hoặc chó có vấn đề về xương khớp, chủ nhân nên giảm bớt số lần leo cầu thang mỗi ngày. Cầu thang cần được lót đệm mềm mại để tránh gây tổn thương cho chó khi chúng vô tình trượt ngã.
Cách dạy chó biết cười nhe răng
Một chú chó cười đáng yêu không chỉ thu hút sự chú ý mà còn thể hiện sự thoải mái và hạnh phúc của chúng. Tuy nhiên, dạy chó cách cười đúng cách đòi hỏi sự kiên nhẫn và hiểu biết. Bằng cách sử dụng kỹ thuật đúng và kiên nhẫn, bạn có thể huấn luyện chó của mình cười một cách tự nhiên và đáng yêu.

Hiểu về nụ cười của chó: Theo các bác sĩ thú y, chó thể hiện cảm xúc qua biểu hiện mặt. Nụ cười thân thiện thể hiện sự thoải mái và vui vẻ. Khác với con người, chó có những biểu hiện cảm xúc riêng. Cần phân biệt giữa nụ cười thân thiện và biểu hiện căng thẳng.
Bí quyết dạy chó cười: Tạo môi trường thoải mái khiến chó cảm thấy thoải mái và an toàn là bước đầu tiên. Sử dụng giọng điệu nhẹ nhàng và thân thiện khi nói chuyện. Giúp chó hiểu nụ cười của bạn bằng cách mỉm cười một cách tự nhiên, không lộ hết cả hàm răng. Dùng ngón tay nhẹ nhàng nâng khóe miệng của chó, lộ ra hàm răng mà không làm chó cảm thấy khó chịu. Khen ngợi và thưởng cho chó mỗi khi nó phản ứng tích cực.
Những điều cần lưu ý: Mỗi chó có tốc độ học khác nhau. Cần kiên trì và lặp đi lặp lại bài tập. Sử dụng thưởng như thức ăn yêu thích hoặc vuốt ve để khích lệ chó. Đảm bảo không gây áp lực hoặc sợ hãi cho chó trong quá trình huấn luyện.
Cách dạy chó cảm xúc biết xấu hổ
Việc dạy và huấn luyện chó biểu hiện cảm xúc xấu hổ không chỉ giúp tạo nên những khoảnh khắc đáng yêu mà còn giúp tăng cường giao tiếp giữa chó và chủ nhân. Bằng cách sử dụng các bước và kỹ thuật huấn luyện trên, bạn sẽ giúp chú chó của mình thể hiện cảm xúc này một cách tự nhiên và đáng yêu.

Định nghĩa “xấu hổ” ở chó: Chú chó sẽ đặt chân trước lên trên tai, mũi hoặc nhắm mắt. Đây là biểu hiện thường thấy khi chó cảm thấy xấu hổ. Biểu hiện này không chỉ đáng yêu mà còn giúp tăng cường giao tiếp giữa chó và chủ nhân.
Các bước huấn luyện: Sử dụng băng dính dán một miếng băng dính nhỏ lên mũi chó. Chó sẽ cảm thấy khó chịu và sẽ sử dụng chân để cào. Khi chó đưa chân lên mũi, ngay lập tức bấm Clicker và thưởng cho chó.
Gắn kết lệnh với hành động: Mỗi khi chó đưa chân lên mũi, nói lệnh “xấu hổ”. Lặp lại nhiều lần để chó nhớ lệnh. Khi chó thực hiện đúng, sử dụng Clicker và thưởng cho chó.
Tăng cường huấn luyện: Nếu chó không thực hiện đúng, bạn có thể nhẹ nhàng gãi mũi của nó để kích thích hành động. Khuyến khích chó thực hiện biểu hiện mà không cần băng dính, giúp chó thực hiện biểu hiện một cách tự nhiên.
Cách dạy chó đi đổ rác, bỏ rác vào thùng
Chó không chỉ là người bạn đồng hành mà còn có khả năng giúp việc nhà! Bạn có tin chúng ta có thể huấn luyện chó vứt rác vào thùng một cách chính xác không? Với sự kiên nhẫn và luyện tập đều đặn, chú chó của bạn sẽ nhanh chóng nắm bắt được cách đổ rác vào thùng một cách chính xác.

Lợi ích của việc dạy chó đổ rác: Khả năng đổ rác của chó giúp ích cho việc dọn dẹp nhà cửa và tăng cường sự tương tác giữa chó và chủ.
Thực hiện lệnh “Nhặt”: Chuẩn bị cuộn giấy thành cục tròn và đặt gần thùng rác. Kêu gọi chó và ra lệnh “Nhặt”. Kéo nhẹ chú chó tới thùng rác và nói “Thôi”. Khi chó thả giấy, bấm Clicker và thưởng.
Luyện tập và nhắc nhở: Dùng ngôn ngữ cơ thể, chỉ tay về hướng thùng rác và ra lệnh “Nhả” hoặc “Thôi”. Nhấn mạnh việc sử dụng clicker và thưởng khi chó thực hiện đúng. Mở rộng việc huấn luyện bằng cách sử dụng vật khác như túi nilon, vỏ bánh kẹo…
Hoàn thiện kỹ năng: Tiếp tục luyện tập cho tới khi chó thực hiện chính xác và liên tục. Nếu chó không vứt đúng vào thùng, chỉ tay vào thùng và ra lệnh. Khi chó thực hiện đúng, bấm Clicker và thưởng.
Cách dạy chó không đuổi theo xe máy, oto
Chó thường rất tò mò và hiếu động, đặc biệt là với những đối tượng chuyển động. Đối mặt với sự quan tâm của chúng tới xe cộ, chúng ta cần phải dạy chúng biết cách kiềm chế mình. Không chỉ để bảo vệ chó khỏi nguy hiểm, mà còn giúp hạn chế sự phiền hà cho người đi đường và bảo vệ chó khỏi những rủi ro không mong muốn. Bằng cách tuân thủ lời khuyên trên và luôn giữ vững tinh thần, bạn sẽ giúp chú chó của mình trở nên an toàn và biết nghe lời hơn khi ở ngoài công cộng.

Lý do chó thích đuổi theo xe: Chó thích đuổi theo đối tượng chuyển động nhanh. Khi thấy xe, bản năng săn mồi trong chúng được kích thích.
Sử dụng lệnh “Không”: Khi chó có dấu hiệu muốn đuổi theo, giữ chặt dây xích và ra lệnh “Không”. Lặp lại mỗi lần chúng có ý định đuổi theo cho đến khi chó hiểu và tuân thủ.
Học từ trải nghiệm: Nhờ một người bạn đi trên xe và khi chó chạy lại gần, họ có thể dùng bình xịt nước nhỏ để xịt nhẹ vào mặt chó. Điều này sẽ làm cho chó cảm thấy bất ngờ và học hỏi từ trải nghiệm thực tế.
Tích cực khích lệ: Mỗi khi chó đi bên cạnh bạn mà không đuổi theo xe, hãy khen ngợi và thưởng cho chó. Điều này giúp tăng cường hành vi tốt của chó.
Cách dạy chó ngồi và nằm theo hiệu lệnh
Huấn luyện chó tuân theo các lệnh cơ bản như “ngồi” và “nằm” là bước đầu tiên để tạo ra một mối quan hệ gắn kết và hiểu biết giữa chủ và chó. Với sự kiên nhẫn và những kỹ thuật đúng đắn, bạn sẽ dễ dàng giúp chó cưng của mình trở thành một người bạn đáng tin cậy và biết vâng lời. Dưới đây là hướng dẫn chi tiết giúp bạn dạy chó hiệu quả ngay tại nhà.

Hướng dẫn dạy chó lệnh “Ngồi”: Đứng bên cạnh chó, sử dụng tay trái để ấn nhẹ vào mõm chó và tay phải nâng dây đai lên. Khi chó bắt đầu ngồi, nói lệnh “ngồi” một cách rõ ràng và nhấn mạnh. Ngay khi chó ngồi xuống, khen ngợi và thưởng cho nó một miếng thức ăn yêu thích. Lặp lại quá trình này một số lần cho đến khi chó có thể ngồi mỗi khi nghe lệnh.
Hướng dẫn dạy chó lệnh “Nằm”: Bắt đầu bằng cách đặt chó ở tư thế ngồi bên trái bạn. Khi chó đang ngồi, quỳ xuống mặt đất và dùng tay phải giữ một miếng thức ăn yêu thích ngay trước mặt chó. Kéo thức ăn về phía bạn và xuống sát mặt đất, đồng thời ra lệnh “nằm”. Khi chó nằm xuống, khen ngợi và thưởng cho nó. Lặp lại việc này cho đến khi chó có thể nằm xuống mỗi khi bạn ra lệnh.
Lưu ý khi huấn luyện: Sự kiên nhẫn và nhất quán là yếu tố quan trọng khi dạy chó các lệnh. Không nên sử dụng bạo lực hoặc trừng phạt chó khi nó không tuân lệnh. Luôn kết thúc phiên huấn luyện bằng cảm xúc tích cực và thưởng cho chó. Chọn thời điểm chó đang đói để dạy, khi đó chó sẽ hứng thú hơn với thức ăn thưởng.
Cách dạy chó biết chơi kéo co
Trò chơi kéo co là một cách tuyệt vời để tăng cường sự vận động và giải trí cho chó, đồng thời cũng giúp tăng cường mối liên kết giữa bạn và chú cưng. Với sự kiên nhẫn và huấn luyện chó đúng cách, chó của bạn sẽ nhanh chóng trở thành một đối tác tuyệt vời trong trò chơi này.

Lựa chọn món đồ chơi: Đảm bảo chọn một món đồ mà chó của bạn ưa thích – có thể là một cái khăn, chai, hoặc bất kỳ món đồ chơi nào khác mà chó hay chơi. Đưa món đồ chơi ra trước mặt chó và bảo “lấy nó”, khen ngợi và thưởng cho chó mỗi khi nó tiếp cận và cắn vào đồ chơi.
Bắt đầu trò chơi kéo co: Khi chó cắn vào đồ chơi, nhẹ nhàng lắc và đẩy để khích lệ nó giữ chặt. Mỗi khi chó giữ chặt đồ chơi trong khi bạn kéo, bấm vào Clicker và nói lệnh “kéo”. Tiếp tục kích thích và thử thách chó bằng cách kéo đồ chơi, đảm bảo chó hiểu và phản ứng đúng với lệnh.
Tối ưu hóa hiệu quả: Đôi khi việc thay đổi đồ chơi có thể giúp chó quan tâm hơn. Để chó sử dụng lực mạnh hơn, bạn có thể trêu chọc chó một chút, giúp nó trở nên hứng thú và năng động hơn.
Kỹ thuật huấn luyện chó chuyên nghiệp nâng cao
Trong thế giới của huấn luyện chó, việc đạt tới trình độ chuyên nghiệp nâng cao là nghệ thuật kết hợp kiến thức khoa học, kỹ năng và sự kiên nhẫn. Nội dung dưới đây sẽ mang đến cho bạn những những phương pháp huấn luyện hiện đại, hiệu quả và đầy sáng tạo. Đồng hành cùng chúng tôi, biến ước mơ trở thành một huấn luyện viên chó chuyên nghiệp thành hiện thực!

Cách huấn luyện chó đi về phía bạn
Mỗi chú chó đều có một tên gọi đặc trưng, và việc đặt tên cho chó không chỉ là cách chúng nhận biết mình mà còn là cách tạo ra sự kết nối giữa chó và chủ nhân. Để chó nhanh chóng tiến về phía bạn khi gọi, việc huấn luyện chúng với lệnh “Lại đây” là vô cùng quan trọng.

Bắt đầu với việc gọi tên: Khi bạn đứng cách chó một khoảng xa, hãy gọi tên nó để thu hút sự chú ý. Ngay khi chó quay đầu nhìn về phía bạn, hãy bấm Clicker để tạo điều kiện cho việc huấn luyện tiếp theo.
Thưởng để khích lệ: Khi chó đã được huấn luyện biết tiếng Clicker liên kết với việc được thưởng, nó sẽ nhanh chóng tiến lại gần bạn sau mỗi tiếng Clicker. Khi chó tiến lại gần bạn, hãy bấm Clicker một lần nữa và ngay lập tức cho chúng thưởng thức bánh thưởng cho chó yêu thích.
Áp dụng lệnh “Lại đây”: Khi chó đã quen với việc tiến lại gần bạn sau tiếng Clicker, bắt đầu học nó hiểu lệnh “Lại đây”. Mỗi khi vỗ tay và chó quay đầu nhìn, hãy hô lệnh “lại đây”. Lặp lại bước này nhiều lần để chó liên kết giữa lệnh và hành động của nó.
Những điểm cần lưu ý: Trong quá trình huấn luyện, bạn cần phải bình tĩnh và kiên nhẫn. Sự nóng giận và mất kiên nhẫn có thể làm giảm hiệu quả của việc huấn luyện. Dành khoảng 30 phút mỗi ngày để huấn luyện chó, giúp chúng ghi nhớ và thực hiện tốt các lệnh.
Cách huấn luyện chó nhảy theo nhạc
Chắc hẳn bạn đã từng bị cuốn hút bởi những đoạn video chó nhảy múa theo điệu nhạc. Nhưng làm thế nào để chú chó của bạn cũng có thể thực hiện được điều tuyệt vời này? Đây là hướng dẫn chi tiết về cách huấn luyện chó nhảy theo nhạc ngay tại nhà. Hãy kiên nhẫn và nhớ khen ngợi chó mỗi khi nó thực hiện đúng lệnh, và bạn sẽ thấy kết quả đáng ngạc nhiên từ chú cưng của mình.

Đánh giá sức khỏe của chó: Trước hết, đảm bảo rằng chú chó của bạn hoàn toàn khỏe mạnh và không có vấn đề về xương khớp. Huấn luyện nhảy có thể gây áp lực lên xương và khớp của chú chó, vì vậy hãy cân nhắc kỹ trước khi bắt đầu.
Lựa chọn công cụ huấn luyện: Sử dụng một thanh huấn luyện hoặc một món đồ chơi mà chó yêu thích. Đưa nó ra trước mặt chó ở một độ cao khiến chó phải nhảy lên để chạm vào.
Bắt đầu bài học: Bước 1 khích lệ chó nhảy lên bằng cách giữ thanh huấn luyện ở một độ cao vừa phải. Khi chú chó nhảy lên và cả bốn chân không chạm đất, bấm clicker và thưởng cho nó. Bước 2 tăng dần độ cao của thanh huấn luyện khi bạn thấy chó đã làm quen và thoải mái với việc nhảy. Bước 3 dần dần loại bỏ thanh huấn luyện, thay vào đó chỉ sử dụng lệnh bằng giọng nói hoặc ký hiệu tay để chỉ dẫn chó.
Kỹ thuật và mẹo: Đặt lệnh “Nhảy” và kết hợp với ký hiệu tay. Huấn luyện chó khi nó đang trong tình trạng phấn khích, ví dụ như sau khi được thả ra ngoài chơi. Nhớ thưởng cho chó mỗi khi nó thực hiện đúng lệnh, điều này giúp tăng cường sự hứng thú và nhiệt huyết của chó trong quá trình học.
Cách huấn luyện chó nhặt đồ theo lệnh
Huấn luyện chó nhặt đồ, ngậm đồ theo hiệu lệnh là một kỹ năng quan trọng nhưng cũng không kém phần thách thức. Dù là phương pháp hướng dẫn dẫn dụ hay cưỡng ép, quan trọng nhất là sự kiên nhẫn và nhất quán trong việc huấn luyện. Với sự nhất quán và kiên nhẫn, bạn sẽ giúp chó của mình phát triển kỹ năng ngậm đồ một cách nhanh chóng và hiệu quả.

Xác định các bước huấn luyện: Huấn luyện chó ngậm đồ bao gồm nhiều bước như “ngậm”, “thả”, “gọi”, và “phân biệt”. Mỗi bước đều quan trọng và cần được tiến hành một cách tỉ mỉ, không nên hấp tấp.
Phương pháp hướng dẫn dẫn dụ: Chọn một nơi yên tĩnh, không có sự xao lạc. Khiến chó phấn khích bằng cách lắc lắc đồ vật trước mặt nó và sau đó ném ra xa. Khi chó đến ngậm đồ vật, lặp lại lệnh “ngậm”. Mỗi khi chó thực hiện đúng, khen ngợi nó và thưởng cho nó một miếng thức ăn yêu thích.
Phương pháp cưỡng ép: Đặt chó bên cạnh bạn và ra lệnh cho nó ngồi. Sử dụng một tay để mở miệng chó và đặt đồ vật vào trong miệng nó, giữ chắc cho đến khi chó bắt đầu ngậm tự nhiên. Khi chó đã ngậm đồ vật trong một khoảng thời gian ngắn, ra lệnh “thả” và thưởng cho nó.
Cách huấn luyện chó biết nhảy dây
Huấn luyện chó nhảy dây không chỉ giúp tăng cường thể lực cho thú cưng của bạn mà còn là cách tạo dựng mối quan hệ đặc biệt giữa bạn và chú chó. Dưới đây là hướng dẫn chi tiết để bạn có thể dạy chú chó nhảy dây cùng bạn một cách hiệu quả. Qua quá trình tập luyện, sự kiên nhẫn và động viên sẽ giúp bạn và chú chó có những khoảnh khắc vui vẻ và ý nghĩa bên nhau.

Lựa chọn đúng thời điểm: Chó từ 1 năm tuổi trở lên phù hợp nhất cho bài tập này để đảm bảo sức khỏe và bảo vệ xương hông. Chọn dây nhảy phù hợp, sợi dây thô và nhẹ, giúp chó dễ dàng nhảy mà không bị đau.
Khởi đầu với tấm thảm: Đặt một tấm thảm màu sắc nổi bật trước bạn. Lệnh chú chó nhảy lên và ra lệnh “Nhảy” sau đó thưởng ngay cho nó.
Tập luyện cơ bản: Tạo sự quen thuộc với dây nhảy bằng cách đặt dây nhảy trước mặt chó, di chuyển dây qua lại để chú chó làm quen và học cách nhảy qua dây. Khi chó bắt đầu quen thuộc với việc nhảy qua dây, hãy hô lệnh “Nhảy dây” và thưởng ngay khi nó thực hiện đúng.
Phát triển kỹ năng: Khi chú chó đã hiểu cách nhảy dây, hãy thử nhảy cùng nó. Điều chỉnh tốc độ và độ cao của dây sao cho phù hợp với chú chó. Khi chú chó đã quen với việc nhảy dây, bạn có thể tăng tốc độ và độ cao của dây, giúp chó rèn luyện thể lực và kỹ năng tốt hơn.
Cách huấn luyện chó chạy quay vòng tại chỗ
Chú chó của bạn có thể trở thành tâm điểm chú ý khi bạn dạy nó kỹ năng xoay vòng tại chỗ. Đây không chỉ là một lệnh đơn giản mà còn là bí mật để tạo nên màn trình diễn ấn tượng. Dưới đây là hướng dẫn từng bước để giúp chú chó của bạn thực hiện màn xoay vòng hoàn hảo.

Bắt đầu với thanh huấn luyện: Đưa chú chó đi theo chuyển động tròn. Khi nó hoàn thành một vòng, bấm clicker và thưởng cho nó. Việc này giúp nó liên hệ giữa việc xoay vòng và phần thưởng.
Thêm tín hiệu bằng tay: Lặp lại bước 1 và dần dần thêm vào tín hiệu bằng tay, ví dụ như vẽ một vòng tròn bằng ngón tay trước mắt chó.
Bỏ thanh huấn luyện: Khi chó có thể thực hiện lệnh mà không cần thanh hướng dẫn, bạn có thể thêm lệnh bằng giọng nói, như “Quay”, và tiếp tục khích lệ nó.
Luyện tập thường xuyên: Tiếp tục tập cho đến khi chú chó có thể thực hiện lệnh một cách tự động và chính xác.
Lưu ý khi tập luyện: Đảm bảo chọn nơi tập luyện yên tĩnh, không có tiếng ồn từ TV, đồ chơi hoặc trẻ em. Sự tập trung là yếu tố quan trọng trong quá trình này. Nếu chó không thể tập trung, hãy kiểm tra lại thức ăn thưởng hoặc điều kiện môi trường.
Cách huấn luyện chó nhảy vượt chướng ngại vật
Huấn luyện chó vượt qua chướng ngại vật là một kỹ năng cao cấp giúp tăng cường sự linh hoạt và sự tự tin cho chó. Để chó thực hiện tốt, người chủ cần áp dụng các kỹ thuật đúng và kiên nhẫn. Với sự đầu tư thời gian và nỗ lực, chó của bạn sẽ trở nên linh hoạt và tự tin hơn khi vượt qua mọi thách thức.

Chuẩn bị và làm quen: Sử dụng một cây gậy cứng dài từ 80cm đến 1m. Đặt gậy dưới chân và hướng dẫn chó đi qua. Sử dụng thức ăn và clicker để khích lệ chó mỗi khi nó đi qua thành công.
Bước đầu huấn luyện: Dần dần nâng gậy cao hơn, từ từ để chó làm quen với việc nhảy qua. Mỗi khi chó nhảy qua gậy, hô lệnh “Nhảy” và thưởng thức cho nó.
Tập luyện nâng cao: Sau khi chó làm quen với gậy, sử dụng chướng ngại vật hình chữ A cao tối đa 1.5m. Khi dắt chó qua chướng ngại vật, cần giữ chó ở cạnh và hướng dẫn chó vượt qua một cách an toàn.
Lưu ý khi huấn luyện: Chỉ tập cho chó từ 8 tháng tuổi trở lên để đảm bảo chó có sức khỏe và cấu trúc xương tốt trước khi tập luyện. Khen ngợi chó mỗi khi nó thực hiện đúng và kiên nhẫn nếu chó gặp khó khăn.
Cách huấn luyện chó chạy theo hình zic zắc
Chắc hẳn bạn rất ngạc nhiên trước kỹ năng chạy hình dích dắc của chó trong các cuộc thi Dog Show. Vậy làm sao để huấn luyện chó của bạn thực hiện được kỹ năng tuyệt vời này? Dưới đây là hướng dẫn từng bước giúp bạn đạt được mục tiêu này.

Hiểu về bài thi zic zac: Chạy zic zac là một trong những phần thử thách trong cuộc thi dog agility. Để hoàn thành, chó cần di chuyển nhanh qua lại giữa các cột, tạo nên hình chữ S.
Chuẩn bị trang thiết bị: Dùng các cốc, hộp hình nón hoặc ly nhựa để tạo thành các cột chạy. Khoảng cách giữa chúng nên từ 40-80cm tùy vào kích thước của chó.
Bước đầu tiên trong quá trình huấn luyện: Dùng mồi để dẫn dắt chó di chuyển qua lại giữa các cột. Khi chó bắt đầu làm quen, sử dụng clicker và thưởng để khích lệ.
Từng bước huấn luyện: Khi chó đã làm quen với việc di chuyển qua lại giữa các cột, thêm lệnh “Zic zắc” vào quá trình huấn luyện. Sử dụng lệnh và ký hiệu tay để chỉ dẫn cho chó. Bấm clicker mỗi khi chó thực hiện đúng, thưởng cho nó để khích lệ. Làm điều này nhiều lần cho đến khi chó có thể chạy zic zac mà không cần sự hướng dẫn của bạn.
Khắc phục những lỗi thường gặp: Nếu chó chạy sai hướng hoặc bỏ sót cột, hãy điều chỉnh lại vị trí của cột để giúp chó dễ dàng hơn. Đối với những chó mới bắt đầu, có thể giảm độ khó của bài tập để giúp chó làm quen.
Những điểm quan trọng cần chú ý: Khi huấn luyện, luôn để chó nhìn thấy bạn và bao quát hoạt động của chó. Sự kiên nhẫn là yếu tố quan trọng. Đừng trách phạt chó khi nó không thực hiện đúng, thay vào đó, hãy tiếp tục luyện tập và khích lệ chó.
Cách huấn luyện chó nhảy qua vòng tròn xiếc
Bạn đã từng thán phục trước tài năng của những chú chó trong các buổi diễn xiếc, khi chúng nhảy qua những vòng tròn với độ chính xác và nhanh nhẹn? Hãy tìm hiểu cách bạn có thể huấn luyện chú chó cưng của mình thực hiện kỹ thuật này ngay tại nhà.

Khám phá sức mạnh của vòng tròn: Huấn luyện chó nhảy qua vòng tròn không chỉ giúp tăng cường khả năng vận động của chú chó, mà còn giúp chú chó học hỏi và phản ứng nhanh chóng với môi trường xung quanh.
Làm quen với vòng: Bắt đầu với một vòng tròn bằng nhựa hoặc bất kỳ chất liệu nào bạn có. Đặt nó ở mức thấp sao cho phần dưới của vòng chạm đất. Dùng một mồi ngon hoặc đồ chơi yêu thích của chó, hướng dẫn nó đi qua vòng. Khi chú chó bước qua, khen ngợi nó và thưởng cho nó.
Lặp lại và củng cố: Lặp lại bước trên nhiều lần, khoảng 10 lần hoặc cho đến khi chú chó quen với việc đi qua vòng. Dần dần, khi chó đã làm quen, bạn có thể dùng lệnh “Nhảy” và đồng thời nâng cao vòng tròn một chút.
Tăng độ khó: Khi chó đã hiểu lệnh và thực hiện tốt ở mức thấp, hãy tăng dần độ cao của vòng tròn. Điều này giúp chú chó phải nhảy cao hơn và tập trung hơn. Nếu chó mắc lỗi như chạm vào vòng, hãy giảm độ cao và tiếp tục luyện tập.
Điều chỉnh và tối ưu: Khi chó đã thực hiện tốt, hãy giảm dần việc sử dụng mồi và chuyển sang sử dụng lệnh. Đối với những chó mới bắt đầu, hãy kiên nhẫn và dần dần tăng độ khó của bài tập.
Cách huấn luyện chó nhảy lên bắt đồ
Bạn muốn chú chó cưng của mình không chỉ biết đón đồ bằng miệng mà còn có thể nhảy lên và bắt chúng một cách chính xác? Hãy cùng khám phá bí quyết để dạy chó bắt đồ cực chuẩn và chính xác.

Làm quen với việc bắt đồ: Trước hết, trong những lúc chó cảm thấy đói, bạn có thể thử ném một vài mảnh thức ăn nhỏ hoặc thức ăn hạt. Điều này giúp chó làm quen với việc bắt đồ từ không trung.
Bắt đầu với khoảng cách ngắn: Chọn một quả bóng tennis hoặc đồ chơi mà chú chó yêu thích. Ném đồ chơi ở khoảng cách ngắn và hô lệnh “Bắt”. Nếu chó không bắt đồ chơi, nhặt nó lên và thử lại. Khi chú chó thành công, hãy khen ngợi, bấm clicker và thưởng cho nó.
Phát triển kỹ năng: Lặp lại bước 2 nhiều lần, từ từ tăng khoảng cách ném và đồ chơi sử dụng. Sử dụng các đồ vật khác nhau như bóng đá, móc chìa khóa hoặc đồ chơi khác để chú chó có cơ hội phát triển kỹ năng bắt đồ của mình. Đối với những chú chó còn nhỏ hoặc những chú chó có nướu mỏng, bạn nên chọn những đồ vật mềm để tránh làm đau răng của chúng.
Nâng cao kỹ năng: Khi chó đã thạo kỹ thuật bắt đồ, bạn có thể thử nâng cao bài tập bằng cách sử dụng đĩa bay. Điều này không chỉ giúp chó tăng cường khả năng vận động mà còn giúp chó trở nên linh hoạt và nhanh nhẹn hơn trong các bài tập huấn luyện sau này.
Cách huấn luyện chó đi đến điểm chỉ định
Mỗi chủ nhân đều mong muốn chó cưng của mình tuân thủ các lệnh và đến đúng nơi mình chỉ định. Dưới đây là hướng dẫn chi tiết để dạy chó làm điều đó một cách hiệu quả.

Tầm quan trọng của việc huấn luyện: Huấn luyện chó đến một vị trí cụ thể có thể hỗ trợ trong việc chụp ảnh, quay phim, và thậm chí giúp ích trong việc định vị chó trong những khu vực đông đúc.
Bắt đầu với những bước đơn giản: Sử dụng một thanh đào tạo hoặc chỉ tay, hướng chó đến một mảnh giấy hoặc một ký hiệu trên sàn nhà. Khi chó tiếp xúc hoặc đến gần vị trí chỉ định, bấm Clicker và thưởng ngay cho chó.
Thực hiện việc đánh dấu: Đặt một dấu hiệu, như một miếng băng dính có hình “X” trên sàn. Hướng dẫn chó đến vị trí đó bằng thanh đào tạo và mỗi khi chó đến đúng vị trí, bấm Clicker và thưởng cho chó.
Tạo sự liên kết giữa lệnh và hành động: Mỗi khi chó thực hiện đúng, hãy nói lệnh như “Đến đây” hoặc “Đến điểm X”. Lặp lại nhiều lần cho đến khi chó thực hiện đúng mỗi khi bạn phát ra lệnh.
Nâng cao kỹ năng: Khi chó đã làm quen với việc đi đến điểm đánh dấu, thử thay đổi vị trí hoặc sử dụng các vật dụng khác như tấm thảm, giường chó để huấn luyện. Hãy kết hợp việc dạy chó các lệnh khác như ngồi hoặc nằm khi đến điểm chỉ định.
Cách huấn luyện chó trườn bò trên mặt đất
Dạy chó trườn bò không chỉ là một kỹ năng nâng cao sử dụng trong các trung tâm huấn luyện chó mèo mà còn là một trò chơi vui nhộn bạn có thể thực hiện tại nhà. Dưới đây, chúng tôi sẽ giới thiệu chi tiết cách huấn luyện chó trườn bò một cách hiệu quả.

Chuẩn bị: Đưa chó vào tư thế nằm. Sắp xếp một miếng thức ăn mà chó yêu thích trước mặt nó.
Hướng dẫn chó trườn bò qua mồi: Hãy giữ tay bạn trên lưng chó để nó không đứng dậy. Kéo mồi từ từ trên sàn và cho chó theo dõi. Khi chó bắt đầu trườn theo, nói lệnh “Bò”. Mỗi khi chó trườn đúng, khen ngợi và thưởng thức ăn cho nó. Lặp lại bước này khoảng 10 lần trong mỗi phiên tập, và mỗi ngày có thể tập 2-3 phiên.
Tăng khoảng cách và thử thách: Khi chó đã quen với lệnh và biết cách trườn, bạn có thể tăng khoảng cách và sử dụng tay để chỉ dẫn mà không cần mồi. Đặt mục tiêu và kỳ vọng cao hơn mỗi lần tập.
Thời gian và kiên nhẫn: Huấn luyện chó yêu cầu sự kiên nhẫn và thời gian. Đừng nản lòng nếu chó không thực hiện đúng ngay từ lần đầu tiên. Luôn kết thúc phiên huấn luyện với những phút giây vui vẻ và tích cực.
Lưu ý thêm: Luôn chú ý đến tình trạng sức khỏe của chó. Không nên huấn luyện quá mức hoặc khi chó mệt mỏi. Sử dụng lời khen và thưởng để khích lệ tinh thần chó. Hãy chắc chắn rằng môi trường huấn luyện thoáng đãng, sạch sẽ.
Cách huấn luyện chó nằm xoay vòng tròn
Dạy chó nằm xoay vòng tròn là một bài học thú vị và đơn giản mà bạn có thể thực hiện tại nhà. Dưới đây, chúng tôi sẽ giới thiệu chi tiết các bước và kỹ thuật giúp chó nằm xoay vòng một cách nhanh chóng và đúng cách.

Cơ bản về việc dạy chó xoay vòng: Hãy bắt đầu bằng việc hô lệnh “Nằm” để chó nằm xuống. Đưa thanh huấn luyện cạnh đầu chó và hướng nó chạm vào đầu thanh. Khi chó quay đầu theo thanh và lăn người theo hướng vòng cung, bấm clicker và thưởng ngay cho nó.
Kỹ thuật và kí hiệu: Sau khi chó đã làm quen với thanh huấn luyện, bạn có thể sử dụng ký hiệu bằng tay. Khi nói lệnh “Cuộn tròn”, hãy vẽ vòng tròn bằng tay trước mặt chó. Khi chó thực hiện đúng, bấm clicker và thưởng liền.
Lưu ý khi huấn luyện: Luôn kiên nhẫn và lặp lại nhiều lần. Mỗi phiên tập nên kéo dài 5-10 phút và thực hiện 2-3 lần mỗi ngày. Hãy chắc chắn rằng môi trường huấn luyện thoáng đãng. Khuyến cáo nên huấn luyện trong nhà để tránh làm dơ lông chó. Nếu chó gặp khó khăn, hãy sử dụng một nơi dốc nhẹ để giúp nó dễ dàng xoay hơn.
Cách huấn luyện chó đi giật lùi về sau
Huấn luyện chó lệnh “Lùi” là một trong những bài học thú vị, giúp tăng cường sự phối hợp giữa chủ và chó. Đây không chỉ là một lệnh đơn thuần, mà còn có thể kết hợp với nhiều biểu diễn khác như đứng, nằm, ngồi… Dưới đây là hướng dẫn chi tiết để chó có thể thực hiện lệnh huấn luyện chó này một cách chính xác.

Mục tiêu của lệnh “Lùi”: Lệnh này giúp chó di chuyển lùi theo hướng dẫn của chủ, tạo ra một biểu diễn thú vị và đồng thời giúp chủ dễ dàng kiểm soát chó trong nhiều tình huống.
Các bước thực hiện: Bắt đầu từ tư thế cơ bản: Đứng đối diện với chó và đảm bảo chó ở tư thế đứng. Khi bạn tiến một bước về phía chó, phản xạ tự nhiên của nó sẽ là lùi lại. Khi chó di chuyển, nhanh chóng bấm clicker và thưởng cho nó. Sau khi lặp lại vài lần, bắt đầu áp dụng lệnh bằng giọng nói, ví dụ: “Lùi”. Mỗi khi chó thực hiện đúng, bấm clicker và thưởng cho nó. Khi chó đã hiểu lệnh và thực hiện chính xác, bạn không cần phải tiến về phía chó nữa. Chỉ cần hô lệnh và thưởng cho nó khi thực hiện đúng.
Lưu ý khi huấn luyện: Một số chú chó có thể gặp khó khăn khi học lệnh này. Trong trường hợp đó, hãy kết hợp ngôn ngữ cơ thể, ví dụ: vẫy tay để chỉ dẫn chó di chuyển lùi. Đảm bảo môi trường tập luyện thoáng đãng, không tiếng ồn để chó có thể tập trung tốt hơn. Luôn kiên nhẫn và nhất quán trong quá trình huấn luyện.
Những lưu ý khi tự huấn luyện chó tại nhà
Huấn luyện chó là một hành trình đòi hỏi sự kiên nhẫn, nhất quán và tình yêu thương. Qua mỗi bài học, chú chó không chỉ học được các kỹ năng mà còn tăng cường mối liên kết với bạn. Chúc bạn có những giây phút vui vẻ và thành công khi huấn luyện chó tại nhà!

Thái độ và tư duy khi huấn luyện: Để tạo sự tôn trọng từ chú chó, bạn cần phải tự tin và mạnh mẽ trong mỗi hành động, từ giọng điệu cho tới cử chỉ. Luôn giữ vững tâm lý rằng bạn là người dẫn dắt, và chó cần phải tuân theo. Đừng bỏ qua mệnh lệnh và luôn kỳ vọng chú chó thực hiện chúng. Đối mặt với thách thức trong quá trình huấn luyện cần sự kiên nhẫn và thấu hiểu.
Thưởng và trừng phạt: Khi chó thực hiện đúng, hãy thưởng ngay lập tức để khích lệ và củng cố hành vi đó. Hãy tránh việc trừng phạt chó một cách oan trái hoặc không rõ ràng lý do.
Yêu cầu cơ bản: Đảm bảo môi trường huấn luyện an toàn và thoáng đãng cho chó. Luôn nhắc lại và ôn tập các bài học giúp chó ghi nhớ lâu dài. Không giảng dạy nhiều hành động trong một lần, giúp chó dễ dàng tiếp thu và thực hiện.
Sử dụng mệnh lệnh: Các mệnh lệnh cần ngắn gọn và dễ hiểu. Tất cả mọi người trong nhà đều sử dụng cùng một loại mệnh lệnh giúp chó không bị rối.
Kỹ thuật tập luyện: Chọn thời gian tập luyện phù hợp với lứa tuổi và tình trạng sức khỏe của chó. Không dùng thức ăn như một công cụ kiểm soát hành vi của chó, hãy sử dụng nó như một phần thưởng. Giúp chó thân thiện, hoà đồng và không hung dữ.
Qua bài viết, chúng ta đã cùng nhau tìm hiểu sâu rộng về những kỹ thuật huấn luyện chó chuyên nghiệp nâng cao, đồng thời nhấn mạnh tầm quan trọng của việc áp dụng lý thuyết vào thực tế. Hy vọng rằng, với những kiến thức được chia sẻ, bạn sẽ đạt được những thành công mới trong hành trình huấn luyện cún cưng của mình.", 
                'LuotXem' => 0, 
                'BinhLuan' => 0, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 3,
                'Mataikhoan' => 1,
                'MaDMBV' => 2,
                'TieuDe' => '7 mẹo cách trị rận cho mèo tại nhà cực hiệu quả',
                'Hinh' => 'bi_ran_meo_can_5_bf52b4cb0e.jpg',
                'NoiDung' => 'Trong cuộc sống hàng ngày của người nuôi mèo, việc áp dụng cách trị rận cho mèo tại nhà là một thách thức không nhỏ. Ve rận và bọ chét không chỉ khiến mèo khó chịu mà còn có nguy cơ lây lan bệnh tật. Đặc biệt, ở mèo con với sức đề kháng còn yếu, việc phòng tránh và điều trị ký sinh trùng trở nên cần thiết hơn bao giờ hết.',
                'ChiTiet' => 'Câu hỏi đặt ra là làm thế nào để trị rận một cách hiệu quả? Bài viết này từ Pet Mart sẽ giới thiệu đến bạn những mẹo và phương pháp cách trị rận cho mèo hiệu quả, giúp đảm bảo sức khỏe tốt nhất cho những người bạn bốn chân của chúng ta.

Bọ chét ve rận ở mèo lây lan như thế nào?
Bọ chét mèo không chỉ làm phiền thú cưng mà còn là mối đe dọa cho sức khỏe của chúng. Đặc biệt trong điều kiện ẩm ướt và nóng bức như ở Việt Nam, bọ chét phát triển mạnh mẽ, ký sinh trên mèo, hút máu. Mỗi con cái có thể đẻ tới  hàng ngàn trứng trong vòng đời khoảng 50 ngày. Thực hiện các cách trị rận cho mèo tại nhà càng sớm càng tốt là việc cần thiết.

Chu kỳ phát triển của bọ chét và ve rận trên mèo
Giai Đoạn Phôi: Trứng phát triển thành phôi trong vài ngày.
Giai Đoạn Ấu Trùng: Ấu trùng sống bằng vụn hữu cơ.
Giai Đoạn Nhộng: Chuyển đổi từ ấu trùng sang trưởng thành.
Giai Đoạn Trưởng Thành: Bọ chét trưởng thành bắt đầu chu kỳ giao phối và đẻ trứng.
Ảnh hưởng của thời tiết trong quá trình phát triển của ve rận
Mùa Xuân và Hè: Vòng đời bọ chét ngắn lại, chỉ từ 17-40 ngày, tạo điều kiện cho sự sinh sôi nhanh chóng. Cuối mùa hè, vòng đời có thể kéo dài đến 2 tháng hoặc hơn.
Mùa Đông: Sự phát triển của bọ chét chậm lại, ấu trùng ký sinh lâu hơn, kéo dài tới 10 tháng.
Độ Ẩm: Môi trường ẩm ướt hỗ trợ sự phát triển từ trứng bọ chét biến thành ấu trùng trưởng thành.
Làm thế nào để biết mèo đang có ve rận?
Rận và bọ chét là những ký sinh trùng phổ biến ở mèo con, gây ra không ít phiền toái và bệnh tật. Dưới đây là một số dấu hiệu giúp bạn nhận biết mèo bị rận để áp dụng cách trị rận cho mèo phù hợp.

Ngứa Ngáy Liên Tục: Mèo con bị rận thường có biểu hiện ngứa ngáy do phản ứng dị ứng với protein trong nước bọt của rận. Tình trạng này thường dẫn đến hành vi liên tục cắn hoặc liếm lông.
Cắn Chân và Đuôi: Một dấu hiệu khác là mèo thường xuyên cắn vào chân sau, đặc biệt là xung quanh đuôi và đùi.
Nốt Màu Đỏ hoặc Đen Trên Cơ Thể: Nếu bạn thấy những nốt màu đỏ hoặc đen trên cơ thể mèo, đó có thể là phân của bọ chét. Đây là dấu hiệu cần lưu ý và cần phải áp dụng cách trị rận cho mèo ngay lập tức.
Dị Ứng Nghiêm Trọng: Một số mèo con có thể có phản ứng dị ứng nghiêm trọng với nước bọt của bọ chét, gây sưng tấy.
Tùy thuộc vào phản ứng hóa học và các tế bào khác nhau, dị ứng da và các dấu hiệu mèo con bị rận có thể xuất hiện lập tức. Có thể sau khoảng 5 – 6 giờ. Thậm chí sau 24 – 48 giờ mới xuất hiện. Nên tìm cách diệt bọ chét mèo ngay khi thấy các dấu hiệu này.

Vì sao trị rận cho mèo là việc quan trọng?
Bọ chét và ve rận là những ký sinh trùng sống bên ngoài cơ thể vật chủ, chủ yếu hút máu từ mèo để tồn tại. Tuy chỉ là vết cắn nhỏ, nhưng nước bọt của chúng có chứa chất gây dị ứng, gây nguy hiểm nghiêm trọng đối với sức khỏe của mèo. Tác hại của bọ chét ve rận có thể gây ra cho mèo như sau:

Dị Ứng: Vết cắn của bọ chét có thể gây viêm da, thiếu máu, ngứa, viêm da và nhiễm trùng. Bạn có thể tham khảo các dấu hiệu mèo bị viêm da tại đây.
Nhiễm Trùng và Áp Xe: Ve có khả năng gây nhiễm trùng, tạo áp xe, và trong một số trường hợp, gây tê liệt hoặc tử vong.
Truyền Bệnh: Cả bọ chét và ve đều là ký sinh lây truyền nhiều loại bệnh nguy hiểm, bao gồm: Lyme disease, Anaplasmosis, Bartonellosis, Rocky Mountain Spotted Fever, Tapeworms, Babesiosis
Lây Sang Người: Mặc dù mèo không dễ mắc các bệnh do ve gây ra như chó, nhưng chúng vẫn có nguy cơ mắc bệnh và có khả năng lây nhiễm sang con người, đặc biệt là các bệnh lây truyền từ mèo sang người.
Việc phòng chống bọ chét và ve không chỉ giúp giảm nguy cơ mèo mắc phải các phản ứng dị ứng và bệnh tật do ký sinh trùng gây ra, mà còn giúp ngăn ngừa khả năng lây lan bệnh từ mèo sang người. Sự chăm sóc và phòng ngừa cẩn thận sẽ giữ cho mèo cưng của bạn khỏe mạnh và an toàn.

Các cách trị rận cho mèo tại nhà thủ công
Rận và bọ chét không chỉ gây phiền toái mà còn ảnh hưởng đến sức khỏe của mèo con. Dưới đây là các cách đơn giản để phát hiện và cách trị rận cho mèo tại nhà:

Chải Lông và Bắt Thủ Công: Sử dụng các loại lược chải lông mèo chuyên dụng thường xuyên giúp phát hiện sớm ve rận và bọ chét, giúp loại bỏ chúng khỏi lông mèo. Rận và bọ chét thường ẩn nấp ở góc tường, chỗ tối, và chuồng trại mèo. Vệ sinh kỹ lưỡng môi trường sống của mèo để ngăn chặn sự lây lan.
Sử Dụng Nước Xịt Khử Trùng: Nước xịt khử trùng có tác dụng tiêu diệt vi khuẩn và ký sinh trùng, bảo vệ môi trường sống của mèo khỏi sự lây lan của bệnh tật.
Tắm Cho Mèo Bằng Sữa Tắm Chuyên Trị: Lựa chọn sữa tắm cho mèo chuyên dụng được các bác sĩ thú y khuyên dùng, giúp loại bỏ ve rận và bọ chét hiệu quả. Không tắm mèo bằng nước lạnh, tránh làm giảm thân nhiệt và gây bệnh hô hấp cho mèo.
Dùng Dung Dịch Nước Chanh: Pha chế dung dịch nước chanh, sau đó xịt dung dịch nước chanh lên cơ thể mèo sau khi tắm và chải lông, giúp loại bỏ bọ chét mà không gây hại cho thú cưng.
Dùng Tinh Dầu Bạc Hà: Pha loãng tinh dầu bạc hà sau đó dùng bông tăm chấm hỗn hợp tinh dầu bạc hà và dầu dừa lên những vùng da tổn thương do rận cắn, giúp loại bỏ vi khuẩn và làm sạch vùng da bị tổn thương.
Các phương pháp trên cần được thực hiện một cách đều đặn và kiên trì để đạt hiệu quả cao nhất. Đảm bảo mèo không tiếp xúc với mèo khác đang bị nhiễm rận hoặc bọ chét để ngăn chặn sự lây nhiễm trở lại. Các cách trị rận cho mèo tại nhà này không chỉ hiệu quả mà còn an toàn cho mèo con. Việc chăm sóc và vệ sinh thường xuyên giúp đảm bảo mèo luôn khỏe mạnh và không bị ảnh hưởng bởi ký sinh trùng.

Các loại thuốc trị rận cho mèo khuyên dùng
Bọ chét và ve không chỉ làm phiền thú cưng mà còn ảnh hưởng đến sức khỏe của chúng. Việc lựa chọn sản phẩm thuốc trị rận mèo phòng ngừa phù hợp cần dựa trên việc hiểu rõ loại ký sinh trùng bạn muốn ngăn chặn:

Đúng Loại Sản Phẩm: Chọn sản phẩm phù hợp cho mèo, kết hợp khả năng bảo vệ đa dạng.
Cân Nhắc Trước Khi Sử Dụng: Luôn xin ý kiến bác sĩ thú y trước khi chọn sản phẩm.
Tuân Thủ Hướng Dẫn Sử Dụng: Đọc kỹ hướng dẫn, đặc biệt khi điều trị cho mèo con, mèo già, mèo yếu, mèo mang thai hoặc cho con bú.
Theo Dõi Mèo Sau Điều Trị: Quan sát mèo sau khi sử dụng thuốc và cách trị rận cho mèo để phát hiện bất kỳ phản ứng nào.
Xử Lý Khi Có Phản Ứng: Nếu thấy dấu hiệu bất thường, tắm sạch mèo và đưa đến gặp bác sĩ thú y.
Xác định lựa chọn phù hợp dựa trên đặc điểm và nhu cầu cụ thể của mèo. Trong thời tiết ôn hòa đến trung bình, việc bảo vệ thú cưng là cần thiết, đặc biệt ở các khu vực có khí hậu ấm. Dưới đây là danh sách các loại thuốc cách trị rận cho mèo được khuyên dùng:

Thuốc nhỏ gáy trị rận cho mèo
MERIAL Frontline Plus: Đây là một trong những sản phẩm nhỏ gáy phổ biến nhất trên thị trường, hiệu quả trong việc ngăn ngừa và điều trị rận, bọ chét và ve. Hoạt động bằng cách phá vỡ chu kỳ phát triển của bọ chét, ngăn chặn sự phát triển từ trứng.
Advantage II: Được biết đến với khả năng diệt bọ chét nhanh chóng, hiệu quả trong việc kiểm soát rận. Sản phẩm này an toàn cho mèo từ 8 tuần tuổi trở lên và có thể ngăn chặn sự tái nhiễm trong vòng nhiều tuần.
Revolution (Selamectin): Không chỉ trị rận và bọ chét mà còn hiệu quả chống lại một số loại giun đường ruột và giun tim. Đây là một lựa chọn tuyệt vời nếu bạn muốn một sản phẩm đa năng để bảo vệ thú cưng của mình.
Sữa tắm trị rận cho mèo
Trước khi sử dụng bất kỳ sản phẩm sữa tắm trị rận cho mèo nào, hãy đảm bảo rằng bạn đã đọc kỹ hướng dẫn và kiểm tra xem nó có phù hợp với tình trạng cụ thể của mèo của bạn hay không. Nếu mèo của bạn có bất kỳ vấn đề da liễu hoặc sức khỏe cụ thể nào, bạn nên tham khảo ý kiến của bác sĩ thú y trước khi chọn sữa tắm trị rận cho mèo.

BBN Killing Mites Shampoo: Sản phẩm là lựa chọn tuyệt vời cho chó có làn da nhạy cảm, mà còn giúp đối phó hiệu quả với các vấn đề về da như viêm da do nấm, vi khuẩn và ve rận. Đặc biệt, công thức chứa Pectin giúp phục hồi sức sống cho bộ lông.
BIOLINE Insect Repellent Shampoo: Là giải pháp hoàn hảo trong việc bảo vệ chúng khỏi ve rận, bọ chét và các loại côn trùng gây hại khác. Sản phẩm này được tạo nên từ công thức dịu nhẹ, bao gồm chiết xuất Margosa tự nhiên, giúp giảm kích ứng da, đồng thời nuôi dưỡng lông mèo, làm cho nó trở nên mềm mại, bóng mượt và khỏe mạnh.
TROPICLEAN Natural Flea Tick Dog Shampoo: Được tạo nên từ các thành phần tự nhiên như dầu bạc hà và dầu mè, sản phẩm này không chỉ diệt trừ ve, rận, trứng và sâu bọ mà còn cung cấp sự an toàn tuyệt đối.
Veterinary Formula Clinical Care Flea and Tick Shampoo: Đây là một sự lựa chọn tốt cho mèo với làn da nhạy cảm. Sản phẩm này không chỉ giúp diệt rận và bọ chét mà còn giúp làm dịu da và giảm viêm nhiễm.
Adams Plus Flea & Tick Shampoo: Cung cấp hiệu quả kép với việc diệt trừ côn trùng và ngăn chặn sự phát triển của trứng và ấu trùng. Điểm mạnh của sản phẩm này là chứa Precor, một chất ức chế phát triển côn trùng.
Natural Chemistry De Flea Pet Shampoo: Đây là một lựa chọn tốt cho những người muốn sử dụng các sản phẩm tự nhiên. Sữa tắm này sử dụng các thành phần từ thực vật để diệt rận mà không gây hại cho mèo.
Sentry PurrScriptions Plus Flea & Tick Shampoo: Cung cấp một công thức mạnh mẽ giúp loại bỏ cả rận và bọ chét. Nó cũng chứa các thành phần dưỡng ẩm để giúp bảo vệ làn da và lông của mèo.', 
                'LuotXem' => 0, 
                'BinhLuan' => 0, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 4,
                'Mataikhoan' => 1,
                'MaDMBV' => 2,
                'TieuDe' => 'Cách sử dụng thuốc tẩy giun cho mèo hiệu quả',
                'Hinh' => 'meo-nhiem-giun-san_77d242b088cc400fac75abe2ef3bfd93_grande.jpg',
                'NoiDung' => 'Việc hiểu rõ về tẩy giun cho mèo, dấu hiệu, cách sử dụng thuốc tẩy giun cho mèo giúp điều trị, ngăn ngừa nhiễm giun ở mèo là điều quan trọng đối với mọi chủ nhân. Trong bài viết này, Pet Mart sẽ giải đáp mọi thắc mắc về xổ giun cho mèo, từ việc xác định loại giun đến chọn lựa thuốc phù hợp và lên lịch tẩy giun hiệu quả, đảm bảo sức khỏe tốt nhất cho thú cưng yêu quý của bạn.',
                'ChiTiet' => 'Mèo thường bị nhiễm những loại giun nào?
Việc nhận biết và điều trị kịp thời các loại giun nhiễm trùng ở mèo là rất quan trọng để đảm bảo sức khỏe và phúc lợi cho chúng. Các chủ nhân mèo nên thường xuyên thăm thú y để kiểm tra và điều trị tẩy giun cho mèo định kỳ, giúp ngăn chặn sự lây lan và ảnh hưởng của các loại giun này.

Giun đũa (Tapeworms)
Đây là loại ký sinh phổ biến nhất ở mèo. Bạn có thể nhìn thấy giun đũa trong phân của mèo trưởng thành. Trong khi đó mèo con thường mắc phải giun từ sữa mẹ.

Giun đũa là loại giun dài và mảnh, thường bám vào và tấn công ruột của mèo. Giun đũa có nhiều đốt, mỗi đốt có cơ quan sinh sản riêng. Chúng thường được phát hiện khi thấy các đốt giun, trông giống hạt gạo, trong phân mèo. Có nhiều loại giun đũa, tùy thuộc vào vật chủ từ bọ chét đến động vật gặm nhấm. Mèo có thể bị nhiễm khi bị bọ chét cắn hoặc ăn phải động vật nhiễm giun. Một số loại giun đũa thường gặp ở mèo bao gồm Dipylidium caninum (do bọ chét truyền) và Taenia taeniaeformis (nhiễm từ chuột).

Giun tròn (Roundworms)
Mặc dù chúng khá hiếm, tuy nhiên giun tròn sống ký sinh trong phổi lại rất nguy hiểm. Chúng có thể gây ảnh hưởng đến phổi của mèo con. Nguyên nhân thường do mèo tiếp xúc với động vật bị nhiễm bệnh như chuột hay chim.

Giun tròn là loại giun phổ biến nhất ở cả mèo và chó, ảnh hưởng đến ruột của mèo. Hầu hết mèo đều bị nhiễm giun tròn trong đời, đặc biệt là khi còn là mèo con. Mèo có thể bị nhiễm qua việc ăn phải trứng giun, ăn chuột nhiễm bệnh, hoặc uống sữa từ mẹ bị nhiễm. Hai loại giun tròn phổ biến ở mèo là Toxocara cati và Toxascaris leonina. Mèo con thường bị nhiễm từ sữa mẹ.

Giun móc (Hookworms)
Mặc dù giun móc thường gặp ở chó nhiều hơn. Tuy nhiên không phải không ảnh hưởng đến mèo. Giun móc sẽ tấn công vào ruột non của mèo khi chúng ăn phải những con vật mắc bệnh.

Giun móc là loại ký sinh trùng ảnh hưởng đến đường tiêu hóa của mèo, thường là niêm mạc ruột. Chúng hút máu mèo và lây lan qua phân và đất nhiễm khuẩn. Giun móc rất nguy hiểm, đặc biệt với mèo con, vì chúng có thể gây chảy máu đường ruột, dẫn đến tử vong. Các loại giun móc thường gặp ở mèo bao gồm Ancylostoma tubaeforme và Uncinaria stenocephala.

Sân dây và các loại giun khác
Sán dây gặp khá phổ biến ở mèo và có thể nhìn thấy trên lông của mèo con đặc biệt là quanh khu vực hậu môn, nguyên nhân chính của việc này là do bọ chét. Giun chỉ là loại giun thường gặp, mèo có thể sẽ bị ảnh hưởng đến toàn bộ hệ thống tim mạch và có thể dẫn đến suy tim.

Nguyên nhân khiến cho mèo bị giun sán
Chăm sóc tốt cho mèo, từ việc giữ vệ sinh môi trường sống đến việc tẩy giun cho mèo định kỳ, sẽ giúp giảm thiểu rủi ro nhiễm giun sán, đảm bảo một cuộc sống khỏe mạnh và hạnh phúc cho thú cưng của bạn.

Môi trường sống là một trong những yếu tố chính ảnh hưởng đến nguy cơ mèo bị nhiễm giun. Mèo sống ngoài trời có nguy cơ cao hơn so với mèo sống trong nhà, nhưng mèo sống trong nhà cũng không hoàn toàn an toàn. Có nhiều cách khiến mèo có thể nhiễm giun, bao gồm:

Tẩy giun không đúng cách: Việc không điều trị và tẩy giun cho mèo đúng cách cho mèo có thể dẫn đến các rủi ro nghiêm trọng như tắc nghẽn ruột, tắc nghẽn dòng máu của tim, viêm động mạch và thậm chí tử vong.
Từ lúc sinh ra: Mèo con có thể nhiễm giun từ mẹ, đặc biệt là khi bú sữa mẹ sau khi sinh.
Từ môi trường: Giun lây qua phân của động vật bị nhiễm. Nếu mèo tiếp xúc với phân nhiễm, đất, cỏ, thức ăn hoặc nước ô nhiễm, chúng có nguy cơ bị nhiễm giun.
Môi trường sống sạch sẽ, tẩy giun cho mèo mẹ và các mèo khác, làm sạch hộp đựng cát định kỳ và giữ cho mèo không bị nhiễm bọ chét có thể giảm thiểu nguy cơ nhiễm giun đường tiêu hóa cho mèo con.
Qua con mồi: Vì thỏ, chuột và các con mồi nhỏ khác có thể là vật chủ cho giun ký sinh, mèo săn mồi có nguy cơ cao bị nhiễm giun. Mèo có thể dễ dàng bị nhiễm giun nếu chúng có lối sống ngoài trời hoặc vừa sống trong nhà vừa ra ngoài. Các hoạt động như săn và ăn chuột nhiễm bệnh, tiếp xúc với bọ chét từ mèo khác, tiếp xúc với phân của mèo bị nhiễm bệnh, ăn thức ăn ô nhiễm, đi chân trên đất chứa trứng hoặc ấu trùng giun rồi tự vệ sinh có thể làm tăng nguy cơ nhiễm giun.
Từ ve, bọ chét: Một số loại ve, bọ chét là vật truyền bệnh cho một số loại giun, như giun đũa.
Qua thức ăn: Thịt sống hoặc chưa nấu chín có thể nhiễm giun đũa.
Phương pháp chuẩn đoán mèo nhiễm giun
Quá trình chẩn đoán thường mất ít hơn 24 giờ. Việc chọn một phòng khám có dịch vụ chẩn đoán nhanh chóng là quan trọng để đảm bảo rằng mèo của bạn nhận được điều trị kịp thời và hiệu quả. Việc chậm trễ trong chẩn đoán có thể làm tăng nguy cơ biến chứng và ảnh hưởng xấu đến sức khỏe của mèo.

Nhận biết nhanh dấu hiệu giun ở mèo: Giun sán ở mèo có thể biểu hiện qua nhiều dấu hiệu khác nhau. Đôi khi, bạn có thể thấy giun hoặc các hạt trắng nhỏ bám quanh hậu môn của mèo hoặc trong phân của chúng. Mèo cũng có thể trườn trên sàn nhà, thảm, hoặc giường. Những biểu hiện như tiêu chảy và rối loạn đường tiêu hóa cũng là dấu hiệu cảnh báo về sự nhiễm giun.
Xét nghiệm phân để chẩn đoán giun: Nếu bạn nghi ngờ mèo của mình bị nhiễm giun, điều quan trọng là phải đưa chúng đến thăm bác sĩ thú y. Bác sĩ thú y sẽ tiến hành xét nghiệm phân để xác định chính xác loại giun mà mèo đang mắc phải. Việc này cực kỳ quan trọng vì các loại giun khác nhau đòi hỏi các phương pháp điều trị khác nhau.
Có hai loại xét nghiệm phân mà bạn có thể yêu cầu. Mỗi xét nghiệm đều yêu cầu một mẫu phân nhỏ từ mèo, mà bác sĩ sẽ gửi đến phòng thí nghiệm để đánh giá:

Xét nghiệm phân tìm trứng và ký sinh trùng: Loại xét nghiệm này hiệu quả trong việc xác định giardia, coccidia và các loại giun khác.
Xét nghiệm PCR phân: Phương pháp này cung cấp thông tin chi tiết hơn về nhiễm khuẩn, vi-rút, cùng với các loại giun.
Dấu hiệu triệu chứng mèo bị giun thường gặp
Giun sán là một vấn đề sức khỏe phổ biến ở mèo. Việc nhận biết sớm các dấu hiệu có thể giúp bạn đưa ra biện pháp điều trị tẩy giun cho mèo kịp thời. Dưới đây là các dấu hiệu chính giúp bạn nhận biết mèo của mình có thể đã bị nhiễm giun:

Bụng to hơn bình thường: Sưng bụng là một trong những dấu hiệu phổ biến của giun sán.
Bỏ ăn, giảm cân: Mất hứng thú với thức ăn. Dù có ăn uống đầy đủ nhưng mèo vẫn giảm cân.
Nôn mửa và tiêu chảy: Các vấn đề về đường tiêu hóa và nhầy trong phân thường xảy ra do sự xâm nhập của giun.
Ho, khạc, hoặc thở khò khè: Đặc biệt nếu giun ảnh hưởng đến phổi.
Bộ lông xỉn màu: Lông của mèo trở nên xỉn màu, thiếu sức sống. Biểu hiện của việc thiếu dinh dưỡng.
Vấn đề về da: Nổi mẩn, ngứa ngáy hoặc kích ứng. Da tái nhợt là biểu hiện của thiếu máu.
Lừ đừ, uể oải: Sự thay đổi về năng lượng và hoạt động.
Hạch trắng trong phân: Một dấu hiệu cụ thể của giun đũa.
Thiếu máu và Suy dinh dưỡng: Do giun hút chất dinh dưỡng từ mèo.
Thay đổi trong khẩu phần ăn: Ăn quá nhiều hoặc mất cảm giác thèm ăn.
Mèo bị nhiễm giun nặng: Có thể gặp phải giảm cân đáng kể, kích ứng ở hậu môn và suy giảm sức khỏe tổng thể.
Các loại thuốc tẩy giun cho mèo hiệu quả
Chọn lựa thuốc tẩy giun cho mèo (Cat Dewormers & Worm Medicine) phù hợp là một việc quan trọng. Thuốc tẩy giun thường là sự kết hợp của nhiều loại thuốc nhắm vào nhiều loại giun khác nhau. Lựa chọn thuốc phụ thuộc vào tuổi và cân nặng của mèo. Khi mua thuốc tẩy giun cho mèo, hãy chọn những thương hiệu uy tín.

Chúng tôi đã lựa chọn sản phẩm dựa trên các tiêu chí an toàn, hiệu quả, số lượng ký sinh trùng được nhắm đến và dễ sử dụng. Dưới đây là danh sách các loại thuốc tẩy giun cho mèo hiệu quả và được khuyên dùng:

BAYER Drontal Broad Spectrum Dewormer: Hiệu quả loại bỏ nhiều loại giun móc, giun đũa, giun dẹp, giun tròn, sán dây ký sinh, an toàn và đáng tin cậy. Sử dụng cho mèo con trên 2 tháng tuổi. Sử dụng 1 viên cho thể trọng 4kg. Có thể cho mèo ăn trực tiếp hoặc trộn lẫn vào thức ăn. Chống chỉ định với mèo đang mang thai. Mua Thuốc xổ giun cho mèo BAYER Drontal Cat tại đây.
ELANCO Tapeworm Dewormer Tablets for Cats: Viên nhai giúp loại bỏ giun đũa. Được đánh giá cao về hiệu quả nhanh chóng, dễ dàng sử dụng, giá cả phải chăng và kết quả nhanh chóng.
ADVANTAGE Multi Topical Solution for Cats: Thuốc dạng bôi hàng tháng kiểm soát bọ chét, ngăn ngừa nhiễm sán tim và diệt các loại giun sán khác.
REVOLUTION Topical Solution for Cats: Giải pháp hàng tháng hiệu quả chống lại sán tim, bọ chét và các loại ký sinh trùng khác.
HOMEOPET Wrm Clear: Phương pháp điều trị nhẹ nhàng và tự nhiên, an toàn cho mèo.
BRAVECTO Plus Topical Solution for Cats: Bảo vệ mèo khỏi bọ chét, ve, sán tim, giun đũa và giun móc.
CENTRAGARD Topical for Cats: Giải pháp bôi rộng phổ ngăn chặn bệnh sán tim và điều trị nhiều loại giun sán.
DRONCIT Tablets for Cats: Diệt giun đũa nhanh chóng trong vòng 24 giờ.
INTERCEPTOR Flavor Tabs: Phòng ngừa sán tim và điều trị và kiểm soát giun đũa, giun móc và giun đốt trưởng thành.
Hướng dẫn cách tẩy giun cho mèo tại nhà
Trước khi tẩy giun cho mèo tại nhà, hãy đảm bảo rằng mèo của bạn không có vấn đề sức khỏe như tiêu chảy hay nôn mửa. Điều này có thể ảnh hưởng đến hiệu quả của thuốc tẩy giun. Ngoài ra, hãy chắc chắn rằng bạn thực hiện đúng các bước và sử dụng thuốc phù hợp để đảm bảo mèo cưng của bạn luôn khỏe mạnh và hạnh phúc.

Cách cho mèo uống thuốc tẩy giun tại nhà:

Chuẩn bị thuốc tẩy giun: Chọn thuốc phù hợp với cân nặng và tình trạng sức khỏe của mèo. Đối với mèo con, hãy chọn những dung dịch tẩy giun đặc biệt dành cho mèo con.
Tư thế cho mèo uống thuốc: Quỳ gối trên sàn, giữ mèo quay lưng về phía bạn. Sử dụng tay trái giữ xương hàm dưới của mèo, nghiêng đầu mèo lên.
Thao tác cho mèo uống thuốc: Nếu là thuốc viên, chèn móng tay vào giữa hai hàm răng mèo và đẩy thuốc xuống cổ họng. Đối với thuốc nước, dùng ống nhỏ giọt hoặc ống tiêm nhỏ thuốc vào miệng mèo.
Mẹo cho mèo uống thuốc: Bạn có thể nhét thuốc vào miếng thịt hoặc pho mát để mèo dễ nuốt hơn.
Thận trọng khi thực hiện: Hành động cần nhanh chóng và dứt khoát, tránh ôm chặt mèo quá mức để mèo không cảm thấy bất an.
Khuyến cáo lịch tẩy giun cho mèo định kỳ
Lập kế hoạch lên lịch tẩy giun cho mèo định kỳ là một bước quan trọng trong việc chăm sóc sức khỏe cho mèo cưng của bạn. Hãy đảm bảo rằng bạn tuân thủ lịch trình phù hợp để giúp mèo cưng của bạn tránh xa các vấn đề sức khỏe do giun sán gây ra.

Lịch tẩy giun cho mèo con
Từ 3 tuần tuổi: Bắt đầu tẩy giun khi mèo con được 3 tuần tuổi, sau đó tẩy lại mỗi 2 tuần cho đến khi mèo được 3 tháng tuổi.
Từ 3 tháng đến 6 tháng tuổi: Tẩy giun mỗi tháng một lần.
Mèo mới mang về nhà: Thực hiện điều trị tẩy giun ngay lập tức và lặp lại sau 2 tuần, sau đó tuân theo lịch tẩy giun cho mèo theo độ tuổi.
Lịch tẩy giun cho mèo trưởng thành
Mèo thường xuyên ở ngoài trời: Nên tẩy giun ít nhất mỗi 3 tháng một lần, hoặc hàng tháng nếu chúng thường xuyên tiếp xúc với môi trường ngoài trời.
Mèo trong nhà có tiếp xúc với động vật hoang dã: Cũng nên tẩy giun ít nhất mỗi 3 tháng một lần.
Lịch tẩy giun cho mèo mang thai và cho con bú
Mèo đang mang thai: Tẩy giun một lần trước khi giao phối và một lần nữa trước khi sinh khoảng 1 tuần.
Mèo mẹ đang cho con bú: Tẩy giun cùng lúc với mèo con của nó.
Lưu ý quan trọng: Xem xét tình trạng sức khỏe hiện tại của mèo để quyết định thời điểm tẩy giun cho mèo phù hợp. Luôn tham khảo ý kiến của bác sĩ thú y trước khi thực hiện tẩy giun, đặc biệt đối với mèo con, mèo ốm hoặc mèo già.', 
                'LuotXem' => 0, 
                'BinhLuan' => 0, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Bạn có thể thêm nhiều người dùng khác ở đây
        ];

        foreach ($news as $new) {
            BaiViet::create($new); // Sử dụng mô hình User để chèn dữ liệu
        }

        // Tạo dữ liệu mẫu cho đơn hàng
        $donHangs = [
            [
                'MaTaiKhoan' => 1,
                'TongTien' => 500000,
                'SoLuong' => 2,
                'Ten' => 'Nguyễn Văn A',
                'SDT' => '0123456789',
                'DiaChi' => '123 Đường ABC, Quận 1, TP.HCM',
                'PTTT' => 'Chuyển khoản',
                'GhiChu' => 'Ghi chú đơn hàng 1',
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
                'NgayDat' => now(),
                'NgayGiao' => now()->addDays(3),
            ],
            [
                'MaTaiKhoan' => 2,
                'TongTien' => 250000,
                'SoLuong' => 1,
                'Ten' => 'Trần Thị B',
                'SDT' => '0987654321',
                'DiaChi' => '456 Đường DEF, Quận 2, TP.HCM',
                'PTTT' => 'Tiền mặt',
                'GhiChu' => 'Ghi chú đơn hàng 2',
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
                'NgayDat' => now(),
                'NgayGiao' => now()->addDays(1),
            ],
            [
                'MaTaiKhoan' => 3,
                'TongTien' => 750000,
                'SoLuong' => 3,
                'Ten' => 'Lê Văn C',
                'SDT' => '0912345678',
                'DiaChi' => '789 Đường GHI, Quận 3, TP.HCM',
                'PTTT' => 'Chuyển khoản',
                'GhiChu' => 'Ghi chú đơn hàng 3',
                'Loai' => 1, // 1: sản phẩm , 0: dịch vụ
                'NgayDat' => now(),
                'NgayGiao' => now()->addDays(2),
            ],
            // Thêm nhiều đơn hàng mẫu khác nếu cần


            // đơn hàng của dịch vụ
            [
                'MaTaiKhoan' => 1,
                'TongTien' => 500000,
                'SoLuong' => 1,
                'Ten' => 'Nguyễn Văn A',
                'SDT' => '0123456789',
                'DiaChi' => '123 Đường ABC, Quận 1, TP.HCM',
                'PTTT' => 'Chuyển khoản',
                'GhiChu' => 'Ghi chú đơn hàng 1',
                'Loai' => 0, // 1: sản phẩm , 0: dịch vụ
                'NgayDat' => now(),
                'NgayGiao' => now()->addDays(3),
            ],
            // đơn hàng của dịch vụ
            [
                'MaTaiKhoan' => 3,
                'TongTien' => 750000,
                'SoLuong' => 3,
                'Ten' => 'Lê Văn C',
                'SDT' => '0912345678',
                'DiaChi' => '789 Đường GHI, Quận 3, TP.HCM',
                'PTTT' => 'Chuyển khoản',
                'GhiChu' => 'Ghi chú đơn hàng 3',
                'Loai' => 0, // 1: sản phẩm , 0: dịch vụ
                'NgayDat' => now(),
                'NgayGiao' => now()->addDays(2),
            ],
        ];

        foreach ($donHangs as $donHang) {
            DonHang::create($donHang);
        }

        $contacts = [
            [
                'MaLienHe' => 1,
                'TieuDe' => 'Hỏi về cách chăm sóc thú cưng',
                'HoVaTen' => 'Nguyễn Văn A',
                'SoDienThoai' => '0912345678',
                'Email' => 'nguyenvana@example.com',
                'NoiDung' => 'Tôi muốn biết cách chăm sóc và cho ăn đúng cách cho chó.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'MaLienHe' => 2,
                'TieuDe' => 'Yêu cầu hỗ trợ kỹ thuật',
                'HoVaTen' => 'Trần Thị B',
                'SoDienThoai' => '0987654321',
                'Email' => 'tranthib@example.com',
                'NoiDung' => 'Xin hỗ trợ về việc cài đặt phần mềm mới cho máy tính.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'MaLienHe' => 3,
                'TieuDe' => 'Phản hồi về dịch vụ',
                'HoVaTen' => 'Lê Văn C',
                'SoDienThoai' => '0901234567',
                'Email' => 'levanc@example.com',
                'NoiDung' => 'Dịch vụ chăm sóc khách hàng của bạn rất tốt, tôi rất hài lòng.',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Bạn có thể thêm nhiều mẫu liên hệ khác ở đây
        ];

        foreach ($contacts as $contact) {
            LienHe::create($contact); // Sử dụng mô hình LienHe để chèn dữ liệu
        }
    }
}
