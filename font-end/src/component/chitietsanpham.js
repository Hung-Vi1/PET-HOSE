import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ChiTietSanPham() {
  let { id } = useParams();
  window.scrollTo(0, 0); 
  const [sp, ganSP] = useState(null);
  const [category, setCategory] = useState(null); 
  const [relatedProducts, setRelatedProducts] = useState([]); 
  const [quantity, setQuantity] = useState(1); 
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu trả về:", data); 
        if (data.status === "success") {
          ganSP(data.data); 
        } else {
          console.error("Lỗi khi lấy dữ liệu:", data.message);
          ganSP(null); 
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });

    fetch(`${apiUrl}/api/category`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setCategory(data.data); 
        } else {
          console.error("Lỗi khi lấy dữ liệu danh mục:", data.message);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu danh mục:", error);
      });
  }, [id, apiUrl]);

  useEffect(() => {
    if (sp?.ma_danh_muc) {
      fetch(`${apiUrl}/api/products4/sanPhamTheoDM/${sp.ma_danh_muc}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            const shuffledProducts = data.data
              .sort(() => 0.5 - Math.random()) 
              .slice(0, 4);
            setRelatedProducts(shuffledProducts); 
          } else {
            console.error("Lỗi khi lấy sản phẩm liên quan:", data.message);
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy sản phẩm liên quan:", error);
        });
    }
  }, [sp, apiUrl]);

  const addToCart = () => {
    if (!sp) return; 

    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(item => item.ma_san_pham === sp.ma_san_pham);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({
        ma_san_pham: sp.ma_san_pham,
        ten_san_pham: sp.ten_san_pham,
        hinh_anh: sp.hinh_anh,
        gia: sp.gia,
        quantity: quantity
      });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  };

  // Hàm tăng số lượng sản phẩm
  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  // Hàm giảm số lượng sản phẩm
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const categoryName = sp?.tenDM || "Không có danh mục";

  return (
    <>
      <div className="page-title parallax parallax1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-light">
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
            <div className="col-md-6 text-center border border-warning border-2 rounded">
              <img
                src={`${apiUrl}/image/product/${sp?.hinh_anh}`}
                className="card-img-top pt-5"
                alt={sp?.ten_san_pham}
                style={{ width: "75%" }}
              />
            </div>
            <div className="col-md-6">
              <div className="product-detail">
                <div className="inner">
                  <div className="content-detail">
                    <h2 className="product-title my-3">{sp?.ten_san_pham}</h2>
                    <div className="product-categories">
                      <span className="fs-6">Danh mục: </span>
                      <a href="/#">{categoryName}</a>
                    </div>
                    <p><h5 className="fw-bold">Giới thiệu: </h5>{sp?.mo_ta}</p>
                    <div className="price">
                      <ins>
                        <span className="amount fs-3 fw-bold text-danger">
                          {parseInt(sp?.gia).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </ins>
                    </div>
                    <hr></hr>
                    <div className="product-quantity">
                      <h5 className="float-start my-2 mx-3">Số lượng:   </h5>
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

                      <div class="d-grid mt-5">
                        <button type="button" class="btn btn-warning btn-block fw-bold" onClick={addToCart}>Thêm vào giỏ hàng</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sản phẩm liên quan */}
      {relatedProducts.length > 0 && (
        <section className="flat-row shop-related">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-section margin-bottom-55">
                  <h2 className="title pb-10">Sản phẩm liên quan</h2>
                </div>
                <div className="product-content product-fourcolumn clearfix">
                  <ul className="product style2">
                    {relatedProducts.map((sp) => (
                      <li className="product-item" key={sp.ma_san_pham}>
                        <div className="product-thumb clearfix">
                          <Link to={"/chitietsanpham/" + sp.ma_san_pham}>
                            <img
                              src={`${apiUrl}/image/product/${sp.hinh_anh}`}
                              className="card-img-top mx-auto"
                              alt={sp.ten_san_pham}
                              style={{ width: "75%" }}
                            />
                          </Link>
                        </div>
                        <div className="product-info clearfix">
                          <span className="product-title">{sp.ten_san_pham}</span>
                          <div className="price">
                            <ins>
                              <span className="amount fs-6 fw-bold">
                                {parseInt(sp.gia).toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </span>
                            </ins>
                          </div>
                        </div>
                        <div className="add-to-cart text-center">
                          <Link to={"/chitietsanpham/" + sp.ma_san_pham}>Xem chi tiết</Link>
                        </div>
                        <a href="/#" className="like">
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ChiTietSanPham;