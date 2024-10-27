import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
function DatLich() {
    const [sp, ganSP] = useState([]);

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
            <div className="page-title parallax parallax1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading">
                                <h1 className="title">Đặt lịch online</h1>
                            </div>
                            {/* /.page-title-heading */}
                            <div className="breadcrumbs ">
                                <ul>
                                    <li>
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li>
                                        <Link to="/datlich">Đặt lịch</Link>
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

            <section className="flat-row flat-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-section margin_bottom_17">
                                <h2 className="title">Đăng ký lịch</h2>
                            </div>
                            {/* /.title-section */}
                        </div>
                        {/* /.col-md-12 */}
                    </div>
                    {/* /.row */}
                    <div className="row">
                        <div className="wrap-contact style2">
                            <form
                                noValidate=""
                                className="contact-form"
                                id="contactform"
                                method="post"
                                action="#"
                            >
                                <div className="form-text-wrap clearfix">
                                    <div className="contact-name">
                                        <label />
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            aria-required="true"
                                            size={30}
                                            defaultValue=""
                                            name="author"
                                            id="author"
                                        />
                                    </div>
                                    <div className="contact-email">
                                        <label />
                                        <input
                                            type="email"
                                            size={30}
                                            placeholder="Email"
                                            defaultValue=""
                                            name="email"
                                            id="email"
                                        />
                                    </div>
                                    <div className="contact-subject">
                                        <label />
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            aria-required="true"
                                            size={30}
                                            defaultValue=""
                                            name="subject"
                                            id="subject"
                                        />
                                    </div>
                                </div>
                                <div className="contact-message clearfix">
                                    <label />
                                    <textarea
                                        className=""
                                        tabIndex={4}
                                        placeholder="Message"
                                        name="message"
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-submit">
                                    <button className="contact-submit">SEND</button>
                                </div>
                            </form>
                        </div>
                        {/* /.wrap-contact */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
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
                                {/* <ul className="flat-social">
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
                                </ul> */}
                                {/* /.flat-social */}
                            </div>
                            {/* /.subscribe */}
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
export default DatLich