import Header from "./header";
import Index from "./component";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TinTuc from "./component/tintuc";
import LienHe from "./component/lienhe";
import ChiTietTinTuc from "./component/chitiettintuc";
import SanPham from "./component/sanpham";
import ChiTietSanPham from "./component/chitietsanpham";
function App() {
  return (
    <BrowserRouter>
      <div class="boxed">
        {/* header */}
        <div id="site-header-wrap">
          <header id="header" class="header header-container clearfix">
            <div class="container clearfix" id="site-header-inner">
              <Header />
            </div>
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
    </BrowserRouter>
  );
}

export default App;
