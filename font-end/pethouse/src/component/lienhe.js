import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LienHe() {
    useEffect(() => {
        // Khởi tạo bản đồ Google
        const initializeMap = () => {
            const mapOptions = {
                center: new window.google.maps.LatLng(10.853162580208462, 106.62685899715075), // Tọa độ mong muốn
                zoom: 15, // Độ phóng to của bản đồ
                mapTypeId: window.google.maps.MapTypeId.ROADMAP,
            };
            const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

            // Tạo dấu chỉ (marker)
            const marker = new window.google.maps.Marker({
                position: { lat: 10.853162580208462, lng: 106.62685899715075 }, // Tọa độ của marker
                map: map,
                title: 'Địa điểm của chúng tôi', // Tiêu đề cho marker
            });
        };

        // Tải script Google Maps và khởi tạo bản đồ
        if (window.google && window.google.maps) {
            initializeMap();
        } else {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            script.async = true;
            script.onload = initializeMap;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <>
            <div className="page-title parallax parallax1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading">
                                <h1 className="title">Liên hệ</h1>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Trang chủ</Link></li>
                                    <li><Link to="/lienhe">Liên hệ</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nội dung trang liên hệ */}
            <section className="flat-row flat-iconbox">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-section">
                                <h2 className="title">Get In Touch</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="iconbox text-center">
                                <div className="box-header nomargin">
                                    <div className="icon">
                                        <i className="fa fa-map-marker" />
                                    </div>
                                </div>
                                <div className="box-content">
                                    <p>203, Envato Labs, Behind Alis Steet</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="divider h0" />
                            <div className="iconbox text-center">
                                <div className="box-header">
                                    <div className="icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                </div>
                                <div className="box-content">
                                    <p>+12 345 678 910 / +23 122 345 678</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="divider h0" />
                            <div className="iconbox text-center">
                                <div className="box-header">
                                    <div className="icon">
                                        <i className="fa fa-envelope" />
                                    </div>
                                </div>
                                <div className="box-content">
                                    <p>Infor.deercreative@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flat-row flat-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-section margin_bottom_17">
                                <h2 className="title">Send Us Email</h2>
                            </div>
                        </div>
                    </div>
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
                                            name="subject"
                                            id="subject"
                                        />
                                    </div>
                                </div>
                                <div className="contact-message clearfix">
                                    <label />
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required=""
                                    />
                                </div>
                                <div className="form-submit">
                                    <button className="contact-submit">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flat-row flat-map fix-padding" style={{height:'600px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="map" style={{ height: '600px', width: '100%' }}></div> {/* Tăng chiều cao và kích thước của bản đồ */}
                        </div>
                    </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LienHe;
