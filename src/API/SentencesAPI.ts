import axios, { AxiosInstance } from 'axios';
import { APIConstant } from './Constant';

class SentencesAPI {
  private axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: APIConstant.URLS.SENTENCES,
      headers: APIConstant.AUTH_HEADER
    });
  }

  createSentence(userId: number, categoryId: number, original: string, translation: string) {
    this.axios
      .post('', { user_id: userId, category_id: categoryId, original: original, translation: translation })
      .then(response => {
        console.log(response.data);
      });
  }
}

export const sentencesApi = new SentencesAPI();