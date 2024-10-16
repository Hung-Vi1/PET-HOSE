<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DanhMuc extends Model
{
    use HasFactory;

    protected $primaryKey = 'MaDanhMuc'; // Chỉ định khóa chính

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'TenDM',
        'CapBac',
    ];

    /**
     * Mối quan hệ với SanPham: Một DanhMuc có thể có nhiều SanPham
     */
    public function sanPhams()
    {
        return $this->hasMany(SanPham::class, 'MaDanhMuc');
    }
}
