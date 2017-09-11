import { CategoriesState } from './Categories/Modules';
import { SentencesState } from './Sentences/Modules';
import { SentencesActions } from './Sentences/Actions';
import { CategoriesActions } from './Categories/Actions';

export interface LanguageState {
  categories: CategoriesState;
  sentences: SentencesState;
}

export type LanguageActions = CategoriesActions | SentencesActions;