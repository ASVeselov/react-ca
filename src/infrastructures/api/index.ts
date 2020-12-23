import { AxiosStatic, AxiosInstance } from "axios";
import { IApi, ApiResponse, ApiResponseError } from "../interfaces/iApi";

class Api implements IApi {
  private readonly api: AxiosInstance;

  constructor(axios: AxiosStatic) {
    this.api = axios.create();
  }

  async get<T>(url: string) {
    try {
      const response = await this.api.get<ApiResponse<T>>(url);
      return response.data;
    } catch (error) {
      const err: ApiResponseError = {
        response: {},
        errorCode: 1,
        errorMessage: error,
      };
      return err;
    }
  }

  async post<T>(url: string) {
    try {
      const response = await this.api.post<ApiResponse<T>>(url);
      return response.data;
    } catch (error) {
      const err: ApiResponseError = {
        response: {},
        errorCode: 1,
        errorMessage: error,
      };
      return err;
    }
  }
}

export default Api;
