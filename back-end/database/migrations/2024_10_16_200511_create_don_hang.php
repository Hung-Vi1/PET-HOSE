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
        Schema::create('don_hang', function (Blueprint $table) {
            $table->id('MaDH'); // Khóa chính
            $table->unsignedBigInteger('MaTaiKhoan'); // Khóa ngoại đến bảng TaiKhoan
            $table->decimal('TongTien', 10, 2); 
            $table->integer('SoLuong');
            $table->string('TrangThai'); // Ví dụ: 'Chờ xác nhận', 'Đang giao', 'Hoàn thành'
            $table->timestamps(); // Tự động tạo cột created_at và updated_at

            // Định nghĩa khóa ngoại
            $table->foreign('MaTaiKhoan')->references('MaTaiKhoan')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('don_hang');
    }
};
