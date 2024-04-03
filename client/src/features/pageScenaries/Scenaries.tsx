import React, { FC, useState } from 'react';
import { Layout } from '../../components';
import ScenariesComponent from './components/ScenariesComponent';
import { Link } from 'react-router-dom'


const Scenaries: FC = () => {
  const [selectedScenary, setSelectedScenary] = useState<number | null>(null);

  const handleScenaryClick = (scenaryIndex: number) => {
    setSelectedScenary(scenaryIndex);
  };

  return (
    <Layout>
      <div className="h-screen relative" style={{ backgroundImage: `url('/BackgroundBridgeBlur.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

        <h2 className="font-bold text-center text-sky-700 pt-10 pb-2" style={{ zIndex: 2 }}>Escoge dónde quieres jugar</h2>

        <section className="flex flex-col justify-center gap-4 items-center">

          <div className="flex flex-col items-center relative w-60" style={{ zIndex: 2 }}>
            <Link to="/trivia">
              <ScenariesComponent
                src="ImageScenaryMuseum.png"
                alt="Scenary  1"
                selected={selectedScenary === null}
                onClick={() => handleScenaryClick(1)}
              />
            </Link>

            <span className="text-center mt-2 text-xs font-inknut-antiqua" style={{ zIndex: 2 }}>El Museu de les Aigües un lugar lleno de maravillas donde los visitantes pueden explorar el ciclo del agua y aprender sobre su importancia.</span>
          </div>



          <div className="flex flex-col items-center relative w-60" style={{ zIndex: 2 }}>
            <Link to="/trivia">
              <ScenariesComponent
                src="ImageScenarySource.png"
                alt="Scenary 2"
                selected={selectedScenary === null}
                onClick={() => handleScenaryClick(2)}
              />
            </Link>

            <span className="text-center mt-2 text-xs font-inknut-antiqua" style={{ zIndex: 2 }}>El Bosque de los Manantiales, un área natural protegida donde los visitantes pueden ver la belleza del agua en su estado más puro.</span>
          </div>



        </section>

      </div>
    </Layout>
  );
};

export default Scenaries;
