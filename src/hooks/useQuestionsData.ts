import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { API_ENDPOINT } from "../constants";

export const useQuestionsData = (path: number) => {
  return useSWR(`${API_ENDPOINT}/questions/${path}`, fetcher);
};
