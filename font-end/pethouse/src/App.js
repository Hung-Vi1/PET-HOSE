import Header from "./header";
import Slider from "./slider";
import Product from "./product";
import Product_hot from "./product-hot";
import Big_sale from "./big_sale";
import Best_sale from "./best_sale";
import Footer from "./footer";
function App() {
  return (
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
      <Slider />
      <section class="flat-row row-image-box">
        <div class="container">
          <Product />
        </div>
      </section>
      <section class="flat-row row-product-new">
        <div class="container">
          <Product_hot />
        </div>
      </section>
      <section class="flat-row row-animation-box bg-section row-1">
        <div class="container">
          <Big_sale />
        </div>
      </section>
      <section class="flat-row row-product-project style-1">
        <div class="container">
          <Best_sale />
        </div>
      </section>
      {/* Footer */}
      <footer class="footer">
        <div class="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
