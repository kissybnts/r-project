import axios from 'axios';
import { errorHandler } from '../Handler';
import { APIConstant, APIResponses } from '../Common';
import { CreateSentenceRequest } from './Requests';

export namespace SentencesAPI {
  const request = axios.create({
    baseURL: APIConstant.URLS.SENTENCES,
    headers: APIConstant.REQUEST_HEADER
  });

  export const createSentence = (newSentence: CreateSentenceRequest): Promise<APIResponses> => {
    return request.post('', newSentence)
      .then(response => ({ response: response, error: null }))
      .catch(error => ({ response: error, error: errorHandler(error)}));
  };
}