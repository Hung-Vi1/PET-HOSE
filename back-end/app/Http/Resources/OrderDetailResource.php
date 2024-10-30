<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'MaCTDH' => $this->MaCTDH,
            'MaDH' => $this->MaDH,
            'MaSP' => $this->MaSP,
            'DonGia' => $this->DonGia,
            'SoLuong' => $this->SoLuong,
        ];
    }
}
