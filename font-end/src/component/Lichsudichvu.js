import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthContext'; 

const Lichsudichvu = () => {
  const { user } = useAuth(); 
  const [orders, setOrders] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user || !user.Mataikhoan) {
        setError('Vui lòng đăng nhập để xem dịch vụ.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${apiUrl}/api/orderServices/${user.Mataikhoan}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Chưa có lịch sử dùng dịch vụ.');
        }

        const data = await response.json();

        if (data.status === 'success' && Array.isArray(data.data)) {
          setOrders(data.data); // L
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
  }, [user, apiUrl]);

  const handleCancelOrder = async (maDonHang) => {
    if (!window.confirm("Bạn có chắc chắn muốn hủy dịch vụ này không?")) {
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/donhang/trangthai/${maDonHang}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          TrangThai: 'huy',
        }),
      });

      const data = await response.json();
      if (response.ok && data.status === 'success') {
        alert("Dịch vụ đã được hủy thành công!");
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.ma_don_hang === maDonHang
              ? { ...order, trang_thai: 'huy' } 
              : order
          )
        );
      } else {
        throw new Error(data.message || "Có lỗi xảy ra khi hủy dịch vụ.");
      }
    } catch (error) {
      console.error("Lỗi khi hủy dịch vụ:", error);
      alert(`Lỗi khi hủy dịch vụ: ${error.message}`);
    }
  };

  if (loading) {
    return <div>Đang tải thông tin vui lòng đợi...</div>;
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div className="container mt-3">
    <h2>Lịch sử dịch vụ đã sử dụng</h2>
    {user && orders.length === 0 ? (
      <p>Bạn chưa sử dụng dịch vụ nào.</p>
    ) : !user ? (
      <p>Vui lòng đăng nhập để xem dịch vụ.</p>
    ) : (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center align-middle">STT</th>
              <th className="text-center align-middle">Mã Dịch Vụ</th>
              <th className="text-center align-middle">Tổng Tiền</th>
              <th className="text-center align-middle">Trạng Thái</th>
              <th className="text-center align-middle">Ngày Đặt</th>
              <th className="text-center align-middle">Xem Chi Tiết</th>
              <th className="text-center align-middle">Hủy Dịch Vụ</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const orderStatus =
                order.trang_thai === "da_thanh_toan"
                  ? "Đã thanh toán"
                  : order.trang_thai === "cho_xac_nhan"
                    ? "Chờ xác nhận"
                    : order.trang_thai === "da_xac_nhan"
                      ? "Đã xác nhận"
                      : order.trang_thai === "hoan_thanh"
                        ? "Hoàn thành"
                        : order.trang_thai === "dang_van_chuyen"
                          ? "Đang vận chuyển"
                          : order.trang_thai === "huy"
                            ? "Hủy"
                            : order.trang_thai;
  
              const rowStyle =
                order.trang_thai === "da_thanh_toan"
                  ? { backgroundColor: "#28a745", color: "white" }
                  : order.trang_thai === "cho_xac_nhan"
                    ? { backgroundColor: "#ffc107", color: "black" }
                    : order.trang_thai === "da_xac_nhan"
                      ? { backgroundColor: "blue", color: "white" }
                      : order.trang_thai === "dang_van_chuyen"
                        ? { backgroundColor: "#e2da14", color: "white" }
                        : order.trang_thai === "hoan_thanh"
                          ? { backgroundColor: "#28a745", color: "yellow" }
                          : order.trang_thai === "huy"
                            ? { backgroundColor: "red", color: "black" }
                            : {};
  
              return (
                <tr key={order.ma_don_hang}>
                  <td className="text-center align-middle">{index + 1}</td>
                  <td className="text-center align-middle">{order.ma_don_hang}</td>
                  <td className="text-center align-middle">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(order.tong_tien)}
                  </td>
                  <td
                    className="text-center align-middle"
                    style={{ ...rowStyle, verticalAlign: "middle" }}
                  >
                    {orderStatus}
                  </td>
                  <td className="text-center align-middle">
                    {new Date(order.ngay_su_dung).toLocaleString("vi-VN", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
  
                  <td className="text-center align-middle">
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => navigate(`/dichvu/${order.ma_don_hang}`)}
                    >
                      Xem Chi Tiết
                    </button>
                  </td>
                  <td className="text-center align-middle">
                    {order.trang_thai === "cho_xac_nhan" ? (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleCancelOrder(order.ma_don_hang)}
                      >
                        <i className="fa-solid fa-ban"></i> Hủy Dịch Vụ
                      </button>
                    ) : (
                      <span className="text-muted">Không thể hủy</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )}
  </div>
  
  );
};

export default Lichsudichvu;
