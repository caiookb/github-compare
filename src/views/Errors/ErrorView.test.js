import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";

import { emptyRepoImage } from "../../assets/images";

import ErrorView from "./ErrorView";

describe("ErrorView Component", () => {
  it("should render component", () => {
    const { getByTestId } = render(<ErrorView data-testid="errorView" />);
    const el = getByTestId("errorView");
    expect(el).not.toBeNull();
  });

  it("renders an image", () => {
    const logo = shallow(<ErrorView />);
    expect(logo.find("img").prop("src")).toEqual(emptyRepoImage);
  });
});
