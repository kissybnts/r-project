import { SentenceResponse } from '../Sentences/Responses';

export interface CategoryResponse {
  id: number;
  name: string;
  sentences: SentenceResponse[];
}