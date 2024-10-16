<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ct_don_hang', function (Blueprint $table) {
            $table->id('MaCTDH'); // Khóa chính
            $table->unsignedBigInteger('MaDH'); // Khóa ngoại đến bảng DonHang
            $table->unsignedBigInteger('MaSP'); // Khóa ngoại đến bảng SanPham
            $table->decimal('TongTien', 10, 2);
            $table->integer('SoLuong');
            $table->string('Ten'); // Có thể là tên người nhận
            $table->string('SDT');
            $table->string('DiaChi');
            $table->string('PTTT'); // Phương thức thanh toán
            $table->string('TrangThai');
            $table->timestamps(); // Tự động tạo cột created_at và updated_at

            // Định nghĩa khóa ngoại
            $table->foreign('MaDH')->references('MaDH')->on('don_hang');
            $table->foreign('MaSP')->references('MaSP')->on('san_pham');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ct_don_hang');
    }
};
