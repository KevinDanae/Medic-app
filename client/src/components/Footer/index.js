import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-10 footer bg-base-200 text-base-content">
        <div className="">
          <i className="fas fa-user-md text-7xl ml-10"></i>
          <p>
            Medic App S.A de C.V.
            <br />
            Asistencia medica desde 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Servicios</span>
          <a className="link link-hover">Asitencia</a>
          <a className="link link-hover">Citas</a>
        </div>
        <div>
          <span className="footer-title">Compañia</span>
          <a className="link link-hover">Sobre Nosotros</a>
          <a className="link link-hover">Contacto</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terminos y Condiciones</a>
          <a className="link link-hover">Politicas de privacidad</a>
          <a className="link link-hover">Politicas de Cookies</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
