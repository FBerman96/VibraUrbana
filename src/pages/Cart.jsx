import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de que esté importado
import '../App.css';

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const generateReceipt = (cartItems) => {
    let receiptText = 'Detalle de la Compra:\n\n';
    cartItems.forEach((item) => {
      receiptText += `Producto: ${item.name} - Precio: $${item.price.toLocaleString()} - Cantidad: ${item.quantity}\n`;
    });
    const totalAmount = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    receiptText += `\nTotal: $${totalAmount.toLocaleString()}`;

    // Crear el archivo .txt y descargarlo
    const blob = new Blob([receiptText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'recibo_compra.txt';
    link.click();
  };

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      generateReceipt(cartItems);  // Generar el recibo y descargar el archivo
      toast.success('¡Compra realizada con éxito!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        style: {
          backgroundColor: "#28a745", // Fondo verde
          color: "white", // Texto blanco
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
          borderRadius: "10px",
        },
      });
      clearCart(); // Vaciar el carrito
    }
  };

  const handleClearCart = () => {
    setShowErrorToast(true);
    clearCart(); // Vaciar el carrito
    toast.error('El carrito ha sido vaciado', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        backgroundColor: "#f44336", // Fondo rojo
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
      <h2 className="text-center" style={{ color: '#ff555d', fontWeight: 'bold' }}>
        Carrito de Compras
      </h2>
      <div className="mt-4">
        {cartItems.length === 0 ? (
          <p className="text-center">Tu carrito está vacío.</p>
        ) : (
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item"
                style={{
                  background: 'rgba(255, 255, 255, 0.3)', // Fondo transparente
                  border: 'none', // Eliminar borde
                  color: '#333', // Texto oscuro para mayor contraste
                  fontWeight: 'bold', // Texto en negrita para mayor legibilidad
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra sutil
                  borderRadius: '8px', // Bordes redondeados
                  marginBottom: '10px', // Espacio entre los elementos
                  padding: '10px', // Asegura que el texto tenga espacio alrededor
                }}
              >
                {item.name} - ${item.price.toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-success"
          onClick={handlePurchase}
          disabled={cartItems.length === 0}
        >
          Comprar
        </button>
        <button
          className="btn btn-danger"
          onClick={handleClearCart}
          disabled={cartItems.length === 0}
        >
          Vaciar Carrito
        </button>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Cart;
