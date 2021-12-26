import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { API_ENDPOINT } from "../constants";

export const useEpisodeData = (path: string | undefined | string[]) => {
  return useSWR(`${API_ENDPOINT}/episodes/${path}`, fetcher);
};
