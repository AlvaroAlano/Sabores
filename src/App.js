import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingHeader from './components/LandingHeader';
import WebAppFooter from './components/WebAppFooter';
import LandingFooter from './components/LandingFooter';
import SelectionPage from './pages/SelectionPage';
import LandingHome from './pages/LandingPage/Home';
import LandingProdutos from './pages/LandingPage/Produtos';
import LandingParceiros from './pages/LandingPage/Parceiros';
import LandingContato from './pages/LandingPage/Contato';
import HomePage from './pages/WebApp/HomePage';
import ProductListPage from './pages/WebApp/ProductListPage';
import ProductDetailPage from './pages/WebApp/ProductDetailPage';
import CartPage from './pages/WebApp/CartPage';
import CheckoutPage from './pages/WebApp/CheckoutPage';
import AccountPage from './pages/WebApp/AccountPage';
import OrderHistoryPage from './pages/WebApp/OrderHistoryPage';
import TestimonialsPage from './pages/WebApp/TestimonialsPage';
import SubscriptionPage from './pages/WebApp/SubscriptionPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isWebApp = location.pathname.startsWith('/webapp');
  const isLanding = location.pathname.startsWith('/landing');

  return (
    <>
      <GlobalStyles />
      {isLanding && <LandingHeader />}
      <Routes>
        <Route path="/" element={<SelectionPage />} />
        <Route path="/landing" element={<LandingHome />} />
        <Route path="/landing/produtos" element={<LandingProdutos />} />
        <Route path="/landing/parceiros" element={<LandingParceiros />} />
        <Route path="/landing/contato" element={<LandingContato />} />
        <Route path="/webapp" element={<HomePage />} />
        <Route path="/webapp/products" element={<ProductListPage />} />
        <Route path="/webapp/product/:id" element={<ProductDetailPage />} />
        <Route path="/webapp/cart" element={<CartPage />} />
        <Route path="/webapp/checkout" element={<CheckoutPage />} />
        <Route path="/webapp/account" element={<AccountPage />} />
        <Route path="/webapp/orders" element={<OrderHistoryPage />} />
        <Route path="/webapp/testimonials" element={<TestimonialsPage />} />
        <Route path="/webapp/subscription" element={<SubscriptionPage />} />
        <Route path="/webapp/*" element={<WebAppRoutes />} />
      </Routes>
      {isWebApp && <WebAppFooter />}
      {isLanding && <LandingFooter />}
    </>
  );
}

function WebAppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductListPage />} />
      <Route path="product/:id" element={<ProductDetailPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="account" element={<AccountPage />} />
      <Route path="orders" element={<OrderHistoryPage />} />
      <Route path="testimonials" element={<TestimonialsPage />} />
      <Route path="subscription" element={<SubscriptionPage />} />
    </Routes>
  );
}

export default App;
