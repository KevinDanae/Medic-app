import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <div className="hero min-h-screen ">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img src="../img/Group.png" className="max-w-sm rounded-lg " />
          <div>
            <h1 className="mb-5 text-5xl font-bold">Como podemos ayudarte?</h1>
            <p className="mb-5">
              Medic-app te ayudara a reservar un turno con un medico
              especializado segun tus necesidades.
            </p>
            <button className="btn btn-primary">Comenzar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
