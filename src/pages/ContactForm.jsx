import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = `Nombre: ${formData.firstName}\nApellido: ${formData.lastName}\nCorreo: ${formData.email}\nConsulta: ${formData.message}`;

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "consulta_contacto.txt";
    link.click();

    toast.success("Formulario enviado exitosamente.", {
      position: "top-center",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    toast.error("Formulario vaciado.", {
      position: "top-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  return (
    <div className="container mt-5">
    <div className="card shadow-lg">
      <div
        className="card-header"
        style={{
          backgroundColor: "rgba(255, 108, 83, 0.9)", 
          color: "#ffffff", 
          textAlign: "center",
        }}
      >
        <h2>Contactanos</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Ingrese su nombre"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Ingrese su apellido"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Consulta
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escriba su mensaje aquí..."
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button type="submit" className="btn btn-success btn-lg"
               style={{
                backgroundColor: "#007bff", // Azul predeterminado
                borderColor: "#007bff", // Borde azul
                color: "#fff", // Texto blanco
                fontWeight: "bold",
              }}
              >
                Enviar
              </button>
              <button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={handleReset}
              >
                Vaciar
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer text-center text-muted">
          Gracias por confiar en nosotros. Responderemos a la brevedad.
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ContactForm;