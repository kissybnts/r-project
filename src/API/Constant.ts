const BASE_URL = 'http://localhost:8080/v1';

export namespace APIConstant {
  export const AUTH_HEADER = {
    'Authorization': 'Bearer ae79fc689ebf06e1cc120a6be460ef946a3a72a8eac7268a069c8f3aecec5886'
  };
  export const URLS = {
    CATEGORIES: `${BASE_URL}/categories`,
    SENTENCES: `${BASE_URL}/sentences`
  };
}