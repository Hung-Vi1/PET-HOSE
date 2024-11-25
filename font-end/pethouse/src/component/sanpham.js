import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../App.css";

function SanPham() {
  const [list_sp, ganSP] = useState([]);

  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleFilter = () => setFilterVisible(!isFilterVisible);
  const toggleSearch = () => setSearchVisible(!isSearchVisible);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dữ liệu trả về:", data); // Kiểm tra dữ liệu
        // Kiểm tra xem data có thuộc tính data không
        if (Array.isArray(data.data)) {
          ganSP(data.data); // Nếu có mảng sản phẩm trong data
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
          ganSP([]); // Khởi tạo giá trị mặc định
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });
  }, []);

  return (
    <>
      <div className="header_sticky header-style-2 has-menu-extra">
        <div className="boxed">
          <div className="page-title parallax parallax1">
            <div className="container">
              
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">Sản phẩm</h1>
                  </div>
                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <a href="index.html">Trang chủ</a>
                      </li>
                      <li>
                        <a href="shop-3col.html">Sản phẩm</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="flat-row main-shop shop-4col">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="filter-shop bottom_68 clearfix">
                    <p className="showing-product">
                      Hiểm thị 1 - 25 sản phẩm
                    </p>
                    <ul className="flat-filter-search">
                      <li>
                        <a
                          href="#"
                          className="show-filter text-black"
                          onClick={toggleFilter}
                        >
                          {isFilterVisible ? "Lọc sản phẩm" : "Lọc sản phẩm "}
                        </a>
                      </li>
                      <li className="search-product">
                        <a
                          href="#"
                          className="text-black"
                          onClick={toggleSearch}
                        >
                          Tìm kiếm
                        </a>
                      </li>
                    </ul>
                  </div>
                  {isFilterVisible && (
                    <div className="box-filter slidebar-shop clearfix">
                      <div className="d-flex justify-content-end">
                        <a
                          href="#"
                          onClick={toggleFilter}
                          className="btn btn-danger"
                        >
                          <i className="fa fa-times"></i>
                        </a>
                      </div>
                      <div className="widget widget-sort-by">
                        <h5 className="widget-title">Sort By</h5>
                        <ul>
                          <li>
                            <a href="/#" className="active">
                              Default
                            </a>
                          </li>
                          <li>
                            <a href="/#">Popularity</a>
                          </li>
                          <li>
                            <a href="/#">Average rating</a>
                          </li>
                          <li>
                            <a href="/#">Newness</a>
                          </li>
                          <li>
                            <a href="/#">Price: low to high</a>
                          </li>
                          <li>
                            <a href="/#">Price: high to low</a>
                          </li>
                        </ul>
                      </div>
                      <div className="widget widget-price">
                        <h5 className="widget-title">Price</h5>
                        <ul>
                          <li>
                            <a href="/#" className="active">
                              $0.00 - $50.00
                            </a>
                          </li>
                          <li>
                            <a href="/#">$50.00 - $100.00</a>
                          </li>
                          <li>
                            <a href="/#">$100.00 - $150.00</a>
                          </li>
                          <li>
                            <a href="/#">$150.00 - $200.00</a>
                          </li>
                          <li>
                            <a href="/#">$200.00 - 250.00</a>
                          </li>
                          <li>
                            <a href="/#">250.00+</a>
                          </li>
                        </ul>
                      </div>
                      <div className="widget widget-color">
                        <h5 className="widget-title">Colors</h5>
                        <ul className="flat-color-list icon-left">
                          <li>
                            <a href="/#" className="yellow m-0">
                              {""}
                            </a>
                            <span>Yellow</span>
                          </li>
                          <li>
                            <a href="/#" className="pink m-0">
                              {""}
                            </a>
                            <span>White</span>
                          </li>
                          <li>
                            <a href="/#" className="red active m-0">
                              {""}
                            </a>
                            <span>Red</span>
                          </li>
                          <li>
                            <a href="/#" className="black m-0">
                              {""}
                            </a>
                            <span>Black</span>
                          </li>
                          <li>
                            <a href="/#" className="blue m-0">
                              {""}
                            </a>
                            <span>Green</span>
                          </li>
                          <li>
                            <a href="/#" className="khaki m-0">
                              {""}
                            </a>
                            <span>Orange</span>
                          </li>
                        </ul>
                      </div>
                      <div className="widget widget-size">
                        <h5 className="widget-title">Size</h5>
                        <ul>
                          <li>
                            <a href="/#">L</a>
                          </li>
                          <li>
                            <a href="/#">M</a>
                          </li>
                          <li>
                            <a href="/#">S</a>
                          </li>
                          <li>
                            <a href="/#">XL</a>
                          </li>
                          <li>
                            <a href="/#">XXL</a>
                          </li>
                          <li>
                            <a href="/#">Over Size</a>
                          </li>
                        </ul>
                      </div>
                      <div className="widget widget_tag">
                        <h5 className="widget-title">Tags</h5>
                        <div className="tag-list">
                          <a href="/#">All products</a>
                          <a href="/#" className="active">
                            Bags
                          </a>
                          <a href="/#">Chair</a>
                          <a href="/#">Decoration</a>
                          <a href="/#">Fashion</a>
                          <a href="/#">Tie</a>
                          <a href="/#">Furniture</a>
                          <a href="/#">Accesories</a>
                        </div>
                      </div>
                    </div>
                  )}
                  {isSearchVisible && (
                    <div className="shop-search clearfix">
                      <form
                        role="search"
                        method="get"
                        className="search-form"
                        action="#"
                      >
                        <label>
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Searching …"
                            name="s"
                          />
                        </label>
                      </form>
                    </div>
                  )}
                  <PhanTrang listSP={list_sp} pageSize={24} ganSP={ganSP} />
                </div>
              </div>
            </div>
          </section>

          <section className="flat-row mail-chimp">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="text">
                <h3>Gửi mail để nhận ưu đãi</h3>
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
                        placeholder="Nhập Email của bạn"
                      />
                    </div>
                    <div className="button">
                      <button type="button">Gửi</button>
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
        </div>
      </div>
    </>
  );
}

