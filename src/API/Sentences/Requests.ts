export interface CreateSentenceRequest {
  user_id: number;
  category_id: number;
  original: string;
  translation: string;
}