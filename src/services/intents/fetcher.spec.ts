import { http, HttpResponse } from "msw";

import { fetchIntents } from "./fetcher";
import { server } from "../../mocks/server";

describe("fetchIntents", () => {
  it("returns the intents", async () => {
    const response = await fetchIntents();

    expect(response.length).toEqual(2);
  });

  it("throws an error for non-200 status", async () => {
    server.use(
      http.get(
        "intents.json",
        () => {
          return HttpResponse.error();
        },
        { once: true },
      ),
    );

    await expect(fetchIntents()).rejects.toThrow();
  });
});
