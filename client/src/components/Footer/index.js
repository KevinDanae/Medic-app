import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="p-10 footer bg-base-200 text-base-content">
        <div class=""> 
          <i class="fas fa-user-md text-7xl ml-10" ></i>
          <p>
            Medic App S.A de C.V.
            <br />
            Asistencia medica desde 1992
          </p>
        </div>
        <div>
          <span class="footer-title">Servicios</span>
          <a class="link link-hover">Asitencia</a>
          <a class="link link-hover">Citas</a>
        </div>
        <div>
          <span class="footer-title">Compañia</span>
          <a class="link link-hover">Sobre Nosotros</a>
          <a class="link link-hover">Contacto</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terminos y Condiciones</a>
          <a class="link link-hover">Politicas de privacidad</a>
          <a class="link link-hover">Politicas de Cookies</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
