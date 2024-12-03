  import { Link } from "react-router-dom";
  import React, { useState, useEffect } from "react";
  import ReactPaginate from "react-paginate";
  import "../App.css";

  function SanPham() {
    const [list_sp, ganSP] = useState([]);
    const [filteredSP, setFilteredSP] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [isFilterVisible, setFilterVisible] = useState(false);
    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleFilter = () => setFilterVisible(!isFilterVisible);
    const toggleSearch = () => setSearchVisible(!isSearchVisible);

    // Fetch dữ liệu sản phẩm
    useEffect(() => {
      fetch("http://localhost:8000/api/products")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data.data)) {
            ganSP(data.data);
            setFilteredSP(data.data); // Ban đầu, danh sách hiển thị là toàn bộ sản phẩm
          } else {
            console.error("Dữ liệu không phải là mảng:", data);
            ganSP([]);
            setFilteredSP([]);
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
        });
    }, []);

    // Lọc sản phẩm khi có thay đổi từ khóa tìm kiếm
    useEffect(() => {
      const filtered = list_sp.filter((sp) =>
        sp.ten_san_pham.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSP(filtered);
    }, [searchTerm, list_sp]);


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
                          <Link
                            href="#"
                            className="show-filter text-black"
                            onClick={toggleFilter}
                          >
                            {isFilterVisible ? "Lọc sản phẩm" : "Lọc sản phẩm "}
                          </Link>
                        </li>
                        <li className="search-product">
                          <Link
                            href="#"
                            className="text-black"
                            onClick={toggleSearch}
                          >
                            Tìm kiếm
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {isFilterVisible && (
                      <div className="box-filter slidebar-shop clearfix">
                        {/* Nội dung bộ lọc */}
                        <div className="widget widget_tag">
                          <h5 className="widget-title">
                            Danh mục
                          </h5>
                          <div class="tag-list">
                            <a href="#">All products</a>
                            <a href="#" class="active">Bags</a>
                            <a href="#">Chair</a>
                            <a href="#">Decoration</a>
                            <a href="#">Fashion</a>
                            <a href="#">Tie</a>
                            <a href="#">Furniture</a>
                            <a href="#">Accesories</a>
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
                              placeholder="Tìm sản phẩm..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                          </label>
                        </form>
                      </div>
                    )}

                    <PhanTrang listSP={filteredSP} pageSize={24} ganSP={ganSP} />
                  </div>
                </div>
              </div>
            </section>

            <section className="flat-row mail-chimp">
              {/* Nội dung khác */}
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
      const existingProductIndex = cart.findIndex(
        (item) => item.ma_san_pham === product.ma_san_pham
      );

      let updatedCart;

      if (existingProductIndex !== -1) {
        updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        updatedCart = [...cart, { ...product, quantity: 1 }];
      }


      setCart(updatedCart);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
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
            <HienSPTrongMotTrang spTrongTrang={spTrong1Trang} />
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
