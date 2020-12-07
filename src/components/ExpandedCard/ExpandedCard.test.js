import React from "react";
import { render } from "@testing-library/react";
import ExpandedCard from "./ExpandedCard";

import { Provider } from "react-redux";
import store from "../../Store";

import renderAppWithState from "../../renderAppWithState";

describe("expanded card component", () => {
  it("should render expanded card ", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ExpandedCard
          data-testid="expandedCard"
          repository={{ name: "liferay/senna.js" }}
        />
      </Provider>
    );
    const el = getByTestId("expandedCard");
    expect(el).not.toBeNull();
  });

  it("should get respository list from from redux", () => {
    const [store, wrapper] = renderAppWithState();
    expect(store.getState().repositories).toEqual({ repositoriesList: [] });
  });
});
