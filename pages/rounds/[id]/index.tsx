import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import Layout from '../../../src/components/templates/Layout'
import QuestionCard from '../../../src/components/UI/organisms/QuestionCard'
import QuizApi from '../../../src/services/quizApi'
import { useGameContext } from '../../../src/store/GameContext'

const quizApi = new QuizApi;

const Rounds: NextPage = () => {
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);
	const { state } = useGameContext();

	if (!state.round) {
		return <Layout>
			<Link href="/">Inicie o jogo</Link>
		</Layout>
	}

	const { questions } = state.round;

	const renderQuestionsCards = () => {
		const question = questions[activeQuestion];

		if (isLastQuestion()) {
			return <h1>Acertos: {totalCorrectAnswer}</h1>;
		};

		return <QuestionCard
			question={question.description}
			total={questions.length}
			current={activeQuestion + 1}
			corrects={totalCorrectAnswer}
			options={question.options}
			onSelect={handleSelectOption}
		/>;

	};

	const nextQuestion = () => {
		setActiveQuestion(activeQuestion + 1)
	};

	const isLastQuestion = () => {
		return activeQuestion === questions.length;
	};

	const handleSelectOption = (optionId: number) => {
		sendAnswer(optionId);
	};

	const sendAnswer = async (optionId: number) => {
		const question = questions[activeQuestion];

		if (!question) {
			return;
		}

		try {
			const answer = await quizApi.sendAnswer(state.round.id, question.id, optionId);

			if (answer.correct) {
				setTotalCorrectAnswer(totalCorrectAnswer + 1);
			}

			nextQuestion();
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<Layout>
			{renderQuestionsCards()}
		</Layout>
	)
}

export default Rounds;
