import { Action } from "redux";
import { isLoginSuccess } from "./Actions";

export interface AuthState {
  user: { id: number, name: string, email: string };
  token: string;
}

const initialState: AuthState = { user: { id: -1, name: '', email: '' }, token: '' };

export default function reducer(state: AuthState = initialState, action: Action): AuthState {
  if (isLoginSuccess(action)) {
    return { user: action.user, token: action.token };
  }
}