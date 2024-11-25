import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Sử dụng để điều hướng
import { useAuth } from '../contexts/AuthContext'; // Lấy thông tin người dùng từ AuthContext

const Lichsudichvu = () => {
  const { user } = useAuth(); // Lấy thông tin người dùng (bao gồm MaTaiKhoan)
  const [orders, setOrders] = useState([]); // Lưu trữ danh sách đơn hàng
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi
  const navigate = useNavigate(); // Hook điều hướng

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user || !user.Mataikhoan) {
        setError('Không tìm thấy thông tin tài khoản.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/orderServices/${user.Mataikhoan}`, {
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
          setOrders(data.data); // Lưu danh sách đơn hàng
        } else {
          setOrders([]); // Không có đơn hàng nào
        }
      } catch (error) {
        setError(error.message); // Lưu thông báo lỗi
      } finally {
        setLoading(false); // Kết thúc trạng thái loading
      }
    };

    fetchOrders(); // Gọi hàm lấy đơn hàng khi component mount
  }, [user]); // Chạy lại nếu thông tin user thay đổi

  if (loading) {
    return <div>Loading...</div>; // Hiển thị khi đang tải
  }

  if (error) {
    return <div>Error: {error}</div>; // Hiển thị lỗi nếu có
  }

  return (
    <div className="container mt-3">
  <h2>Lịch sử dịch vụ đã sử dụng</h2>
  {orders.length === 0 ? (
    <p>Chưa có đơn hàng nào.</p> // Nếu không có đơn hàng
  ) : (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center align-middle" scope="col">STT</th>
            <th className="text-center align-middle" scope="col">Mã Đơn Hàng</th>
            {/* <th className="text-center align-middle" scope="col">Số Lượng</th> */}
            <th className="text-center align-middle" scope="col">Tổng Tiền</th>
            <th className="text-center align-middle" scope="col">Trạng Thái</th>
            <th className="text-center align-middle" scope="col">Ngày Đặt</th>
            <th className="text-center align-middle" scope="col">Ngày Giao</th>
            <th className="text-center align-middle" scope="col">Xem Chi Tiết</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.ma_don_hang}>
              <td className="text-center align-middle">{index + 1}</td>
              <td className="text-center align-middle">{order.ma_don_hang}</td>
              {/* <td className="text-center align-middle">{order.so_luong}</td> */}
              <td className="text-center align-middle">{order.tong_tien} VND</td>
              <td className="text-center align-middle">{order.trang_thai}</td>
              <td className="text-center align-middle">{new Date(order.ngay_dat).toLocaleDateString()}</td>
              <td className="text-center align-middle">{new Date(order.ngay_giao).toLocaleDateString()}</td>
              <td className="text-center align-middle">
                <button
                  className="btn btn-outline-success"
                  onClick={() => navigate(`/dichvu/${order.ma_don_hang}`)}
                >
                  Xem Chi Tiết
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link to="/sanpham">
        <button className="btn btn-outline-danger  mt-3">Tiếp tục mua sắm</button>
      </Link> */}
    </>
  )}
</div>
  );
};

export default Lichsudichvu;
