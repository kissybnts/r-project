import { AxiosResponse } from 'axios';

export namespace APIConstant {
  const BASE_URL = 'http://localhost:8080/v1';
  export const REQUEST_HEADER = () => {
    const token = sessionStorage.getItem('token');
    return ({'Authorization': `Bearer ${token}`});
  };
  export const URLS = {
    LOGIN: `${BASE_URL}/login`,
    SIGN_UP: `${BASE_URL}/signup`,
    CATEGORIES: `${BASE_URL}/categories`,
    SENTENCES: `${BASE_URL}/sentences`
  };
}

export interface APIResponses {
  response: AxiosResponse;
  error: ErrorResponse | null;
}

export interface ErrorResponse {
  data: string;
  status: number;
}