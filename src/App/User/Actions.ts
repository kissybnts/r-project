import { Action } from 'redux';

export enum ActionType {
  LoginRequest = 'login/request',
  LoginSuccess = 'login/success',
  LoginFailure = 'login/failure',
  SignUpRequest = 'signUp/request',
  SignUpSuccess = 'signUp/success',
  SignUpFailure = 'signUp/failure'
}

interface AuthAction extends Action {
  type: ActionType;
}

export interface LoginRequestAction extends AuthAction {
  email: string;
  password: string;
}
export const isLoginRequest = (action: Action): action is LoginRequestAction => action.type === ActionType.LoginRequest;

export interface LoginSuccessAction extends AuthAction {
  user: { id: number, name: string, email: string };
  token: string;
}
export const isLoginSuccess = (action: Action): action is LoginSuccessAction => action.type === ActionType.LoginSuccess;

export interface LoginFailureAction extends AuthAction {
  status: number;
  message: string;
}
export const isLoginFailure = (action: Action): action is LoginFailureAction => action.type === ActionType.LoginFailure;

export interface SignUpRequestAction extends AuthAction {
  name: string;
  email: string;
  password: string;
}
export const isSignUpRequestAction = (action: Action): action is SignUpRequestAction => action.type === ActionType.SignUpRequest;

export interface SignUpSuccessAction extends AuthAction {
  user: { id: number, name: string, email: string };
  token: string;
}
export const isSignUpSuccessAction = (action: Action): action is SignUpSuccessAction => action.type === ActionType.SignUpSuccess;

export interface SignUpFailureAction extends AuthAction {
  status: number;
  message: string;
}
export const isSignUpFailureAction = (action: Action): action is SignUpFailureAction => action.type === ActionType.SignUpFailure;

export type AuthActions = LoginRequestAction | LoginSuccessAction | LoginFailureAction |
  SignUpRequestAction | SignUpSuccessAction | SignUpFailureAction;