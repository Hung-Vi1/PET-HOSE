import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import "../App.css";

function DatLich() {
  const [tintuc, setTinTuc] = useState([]);

  useEffect(() => {
    const fetchTinTuc = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/News");
        const data = await response.json();

        if (Array.isArray(data.data)) {
          setTinTuc(data.data);
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
          setTinTuc([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
        setTinTuc([]);
      }
    };

    fetchTinTuc();
  }, []);

  const truncateContent = (content, limit) => {
    if (content.length > limit) {
      return content.substring(0, limit) + "...";
    }
    return content;
  };
  return (
    <>
      <div className="page-title parallax parallax1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading">
                <h1 className="title">Đặt lịch</h1>
              </div>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/datlich  ">Đặt lịch</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking */}
      <div className="container booking-form mt-5 p-4">
        <h2 className="text-center mb-4">Đăng ký lịch hẹn</h2>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">
              <label htmlFor="name">Họ và tên:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nhập họ và tên của bạn"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Nhập email của bạn"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại:</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Dịch vụ:</label>
              <select className="form-control" id="service" required>
                <option value="">Chọn dịch vụ</option>
                <option value="grooming">Grooming</option>
                <option value="vet">Khám bệnh</option>
                <option value="boarding">Trông giữ thú cưng</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="time">Giờ đặt lịch:</label>
              <input
                type="time"
                className="form-control"
                id="time"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Ngày đặt lịch:</label>
              <input
                type="date"
                className="form-control"
                id="date"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Ghi chú:</label>
              <textarea
                className="form-control"
                id="notes"
                rows="3"
                placeholder="Nhập ghi chú nếu có"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger mt-3">
              Xác nhận đặt lịch
            </button>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <div className="image-column">
              <img
                src="/image/banner_booking.webp"
                alt="Ảnh minh họa dịch vụ"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end booking */}
      <div className="container booking-form mt-5 p-4">
        <h2 className="mb-4">Bài viết liên quan</h2>
        <div className="row">
    <div className="col-md-12">
      <div className="post-wrap margin-bottom-26">
        <div className="grid four">
          {tintuc.length > 0 ? (
            tintuc.slice(0, 4).map((article) => (
              <article className="post clearfix" key={article.bai_viet}>
                <div className="featured-post">
                  <img
                    src={`image/News/${article.Hinh}`}
                    alt="hinh"
                    style={{
                      width: '400px',
                      height: '300px',
                      maxHeight: '300px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div className="content-post">
                  <div className="title-post">
                    <h2>
                      <Link to={`/chitiettintuc/${article.bai_viet}`}>
                        {article.tieu_de}
                      </Link>
                    </h2>
                  </div>
                  <div className="entry-post">
                    <p>{truncateContent(article.noi_dung, 100)}</p>
                    <div className="more-link">
                      <Link to={`/chitiettintuc/${article.bai_viet}`}>Đọc thêm</Link>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>Không có bài viết nào.</p>
          )}
        </div>
      </div>
    </div>
  </div>
      </div>

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

    </>
  );
}
export default DatLich;
