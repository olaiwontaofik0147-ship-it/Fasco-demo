import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import SignIn from './pages/signIn.jsx';
import SignUp from './pages/signUp.jsx';
import ShopPage from './pages/shopPage.jsx';
import ForgetPassword from './pages/forgetPassword.jsx';
import Confirmation from './pages/confirmation.jsx';
import NewPassword from './pages/newPassword.jsx';
import ProductPage from './pages/productPage.jsx';
import CartPage from './pages/cartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="shopPage" element={<ShopPage />} />
        <Route path="productPage" element={<ProductPage />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="newPassword" element={<NewPassword />} />
        <Route path="cartPage" element={<CartPage />} />
        <Route path="CheckoutPage" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
