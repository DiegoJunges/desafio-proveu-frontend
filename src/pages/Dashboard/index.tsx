import React, { useState, FormEvent } from 'react';
import { FiCheck } from 'react-icons/fi';
// eslint-disable-next-line object-curly-newline
import { Title, Form, Repositories, Error } from './styles';
import iconHour from '../../assets/little.png';
import api from '../../services/apiClient';

interface Register {
  initialHour: String;
  finalHour: String;
}

const Dashboard: React.FC = () => {
  const [newInitialRegister, setNewInitialRegister] = useState('');
  const [newFinalRegister, setNewFinalRegister] = useState('');
  const [register, setRegister] = useState<Register[]>([]);
  const [inputError, setInputError] = useState('');
  async function handleAddRegister(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newInitialRegister) {
      setInputError('Digite a data/hora inicial da jornada de trabalho');
      return;
    }

    if (!newFinalRegister) {
      setInputError('Digite a data/hora final da jornada de trabalho');
      return;
    }

    try {
      const response = await api.post('register', {
        initialHour: newInitialRegister,
        finalHour: newFinalRegister,
      });

      const res = response.data;

      setRegister(res);
      setInputError('');
    } catch (err) {
      setInputError('erro no cálculo, datas e/ou horários inválidos');
    }
  }

  return (
    <>
      <Title>Calcule jornadas de trabalho</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRegister}>
        <input
          value={newInitialRegister}
          onChange={e => setNewInitialRegister(e.target.value)}
          type="datetime-local"
          placeholder="Digite o início da jornada"
        />

        <input
          value={newFinalRegister}
          onChange={e => setNewFinalRegister(e.target.value)}
          type="datetime-local"
          placeholder="Digite o fim da jornada"
        />
        <button type="submit">Calcular</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        <div>
          <img src={iconHour} alt="Icon Hour" />

          <div>
            <strong>Horas Trabalhadas</strong>
            <p>{register}</p>
          </div>

          <FiCheck size={32} />
        </div>
      </Repositories>
    </>
  );
};
export default Dashboard;
