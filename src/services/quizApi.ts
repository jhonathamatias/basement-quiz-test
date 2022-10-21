import axios, { Axios } from "axios";

export default class QuizApi {
  protected client: Axios = {} as Axios;

  constructor() {
    this.client = this.getConfigClient();
  }

  protected getConfigClient() {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_QUIZ_API_URL,
      headers: {
        'content-type': 'application/json'
      },
      responseType: 'json'
    })
  }

  public async getCategories() {
    try {
      const { data } = await this.client.get('/categories')
      
      return data.categories
    } catch (err) {
      throw 'Get categories error'
    }
  }

  public async getRound(id: number) {
    try {
      const { data } = await this.client.get(`/rounds/${id}`)
      
      return data.round
    } catch (err) {
      throw 'Get round error'
    }
  }

  public async getRoundResult(id: number) {
    try {
      const { data } = await this.client.get(`/rounds/${id}/result`)
      
      return data.round

    } catch (err) {
      throw 'Get round error'
    }
  }

  public async createRound() {
    try {
      const { data } = await this.client.post('/rounds')
      
      return data.round

    } catch (err) {
      throw 'Create round error'
    }
  }
}

