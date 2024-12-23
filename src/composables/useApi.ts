// import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { AxisConfigurationBase } from "billboard.js";
import axios from "axios";
import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { useUserSession } from "../stores/useUserSession";
import { useNotyf } from "./notyf";
import { useRouter } from "vue-router";
const { VITE_API_BASE_URL } = import.meta.env;

interface CustomAxiosInstance extends AxiosInstance {}
let api: CustomAxiosInstance | null = null;

function createApi(): CustomAxiosInstance {
  const userSession = useUserSession();
  const router = useRouter();
  const notyf = useNotyf();
  const axiosInstance = axios.create({
    baseURL: "https://stcok-manager-backend.vercel.app/api/",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });

  axiosInstance.interceptors.request.use((config) => {
    if (userSession.token) {
      config.headers.Authorization = `Bearer ${userSession.token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        userSession.logoutUser();
        router.push("/");
      }
      notyf.error("Unauthorized Request !");
      return Promise.reject(error);
    }
  );

  return axiosInstance as CustomAxiosInstance;
}

export function useApi(): CustomAxiosInstance {
  if (!api) {
    api = createApi();
  }
  return api;
}
