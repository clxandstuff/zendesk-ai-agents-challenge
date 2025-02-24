import { render, screen, fireEvent } from "@testing-library/react";

import IntentsPage from "./IntentsPage";

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

    const selectAllButton = screen.getByText(/Select All/i);
    fireEvent.click(selectAllButton);
    const checkboxes = screen.getAllByRole("checkbox");

    checkboxes.forEach((checkbox) => {
      expect(checkbox).toBeChecked();
    });
    expect(screen.getByText(/Unselect All/i)).toBeInTheDocument();
  });
});
