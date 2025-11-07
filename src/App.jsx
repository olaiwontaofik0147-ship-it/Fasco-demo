import { useState } from 'react'
import NavBar from './component/navbar'
import UserNavBar from './component/UserNavBar'
import NewArrivals from './component/NewArrivals'
import InstagramSection from './component/InstagramSection'
import './App.css';
import Slider from './component/Slider';
import Testimonials from './component/testimonial';
import Newsletter from './component/Newsletter';
import Footer from './component/Footer';
import Deals from './component/Deals';
import UltimateSale from './component/UltimateSale';
import BrandLogo from './component/BrandLogo';

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // Keep login persistent after refresh
  // useEffect(() => {
  //   const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  //   setIsLoggedIn(loggedIn);
  // }, []);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   localStorage.setItem("isLoggedIn", "true");
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem("isLoggedIn");
  // };

  return (
    <div>
      {/* {isLoggedIn ? <UserNavBar onLogout={handleLogout} /> : <NavBar onLogin={handleLogin} />} */}
      <NavBar />
      <main className='mt-3'>
        <section>
          < UltimateSale />
        </section>
        <section>
          < BrandLogo />
        </section>
        <section>
          < Deals />
        </section>
        <section>
          <NewArrivals />
        </section>
        <section>
          <Slider />
        </section>
        <section>
          <InstagramSection />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Newsletter />
        </section>
      </main>
      <footer>
        < Footer />
      </footer>
    </div>
  )
}

export default App
