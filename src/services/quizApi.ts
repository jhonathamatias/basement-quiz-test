import axios, { Axios } from "axios";
import { AnswerType, CategoryType, RoundResultType, RoundType } from "../types/quizApi";

class QuizApi {
  protected client: Axios = {} as Axios;

  constructor() {
    this.client = this.getConfigClient();
  }

  protected getConfigClient() {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_QUIZ_API_URL,
      responseType: 'json'
    })
  }

  public async getCategories(): Promise<CategoryType[]> {
    try {
      const { data } = await this.client.get('/categories')

      return data.categories
    } catch (err) {
      throw 'Get categories error'
    }
  }

  public async getRound(id: number): Promise<RoundType> {
    try {
      const { data } = await this.client.get(`/rounds/${id}`)

      return data.round
    } catch (err) {
      throw 'Get round error'
    }
  }

  public async getRoundResult(id: number): Promise<RoundResultType> {
    try {
      const { data } = await this.client.get(`/rounds/${id}/result`)

      return data.round

    } catch (err) {
      throw 'Get round error'
    }
  }

  public async createRound(playerName: string, categoryId: number): Promise<RoundType> {
    try {
      const { data } = await this.client.post('/rounds', {
        round: {
          player_name: playerName,
          category_id: categoryId
        }
      });

      return data.round
    } catch (err) {
      throw 'Create round error'
    }
  }

  public async sendAnswer(roundId: number, questionId: number, optionId: number): Promise<AnswerType> {
    try {
      const { data } = await this.client.post(`/rounds/${roundId}/answers`, {
        answer: {
          question_id: questionId,
          option_id: optionId
        }
      });

      return data.answer
    } catch (err) {
      throw 'Send answer error'
    }
  }
}

export default new QuizApi;
