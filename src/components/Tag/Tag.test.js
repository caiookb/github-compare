import React from "react";
import { render } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag component", () => {
  it("should render tag", () => {
    const { getByTestId } = render(
      <div data-testid="tag">
        <Tag />
      </div>
    );
    const el = getByTestId("tag");
    expect(el).not.toBeNull();
  });
});
