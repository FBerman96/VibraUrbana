import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import AdminPanel from './pages/AdminPanel';
import ContactForm from './pages/ContactForm';
import AboutUs from './pages/AboutUs'; 
import ProtectedRoute from './components/ProtectedRoute'; 
import { CartProvider } from './context/CartContext'; 
import { AuthProvider } from './context/AuthContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<ContactForm />} />
            <Route path="/acerca-de-nosotros" element={<AboutUs />} /> {/* Nueva ruta */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
