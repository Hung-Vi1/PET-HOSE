import Header from "./header";
import Slider from "./slider";
import Product from "./product";
import Product_hot from "./product-hot";
import Big_sale from "./big_sale";
function App() {
  return (
    <div class="boxed">
      {/* header */}
      <div id="site-header-wrap">
        <Header />
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
          <Product_hot/>
        </div>
      </section>
      <section class="flat-row row-animation-box bg-section row-1">
        <div class="container">
          <Big_sale/>
        </div>
      </section>
    </div>
  );
}

export default App;
