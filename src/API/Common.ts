import axios, { AxiosInstance, AxiosResponse } from 'axios';

export namespace APIConstant {
  const BASE_URL = 'http://localhost:8080/v1';

  export const URLS = {
    LOGIN: `${BASE_URL}/login`,
    SIGN_UP: `${BASE_URL}/signup`,
    CATEGORIES: `${BASE_URL}/categories`,
    SENTENCES: `${BASE_URL}/sentences`
  };

  export function REQUEST_HEADER() {
    const token = sessionStorage.getItem('token');
    return ({'Authorization': `Bearer ${token}`});
  }

  export function getRequest(baseUrl: string): AxiosInstance {
    return axios.create({
      baseURL: baseUrl,
      headers: REQUEST_HEADER()
    });
  }
}

export interface APIResponses {
  response: AxiosResponse;
  error: ErrorResponse | null;
}

export interface ErrorResponse {
  data: string;
  status: number;
}