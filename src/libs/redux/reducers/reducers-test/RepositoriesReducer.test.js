import React from "react";
import { render } from "@testing-library/react";
import RepositoriesReducer from "../RepositoriesReducer";

describe("Repositories Reducer", () => {
  it("Has a default state", () => {
    expect(RepositoriesReducer(undefined, { type: "unexpected" })).toEqual({
      repositoriesList: [],
    });
  });

  it("can handle SAVE_REPOSITORIES", () => {
    expect(
      RepositoriesReducer(undefined, {
        type: "SAVE_REPOSITORIES",
        payload: [{ name: "user/repository" }],
      })
    ).toEqual({
      repositoriesList: [{ name: "user/repository" }],
    });
  });

  it("can handle CLEAN_REPOSITORIES", () => {
    expect(
      RepositoriesReducer(undefined, {
        type: "CLEAN_REPOSITORIES",
        payload: [],
      })
    ).toEqual({
      repositoriesList: [],
    });
  });
});
