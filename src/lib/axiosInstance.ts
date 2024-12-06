/* eslint-disable @typescript-eslint/no-explicit-any */
import { envConfig } from "@/config";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: envConfig.api_host,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      if (config.headers) {
        config.headers["cookie"] = `accessToken=${accessToken}`;
      } else {
        (config as any).headers = {
          cookie: `accessToken=${accessToken}`,
        };
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(function (response) {
  return response;
});

export default axiosInstance;
