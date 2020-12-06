import React from "react";
import { render } from "@testing-library/react";
import InputDropdown from "./InputDropdown";

describe("InputDropdown component", () => {
  it("should InputDropdown ", () => {
    const { getByTestId } = render(
      <div data-testid="inputDropdown">
        <InputDropdown />
      </div>
    );
    const el = getByTestId("inputDropdown");
    expect(el).not.toBeNull();
  });
});