function HienSPTrongMotTrang({ spTrongTrang }) {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const addToCart = (product) => {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingProductIndex = cart.findIndex(
      (item) => item.ma_san_pham === product.ma_san_pham
    );
    
    let updatedCart;
  
    if (existingProductIndex !== -1) {
      // Nếu sản phẩm đã có, cập nhật số lượng
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // Nếu sản phẩm chưa có, thêm mới vào giỏ
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
  
    // Cập nhật lại trạng thái giỏ hàng
    setCart(updatedCart);
    
    // Lưu giỏ hàng vào sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    
    // Phát ra sự kiện để các component khác lắng nghe và cập nhật (bao gồm Header)
    window.dispatchEvent(new Event("cartUpdated"));
  
    alert("Đã thêm vào giỏ hàng");
  };
  

  return (
    <>
      {spTrongTrang.map((sp, i) => (
        <li className="product-item" key={i}>
          <div className="product-thumb clearfix">
            <Link to={"/chitietsanpham/" + sp.ma_san_pham}>
              <img
                src={`image/product/${sp.hinh_anh}`}
                className="card-img-top mx-auto w-75 pb-3"
                alt={sp.ten_san_pham}
              />
            </Link>
          </div>
          <div className="product-info clearfix">
            <span className="product-title">{sp.ten_san_pham}</span>
            <div className="price">
              <ins>
                <span className="amount">
                  {parseInt(sp.gia).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </ins>
            </div>
          </div>
          <div className="add-to-cart text-center">
            <Link onClick={() => addToCart(sp)}>THÊM VÀO GIỎ HÀNG</Link>
          </div>
          <a href="/#" className="like">
            <i className="fa fa-heart-o"></i>
          </a>
        </li>
      ))}
    </>
  );
}

function PhanTrang({ listSP, pageSize, ganSP }) {
  const [fromIndex, setfromIndex] = useState(0);
  const toIndex = fromIndex + pageSize;
  const spTrong1Trang = listSP.slice(fromIndex, toIndex);
  const tongSoTrang = Math.ceil(listSP.length / pageSize);

  const chuyenTrang = (event) => {
    const newIndex = (event.selected * pageSize) % listSP.length;
    setfromIndex(newIndex);
  };

  return (
    <>
      <div className="product-content product-fourcolumn clearfix">
        <ul className="product style2">
          <HienSPTrongMotTrang
            spTrongTrang={spTrong1Trang}
            fromIndex={fromIndex}
            ganSP={ganSP}
          />
        </ul>
      </div>

      <div>
        <ReactPaginate
          nextLabel=">"
          previousLabel="<"
          pageCount={tongSoTrang}
          pageRangeDisplayed={5}
          onPageChange={chuyenTrang}
          className="thanhphantrang"
        />
      </div>
    </>
  );
}

export default SanPham;
