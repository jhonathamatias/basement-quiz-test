import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../../../src/components/templates/Layout';
import RoundResult from '../../../src/components/UI/organisms/RoundResult';
import quizApi from '../../../src/services/quizApi';
import { useGameContext } from '../../../src/store/GameContext';
import { RoundResultType } from '../../../src/types/quizApi';

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
  }, [state.round.id]);

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
