import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChiTietDonHang = () => {
  const { MaDH } = useParams();
  const [orderDetails, setOrderDetails] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/orderDetails/${MaDH}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Không thể tải chi tiết đơn hàng.');
        }

        const data = await response.json();
        console.log('API Response:', data); 

        if (data.status === 'success' && Array.isArray(data.data)) {
          setOrderDetails(data.data); 
        } else {
          throw new Error('Không tìm thấy chi tiết đơn hàng.');
        }
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchOrderDetails(); 
  }, [MaDH]);



  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!orderDetails || orderDetails.length === 0) {
    return <div>Không tìm thấy chi tiết đơn hàng.</div>; 
  }

  return (
    <div className="container mt-3">
      <div id="invoice">
        <h2 className="float-start">Chi Tiết Đơn Hàng</h2>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center align-middle">STT</th>
                <th className="text-center align-middle">Sản Phẩm</th>
                <th className="text-center align-middle">Hình Ảnh</th>
                <th className="text-center align-middle">Số Lượng</th>
                <th className="text-center align-middle">Đơn Giá</th>
                <th className="text-center align-middle">Tổng</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.map((detail, index) => (
                <tr key={detail.MaCTDH}>
                  <td className="text-center align-middle">{index + 1}</td>
                  <td className="align-middle">{detail.SanPham.TenSP}</td>
                  <td className="text-center align-middle">
                    <img
                      src={`${apiUrl}/image/product/${detail.SanPham.HinhAnh}`}
                      alt={detail.SanPham.TenSP}
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                  </td>
                  <td className="text-center align-middle">{detail.SoLuong}</td>
                  <td className="text-center align-middle">{detail.DonGia.toLocaleString()} VND</td>
                  <td className="text-center align-middle">{(detail.SoLuong * detail.DonGia).toLocaleString()} VND</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ChiTietDonHang;