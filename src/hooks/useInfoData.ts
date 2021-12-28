import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { API_ENDPOINT } from "../constants";

export const useInfoData = () => {
  return useSWR(`${API_ENDPOINT}/info`, fetcher);
};
