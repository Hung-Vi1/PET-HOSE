import { Link } from "react-router-dom";
// import "../App.css";

function DatLich() {

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
    {/* Bài viết 1 */}
    <div className="col-md-3">
      <article className="post clearfix">
        <div className="featured-post">
          <img src="images/blog/11.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="content-post">
          <div className="title-post">
            <h4>
              <a href="chitiettintuc">
                Grenfell Remembered, Six Months On
              </a>
            </h4>
          </div>
          <div className="entry-post">
            <p>
              A deep dive into the causes and impacts of climate change on
              our planet...
            </p>
            <div className="more-link">
              <a href="chitiettintuc">Read More</a>
            </div>
          </div>
        </div>
      </article>
    </div>

    {/* Bài viết 2 */}
    <div className="col-md-3">
      <article className="post clearfix">
        <div className="featured-post">
          <img src="images/blog/12.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="content-post">
          <div className="title-post">
            <h4>
              <a href="chitiettintuc2">
                Understanding the Climate Crisis
              </a>
            </h4>
          </div>
          <div className="entry-post">
            <p>
              A deep dive into the causes and impacts of climate change on
              our planet...
            </p>
            <div className="more-link">
              <a href="chitiettintuc2">Read More</a>
            </div>
          </div>
        </div>
      </article>
    </div>

    {/* Bài viết 3 */}
    <div className="col-md-3">
      <article className="post clearfix">
        <div className="featured-post">
          <img src="images/blog/13.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="content-post">
          <div className="title-post">
            <h4>
              <a href="chitiettintuc3">
                Advances in Renewable Energy
              </a>
            </h4>
          </div>
          <div className="entry-post">
            <p>
              Exploring the latest breakthroughs in solar and wind energy
              technologies...
            </p>
            <div className="more-link">
              <a href="chitiettintuc3">Read More</a>
            </div>
          </div>
        </div>
      </article>
    </div>

    {/* Bài viết 4 */}
    <div className="col-md-3">
      <article className="post clearfix">
        <div className="featured-post">
          <img src="images/blog/14.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="content-post">
          <div className="title-post">
            <h4>
              <a href="chitiettintuc4">
                The Future of Urban Development
              </a>
            </h4>
          </div>
          <div className="entry-post">
            <p>
              How cities are evolving to meet the challenges of the modern
              world...
            </p>
            <div className="more-link">
              <a href="chitiettintuc4">Read More</a>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div className="col-md-3">
      <article className="post clearfix">
        <div className="featured-post">
          <img src="images/blog/14.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="content-post">
          <div className="title-post">
            <h4>
              <a href="chitiettintuc4">
                The Future of Urban Development
              </a>
            </h4>
          </div>
          <div className="entry-post">
            <p>
              How cities are evolving to meet the challenges of the modern
              world...
            </p>
            <div className="more-link">
              <a href="chitiettintuc4">Read More</a>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div className="col-md-3">
      <article className="post clearfix">
        <div className="featured-post">
          <img src="images/blog/14.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="content-post">
          <div className="title-post">
            <h4>
              <a href="chitiettintuc4">
                The Future of Urban Development
              </a>
            </h4>
          </div>
          <div className="entry-post">
            <p>
              How cities are evolving to meet the challenges of the modern
              world...
            </p>
            <div className="more-link">
              <a href="chitiettintuc4">Read More</a>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div className="col-md-3">
      <article className="post clearfix">
        <div className="featured-post">
          <img src="images/blog/14.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="content-post">
          <div className="title-post">
            <h4>
              <a href="chitiettintuc4">
                The Future of Urban Development
              </a>
            </h4>
          </div>
          <div className="entry-post">
            <p>
              How cities are evolving to meet the challenges of the modern
              world...
            </p>
            <div className="more-link">
              <a href="chitiettintuc4">Read More</a>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div className="col-md-3">
      <article className="post clearfix">
        <div className="featured-post">
          <img src="images/blog/14.jpg" alt="image" className="img-fluid" />
        </div>
        <div className="content-post">
          <div className="title-post">
            <h4>
              <a href="chitiettintuc4">
                The Future of Urban Development
              </a>
            </h4>
          </div>
          <div className="entry-post">
            <p>
              How cities are evolving to meet the challenges of the modern
              world...
            </p>
            <div className="more-link">
              <a href="chitiettintuc4">Read More</a>
            </div>
          </div>
        </div>
      </article>
    </div>  
  </div>
</div>

    </>
  );
}
export default DatLich;
