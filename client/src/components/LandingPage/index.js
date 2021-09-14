import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-white pb-10">
      <div className="hero min-h-screen ">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img alt="" src="../img/1.jpg" className="h-5/6 w-4/6 rounded-lg" />
          <div className="ml-36">
            <h1 className="mb-5 text-8xl font-bold">
              Medical
              <br />
              Team
            </h1>
            <p className="mb-5 ml-1 font-semibold">
              Medic-app te ayudara a reservar 
              <br / >
              un turno con un medico
              
              especializado segun tus necesidades.
            </p>
            <button className="btn btn-primary ml-4">Comenzar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
