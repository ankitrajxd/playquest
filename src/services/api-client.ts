import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../hooks/useData";

// USING ENV VARIABLES IN VITE.
const { VITE_REACT_APP_API_KEY } = import.meta.env;

export const { VITE_GOOLGE_AI_API_KEY } = import.meta.env;

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: VITE_REACT_APP_API_KEY,
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
