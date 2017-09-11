import { AxiosInstance } from 'axios';
import { errorHandler } from '../Handler';
import { APIConstant, APIResponses } from '../Common';
import { CreateSentenceRequest } from './Requests';

export namespace SentencesAPI {
  function getRequest(): AxiosInstance {
    return APIConstant.getRequest(APIConstant.URLS.SENTENCES);
  }

  export function createSentence(newSentence: CreateSentenceRequest): Promise<APIResponses> {
    return getRequest().post('', newSentence)
      .then(response => ({ response: response, error: null }))
      .catch(error => ({ response: error, error: errorHandler(error)}));
  }
}