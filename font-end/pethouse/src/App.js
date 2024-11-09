import Header from "./header";
import Index from "./component";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* User */
import TinTuc from "./component/tintuc";
import LienHe from "./component/lienhe";
import ChiTietTinTuc from "./component/chitiettintuc";
import SanPham from "./component/sanpham";
import ChiTietSanPham from "./component/chitietsanpham";

import GioHang from "./component/giohang";

import DatLich from "./component/datlich";
import LoginSignupForm from "./component/login";

/* Admin */
import AdminTrangChu from "./AdminTrangChu";
import AdminTaiKhoan from "./AdminTaiKhoan";
import AdminTaiKhoanThem from "./AdminTaiKhoanThem";
import AdminTaiKhoanSua from "./AdminTaiKhoanSua";
import AdminSanPham from "./AdminSanPham";
import AdminSanPhamChiTiet from "./AdminSanPhamChiTiet";
import AdminDanhMuc from "./AdminDanhMuc";
import AdminDanhMucSua from "./AdminDanhMucSua";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* header */}
        {/* <div id="site-header-wrap">
          <header id="header" class="header header-container clearfix">
            <div class="container clearfix" id="site-header-inner">
        <Route
          path="/"
          exact
          element={
            <div>
              <Header />
              <Index />
              <Footer />
            </div>
          </header>
        </div> */}
        {/* header */}
        <Route
          path="/"
          exact
          element={
            <div>
              <div id="site-header-wrap">
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>

              <Index />

              <footer class="footer">
                <div class="container">
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
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>

              <TinTuc />

              <footer class="footer">
                <div class="container">
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
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>

              <LienHe />

              <footer class="footer">
                <div class="container">
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
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>

              <SanPham />

              <footer class="footer">
                <div class="container">
                  <Footer />
                </div>
              </footer>
            </div>
          }
        />
        <Route
          path="/chitietsanpham/:id"
          exact
          element={
            <div>
              <div id="site-header-wrap">
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>

              <ChiTietSanPham />

              <footer class="footer">
                <div class="container">
                  <Footer />
                </div>
              </footer>
            </div>
          }
        />
        <Route
          path="/chitiettintuc"
          exact
          element={
            <div>
              <div id="site-header-wrap">
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>

              <ChiTietTinTuc />

              <footer class="footer">
                <div class="container">
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
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>

              <GioHang />

              <footer class="footer">
                <div class="container">
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
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>

              <DatLich />

              <footer class="footer">
                <div class="container">
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
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>

              <LoginSignupForm />

              <footer class="footer">
                <div class="container">
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
        <Route path="/admin" exact element={<AdminTrangChu />} />
        <Route path="/admintaikhoan" exact element={<AdminTaiKhoan />} />
        <Route
          path="/admintaikhoanthem"
          exact
          element={<AdminTaiKhoanThem />}
        />
        <Route path="/admintaikhoansua" exact element={<AdminTaiKhoanSua />} />
        <Route path="/adminsanpham" exact element={<AdminSanPham />} />
        <Route
          path="/adminsanphamchitiet"
          exact
          element={<AdminSanPhamChiTiet />}
        />
        <Route path="/admindanhmuc" exact element={<AdminDanhMuc />} />
        <Route path="/admindanhmucsua/:ma_danh_muc" exact element={<AdminDanhMucSua />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
