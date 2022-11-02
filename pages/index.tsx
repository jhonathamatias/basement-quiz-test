import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '@components/templates/Layout';
import Button from '@components/UI/Button';
import { Options } from '@components/UI/Select';
import SelectField from '@components/UI/SelectField';
import TextField from '@components/UI/TextField';
import quizApi from '@services/quizApi';
import { useGameContext } from '@store/GameContext';
import { CategoryType } from '@src/types/quizApi';
import { breakpoints } from '@utils/devices';

const Form = styled.form`
  width: 100%;
  background: rgb(32, 32, 36);
  border-radius: 5px;
  padding: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Home: NextPage = () => {
  const [playerName, setPlayerName] = useState('');
  const [categoryId, setCategotyId] = useState(0);
  const [categoriesOptions, setCategoriesOptions] = useState<Options[]>([]);
  const { state, setState } = useGameContext();
  const router = useRouter();

  useEffect(() => {
    loadCategoriesOptions();
  }, []);

  const handleChangePlayerName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPlayerName(event.target.value);
  const handleChangeCategoryId = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => setCategotyId(Number(event.target.value));

  const loadCategoriesOptions = async () => {
    try {
      const data = await quizApi.getCategories();
      const options = [{ value: '', text: 'Selecione uma categoria' }];

      data.map((option: CategoryType) =>
        options.push({ value: option.id.toString(), text: option.name }),
      );

      setCategoriesOptions(options);
    } catch (err) {
      console.error('Load categories error!');
    }
  };

  const isValidated = (): boolean => {
    if (playerName === '' || categoryId === 0) {
      return false;
    }

    return true;
  };

  const playGame = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    try {
      if (isValidated() === false) {
        alert('Por favor preencha todos os campos!');

        return;
      }

      const round = await quizApi.createRound(playerName, categoryId);

      setState({
        ...state,
        player: {
          name: playerName,
          id: round.player_id,
        },
        round: round,
        category_id: categoryId,
      });

      router.push(`/rounds/${round.id}`);
    } catch (err) {
      console.error('Round create error');
    }
  };

  return (
    <Layout>
      <Form>
        <TextField
          type="text"
          label="Jogador"
          placeholder="Nome"
          id="player-name"
          onChange={handleChangePlayerName}
          required
        />
        <SelectField
          options={categoriesOptions}
          onChange={handleChangeCategoryId}
          label="Categoria"
          required
        />
        <Button onClick={playGame}>Jogar</Button>
      </Form>
    </Layout>
  );
};

export default Home;
