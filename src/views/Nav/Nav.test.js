import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";

import { Provider } from "react-redux";
import store from "../../Store";

import renderAppWithState from "../../renderAppWithState";

describe("nav component", () => {
  it("should render Nav component", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Nav data-testid="nav" />
      </Provider>
    );
    const el = getByTestId("nav");
    expect(el).not.toBeNull();
  });

  it("should get default userOptions from from redux", () => {
    const [store, wrapper] = renderAppWithState();
    expect(store.getState().userOptions).toEqual({
      darkMode: false,
      cardView: "cards",
      filterFavorite: false,
    });
  });
});
