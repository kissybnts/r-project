import { APIConstant, APIResponses } from '../Common';
import { errorHandler } from '../Handler';
import { AxiosInstance } from 'axios';
import { CreateCategoryRequest } from './Requests';

export namespace CategoriesAPI {
  function getRequest(): AxiosInstance {
    return APIConstant.getRequest(APIConstant.URLS.CATEGORIES);
  }

  export const fetchCategories = (): Promise<APIResponses> => {
    return getRequest().get('')
      .then(response => ({ response: response, error: null }))
      .catch(error => ({ response: error, error: errorHandler(error)}));
  };

  export const fetchCategory = (categoryId: number): Promise<APIResponses> => {
    return getRequest().get(String(categoryId))
      .then(response => ({ response: response, error: null }))
      .catch(error => ({ response: error, error: errorHandler(error)}));
  };

  export const createCategory = (request: CreateCategoryRequest): Promise<APIResponses> => {
    return getRequest().post('')
      .then(response => ({ response: response, error: null }))
      .catch(error => ({ response: error, error: errorHandler(error)}));
  }
}