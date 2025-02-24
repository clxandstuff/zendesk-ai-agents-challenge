import useSWR from "swr";

import { Intent } from "./types";
import { fetchIntents } from "./service";

export const useIntents = () => {
  return useSWR<Intent[]>("/intents.json", fetchIntents);
};
