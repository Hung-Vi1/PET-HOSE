import Header from "./header";
import Index from "./component";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TinTuc from "./component/tintuc";
import LienHe from "./component/lienhe";
import Admin_TrangChu from "./Admin_TrangChu";
import Admin_TaiKhoan from "./Admin_TaiKhoan";
import Admin_TaiKhoanThem from "./Admin_TaiKhoanThem";
import Admin_TaiKhoanSua from "./Admin_TaiKhoanSua";
import Admin_SanPham from "./Admin_SanPham";
import Admin_SanPhamChiTiet from "./Admin_SanPhamChiTiet";

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
    </BrowserRouter>
  );
}

export default App;
