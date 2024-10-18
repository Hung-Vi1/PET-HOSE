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
        Schema::create('users', function (Blueprint $table) {
            $table->id('MaTaiKhoan');
            $table->string('TenTK');
            $table->string('SDT');
            $table->string('email')->unique();
            $table->string('ThuCung')->nullable(); // Cho phép null
            $table->string('DiaChi');
            $table->string('Quyen'); // Ví dụ: 'admin', 'user', 'editor'
            $table->timestamp(column: 'email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
