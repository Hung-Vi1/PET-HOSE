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

/* Admin */
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
            <div>
              <Header />
              <Index />
              <Footer />
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
          path="/chitiettintuc"
          exact
          element={
            <div>
              <Header />
              <ChiTietTinTuc />
              <Footer />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
