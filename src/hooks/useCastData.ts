import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { API_ENDPOINT } from "../constants";

export const useCastData = (path: string | undefined | string[]) => {
  return useSWR(`${API_ENDPOINT}/cast/${path}`, fetcher);
};
