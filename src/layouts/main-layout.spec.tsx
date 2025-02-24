import { render, screen } from "@testing-library/react";

import MainLayout from "./main-layout";

describe("MainLayout", () => {
  it("renders children", () => {
    render(<MainLayout children={<>main content</>} />);

    expect(screen.getByText("main content")).toBeInTheDocument();
  });

  it("renders header", () => {
    render(<MainLayout header={<>header</>} />);

    expect(screen.getByText("header")).toBeInTheDocument();
  });
});
