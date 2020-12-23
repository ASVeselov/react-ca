import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiResponseSuccess<T> {
  response: T;
  errorCode: 0;
  errorMessage: null;
}

export interface ApiResponseError {
  response: unknown;
  errorCode: 1;
  errorMessage: string;
}

export type ApiResponse<T = unknown> = ApiResponseSuccess<T> | ApiResponseError;

export interface IApi {
  post<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>>;

  get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>>;
}
