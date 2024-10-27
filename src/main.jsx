
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './styles.css';
import { CartProvider } from './context/CartContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
</React.StrictMode>,
);
