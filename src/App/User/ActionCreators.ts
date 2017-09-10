import {
  ActionType, AuthSaveAction, LoginRequestAction, LoginSuccessAction, OperationType, SignUpRequestAction,
  SignUpSuccessAction
} from './Actions';
import { AuthResponse } from '../../API/User/Responses';

export const createLoginRequestAction = (email: string, password: string): LoginRequestAction =>
  ({ type: ActionType.LoginRequest, email: email, password: password });

export const createLoginSuccessAction = (name: string, email: string): LoginSuccessAction =>
  ({ type: ActionType.LoginSuccess, user: { name: name, email: email } });

export const createSignUpRequestAction = (name: string, email: string, password: string): SignUpRequestAction =>
  ({ type: ActionType.SignUpRequest, name: name, email: email, password: password });

export const createSignUpSuccessAction = (name: string, email: string): SignUpSuccessAction =>
  ({ type: ActionType.SignUpSuccess, user: { name: name, email: email } });

export const createAuthSaveAction = (response: AuthResponse, operationType: OperationType): AuthSaveAction =>
  ({ type: ActionType.AuthSave, user: response.user, token: response.token, operationType: operationType });