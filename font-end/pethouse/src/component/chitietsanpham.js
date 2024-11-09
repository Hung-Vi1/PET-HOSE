import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ChiTietSanPham() {
  let { id } = useParams();

  const [sp, ganSP] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for the quantity of the product

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu trả về:", data); // Kiểm tra dữ liệu
        if (data.status === "success") {
          ganSP(data.data); // Gán dữ liệu sản phẩm
        } else {
          console.error("Lỗi khi lấy dữ liệu:", data.message);
          ganSP(null); // Khởi tạo giá trị mặc định
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });
  }, [id]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    if (!sp) return; // Nếu không có sản phẩm, không làm gì cả

    // Kiểm tra nếu giỏ hàng đã có sản phẩm
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingProductIndex = cart.findIndex(item => item.ma_san_pham === sp.ma_san_pham);

    if (existingProductIndex !== -1) {
      // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
      cart.push({
        ma_san_pham: sp.ma_san_pham,
        ten_san_pham: sp.ten_san_pham,
        hinh_anh: sp.hinh_anh,
        gia: sp.gia,
        quantity: quantity
      });
    }

    // Lưu giỏ hàng vào sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm sản phẩm vào giỏ hàng!");
  };

  // Hàm tăng số lượng sản phẩm
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Hàm giảm số lượng sản phẩm
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="page-title parallax parallax1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading">
                <h2 className="title">{sp ? sp.ten_san_pham : "Sản phẩm"}</h2>
              </div>
              <div className="breadcrumbs">
                <ul>
                  <li><Link to="/">Trang chủ</Link></li>
                  <li><Link to="/sanpham">Sản phẩm</Link></li>
                  <li><Link to="shop-detail-des.html">{sp ? sp.ten_san_pham : "Sản phẩm"}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-row main-shop shop-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`../image/product/${sp?.hinh_anh}`}
                className="card-img-top mx-auto"
                alt={sp?.ten_san_pham}
                style={{ width: "75%" }}
              />
            </div>
            <div className="col-md-6">
              <div className="product-detail">
                <div className="inner">
                  <div className="content-detail">
                    <h2 className="product-title">{sp?.ten_san_pham}</h2>
                    <p>{sp?.mo_ta}</p>
                    <div className="price">
                      <ins>
                        <span className="amount">
                          {parseInt(sp?.gia).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </ins>
                    </div>
                    <div className="product-quantity">
                      <div className="quantity">
                        <span className="dec quantity-button" onClick={decreaseQuantity}>-</span>
                        <input
                          type="text"
                          value={quantity}
                          readOnly
                          className="quantity-number"
                        />
                        <span className="inc quantity-button" onClick={increaseQuantity}>+</span>
                      </div>
                      <div className="add-to-cart">
                        <button className="btn btn-primary" onClick={addToCart}>Thêm vào giỏ hàng</button>
                      </div>
                    </div>
                    <div className="product-categories">
                      <span>Danh mục: </span>
                      <a href="/#">{sp?.ma_danh_muc}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sản phẩm liên quan */}
      <section className="flat-row shop-related">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section margin-bottom-55">
                <h2 className="title">Related Products</h2>
              </div>
              <div className="product-content product-fourcolumn clearfix">
                <ul className="product style2">
                  {/* Các sản phẩm liên quan */}
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="/#">
                        <img src="images/shop/sh-4/1.jpg" alt="hinh" />
                      </a>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$19.00</span>
                        </ins>
                      </div>
                    </div>
                    <div className="add-to-cart text-center">
                      <a href="/#">ADD TO CART</a>
                    </div>
                    <a href="/#" className="like">
                      <i className="fa fa-heart-o" />
                    </a>
                  </li>
                  {/* Thêm các sản phẩm liên quan khác */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Đăng ký nhận bản tin */}
      <section className="flat-row mail-chimp">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="text">
                <h3>Sign up for Send Newsletter</h3>
              </div>
            </div>
            <div className="col-md-8">
              <div className="subscribe clearfix">
                <form action="#" method="post" acceptCharset="utf-8" id="subscribe-form">
                  <div className="subscribe-content">
                    <div className="input">
                      <input type="email" name="subscribe-email" placeholder="Your Email" />
                    </div>
                    <div className="button">
                      <button type="button">SUBSCRIBE</button>
                    </div>
                  </div>
                </form>
                <ul className="flat-social">
                  <li><a href="/#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="/#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="/#"><i className="fa fa-google" /></a></li>
                  <li><a href="/#"><i className="fa fa-behance" /></a></li>
                  <li><a href="/#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChiTietSanPham;
