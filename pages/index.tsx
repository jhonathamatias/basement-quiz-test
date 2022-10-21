import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Layout from '../src/components/templates/Layout'
import Button from '../src/components/UI/atoms/Button'
import Input from '../src/components/UI/atoms/Input'
import { Options } from '../src/components/UI/atoms/Select'
import SelectField from '../src/components/UI/molecules/SelectField'
import TextField from '../src/components/UI/molecules/TextField'
import QuizApi from '../src/services/quizApi'
import { breakpoints } from '../src/utils/devices'

const quizApi = new QuizApi;

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
  const [categoriesOptions, setCategoriesOptions] = useState<Options[]>([]);

  useEffect(() => {
    loadCategoriesOptions();
  }, []);

  const loadCategoriesOptions = async () => {
    try {
      const data = await quizApi.getCategories();
      const options = [{ value: '', text: 'Selecione uma categoria'}];

      data.map((option: any) => options.push({ value: option.id, text: option.name }));
      
      setCategoriesOptions(options);
    } catch (err) {
      console.error('Load categories error!');
    }
  }

  return (
    <Layout>
      <Form>
        <TextField type="text" placeholder="Nome do jogador" id="player-name" />
        <SelectField options={categoriesOptions} />
        <Button>Jogar</Button>
      </Form>
    </Layout>
  )
}

export default Home;
