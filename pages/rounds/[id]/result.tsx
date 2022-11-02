import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import Layout from '@components/templates/Layout';
import RoundResult from '@components/RoundResult';
import quizApi from '@services/quizApi';
import { useGameContext } from '@store/GameContext';
import { RoundResultType } from '@src/types/quizApi';

const Result: NextPage = () => {
  const [roundResult, setRoundResult] = useState<RoundResultType>(
    {} as RoundResultType,
  );
  const router = useRouter();
  const { state } = useGameContext();

  const getRoundResult = useCallback(async () => {
    try {
      const result = await quizApi.getRoundResult(state.round.id);

      setRoundResult(result);
    } catch (err) {
      console.error('Get round result error');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getRoundResult();
  }, [getRoundResult]);

  return (
    <Layout>
      <RoundResult
        totalQuestions={roundResult.total_questions}
        totalCorrectAnswers={roundResult.total_correct_answers}
        onFinish={() => router.push('/')}
      />
    </Layout>
  );
};

export default Result;
