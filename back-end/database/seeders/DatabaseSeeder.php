<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\DanhMuc;
use App\Models\SanPham;
use App\Models\DonHang;
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
    }
}
