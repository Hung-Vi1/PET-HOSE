import React, { useState, useEffect } from 'react';

const LichSuMua = () => {
  const [orders, setOrders] = useState([]); // Lưu trữ danh sách đơn hàng
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Nếu cần token xác thực, thêm vào headers
            // 'Authorization': `Bearer ${yourAuthToken}`
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();

        // Kiểm tra nếu dữ liệu có trường 'data' và nó là một mảng, nếu không gán orders là mảng rỗng
        if (data.status === 'success' && Array.isArray(data.data)) {
          setOrders(data.data);
        } else {
          setOrders([]); // Nếu không có đơn hàng, set thành mảng rỗng
        }
      } catch (error) {
        setError(error.message); // Lưu thông báo lỗi nếu có
      } finally {
        setLoading(false); // Đổi trạng thái loading sau khi tải xong
      }
    };

    fetchOrders(); // Gọi hàm lấy đơn hàng khi component mount
  }, []); // Chạy một lần duy nhất khi component được mount

  if (loading) {
    return <div>Loading...</div>; // Hiển thị khi dữ liệu đang tải
  }

  if (error) {
    return <div>Error: {error}</div>; // Hiển thị lỗi nếu có
  }

  return (
    <div className="container mt-3">
      <h2>Lịch sử mua hàng</h2>
      {orders.length === 0 ? (
        <p>Chưa có đơn hàng nào.</p> // Nếu không có đơn hàng
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã Đơn Hàng</th>
              {/* <th scope="col">Họ Tên</th> */}
              <th scope="col">Số Lượng</th>
              <th scope="col">Tổng Tiền</th>
              <th scope="col">Trạng Thái</th>
              <th scope="col">Ngày Đặt</th>
              <th scope="col">Ngày Giao</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.ma_don_hang}>
                <td>{order.ma_don_hang}</td>
                {/* <td>{order.ho_ten}</td> */}
                <td>{order.so_luong}</td>
                <td>{order.tong_tien} VND</td>
                <td>{order.trang_thai}</td>
                <td>{new Date(order.ngay_dat).toLocaleDateString()}</td>
                <td>{new Date(order.ngay_giao).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LichSuMua;
