import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../assets/instagram.jpg'
import facebook from '../assets/facebook.png'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import amex from '../assets/amex.png'
import mercadopago from '../assets/mercadopago.png'

const Footer = () => {
  return (
    <footer className="header-footer mt-auto">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 text-center text-md-start">
            <h5>Vibra Urbana</h5>
            <p>&copy; 2024 Vibra Urbana. All rights reserved.</p>
          </div>
          <div className="col-md-4 text-center">
            <Link to="/contacto" className="nav-link text-decoration-none">Contáctenos</Link><br />
            <Link to="/acerca-de-nosotros" className="nav-link text-decoration-none">Acerca de nosotros</Link>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p>Síguenos en redes sociales</p>
            <div className="social-buttons">
              <a href="https://www.instagram.com" className="social-button" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com" className="social-button" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>

          {/* Medios de Pago */}
          <div className="row">
          <div className="col-12 text-left">
            <p className="col-md-4 text-md-start">Aceptamos todos los medios de pago:</p>
            <div className="d-flex justify-content-start">
              <img src={visa} alt="Visa" className="mx-2" style={{ height: '40px' }} />
              <img src={mastercard} alt="MasterCard" className="mx-2" style={{ height: '40px' }} />
              <img src={amex} alt="American Express" className="mx-2" style={{ height: '40px' }} />
              <img src={mercadopago} alt="Mercado pago" className="mx-2" style={{ height: '40px' }} />
            </div>
          
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
