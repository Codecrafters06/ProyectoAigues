import React, { FC, useState } from 'react';
import { Layout } from '../../components';
import ScenariesComponent from './components/ScenariesComponent';
import Trivia from '../pageTrivia/TriviaPageAquaMuseum'
import { Link, Route } from 'react-router-dom'


const Scenaries: FC = () => {
  const [selectedScenary, setSelectedScenary] = useState<number | null>(null);

  const handleScenaryClick = (scenaryIndex: number) => {
    setSelectedScenary(scenaryIndex);
  };

  return (
    <Layout>
      <div className="h-screen relative" style={{ backgroundImage: `url('/BackgroundBridgeBlur.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

        <h2 className="font-bold text-center text-sky-700 pt-10 pb-2" style={{ zIndex: 2 }}>Escoge dónde quieres jugar</h2>

        <section className="flex flex-col justify-center pt-8 gap-4 items-center">

          <div className="flex flex-col items-center bg-primary opacity-70 rounded-[10px] p-10 relative w-72" style={{ zIndex: 2 }}>
            <Link to="/trivia-eco-museum">
              <ScenariesComponent
                src="ImageScenaryMuseum.png"
                alt="Scenary  1"
                selected={selectedScenary === 3}
                onClick={() => handleScenaryClick(1)}
              />
            </Link>

            <span className="text-center mt-2 text-xs font-inknut-antiqua" style={{ zIndex: 2 }}>El Museu de les Aigües un lugar lleno de maravillas donde los visitantes pueden explorar el ciclo del agua y aprender sobre su importancia.</span>
          </div>



          <div className="flex flex-col items-center bg-primary opacity-70 rounded-[10px] p-10 relative w-72" style={{ zIndex: 2 }}>
            <Link to="/trivia-eco-source">
              <ScenariesComponent
                src="ImageScenarySource.png"
                alt="Scenary 2"
                selected={selectedScenary === 4}
                onClick={() => handleScenaryClick(2)}
              />
            </Link>

            <span className="text-center mt-2 text-xs font-inknut-antiqua" style={{ zIndex: 2 }}>El Bosque de los Manantiales, un área natural protegida donde los visitantes pueden ver la belleza del agua en su estado más puro.</span>
          </div>



        </section>

      </div>
      {/* <Route path="/trivia" element={<Trivia selectedScenary={selectedScenary} />} /> */}
    </Layout>
  );
};

export default Scenaries;
