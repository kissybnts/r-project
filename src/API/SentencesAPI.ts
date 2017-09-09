import axios, { AxiosResponse } from 'axios';
import { APIConstant, ErrorResponse } from './Constant';
import { errorHandler } from './Handler';

export interface CreateSentenceRequest {
  user_id: number;
  category_id: number;
  original: string;
  translation: string;
}

export interface SentenceResponse {
  id: number;
  category_id: number;
  original: string;
  translation: string;
}

export interface APIResponses {
  response: AxiosResponse;
  error: ErrorResponse | null;
}

export class SentencesAPI {
  createSentence(newSentence: CreateSentenceRequest) {
    let request = axios.create({
      baseURL: APIConstant.URLS.SENTENCES,
      headers: APIConstant.AUTH_HEADER
    });
    return request.post('', newSentence)
      .then(response => ({ response: response, error: null }))
      .catch(error => ({ response: error, error: errorHandler(error)}));
  }
}

export const sentencesApi = new SentencesAPI();