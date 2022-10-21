import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ThemeProvider } from 'styled-components'
import Layout from '../src/components/templates/Layout'
import Button from '../src/components/UI/atoms/Button'
import QuizApi from '../src/services/quizApi'
import styles from '../styles/Home.module.css'

const quizApi = new QuizApi;

const theme = {
  pallete: {
    main: {
      background: '#121214'
    }
  }
}
const Home: NextPage = () => {
  return (
    <div >
      <Layout>
        <Button>Teste</Button>
      </Layout>
    </div>
  )
}

export default Home
