import Header from "./header";
import Index from "./component";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

/* User */
import TinTuc from "./component/tintuc";
import LienHe from "./component/lienhe";
import ChiTietTinTuc from "./component/chitiettintuc";
import SanPham from "./component/sanpham";
import ChiTietSanPham from "./component/chitietsanpham";

import GioHang from "./component/giohang";
import ThanhToan from "./component/thanhtoan";

import DatLich from "./component/datlich";
import LoginSignupForm from "./component/login";
import Info from "./component/info";
import Password from "./component/Password";
import LichSuMua from "./component/lichsumua";

/* Admin */
import AdminTrangChu from "./AdminTrangChu";
import AdminTaiKhoan from "./AdminTaiKhoan";
import AdminTaiKhoanThem from "./AdminTaiKhoanThem";
import AdminTaiKhoanSua from "./AdminTaiKhoanSua";
import AdminSanPham from "./AdminSanPham";
import AdminSanPhamSua from "./AdminSanPhamSua";
import AdminDanhMuc from "./AdminDanhMuc";
import AdminDanhMucSua from "./AdminDanhMucSua";
import AdminDanhMucThem from "./AdminDanhMucThem";
import BaoVeRoute from "./BaoVeRoute"; // Import ProtectedRoute

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>

                <Index />

                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/tintuc"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>

                <TinTuc />

                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/lienhe"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>

                <LienHe />

                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/sanpham"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>

                <SanPham />

                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/chitietsanpham/:id"
            exact element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>
                <ChiTietSanPham />
                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/chitiettintuc/:id"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>

                <ChiTietTinTuc />

                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/giohang"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>

                <GioHang />

                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/formthanhtoan"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>

                <ThanhToan />

                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/tintuc"
            exact
            element={
              <div>
                <Header />
                <TinTuc />
                <Footer />
              </div>
            }
          />

          <Route
            path="/lienhe"
            exact
            element={
              <div>
                <Header />
                <LienHe />
                <Footer />
              </div>
            }
          />

          <Route
            path="/sanpham"
            exact
            element={
              <div>
                <Header />
                <SanPham />
                <Footer />
              </div>
            }
          />

          <Route
            path="/datlich"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>

                <DatLich />

                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/login"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>
                <LoginSignupForm />
                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />
          <Route
            path="/info"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>
                <Info />
                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />
          <Route
            path="/password"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>
                <Password />
                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />
          <Route
            path="/lichsumua"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header id="header" className="header header-container clearfix">
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>
                <LichSuMua />
                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />
          <Route
            path="/chitietsanpham"
            exact
            element={
              <div>
                <Header />
                <ChiTietSanPham />
                <Footer />
              </div>
            }
          />
          {/* Admin */}
          <Route
            path="/admin"
            exact
            element={<BaoVeRoute element={<AdminTrangChu />} />}
          />
          <Route
            path="/admintaikhoan"
            exact
            element={<BaoVeRoute element={<AdminTaiKhoan />} />}
          />
          <Route
            path="/admintaikhoanthem"
            exact
            element={<AdminTaiKhoanThem />}
          />
          <Route
            path="/admintaikhoansua"
            exact
            element={<AdminTaiKhoanSua />}
          />
          <Route path="/adminsanpham" exact element={<AdminSanPham />} />
          <Route path="/adminsanphamsua/:ma_san_pham" exact element={<AdminSanPhamSua />} />
          <Route path="/admindanhmuc" exact element={<AdminDanhMuc />} />
          <Route
            path="/admindanhmucsua/:ma_danh_muc"
            exact
            element={<AdminDanhMucSua />}
          />
          <Route
            path="/admindanhmucthem"
            exact
            element={<AdminDanhMucThem />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
