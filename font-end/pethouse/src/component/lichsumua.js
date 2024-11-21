import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LichSuMua = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem đã có dữ liệu đơn hàng trong LocalStorage chưa
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
      setLoading(false);
    } else {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    if (!user || !user.Mataikhoan) {
      setError('Không tìm thấy thông tin tài khoản.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/orders/${user.Mataikhoan}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Không thể tải đơn hàng. Vui lòng thử lại.');
      }

      const data = await response.json();

      if (data.status === 'success' && Array.isArray(data.data)) {
        setOrders(data.data);
        // Lưu đơn hàng vào LocalStorage
        localStorage.setItem('orders', JSON.stringify(data.data));
      } else {
        setOrders([]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrintOrder = async (order) => {
    const currentDate = new Date().toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/orderDetails/${order.ma_don_hang}`);
      if (!response.ok) {
        throw new Error(`Lỗi khi gọi API chi tiết đơn hàng: ${response.statusText}`);
      }
      
      const result = await response.json();
      if (result.status !== 'success' || !Array.isArray(result.data) || result.data.length === 0) {
        alert("Không có chi tiết đơn hàng. Vui lòng kiểm tra lại.");
        return;
      }
      
      const chiTietDonHang = result.data.map((ct, index) => `
        <tr>
          <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${index + 1}</td>
          <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${ct.SanPham.TenSP}</td>
          <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${ct.SoLuong}</td>
          <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${new Intl.NumberFormat("vi-VN").format(ct.DonGia)}</td>
          <td style="text-align: center; padding: 10px; border-top: 1px solid #ddd;">${new Intl.NumberFormat("vi-VN").format(ct.DonGia * ct.SoLuong)}</td>
        </tr>
      `).join("");
      
      const printContent = `
        <html>
          <head>
            <title>Hóa đơn ${order.ma_don_hang}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
          </head>
          <body>
            <div>
              <div style="margin-top: 50px; border: 1px solid #ddd; padding: 20px; font-family: Arial, sans-serif;">
                <div class="header" style="text-align: center; margin-bottom: 20px;">
                  <img id="logo" src="http://localhost:3000/image/logo-ngang.png" alt="Logo" style="width: 120px;">
                  <h2 style="margin: 0;">CỬA HÀNG PETHOUSE VIỆT NAM</h2>
                  <p style="margin: 5px 0;">Tô ký, phường Trung Mỹ Tây, quận 12, TP.HCM</p>
                  <p style="margin: 5px 0;">Email: pethouse@gmail.com / Hotline: 038 997 8430</p>
                  <h3 style="margin: 10px 0;">ĐƠN HÀNG</h3>
                </div>
                <p><strong>Ngày:</strong> ${currentDate}</p>
                <p><strong>Tên khách hàng:</strong> ${order.ho_ten}</p>
                <p><strong>Địa chỉ:</strong> ${order.dia_chi}</p>
                <p style="margin: 1px 0; float: left;"><strong>Số điện thoại:</strong> ${order.so_dien_thoai}</p>
                <p style="margin: 0; float: right;"><strong>Mã đơn hàng:</strong> ${order.ma_don_hang}</p>
                <br>
                <h3 style="margin-top: 20px;">Chi tiết đơn hàng:</h3>  
                <table style="border: 1px solid #ddd; border-collapse: collapse; width: 100%;">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Tổng</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${chiTietDonHang}
                  </tbody>
                </table>
                <div class="total" style="margin-top: 20px; font-weight: bold;">
                  <p><span>Tổng:</span><span class="right" style="float: right; color: red;">${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", minimumFractionDigits: 0 }).format(order.tong_tien)}</span></p>
                  <p><span class="font-weight-bold">Tổng thanh toán:</span><span class="right" style="float: right; color: red;">${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", minimumFractionDigits: 0 }).format(order.tong_tien)}</span></p>
                </div>
                <div class="footer" style="margin-top: 20px; font-size: 12px;">
                  <p><strong>Ghi chú:</strong> ${order.ghi_chu ? order.ghi_chu : "Không có"}</p>
                </div>
              </div>
            </div>
            <script>
              window.onload = function() {
                const logo = document.getElementById("logo");
                if (logo.complete) {
                  window.print();
                  window.close();
                } else {
                  logo.onload = function() {
                    window.print();
                    window.close();
                  };
                }
              };
            </script>
          </body>
        </html>
      `;
      
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(printContent);
        printWindow.document.close();
      }
    } catch (error) {
      console.error("Lỗi khi in đơn hàng:", error);
      alert("Đã xảy ra lỗi khi in đơn hàng.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-3">
      <h2>Lịch sử mua hàng</h2>
      {orders.length === 0 ? (
        <p>Chưa có đơn hàng nào.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="text-center align-middle">STT</th>
              <th className="text-center align-middle">Mã Đơn Hàng</th>
              <th className="text-center align-middle">Số Lượng</th>
              <th className="text-center align-middle">Tổng Tiền</th>
              <th className="text-center align-middle">Trạng Thái</th>
              <th className="text-center align-middle">Ngày Đặt</th>
              <th className="text-center align-middle">Ngày Giao</th>
              <th className="text-center align-middle">Xem Chi Tiết</th>
              <th className="text-center align-middle">In Đơn Hàng</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.ma_don_hang}>
                <td className="text-center align-middle">{index + 1}</td>
                <td className="text-center align-middle">{order.ma_don_hang}</td>
                <td className="text-center align-middle">{order.so_luong}</td>
                <td className="text-center align-middle text-danger fw-bold">{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", minimumFractionDigits: 0 }).format(order.tong_tien)}</td>
                <td className="text-center align-middle">{order.trang_thai}</td>
                <td className="text-center align-middle">{new Date(order.ngay_dat).toLocaleDateString()}</td>
                <td className="text-center align-middle">{new Date(order.ngay_giao).toLocaleDateString()}</td>
                <td className="text-center align-middle">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/donhang/${order.ma_don_hang}`)}
                  >
                    Xem Chi Tiết
                  </button>
                </td>
                <td className="text-center align-middle">
                  <button
                    className="btn btn-secondary btn-sm"  
                    onClick={() => handlePrintOrder(order)}
                  >
                    In Đơn Hàng
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LichSuMua;
