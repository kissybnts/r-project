import { SentenceResponse } from '../Sentences/Responses';

export interface CategoriesResponse {
  categories: { id: number, name: string }[];
}

export interface CategoryResponse {
  id: number;
  name: string;
}

export interface CategoryDetailResponse {
  id: number;
  name: string;
  sentences: SentenceResponse[];
}