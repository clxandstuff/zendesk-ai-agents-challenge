import { http, HttpResponse } from "msw";

import intents from "./data/intents";

export const handlers = [
  http.get("intents.json", () => {
    return HttpResponse.json(intents);
  }),
];
