import Header from "./header";
import Index from "./component";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TinTuc from "./component/tintuc";
import LienHe from "./component/lienhe";
import ChiTietTinTuc from "./component/chitiettintuc";
import SanPham from "./component/sanpham";
import ChiTietSanPham from "./component/chitietsanpham";
=======
import Admin_TrangChu from "./Admin_TrangChu";
import Admin_TaiKhoan from "./Admin_TaiKhoan";
import Admin_TaiKhoanThem from "./Admin_TaiKhoanThem";
import Admin_TaiKhoanSua from "./Admin_TaiKhoanSua";
import Admin_SanPham from "./Admin_SanPham";
import Admin_SanPhamChiTiet from "./Admin_SanPhamChiTiet";

>>>>>>> f6a75f435641cfa6b353169a8f2272b5bd17d698
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* header */}
        <Route
          path="/"
          exact
          element={
            <div class="boxed">
              {/* header */}
              <div id="site-header-wrap">
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>
              <Index />
              {/* Footer */}
              <footer class="footer">
                <div class="container">
                  <Footer />
                </div>
              </footer>
            </div>
<<<<<<< HEAD
          </header>
        </div>
        {/* header */}
        <Routes>
          <Route path='/' exact element={<Index />} />
          <Route path='/tintuc' exact element={<TinTuc/>} />
          <Route path='/lienhe' exact element={<LienHe/>} />
          <Route path='/sanpham' exact element={<SanPham/>} />
          <Route path='/chitietsanpham' exact element={<ChiTietSanPham/>} />
          <Route path='/chitiettintuc' exact element={<ChiTietTinTuc/>} />
        </Routes>

        {/* Footer */}
        <footer class="footer">
          <div class="container">
            <Footer />
          </div>
        </footer>
      </div>
=======
          }
        />
        <Route
          path="/tintuc"
          exact
          element={
            <div class="boxed">
              {/* header */}
              <div id="site-header-wrap">
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>
              <TinTuc />
              {/* Footer */}
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
            <div class="boxed">
              {/* header */}
              <div id="site-header-wrap">
                <header id="header" class="header header-container clearfix">
                  <div class="container clearfix" id="site-header-inner">
                    <Header />
                  </div>
                </header>
              </div>
              <LienHe />
              {/* Footer */}
              <footer class="footer">
                <div class="container">
                  <Footer />
                </div>
              </footer>
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
        <Route path="/adminsanphamchitiet" exact element={<Admin_SanPhamChiTiet />} />
      </Routes>
>>>>>>> f6a75f435641cfa6b353169a8f2272b5bd17d698
    </BrowserRouter>
  );
}

export default App;
