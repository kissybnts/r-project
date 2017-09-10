import {
  ActionType, LoginRequestAction, LoginSuccessAction, SignUpRequestAction,
  SignUpSuccessAction
} from './Actions';
import { AuthResponse } from '../../../API/Auth/Responses';

export const createLoginRequestAction = (email: string, password: string): LoginRequestAction =>
  ({ type: ActionType.LoginRequest, email: email, password: password });

export const createLoginSuccessAction = (response: AuthResponse): LoginSuccessAction => 
  ({ type: ActionType.LoginSuccess, user: response.user, token: response.token });

export const createSignUpRequestAction = (name: string, email: string, password: string): SignUpRequestAction =>
  ({ type: ActionType.SignUpRequest, name: name, email: email, password: password });

export const createSignUpSuccessAction = (response: AuthResponse): SignUpSuccessAction =>
  ({ type: ActionType.SignUpSuccess, user: response.user, token: response.token });