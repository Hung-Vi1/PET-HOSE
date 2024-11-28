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
import ChiTietDonHang from "./component/chitietdonhang";
import ChiTietDV from "./component/chitietDV";
import Lichsudichvu from "./component/Lichsudichvu";

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
import AdminSanPhamThem from "./AdminSanPhamThem";
import AdminDonHang from "./AdminDonHang";
import AdminDonHangSua from "./AdminDonHangSua";
import AdminDonHangChiTiet from "./AdminDonHangChiTiet";
import AdminDonHangThem from "./AdminDonHangThem";
import Admin_bv from "./Admin_BV";
import SuaBV from "./Admin_SuaBV";
import Admin_thembv from "./Admin_ThemBV";
// In hóa đơn
// import PdfCard from "./PdfCard";

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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
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
            path="/donhang/:MaDH"
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
                <ChiTietDonHang />
                <footer class="footer">
                  <div class="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/lichsuDV"
            exact
            element={
              <div>
                <div id="site-header-wrap">
                  <header
                    id="header"
                    className="header header-container clearfix"
                  >
                    <div className="container clearfix" id="site-header-inner">
                      <Header />
                    </div>
                  </header>
                </div>
                <Lichsudichvu />
                <footer className="footer">
                  <div className="container">
                    <Footer />
                  </div>
                </footer>
              </div>
            }
          />

          <Route
            path="/dichvu/:MaDH"
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
                <ChiTietDV />
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
            element={<BaoVeRoute element={<AdminTaiKhoanThem />} />}
          />
          <Route
            path="/admintaikhoansua"
            exact
            element={<BaoVeRoute element={<AdminTaiKhoanSua />} />}
          />
          <Route
            path="/adminsanpham"
            exact
            element={<BaoVeRoute element={<AdminSanPham />} />}
          />
          <Route
            path="/adminsanphamthem"
            exact
            element={<BaoVeRoute element={<AdminSanPhamThem />} />}
          />
          <Route
            path="/adminsanphamsua/:ma_san_pham"
            exact
            element={<BaoVeRoute element={<AdminSanPhamSua />} />}
          />
          <Route
            path="/admindanhmuc"
            exact
            element={<BaoVeRoute element={<AdminDanhMuc />} />}
          />
          <Route
            path="/admindanhmucthem"
            exact
            element={<BaoVeRoute element={<AdminDanhMucThem />} />}
          />
          <Route
            path="/admindanhmucsua/:ma_danh_muc"
            exact
            element={<BaoVeRoute element={<AdminDanhMucSua />} />}
          />
          <Route
            path="/admindonhang"
            exact
            element={<BaoVeRoute element={<AdminDonHang />} />}
          />
          <Route
            path="/admindonhangchitiet/:ma_don_hang"
            exact
            element={<BaoVeRoute element={<AdminDonHangChiTiet />} />}
          />
          <Route
            path="/admindonhangsua/:ma_don_hang"
            exact
            element={<BaoVeRoute element={<AdminDonHangSua />} />}
          />

          <Route
            path="/admindonhangthem"
            exact
            element={<BaoVeRoute element={<AdminDonHangThem />} />}
          />

          <Route
            path="/Admin_BV"
            exact
            element={<BaoVeRoute element={<Admin_bv />} />}
          />
           <Route
            path="/Admin_SuaBV"
            exact
            element={<BaoVeRoute element={<SuaBV />} />}
          />
          <Route
            path="/Admin_ThemBV"
            exact
            element={<BaoVeRoute element={<Admin_thembv />} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
