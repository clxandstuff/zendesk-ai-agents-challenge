import { renderHook, waitFor } from "@testing-library/react";

import { useIntents } from "./hooks";

describe("useIntents", () => {
  it("returns the intents", async () => {
    const { result } = renderHook(() => useIntents());

    await waitFor(() => {
      expect(result.current.data && result.current.data.length).toEqual(2);
      expect(result.current.data && result.current.data[0]).toEqual({
        id: "34d7831e137a4016a55f98926800a643",
        name: "Greeting",
        description: "The visitor says hello.",
        trainingData: {
          expressionCount: 145,
          expressions: [
            {
              id: "6399fd6989984c7b871c6301744b0af5",
              text: "Hello",
            },
          ],
        },
        reply: {
          id: "f35d7e0936a44102bac9cb96c81eec3b",
          text: "Hello :) How can I help you?",
        },
      });
    });
  });
});
