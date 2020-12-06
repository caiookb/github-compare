import React from "react";
import { render } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal component", () => {
  it("should render modal", () => {
    const { getByTestId } = render(
      <div data-testid="modal">
        <Modal icon={"icon"} color={"blue"} item={{ title: 1 }} />
      </div>
    );
    const el = getByTestId("modal");
    expect(el).not.toBeNull();
  });
});
