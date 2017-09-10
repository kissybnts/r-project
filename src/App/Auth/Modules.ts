import { Action } from 'redux';
import { isLoginSuccess, isSignUpSuccessAction } from './Actions';

export interface UserState {
  user: { name: string, email: string };
  isLoggedIn: boolean;
}

const initialState: UserState = { user: { name: '', email: '' }, isLoggedIn: false };

export default function reducer(state: UserState = initialState, action: Action): UserState {
  if (isLoginSuccess(action)) {
    return { user: action.user, isLoggedIn: true };
  } else if (isSignUpSuccessAction(action)) {
    return { user: action.user, isLoggedIn: true };
  }

  return state;
}