import React, { FC } from "react";
import { Layout } from "../../components";
import { Link } from 'react-router-dom'
// import IntroComponent from "./components/IntroComponent";

const Intro: FC = () => {
  return (
    <Layout>
       {/* <IntroComponent /> * */}
      <div style={{ backgroundImage: `url('/BackgroundIntro.png')`}} className="flex flex-col justify-center items-center h-screen bg-cover w-full bg-no-repeat bg-center">
        <div className="bg-gray-50 opacity-65 p-9 rounded-lg shadow-lg m-6">
          <div className-="text-center text-2xl">
            <h2 className="text-xl  font-bold mb-5">
              AquaQuest Guardianes del Agua
            </h2>
            <p className="text-black-500 text-center">
              AquaQuest, donde te convertirás en un Guardián del Agua y
              embarcarás en una aventura épica para proteger nuestro recurso más
              preciado! En este emocionante juego, explorarás el fascinante
              mundo del agua mientras te enfrentas a desafíos, descubres
              secretos ocultos y te conviertes en un verdadero defensor del
              planeta. ¿Estás listo para sumergirte en esta increíble misión y
              convertirte en un héroe del agua?
            </p>
          </div>
        </div>
        <Link to="/instructions"><button className="h-8 w-left px-4 py-1 bg-cyan-700 text-white rounded-md ">
          Siguiente
        </button></Link>
      </div>
    </Layout>
  );
};

export default Intro;
