const BASE_URL = 'http://localhost:8080/v1';

export namespace APIConstant {
  export const AUTH_HEADER = {
    'Authorization': 'Bearer 6d891348d5725ad2617c4b27da468b6b1360a8d405e5b0f00a5a7007edf4bd92'
  };
  export const URLS = {
    CATEGORIES: `${BASE_URL}/categories`,
    SENTENCES: `${BASE_URL}/sentences`
  };
}

export interface ErrorResponse {
  data: string;
  status: number;
}