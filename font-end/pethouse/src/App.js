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
import Admin_TrangChu from "./Admin_TrangChu";
import Admin_TaiKhoan from "./Admin_TaiKhoan";
import Admin_TaiKhoanThem from "./Admin_TaiKhoanThem";
import Admin_TaiKhoanSua from "./Admin_TaiKhoanSua";
import Admin_SanPham from "./Admin_SanPham";
import Admin_SanPhamChiTiet from "./Admin_SanPhamChiTiet";
import Admin_DanhMuc from "./Admin_DanhMuc";
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
        <Route path="/admin" exact element={<Admin_TrangChu />} />
        <Route path="/admintaikhoan" exact element={<Admin_TaiKhoan />} />
        <Route
          path="/admintaikhoanthem"
          exact
          element={<Admin_TaiKhoanThem />}
        />
        <Route path="/admintaikhoansua" exact element={<Admin_TaiKhoanSua />} />
        <Route path="/adminsanpham" exact element={<Admin_SanPham />} />
        <Route
          path="/adminsanphamchitiet"
          exact
          element={<Admin_SanPhamChiTiet />}
        />
        <Route path="/admindanhmuc" exact element={<Admin_DanhMuc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
