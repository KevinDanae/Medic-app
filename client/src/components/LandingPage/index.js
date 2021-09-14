import React from 'react';

const LandingPage = () => {
    return (
        <div class='bg-white'>


            <div class="hero min-h-screen ">
                <div class="flex-col hero-content lg:flex-row-reverse">
                        <img src="../img/Group.png"  class="max-w-sm rounded-lg "/>
                    <div>
                        <h1 class="mb-5 text-5xl font-bold">
                            Como podemos ayudarte?
                        </h1>
                        <p class="mb-5">
                            Medic-app te ayudara a reservar un turno con un medico especializado segun tus necesidades.
                        </p>
                        <button class="btn btn-primary">Comenzar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage