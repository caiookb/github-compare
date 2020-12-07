import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

import { Provider } from "react-redux";
import store from "../../Store";

import renderAppWithState from "../../renderAppWithState";

describe("card component", () => {
  it("should render card ", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Card data-testid="card" repository={{ name: "liferay/senna.js" }} />
      </Provider>
    );
    const el = getByTestId("card");
    expect(el).not.toBeNull();
  });

  it("should get respository list from from redux", () => {
    const [store, wrapper] = renderAppWithState();
    expect(store.getState().repositories).toEqual({ repositoriesList: [] });
  });
});
