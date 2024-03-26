import React, { FC } from 'react';
import { Layout } from '../../components';
import TriviaAqua1 from './components/TriviaAqua1';
import TriviaAqua2 from './components/TriviaAqua2';
import TriviaEco1 from './components/TriviaEco1';
import TriviaEco2 from './components/TriviaEco2';
import TriviaGotas1 from './components/TriviaGotas1';
import TriviaGotas2 from './components/TriviaGotas2';

const Trivia: FC = () => {
  return (
    <Layout>
      <TriviaAqua1 />
      <TriviaAqua2 />
      <TriviaEco1 />
      <TriviaEco2 />
      <TriviaGotas1 />
      <TriviaGotas2 />
    </Layout>
  );
}

export default Trivia;
