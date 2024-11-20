import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TinTuc() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/News");
        const data = await response.json();

        if (Array.isArray(data.data)) {
          setArticles(data.data);
        } else {
          console.error("Dữ liệu không phải là mảng:", data);
          setArticles([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
        setArticles([]);
      }
    };

    fetchArticles();
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
                <h1 className="title">Tin thú cưng</h1>
              </div>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/tintuc">Tin tức thú cưng</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="blog-posts grid-posts">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="post-wrap margin-bottom-26">
                <div className="grid four">
                  {articles.length > 0 ? (
                    articles.map((article) => (
                      <article className="post clearfix" key={article.bai_viet}>
                        <div className="featured-post">
                          <img src={`image/News/${article.Hinh}`} alt="hinh" style={{
      width: '400px', // Đặt chiều rộng bằng 100% của phần tử chứa
      height: '300px', // Để chiều cao tự động tính theo tỷ lệ
      maxHeight: '300px', // Đặt chiều cao tối đa nếu cần
      objectFit: 'cover' // Đảm bảo hình ảnh không bị biến dạng
    }}/>
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
                            <p>{truncateContent(article.noi_dung, 110)}</p>
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
              <div className="blog-pagination text-center clearfix">
                <ul className="flat-pagination">
                  <li className="prev">
                    <a href="/#">
                      <i className="fa fa-angle-left" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">1</a>
                  </li>
                  <li className="active">
                    <a href="/#" title="">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="/#">3</a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
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
                <h3>Đăng ký nhận bản tin</h3>
              </div>
            </div>
            <div className="col-md-8">
              <div className="subscribe clearfix">
                <form action="#" method="post" acceptCharset="utf-8" id="subscribe-form">
                  <div className="subscribe-content">
                    <div className="input">
                      <input type="email" name="subscribe-email" placeholder="Email của bạn" />
                    </div>
                    <div className="button">
                      <button type="button">ĐĂNG KÝ</button>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TinTuc;