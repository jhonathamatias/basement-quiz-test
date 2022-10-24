import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../src/components/templates/Layout'
import Button from '../src/components/UI/atoms/Button'
import { Options } from '../src/components/UI/atoms/Select'
import SelectField from '../src/components/UI/molecules/SelectField'
import TextField from '../src/components/UI/molecules/TextField'
import quizApi from '../src/services/quizApi'
import { useGameContext } from '../src/store/GameContext'
import { breakpoints } from '../src/utils/devices'

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

  const handleChangePlayerName = (event: React.ChangeEvent<HTMLInputElement>) => setPlayerName(event.target.value);
  const handleChangeCategoryId = (event: React.ChangeEvent<HTMLSelectElement>) => setCategotyId(Number(event.target.value));

  const loadCategoriesOptions = async () => {
    try {
      const data = await quizApi.getCategories();
      const options = [{ value: '', text: 'Selecione uma categoria' }];

      data.map((option: any) => options.push({ value: option.id, text: option.name }));

      setCategoriesOptions(options);
    } catch (err) {
      console.error('Load categories error!');
    }
  };

  const playGame = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    try {
      const round = await quizApi.createRound(playerName, categoryId);

      setState({
        ...state,
        player: {
          name: playerName,
          id: round.player_id
        },
        round: round,
        category_id: categoryId
      });

      router.push(`/rounds/${round.id}`);
    } catch (err) {

    }
  };

  return (
    <Layout>
      <Form>
        <TextField 
          type="text" 
          placeholder="Nome do jogador" 
          id="player-name" 
          onChange={handleChangePlayerName} 
          required
        />
        <SelectField 
          options={categoriesOptions}  
          onChange={handleChangeCategoryId}
          required
        />
        <Button onClick={playGame}>Jogar</Button>
      </Form>
    </Layout>
  )
}

export default Home;
