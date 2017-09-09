import { AxiosError } from 'axios';
import { ErrorResponse } from './Common';

export const errorHandler = (error: AxiosError): ErrorResponse => {
  if (error.response) {
    return { status: error.response.status, data: error.response.data };
  } else {
    return { status: 500, data: 'Something error has occurred' };
  }
};