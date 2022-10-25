export type CategoryType = {
  id: number;
  name: string;
};

export type QuestionOptionType = {
  id: number;
  label: string;
};

export type QuestionType = {
  id: number;
  description: string;
  options: QuestionOptionType[];
};

export type Answer = {
  id: number;
  question_id: number;
  option_id: number;
  correct: boolean;
};

export type RoundType = {
  id: number;
  player_id: number;
  questions: QuestionType[];
  answers: Answer[];
};

export type AnswerType = {
  correct: boolean;
  id: number;
  option_id: number;
  question_id: number;
};

export type RoundResultType = {
  id: number;
  player_id: number;
  total_questions: number;
  total_answered_questions: number;
  total_correct_answers: number;
};
