import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg';
import product8 from '../assets/product8.jpg';
import product9 from '../assets/product9.jpg';
import product10 from '../assets/product10.jpg';
import product11 from '../assets/product11.jpg';
import product12 from '../assets/product12.jpg';
import '../App.css';
import './Products.css';

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'BLAZER TRAJE ESTRUCTURA', price: 279999, image: product1 },
    { id: 2, name: 'CAMISETA BÁSICA HEAVY WEIGHT', price: 42990, image: product2 },
    { id: 3, name: 'JEANS CARGO SALPICADURAS', price: 139990, image: product3 },
    { id: 4, name: 'CAMISA DENIM', price: 79990, image: product4 },
    { id: 5, name: 'VESTIDO MIDI VUELO ZW COLLECTION', price: 245990, image: product5 },
    { id: 6, name: 'CAMISETA NUDO ALGODÓN', price: 59990, image: product6 },
    { id: 7, name: 'POLO ESTRUCTURA', price: 89990, image: product7 },
    { id: 8, name: 'BERMUDA PERLAS', price: 63990, image: product8 },
    { id: 9, name: 'CAMISETA SURF VIBES', price: 28990, image: product9 },
    { id: 10, name: 'BERMUDA DENIM BÁSICA', price: 79990, image: product10 },
    { id: 11, name: 'CONJUNTO SUDADERA Y LEGGING MINNIE MOUSE © DISNEY', price: 63990, image: product11 },
    { id: 12, name: 'VESTIDO TEXTO TABLAS TÉCNICO', price: 63990, image: product12 },
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product });
    toast.success(`${product.name} añadido al carrito!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        backgroundColor: "#348C41", // Fondo verde
        color: "white", // Texto blanco
        fontWeight: "bold",
        fontSize: "16px",
        textAlign: "center",
        borderRadius: "10px",
      },
    });
  };

  return (
    <div className="container mt-5">
      <h2
        className="mt-4 text-center"
        style={{
          marginTop: '50px',
          marginBottom: '30px',
          color: '#ff555d',
          fontWeight: 'bold',
          fontSize: '3rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '10px',
        }}
      >
        NUESTROS PRODUCTOS
        <span
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '4px',
            backgroundColor: '#f91475',
            borderRadius: '2px',
          }}
        ></span>
      </h2>
      <div className="row product-row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4 product-column">
            <ProductCard product={product} addToCart={handleAddToCart} />
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
