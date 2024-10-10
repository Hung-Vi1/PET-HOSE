import Header from "./header";
import Index from "./component";
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
      <Index />
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
