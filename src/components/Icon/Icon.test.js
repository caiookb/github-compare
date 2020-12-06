import React from "react";
import { render } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon component", () => {
  it("should render icon", () => {
    const { getByTestId } = render(
      <div data-testid="icon">
        <Icon />
      </div>
    );
    const el = getByTestId("icon");
    expect(el).not.toBeNull();
  });
});
