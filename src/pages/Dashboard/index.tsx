import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import iconHour from '../../assets/little.png';

const Dashboard: React.FC = () => (
  <>
    <Title>Calcule jornadas de trabalho</Title>
    <Form>
      <input type="datetime-local" placeholder="Digite o início da jornada" />
      <input type="datetime-local" placeholder="Digite o fim da jornada" />
      <button type="submit">Calcular</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src={iconHour} alt="Icon Hour" />

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
