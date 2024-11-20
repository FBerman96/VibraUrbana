import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de que esté importado
import DataTable from 'react-data-table-component'; // Importar el DataTable
import '../App.css';

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  // Columnas para el DataTable
  const columns = [
    {
      name: 'Producto',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Precio',
      selector: row => `$${row.price.toLocaleString()}`,
      sortable: true,
    },
    {
      name: 'Talle',
      selector: row => row.size,
      sortable: true,
    },
    {
      name: 'Cantidad',
      selector: row => row.quantity,
      sortable: true,
    },
  ];

  const generateReceipt = (cartItems) => {
    let receiptText = 'Detalle de la Compra:\n\n';
    cartItems.forEach((item) => {
      receiptText += `Producto: ${item.name} - Precio: $${item.price.toLocaleString()} - Talle: ${item.size} - Cantidad: ${item.quantity}\n`;
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
        hideProgressBar: false, // Mostrar la barra de progreso
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        className: 'toast-success', // Usamos una clase CSS personalizada
      });
      clearCart(); // Vaciar el carrito
    }
  };

  const handleClearCart = () => {
    clearCart(); // Vaciar el carrito
    toast.error('El carrito ha sido vaciado', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false, // Mostrar la barra de progreso
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      className: 'toast-error', // Usamos una clase CSS personalizada
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
          <DataTable
            columns={columns}
            data={cartItems}
            pagination // Activa la paginación
            highlightOnHover // Resalta las filas al pasar el ratón
            striped // Alterna los colores de las filas
            responsive // Hace la tabla más amigable en pantallas pequeñas
            customStyles={{
              rows: {
                style: {
                  backgroundColor: '#f8f8f8', // Fondo claro para las filas
                  color: '#333', // Texto oscuro para un buen contraste
                  fontWeight: 'bold',
                },
              },
              headCells: {
                style: {
                  backgroundColor: '#ff555d', // Fondo rojo para los encabezados
                  color: '#fff', // Texto blanco en los encabezados
                  fontWeight: 'bold',
                  fontSize: '16px',
                },
              },
              pagination: {
                style: {
                  color: '#ff555d', // Color de texto de la paginación
                  fontWeight: 'bold',
                },
              },
            }}
          />
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

      {/* Toast container with dark theme */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false} // Mostrar la barra de progreso
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Aplicando el tema oscuro globalmente
      />
    </div>
  );
};

export default Cart;
