import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("card component", () => {
  it("should render card with props", () => {
    const { getByTestId } = render(
      <div data-testid="card">
        <Card data-testid="card" />
      </div>
    );
    const el = getByTestId("card");
    expect(el).not.toBeNull();
  });
});
