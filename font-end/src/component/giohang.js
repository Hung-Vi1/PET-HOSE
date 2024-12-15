import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GioHang() {
  const [cart, setCart] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  // Kiểm tra kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile nếu màn hình nhỏ hơn 768px
    };
    handleResize(); // Gọi ngay lần đầu
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    setCart(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  const handleQuantityChange = (index, quantity) => {
    const updatedCart = [...cart];
    if (quantity <= 0) {
      updatedCart.splice(index, 1);
    } else {
      updatedCart[index].quantity = quantity;
    }
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); // Phát sự kiện
  };
  
  const handleRemoveProduct = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); // Phát sự kiện
  };
   

  const calculateTotalPrice = (price, quantity) => price * quantity;

  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + item.gia * item.quantity, 0);
  };

  

  return (
    <section className="cart-page py-5">
      <div className="container">
        <h2 className="title text-center mb-4">Giỏ hàng của bạn</h2>
        {cart.length === 0 ? (
          <p className="text-center">Giỏ hàng hiện đang trống.</p>
        ) : isMobile ? (
          // Giao diện Card trên điện thoại
          <div className="row">
            {cart.map((item, index) => (
              <div key={index} className="col-12 mb-3">
                <div className="card">
                  <div className="card-body p-1" style={{ backgroundColor: "#F7F0DD" }}>
                    <h5 className="">
                      {index + 1}.{" "}
                      {item.ten_san_pham.length > 31
                        ? item.ten_san_pham.substring(0, 31) + "..."
                        : item.ten_san_pham}
                    </h5>
                    <hr />
                    <div className="d-flex align-items-center mb-3 ">
                      <img
                        src={`${apiUrl}/image/product/${item.hinh_anh}`}
                        alt={item.ten_san_pham}
                        className="img-fluid rounded border border-warning"
                        style={{
                          maxWidth: "200px",
                          height: "auto",
                          marginRight: "10px",
                        }}
                      />
                      <div>
                        <p className="mb-1">
                          <span className="me-2 fw-bold">Đơn giá:</span>
                          {parseInt(item.gia).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </p>
                        <p className="mb-1 d-flex align-items-center">
                          <span className="me-2 fw-bold">Số lượng:</span>
                          <input
                            type="number"
                            value={item.quantity}
                            min="0"
                            max="10"
                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                            className="form-control text-center"
                            style={{ maxWidth: "60px", height: "30px" }}
                          />
                        </p>
                        <p className="mb-1 d-flex align-items-center">
                          <span className="me-2 fw-bold">Thao tác:</span>
                          <button
                            onClick={() => handleRemoveProduct(index)}
                            className="btn btn-danger btn-sm"
                          >
                            <i class="fa-solid fa-trash-can"></i> Xóa
                          </button>
                        </p>


                      </div>
                    </div>

                  </div>
                  <div className="card-footer text-center" style={{ backgroundColor: "#f4b915", color: "white" }}>
                    <p className="m-0 fw-bold">
                      Tổng:{" "}
                      {parseInt(
                        calculateTotalPrice(item.gia, item.quantity)
                      ).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </div>
                </div>



              </div>

            ))}
            <p className="font-weight-bold align-middle">
              Tổng giá trị giỏ hàng:
              {parseInt(calculateCartTotal()).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
        ) : (
          // Giao diện bảng trên máy tính
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="thead-dark">
                <tr>
                  <th style={{ width: "5%", textAlign: "center", verticalAlign: "middle" }}>STT</th>
                  <th style={{ width: "20%", verticalAlign: "middle" }}>Sản phẩm</th>
                  <th style={{ width: "15%", textAlign: "center", verticalAlign: "middle" }}>Hình ảnh</th>
                  <th style={{ width: "15%", textAlign: "center", verticalAlign: "middle" }}>Đơn giá</th>
                  <th style={{ width: "10%", textAlign: "center", verticalAlign: "middle" }}>Số lượng</th>
                  <th style={{ width: "20%", textAlign: "center", verticalAlign: "middle" }}>Tổng cộng</th>
                  <th style={{ width: "15%", textAlign: "center", verticalAlign: "middle" }}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center align-middle">{index + 1}</td>
                    <td className="align-middle">
                      <strong>{item.ten_san_pham}</strong>
                    </td>
                    <td className="text-center align-middle">
                      <img
                        src={`${apiUrl}/image/product/${item.hinh_anh}`}
                        alt={item.ten_san_pham}
                        className="img-fluid rounded"
                        style={{
                          maxWidth: "80px",
                          height: "auto",
                        }}
                      />
                    </td>
                    <td className="text-center align-middle">
                      {parseInt(item.gia).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>
                    <td className="text-center align-middle">
                      <input
                        type="number"
                        value={item.quantity}
                        min="0"
                        max="10"
                        onChange={(e) =>
                          handleQuantityChange(index, parseInt(e.target.value))
                        }
                        className="form-control text-center"
                        style={{ maxWidth: "70px", margin: "auto" }}
                      />
                    </td>
                    <td className="text-center align-middle">
                      {parseInt(
                        calculateTotalPrice(item.gia, item.quantity)
                      ).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>
                    <td className="text-center align-middle">
                      <button
                        onClick={() => handleRemoveProduct(index)}
                        className="btn btn-danger btn-sm"
                      >
                        <i class="fa-solid fa-trash-can"></i>  Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-right font-weight-bold align-middle">
                    Tổng giá trị giỏ hàng
                  </td>
                  <td className="text-center font-weight-bold align-middle">
                    {parseInt(calculateCartTotal()).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
        <div className="row text-center">
          <div className="col-6">
            <Link to="/sanpham" className="text-decoration-none d-flex justify-content-center">
              <button className="btn btn-secondary btn-lg d-flex align-items-center mb-2 mb-sm-0">
                <i className="fas fa-shopping-cart me-2"></i>
                Quay lại
              </button>
            </Link>
          </div>
          <div className="col-6">
            {cart.length > 0 && (
              <Link to="/formthanhtoan" className="text-decoration-none d-flex justify-content-center">
                <button className="btn btn-success btn-lg d-flex align-items-center">
                  <i className="fas fa-credit-card me-2"></i>
                  Thanh toán
                </button>
              </Link>
            )}
          </div>
        </div >
        <div className="d-flex flex-column flex-sm-row justify-content-between mt-4">


        </div>

      </div >
    </section >
  );
}

export default GioHang;
