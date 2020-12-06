import React from "react";
import { render } from "@testing-library/react";
import Input from "./TextInput";

describe("TextInput component", () => {
  it("should render input with icon", () => {
    const { container } = render(<Input icon={"icon"} />);
    expect(container.querySelector("div")).not.toBe(null);
  });
});
