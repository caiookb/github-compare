import OptionsReducer from "../OptionsReducer";

describe("Options Reducer", () => {
  it("Has a default state", () => {
    expect(OptionsReducer(undefined, { type: "unexpected" })).toEqual({
      darkMode: false,
      cardView: "cards",
      filterFavorite: false,
    });
  });

  it("can handle SET_DARK_MODE", () => {
    expect(
      OptionsReducer(undefined, {
        type: "SET_DARK_MODE",
        payload: true,
      })
    ).toEqual({
      darkMode: true,
      cardView: "cards",
      filterFavorite: false,
    });
  });

  it("can handle SET_CARDS_VIEW", () => {
    expect(
      OptionsReducer(undefined, {
        type: "SET_CARDS_VIEW",
        payload: "list",
      })
    ).toEqual({
      darkMode: false,
      cardView: "list",
      filterFavorite: false,
    });
  });

  it("can handle SET_FAVORITE_FILTER", () => {
    expect(
      OptionsReducer(undefined, {
        type: "SET_FAVORITE_FILTER",
        payload: true,
      })
    ).toEqual({
      darkMode: false,
      cardView: "cards",
      filterFavorite: true,
    });
  });

  it("can handle SETUP_USER_OPTIONS", () => {
    expect(
      OptionsReducer(undefined, {
        type: "SETUP_USER_OPTIONS",
        payload: { darkMode: true, cardView: "list", filterFavorite: true },
      })
    ).toEqual({
      darkMode: true,
      cardView: "list",
      filterFavorite: true,
    });
  });
});
