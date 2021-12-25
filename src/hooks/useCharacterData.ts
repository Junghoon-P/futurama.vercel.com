import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useCharacterData = () => {
  return useSWR("https://api.sampleapis.com/futurama/characters", fetcher);
};
