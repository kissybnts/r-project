import axios from 'axios';
import { APIConstant, APIResponses } from '../Common';
import { errorHandler } from '../Handler';

export namespace CategoriesAPI {
  const request = axios.create({
    baseURL: APIConstant.URLS.CATEGORIES,
    headers: APIConstant.REQUEST_HEADER()
  });

  export const fetchCategory = (categoryId: number): Promise<APIResponses> => {
    return request.get(String(categoryId))
      .then(response => ({ response: response, error: null }))
      .catch(error => ({ response: error, error: errorHandler(error)}));
  };
}