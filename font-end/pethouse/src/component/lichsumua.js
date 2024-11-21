import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const LichSuMua = () => {
  const { user } = useAuth(); // Lấy thông tin người dùng
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(user); // Kiểm tra xem user có dữ liệu không


  useEffect(() => {
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
        } else {
          setOrders([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);



  
  // Hàm in đơn hàng
  const handlePrintOrder = async (order) => {
    const hiddenElement = document.getElementById(`order-${order.ma_don_hang}`);

    // Hiển thị nội dung tạm thời
    hiddenElement.style.display = 'block';

    const pdf = new jsPDF();
    try {
      const canvas = await html2canvas(hiddenElement, {
        scale: 2, // Tăng chất lượng render
        useCORS: true, // Hỗ trợ ảnh từ nguồn ngoài
      });
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save(`don_hang_${order.ma_don_hang}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      // Ẩn lại nội dung sau khi in
      hiddenElement.style.display = 'none';
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
                <td className="text-center align-middle">{order.tong_tien} VND</td>
                <td className="text-center align-middle">{order.trang_thai}</td>
                <td className="text-center align-middle">{new Date(order.ngay_dat).toLocaleDateString()}</td>
                <td className="text-center align-middle">{new Date(order.ngay_giao).toLocaleDateString()}</td>
                <td className="text-center align-middle">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/donhang/${order.ma_don_hang}`)}
                  >
                    Xem Chi Tiết
                  </button>
                </td>
                <td className="text-center align-middle">
                  <button
                    className="btn btn-success"
                    onClick={() => handlePrintOrder(order)}
                  >
                    In Đơn Hàng
                  </button>
                </td>
                <td>
                  {/* Nội dung đơn hàng ẩn để in */}
                  <div id={`order-${order.ma_don_hang}`} style={{ display: 'none' }}>
                    <h3>Thông Tin Đơn Hàng</h3>
                    <p><strong>Mã đơn hàng:</strong> {order.ma_don_hang}</p>
                    <p><strong>Số lượng:</strong> {order.so_luong}</p>
                    <p><strong>Tổng tiền:</strong> {order.tong_tien} VND</p>
                    <p><strong>Trạng thái:</strong> {order.trang_thai}</p>
                    <p><strong>Ngày đặt:</strong> {new Date(order.ngay_dat).toLocaleDateString()}</p>
                    <p><strong>Ngày giao:</strong> {new Date(order.ngay_giao).toLocaleDateString()}</p>
                  </div>
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
