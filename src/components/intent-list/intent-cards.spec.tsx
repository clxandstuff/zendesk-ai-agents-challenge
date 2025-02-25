import { screen, render, fireEvent, within } from "@testing-library/react";

import IntentCards from "./intent-cards";
import intents from "../../mocks/data/intents";

describe("IntentCards", () => {
  it("displays intents", () => {
    render(<IntentCards intents={intents} />);

    const intentsList = screen.getAllByRole("checkbox");
    expect(intentsList.length).toBe(intents.length);
    expect(
      screen.getByRole("checkbox", {
        name: "Greeting The visitor says hello. Example Expression: - Hello",
      }),
    ).toBeInTheDocument();
  });

  it("intent can be selecte/unselected", () => {
    render(<IntentCards intents={intents} />);

    const firstIntentCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(firstIntentCheckbox);
    expect(firstIntentCheckbox).toBeChecked();

    fireEvent.click(firstIntentCheckbox);
    expect(firstIntentCheckbox).not.toBeChecked();
  });

  it("intents can be selected/deselected all at once", () => {
    render(<IntentCards intents={intents} />);

    const selectAllButton = screen.getByText(/Select All/i);
    fireEvent.click(selectAllButton);
    const intentsList = screen.getAllByRole("checkbox");

    intentsList.forEach((intent) => {
      expect(intent).toBeChecked();
    });
    expect(screen.getByText(/Unselect All/i)).toBeInTheDocument();

    fireEvent.click(selectAllButton);
    intentsList.forEach((intent) => {
      expect(intent).not.toBeChecked();
    });
  });

  it("more details can be displayed on click", () => {
    render(<IntentCards intents={intents} />);
    const firstIntentName = screen.getByRole("button", { name: "Greeting" });
    fireEvent.click(firstIntentName);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    const withinDialog = within(dialog);
    expect(
      withinDialog.getByRole("heading", { name: "Greeting" }),
    ).toBeInTheDocument();
    expect(
      withinDialog.getByText(/The visitor says hello/i),
    ).toBeInTheDocument();
    expect(withinDialog.getByText(/145/i)).toBeInTheDocument();

    intents[0].trainingData.expressions.forEach((expression) => {
      expect(
        withinDialog.getByText(new RegExp(`- ${expression.text}`)),
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/Close/i));
    expect(dialog).not.toBeInTheDocument();
  });
});
