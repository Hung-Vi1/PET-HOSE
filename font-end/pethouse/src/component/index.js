import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Index() {
  const [NewProduct, ListNewProduct] = useState([]);

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
    alert("Đã thêm vào giỏ hàng");
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => ListNewProduct(response.data.data || []));
  }, []);

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="image/slider/banner-1.png"
              className="d-block w-100"
              alt="image/banner_index.webp"
            />
          </div>
          <div className="carousel-item">
            <img
              src="image/slider/banner-2.png"
              className="d-block w-100"
              alt="image/banner_index.webp"
            />
          </div>
          <div className="carousel-item">
            <img
              src="image/slider/banner-3.png"
              className="d-block w-100"
              alt="image/banner_index.webp"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section class="flat-row row-image-box">
        <div class="container">
          <div className="row gutter-10">
            <div className="col-sm-6 col-md-4">
              <div className="flat-image-box style-1 data-effect div-h22 clearfix">
                <div className="item data-effect-item">
                  <div className="inner">
                    <div className="thumb">
                      <img src="image/banner_new.webp" alt="Image" />
                      <div className="elm-btn">
                        <a
                          href="#"
                          className="themesflat-button bg-white width-150"
                        >
                          Cho chó
                        </a>
                      </div>
                      <div className="overlay-effect bg-color-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-4 */}
            <div className="col-sm-6 col-md-4">
              <div className="flat-image-box style-1 row2 data-effect clearfix">
                <div className="item data-effect-item">
                  <div className="inner">
                    <div className="thumb">
                      <img
                        src="image/352a36db-cach-nuoi-chuot-hamster.jpg"
                        alt="Image"
                      />
                      <div className="elm-btn">
                        <a
                          href="#"
                          className="themesflat-button bg-white width-150"
                        >
                          Mua ngay
                        </a>
                      </div>
                      <div className="overlay-effect bg-color-1" />
                    </div>
                  </div>
                </div>
                <div className="item data-effect-item">
                  <div className="inner">
                    <div className="thumb">
                      <img
                        src="image/beyjif6gmney6024ighvm66jnnet_banner-1.1.jpg"
                        alt="Image"
                      />
                      <div className="elm-btn">
                        <a
                          href="#"
                          className="themesflat-button bg-white width-150"
                        >
                          Mua ngay
                        </a>
                      </div>
                      <div className="overlay-effect bg-color-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-4 */}
            <div className="col-sm-6 col-md-4">
              <div className="flat-image-box style-1 data-effect div-h20 clearfix">
                <div className="item data-effect-item">
                  <div className="inner">
                    <div className="thumb">
                      <img src="image/banner_goodprice.webp" alt="Image" />
                      <div className="elm-btn">
                        <a
                          href="#"
                          className="themesflat-button bg-white width-150"
                        >
                          Cho mèo
                        </a>
                      </div>
                      <div className="overlay-effect bg-color-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-4 */}
          </div>
        </div>
      </section>

      <section class="flat-row row-product-new">
        <div class="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section margin-bottom-52">
                <h2 className="title">Sản phẩm mới</h2>
              </div>
              <div className="product-content product-fourcolumn clearfix">
                <ul className="product style2 clearfix">
                  {NewProduct.slice(0, 4).map((sp, i) => (
                    <li className="product-item" key={i}>
                      <div className="product-thumb clearfix">
                        <Link
                          to={`/chitietsanpham/${sp.ma_san_pham}`}
                          className="product-link"
                        >
                          <img
                            src={`image/product/${sp.hinh_anh}`}
                            alt={sp.ten_san_pham}
                          />
                        </Link>
                        <span className="new">New</span>
                      </div>

                      <div className="product-info text-center clearfix">
                        <span className="product-title box-title">
                          {sp.ten_san_pham}
                        </span>
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
                        <Link onClick={() => addToCart(sp)}>
                          THÊM VÀO GIỎ HÀNG
                        </Link>
                      </div>
                      <a href="/" className="like">
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

      <section class="flat-row row-animation-box bg-section row-1">
        <div class="container">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-animation-block">
                <div className="title-section width-before-17 bg-before-white margin-bottom-14">
                  <div className="sup-title">
                    <span>NEW TREND 2018</span>
                  </div>
                  <h2 className="title font-size-52 line-height-76">
                    Women‘s Collection
                  </h2>
                  <div className="sub-title">
                    <span>Big Sale of this Week</span>
                  </div>
                </div>
                <div className="elm-btn text-center">
                  <a
                    href="/"
                    className="themesflat-button bg-accent has-padding-36"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              {/* /.flat-animation-block */}
            </div>
          </div>
        </div>
      </section>

      <section class="flat-row row-product-project style-1">
        <div className="title-section margin-bottom-41">
          <h2 className="title">Khuyến mãi</h2>
        </div>
        <ul className="nav nav-tabs d-flex justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link text-danger fw-bold active"
              data-bs-toggle="tab"
              href="#home"
            >
              Tất cả
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-danger fw-bold"
              data-bs-toggle="tab"
              href="#menu1"
            >
              Cho chó
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-danger fw-bold"
              data-bs-toggle="tab"
              href="#menu2"
            >
              Cho mèo
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane container active" id="home">
            <div className="divider h54" />
            <div className="product-content product-fourcolumn clearfix">
              <ul className="product style2 isotope-product clearfix">
                {NewProduct.slice(0, 8).map((sp, i) => (
                  <li className="product-item" key={i}>
                    <Link to={"/chitietsanpham/" + sp.ma_san_pham}>
                      <div className="product-thumb clearfix">
                        <a href="/" className="product-link">
                          <img
                            src={`image/product/${sp.hinh_anh}`}
                            alt={sp.ten_san_pham}
                          />
                        </a>
                        <span className="new">New</span>
                      </div>
                      <div className="product-info text-center clearfix">
                        <span className="product-title box-title">
                          {sp.ten_san_pham}
                        </span>
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
                        <Link onClick={() => addToCart(sp)}>
                          THÊM VÀO GIỎ HÀNG
                        </Link>
                      </div>
                      <a href="/" className="like">
                        <i className="fa fa-heart-o" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tab-pane container fade" id="menu1">
            <div className="divider h54" />
            <div className="product-content product-fourcolumn clearfix">
              <ul className="product style2 isotope-product clearfix">
                {NewProduct.slice(0, 8).map((sp, i) => (
                  <li className="product-item" key={i}>
                    <Link to={"/chitietsanpham/" + sp.ma_san_pham}>
                      <div className="product-thumb clearfix">
                        <a href="/" className="product-link">
                          <img
                            src={`image/product/${sp.hinh_anh}`}
                            alt={sp.ten_san_pham}
                          />
                        </a>
                        <span className="new">New</span>
                      </div>
                      <div className="product-info text-center clearfix">
                        <span className="product-title box-title">
                          {sp.ten_san_pham}
                        </span>
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
                        <Link onClick={() => addToCart(sp)}>
                          THÊM VÀO GIỎ HÀNG
                        </Link>
                      </div>
                      <a href="/" className="like">
                        <i className="fa fa-heart-o" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tab-pane container fade" id="menu2">
            <div className="divider h54" />
            <div className="product-content product-fourcolumn clearfix">
              <ul className="product style2 isotope-product clearfix">
                {NewProduct.slice(0, 8).map((sp, i) => (
                  <li className="product-item" key={i}>
                    <Link to={"/chitietsanpham/" + sp.ma_san_pham}>
                      <div className="product-thumb clearfix">
                        <a href="/" className="product-link">
                          <img
                            src={`image/product/${sp.hinh_anh}`}
                            alt={sp.ten_san_pham}
                          />
                        </a>
                        <span className="new">New</span>
                      </div>
                      <div className="product-info text-center clearfix">
                        <span className="product-title box-title">
                          {sp.ten_san_pham}
                        </span>
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
                        <Link onClick={() => addToCart(sp)}>
                          THÊM VÀO GIỎ HÀNG
                        </Link>
                      </div>
                      <a href="/" className="like">
                        <i className="fa fa-heart-o" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flat-row row-icon-box bg-section bg-color-f5f">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="flat-icon-box icon-top style-1 clearfix text-center">
                <div className="inner no-margin">
                  <div className="icon-wrap">
                    <i className="fa fa-truck" />
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <a href="#">Miễn phí vận chuyển</a>
                    </h5>
                    <p className="desc">
                      Miễn phí vận chuyển cho đơn hàng trên 200k
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-3 */}
            <div className="col-md-3">
              <div className="flat-icon-box icon-top style-1 clearfix text-center">
                <div className="inner">
                  <div className="icon-wrap">
                    <i className="fa fa-money" />
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <a href="#">Thanh toán khi nhận hàng</a>
                    </h5>
                    <p className="desc">The Internet Trend To Repeat</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-3 */}
            <div className="col-md-3">
              <div className="flat-icon-box icon-top style-1 clearfix text-center">
                <div className="inner">
                  <div className="icon-wrap">
                    <i className="fa fa-gift" />
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <a href="#">Quà tặng cho tất cả</a>
                    </h5>
                    <p className="desc">Nhận Quà Khi Đăng Ký</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-3 */}
            <div className="col-md-3">
              <div className="flat-icon-box icon-top style-1 clearfix text-center">
                <div className="inner">
                  <div className="icon-wrap">
                    <i className="fa fa-clock-o" />
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <a href="#">Mở cửa cả tuần</a>
                    </h5>
                    <p className="desc">6.00 am - 17.00pm</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-3 */}
          </div>
        </div>
      </section>

      <section className="flat-row row-new-latest">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section margin-bottom-40">
                <h2 className="title">Mới nhất</h2>
              </div>
              <div className="new-latest-wrap">
                <div
                  className="flat-new-latest flat-carousel-box post-wrap style3 data-effect clearfix"
                  data-auto="false"
                  data-column={3}
                  data-column2={2}
                  data-column3={1}
                  data-gap={30}
                >
                  <div className="owl-carousel owl-theme">
                    <article className="post clearfix">
                      <div className="featured-post data-effect-item">
                        <img
                          src="images/blog/new-lastest-1-370x280.jpg"
                          alt="image"
                        />
                        <div className="content-post text-center">
                          <div className="title-post">
                            <h2>
                              <a href="blog-detail.html">Trend Of 2018</a>
                            </h2>
                          </div>
                          {/* /.title-post */}
                          <ul className="meta-post">
                            <li className="date">OCT 08, 2018</li>
                            <li className="author">
                              <a href="#">BY ADMIN</a>
                            </li>
                          </ul>
                          {/* /.meta-post */}
                          <div className="entry-post">
                            <p>
                              This is Heading the bank manager long ago won the
                              battle for the heart of...
                            </p>
                            <div className="more-link">
                              <a href="blog-detail.html">READ MORE</a>
                            </div>
                          </div>
                        </div>
                        {/* /.content-post */}
                        <div className="overlay-effect bg-overlay-black" />
                      </div>
                    </article>
                    {/* /.post */}
                    <article className="post clearfix">
                      <div className="featured-post data-effect-item">
                        <img
                          src="images/blog/new-lastest-2-370x280.jpg"
                          alt="image"
                        />
                        <div className="content-post text-center">
                          <div className="title-post">
                            <h2>
                              <a href="blog-detail.html">Trend Of 2018</a>
                            </h2>
                          </div>
                          {/* /.title-post */}
                          <ul className="meta-post">
                            <li className="date">OCT 08, 2018</li>
                            <li className="author">
                              <a href="#">BY ADMIN</a>
                            </li>
                          </ul>
                          {/* /.meta-post */}
                          <div className="entry-post">
                            <p>
                              This is Heading the bank manager long ago won the
                              battle for the heart of...
                            </p>
                            <div className="more-link">
                              <a href="blog-detail.html">READ MORE</a>
                            </div>
                          </div>
                        </div>
                        {/* /.content-post */}
                        <div className="overlay-effect bg-overlay-black" />
                      </div>
                    </article>
                    {/* /.post */}
                    <article className="post clearfix">
                      <div className="featured-post data-effect-item">
                        <img
                          src="images/blog/new-lastest-3-370x280.jpg"
                          alt="image"
                        />
                        <div className="content-post text-center">
                          <div className="title-post">
                            <h2>
                              <a href="blog-detail.html">Trend Of 2018</a>
                            </h2>
                          </div>
                          {/* /.title-post */}
                          <ul className="meta-post">
                            <li className="date">OCT 08, 2018</li>
                            <li className="author">
                              <a href="#">BY ADMIN</a>
                            </li>
                          </ul>
                          {/* /.meta-post */}
                          <div className="entry-post">
                            <p>
                              This is Heading the bank manager long ago won the
                              battle for the heart of...
                            </p>
                            <div className="more-link">
                              <a href="blog-detail.html">READ MORE</a>
                            </div>
                          </div>
                        </div>
                        {/* /.content-post */}
                        <div className="overlay-effect bg-overlay-black" />
                      </div>
                    </article>
                    {/* /.post */}
                    <article className="post clearfix">
                      <div className="featured-post data-effect-item">
                        <img
                          src="images/blog/new-lastest-1-370x280.jpg"
                          alt="image"
                        />
                        <div className="content-post text-center">
                          <div className="title-post">
                            <h2>
                              <a href="blog-detail.html">Trend Of 2018</a>
                            </h2>
                          </div>
                          {/* /.title-post */}
                          <ul className="meta-post">
                            <li className="date">OCT 08, 2018</li>
                            <li className="author">
                              <a href="#">BY ADMIN</a>
                            </li>
                          </ul>
                          {/* /.meta-post */}
                          <div className="entry-post">
                            <p>
                              This is Heading the bank manager long ago won the
                              battle for the heart of...
                            </p>
                            <div className="more-link">
                              <a href="blog-detail.html">READ MORE</a>
                            </div>
                          </div>
                        </div>
                        {/* /.content-post */}
                        <div className="overlay-effect bg-overlay-black" />
                      </div>
                    </article>
                    {/* /.post */}
                    <article className="post clearfix">
                      <div className="featured-post data-effect-item">
                        <img
                          src="images/blog/new-lastest-2-370x280.jpg"
                          alt="image"
                        />
                        <div className="content-post text-center">
                          <div className="title-post">
                            <h2>
                              <a href="blog-detail.html">Trend Of 2018</a>
                            </h2>
                          </div>
                          {/* /.title-post */}
                          <ul className="meta-post">
                            <li className="date">OCT 08, 2018</li>
                            <li className="author">
                              <a href="#">BY ADMIN</a>
                            </li>
                          </ul>
                          {/* /.meta-post */}
                          <div className="entry-post">
                            <p>
                              This is Heading the bank manager long ago won the
                              battle for the heart of...
                            </p>
                            <div className="more-link">
                              <a href="blog-detail.html">READ MORE</a>
                            </div>
                          </div>
                        </div>
                        {/* /.content-post */}
                        <div className="overlay-effect bg-overlay-black" />
                      </div>
                    </article>
                    {/* /.post */}
                    <article className="post clearfix">
                      <div className="featured-post data-effect-item">
                        <img
                          src="images/blog/new-lastest-3-370x280.jpg"
                          alt="image"
                        />
                        <div className="content-post text-center">
                          <div className="title-post">
                            <h2>
                              <a href="blog-detail.html">Trend Of 2018</a>
                            </h2>
                          </div>
                          {/* /.title-post */}
                          <ul className="meta-post">
                            <li className="date">OCT 08, 2018</li>
                            <li className="author">
                              <a href="#">BY ADMIN</a>
                            </li>
                          </ul>
                          {/* /.meta-post */}
                          <div className="entry-post">
                            <p>
                              This is Heading the bank manager long ago won the
                              battle for the heart of...
                            </p>
                            <div className="more-link">
                              <a href="blog-detail.html">READ MORE</a>
                            </div>
                          </div>
                        </div>
                        {/* /.content-post */}
                        <div className="overlay-effect bg-overlay-black" />
                      </div>
                    </article>
                    {/* /.post */}
                  </div>
                  {/* /.owl-carousel */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flat-row mail-chimp">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="text">
                <h3>Liên hệ với chúng tôi</h3>
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
                        placeholder="Nhập email"
                      />
                    </div>
                    <div className="button">
                      <button type="button">Gửi</button>
                    </div>
                  </div>
                </form>
                <ul className="flat-social">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
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
export default Index;
