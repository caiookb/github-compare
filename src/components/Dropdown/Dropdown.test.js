import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("dropwdown component", () => {
  it("should render dropwdown with props", () => {
    const { getByTestId } = render(
      <div data-testid="dropdown">
        <Dropdown
          data-testid="dropdown"
          title={"Test"}
          options={[{ title: 1, value: true }]}
          icon={"testing"}
        />
      </div>
    );
    const el = getByTestId("dropdown");
    expect(el).not.toBeNull();
  });
});
