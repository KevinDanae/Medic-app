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
          <p className="link link-hover">Asitencia</p>
          <p className="link link-hover">Citas</p>
        </div>
        <div>
          <span className="footer-title">Compañia</span>
          <p className="link link-hover">Sobre Nosotros</p>
          <p className="link link-hover">Contacto</p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p className="link link-hover">Terminos y Condiciones</p>
          <p className="link link-hover">Politicas de privacidad</p>
          <p className="link link-hover">Politicas de Cookies</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
