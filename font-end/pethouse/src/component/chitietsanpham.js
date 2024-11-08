import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ChiTietSanPham() {
  let { id } = useParams();

  const [sp, ganSP] = useState([]);

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

  return (
    <>
      <div className="page-title parallax parallax1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading">
                <h2 className="title">{sp ? sp.ten_san_pham : "Sản phẩm"}</h2>
              </div>
              {/* /.page-title-heading */}
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/sanpham">Sản phẩm</Link>
                  </li>
                  <li>
                    <Link to="shop-detail-des.html">
                      {sp ? sp.ten_san_pham : "Sản phẩm"}
                    </Link>
                  </li>
                </ul>
              </div>
              {/* /.breadcrumbs */}
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>

      <section className="flat-row main-shop shop-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`../image/product/${sp.hinh_anh}`}
                className="card-img-top mx-auto"
                alt={sp.ten_san_pham}
                style={{ width: "75%" }}
              />
            </div>
            {/* /.col-md-6 */}
            <div className="col-md-6">
              <div className="product-detail">
                <div className="inner">
                  <div className="content-detail">
                    <h2 className="product-title">{sp.ten_san_pham}</h2>
                    <div className="flat-star style-1">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <i className="fa fa-star-half-o" />
                      <span>(1)</span>
                    </div>
                    <p>{sp.mo_ta}</p>
                    <div className="price">
                      {/* <del>
                        <span className="regular">$90.00</span>
                      </del> */}
                      <ins>
                        <span className="amount">
                          {parseInt(sp.gia).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </ins>
                    </div>
                    <div className="product-quantity">
                      <div className="quantity">
                        <input
                          type="text"
                          defaultValue={1}
                          name="quantity-number"
                          className="quantity-number"
                        />
                        <span className="inc quantity-button">+</span>
                        <span className="dec quantity-button">-</span>
                      </div>
                      <div className="add-to-cart">
                        <a href="/#">Thêm vào giỏ hàng</a>
                      </div>
                      <div className="box-like">
                        <a href="/#" className="like">
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                    </div>
                    <div className="product-categories">
                      <span>Danh mục: </span>
                      <a href="/#">{sp.ma_danh_muc}</a>
                    </div>
                    <ul className="flat-socials">
                      <li>
                        <a href="/#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /.product-detail */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>

      <section className="flat-row shop-related">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section margin-bottom-55">
                <h2 className="title">Related Products</h2>
              </div>
              <div className="product-content product-fourcolumn clearfix">
                <ul className="product style2">
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
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="/#">
                        <img src="images/shop/sh-4/2.jpg" alt="hinh" />
                      </a>
                      <span className="new">New</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$10.00</span>
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
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="/#" className="product-thumb">
                        <img src="images/shop/sh-4/3.jpg" alt="hinh" />
                      </a>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <ins>
                          <span className="amount">$20.00</span>
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
                  <li className="product-item">
                    <div className="product-thumb clearfix">
                      <a href="/#" className="product-thumb">
                        <img src="images/shop/sh-4/4.jpg" alt="hinh" />
                      </a>
                      <span className="new sale">Sale</span>
                    </div>
                    <div className="product-info clearfix">
                      <span className="product-title">
                        Cotton White Underweaer Block Out Edition
                      </span>
                      <div className="price">
                        <del>
                          <span className="regular">$90.00</span>
                        </del>
                        <ins>
                          <span className="amount">$60.00</span>
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
                </ul>
                {/* /.product */}
              </div>
              {/* /.product-content */}
            </div>
          </div>
          {/* /.row */}
        </div>
      </section>

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
                <form
                  action="#"
                  method="post"
                  acceptCharset="utf-8"
                  id="subscribe-form"
                >
                  <div className="subscribe-content">
                    <div className="input">
                      <input
                        type="email"
                        name="subscribe-email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="button">
                      <button type="button">SUBCRIBE</button>
                    </div>
                  </div>
                </form>
                <ul className="flat-social">
                  <li>
                    <a href="/#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
                {/* /.flat-social */}
              </div>
              {/* /.subscribe */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ChiTietSanPham;
