import {
  AuthSaveAction, isAuthSaveAction,
  isLoginRequest, isSignUpRequestAction, LoginRequestAction, OperationType,
  SignUpRequestAction
} from '../../../App/Auth/Actions';
import { call, put, take } from 'redux-saga/effects';
import { LoginRequest, SignUpRequest } from '../../../API/User/Requests';
import { APIResponses } from '../../../API/Common';
import { AuthAPI } from '../../../API/User/AuthAPI';
import {
  createAuthSaveAction, createLoginSuccessAction,
  createSignUpSuccessAction
} from '../../../App/Auth/ActionCreators';
import { AuthResponse } from '../../../API/User/Responses';
import { ConstantKey } from '../../../Constant/ConstantWord';

export function* handleLoginRequestAction() {
  while (true) {
    const action: LoginRequestAction = yield take(isLoginRequest);
    let request: LoginRequest = { email: action.email, password: action.password };
    const apiResponses: APIResponses = yield call(AuthAPI.login, request);
    if (!apiResponses.error) {
      yield put(createAuthSaveAction(<AuthResponse> apiResponses.response.data, OperationType.Login));
    } else {
      console.log(apiResponses.error);
    }
  }
}

export function* handleSignUpRequestAction() {
  while (true) {
    const action: SignUpRequestAction = yield take(isSignUpRequestAction);
    let request: SignUpRequest = { name: action.name, email: action.email, password: action.password };
    const apiResponses: APIResponses = yield call(AuthAPI.signUp, request);
    if (!apiResponses.error) {
      yield put(createAuthSaveAction(<AuthResponse> apiResponses.response.data, OperationType.SignUp));
    } else {
      console.log(apiResponses.error);
    }
  }
}

export function* handleAuthSaveAction() {
  while (true) {
    const action: AuthSaveAction = yield take(isAuthSaveAction);
    
    sessionStorage.setItem(ConstantKey.USER_ID, String(action.user.id));
    sessionStorage.setItem(ConstantKey.TOKEN, action.token);
    
    switch (action.operationType) {
      case OperationType.Login:
        yield put(createLoginSuccessAction(action.user.name, action.user.email));
        break;
      case OperationType.SignUp:
        yield put(createSignUpSuccessAction(action.user.name, action.user.email));
        break;
      default:
        break;
    }
  }
}