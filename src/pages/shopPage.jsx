import FashionPage from "../component/FashionPage";
import Slider from "../component/Slider";
import InstagramSection from "../component/InstagramSection";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";
import NavBar from "../component/navbar";
import UserNavbar from "../component/UserNavBar";

function ShopPage () {
  return (
    <div className="App">
      <UserNavbar />
      <FashionPage />
      <Slider />
      <InstagramSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
export default ShopPage;