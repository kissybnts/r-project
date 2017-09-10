import axios from 'axios';
import { LoginRequest, SignUpRequest } from './Requests';
import { APIConstant, APIResponses } from '../Common';
import { errorHandler } from '../Handler';

export namespace AuthAPI {
  const request = axios.create();
  export const login = (loginRequest: LoginRequest): Promise<APIResponses> => {
    return request.post(APIConstant.URLS.LOGIN, loginRequest)
      .then(response => ({ response: response, error: null }))
      .catch(error => ({ response: error, error: errorHandler(error) }));
  };
  export const signUp = (signUpRequest: SignUpRequest): Promise<APIResponses> => {
    return request.post(APIConstant.URLS.SIGN_UP, signUpRequest)
      .then(response => ({ response: response, error: null }))
      .catch(error => ({ response: error, error: errorHandler(error) }));
  };
}