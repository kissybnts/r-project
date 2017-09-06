import { CategoriesState } from './Categories/Modules';
import { SentencesState } from './Sentences/Modules';
import { SentencesActions } from './Sentences/Actions';

export interface LanguageState {
  categories: CategoriesState;
  sentences: SentencesState;
}

export type LanguageActions = SentencesActions;