import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container mt-5 about-us">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center">Acerca de Nosotros</h2>
          <p>
            En <strong>Vibra Urbana</strong>, somos una tienda joven y apasionada dedicada a ofrecer las últimas tendencias en moda urbana. Nos enfocamos en brindarte prendas únicas, de alta calidad y con un estilo que te permitirá destacar en cada ocasión. Creemos en la importancia de que cada persona exprese su personalidad a través de lo que viste, y es por eso que seleccionamos cuidadosamente cada artículo de nuestra colección.
          </p>
          <p>
            Aunque estamos comenzando este emocionante viaje, nuestro compromiso es claro: ofrecer productos que fusionen estilo, comodidad y autenticidad. Queremos que seas parte de nuestra historia, porque sin ti, <strong>Vibra Urbana</strong> no sería posible. ¡Te invitamos a explorar nuestra tienda y a encontrar las piezas que harán vibrar tu estilo!
          </p>
          <p>
            Nuestro local está ubicado en el corazón de la ciudad, y también contamos con un equipo atento y dispuesto a ayudarte en todo momento. Gracias por elegirnos y ser parte de esta vibra.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src="../src/assets/VibraUrbana.jpg" alt="Nuestro local" className="img-fluid rounded shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
