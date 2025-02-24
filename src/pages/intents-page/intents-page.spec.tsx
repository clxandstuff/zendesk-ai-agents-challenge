import { render, screen, fireEvent } from "@testing-library/react";
import { delay, http, HttpResponse } from "msw";

import IntentsPage from "./intents-page";
import { server } from "../../mocks/server";
import intents from "../../mocks/data/intents";
import TestSwrConfig from "../../test-utils/test-swr-config";

describe("IntentsPage", () => {
  it("renders the heading", () => {
    render(<IntentsPage />);

    const heading = screen.getByText(/Pretrained Intents/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders intents", async () => {
    render(<IntentsPage />);

    const greetingIntent = await screen.findByText("Greeting");

    expect(greetingIntent).toBeInTheDocument();
  });

  it("allows selecting and unselecting an intent", async () => {
    render(<IntentsPage />);

    const checkboxes = await screen.findAllByRole("checkbox");
    const checkbox = checkboxes[0];

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('selects all intents when "Select All" button is clicked', async () => {
    render(<IntentsPage />);

    const selectAllButton = await screen.findByText(/Select All/i);
    fireEvent.click(selectAllButton);
    const checkboxes = screen.getAllByRole("checkbox");

    checkboxes.forEach((checkbox) => {
      expect(checkbox).toBeChecked();
    });
    expect(screen.getByText(/Unselect All/i)).toBeInTheDocument();
  });

  it("renders loading state", async () => {
    server.use(
      http.get("/intents.json", async () => {
        await delay("infinite");
        return HttpResponse.json(intents);
      }),
    );

    render(
      <TestSwrConfig>
        <IntentsPage />
      </TestSwrConfig>,
    );

    const loadingText = await screen.findByText(/Loading intents.../i);
    expect(loadingText).toBeInTheDocument();
  });

  it("renders error state", async () => {
    server.use(
      http.get("/intents.json", () => {
        throw new Error("Network error");
      }),
    );
    render(
      <TestSwrConfig>
        <IntentsPage />
      </TestSwrConfig>,
    );

    const errorText = await screen.findByText(/Error fetching intents:/i);
    expect(errorText).toBeInTheDocument();
  });
});
