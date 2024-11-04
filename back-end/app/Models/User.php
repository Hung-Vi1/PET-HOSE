<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'Hovaten',
        'SDT',
        'Email',  // Đổi từ 'Email' thành 'email' để Laravel nhận diện
        'ThuCung',
        'Diachi',
        'Quyen',
        'Matkhau',  // Đổi từ 'Matkhau' thành 'password' để Laravel nhận diện
    ];

    /**
     * Mối quan hệ với BaiViet: Một User có thể viết nhiều BaiViet 
     */
    public function baiViets()
    {
        return $this->hasMany(BaiViet::class, 'MaTaiKhoan');
    }

    /**
     * Mối quan hệ với LienHe: Một User có thể có nhiều LienHe
     */
    public function lienHes()
    {
        return $this->hasMany(LienHe::class, 'MaTaiKhoan');
    }

    /**
     * Mối quan hệ với DanhGia: Một User có thể có nhiều DanhGia
     */
    public function danhGias()
    {
        return $this->hasMany(DanhGia::class, 'MaTaiKhoan');
    }

    /**
     * Mối quan hệ với DonHang: Một User có thể tạo nhiều DonHang
     */
    public function donHangs()
    {
        return $this->hasMany(DonHang::class, 'MaTaiKhoan');
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'Matkhau',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'Matkhau' => 'hashed',
    ];

    /**
     * Override phương thức getAuthPassword để trả về trường password.
     */
    public function getAuthPassword()
    {
        return $this->Matkhau;
    }
}
