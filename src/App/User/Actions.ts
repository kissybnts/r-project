import { Action } from 'redux';

export enum ActionType {
  LoginRequest = 'login/request',
  LoginSuccess = 'login/success',
  LoginFailure = 'login/failure',
  SignUpRequest = 'signUp/request',
  SignUpSuccess = 'signUp/success',
  SignUpFailure = 'signUp/failure',
  AuthSave = 'auth/save'
}

export enum OperationType {
  Login = 'login',
  SignUp = 'signUp'
}

interface UserAction extends Action {
  type: ActionType;
}

export interface LoginRequestAction extends UserAction {
  email: string;
  password: string;
}
export const isLoginRequest = (action: Action): action is LoginRequestAction => action.type === ActionType.LoginRequest;

export interface LoginSuccessAction extends UserAction {
  user: { name: string, email: string };
}
export const isLoginSuccess = (action: Action): action is LoginSuccessAction => action.type === ActionType.LoginSuccess;

export interface LoginFailureAction extends UserAction {
  status: number;
  message: string;
}
export const isLoginFailure = (action: Action): action is LoginFailureAction => action.type === ActionType.LoginFailure;

export interface SignUpRequestAction extends UserAction {
  name: string;
  email: string;
  password: string;
}
export const isSignUpRequestAction = (action: Action): action is SignUpRequestAction => action.type === ActionType.SignUpRequest;

export interface SignUpSuccessAction extends UserAction {
  user: { name: string, email: string };
}
export const isSignUpSuccessAction = (action: Action): action is SignUpSuccessAction => action.type === ActionType.SignUpSuccess;

export interface SignUpFailureAction extends UserAction {
  status: number;
  message: string;
}
export const isSignUpFailureAction = (action: Action): action is SignUpFailureAction => action.type === ActionType.SignUpFailure;

export interface AuthSaveAction extends UserAction {
  user: { id: number, name: string, email: string };
  token: string;
  operationType: OperationType;
}
export const isAuthSaveAction = (action: Action): action is AuthSaveAction => action.type === ActionType.AuthSave;

export type UserActions = LoginRequestAction | LoginSuccessAction | LoginFailureAction |
  SignUpRequestAction | SignUpSuccessAction | SignUpFailureAction | AuthSaveAction;