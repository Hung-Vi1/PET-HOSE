<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaiViet extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'MaTaiKhoan',
        'MaDMBV',
        'TieuDe',
        'NoiDung',
        'ChiTiet',
        'LuotXem',
        'BinhLuan',
        'TrangThai',
    ];

    /**
     * Mối quan hệ với User: Một BaiViet thuộc về một User
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'MaTaiKhoan');
    }

    /**
     * Mối quan hệ với DanhMuc: Một BaiViet thuộc về một DanhMuc
     */
    public function danhMucBV()
    {
        return $this->belongsTo(DanhMuc::class, 'MaDMBV');
    }
}
