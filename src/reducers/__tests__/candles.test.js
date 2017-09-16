import candlesReducer from "../candles.js";
import {
  getCandlesRequest,
  getCandlesSuccess,
  getCandlesFailure
} from "actions/apiActions";

describe("Candles reducer", () => {
  test("#reducer init value", () => {
    expect(candlesReducer(undefined, {})).toEqual({
      enitites: {
        usdbtc: [],
        usdeth: []
      },
      error: {
        error: "",
        pair: null
      },
      isLoaded: false,
      isLoading: false
    });
  });
  [
    ["isLoading", getCandlesRequest],
    ["isLoaded", getCandlesFailure]
  ].forEach(([name, actionCreator]) => {
    test(`${name}`, () => {
      const initState = candlesReducer(undefined, {});
      expect(candlesReducer(initState, actionCreator())[name]).toEqual(true);
    });
  });
  [
    ["isLoaded", getCandlesRequest],
    ["isLoading", getCandlesFailure]
  ].forEach(([name, actionCreator]) => {
    test(`${name}`, () => {
      const initState = candlesReducer(undefined, {});
      expect(candlesReducer(initState, actionCreator())[name]).toEqual(false);
    });
  });
  [["enitites", getCandlesRequest]].forEach(([name, actionCreator]) => {
    test(`${name}`, () => {
      const initState = candlesReducer(undefined, {});
      expect(candlesReducer(initState, actionCreator())[name]).toEqual({
        usdbtc: [],
        usdeth: []
      });
    });
  });
  [["error", getCandlesFailure]].forEach(([name, actionCreator]) => {
    test(`${name}`, () => {
      const initState = candlesReducer(undefined, {});
      expect(
        candlesReducer(
          initState,
          actionCreator("usdbtc", "something went wrong!")
        )[name]
      ).toEqual({ error: "something went wrong!", pair: "usdbtc" });
    });
  });
  [["enitites", getCandlesSuccess]].forEach(([name, actionCreator]) => {
    test(`${name}`, () => {
      const initState = candlesReducer(undefined, {});
      const data = ["date", "open", "close", "high", "low", "volume"];
      expect(
        candlesReducer(initState, actionCreator("usdbtc", data))[name]
      ).toEqual({
        usdbtc: [
          {
            close: "l",
            date: "v",
            high: "u",
            low: "m",
            open: "o",
            volume: "e"
          },
          {
            close: "w",
            date: "l",
            high: undefined,
            low: undefined,
            open: "o",
            volume: undefined
          },
          {
            close: "g",
            date: "h",
            high: "h",
            low: undefined,
            open: "i",
            volume: undefined
          },
          {
            close: "o",
            date: "c",
            high: "s",
            low: "e",
            open: "l",
            volume: undefined
          },
          {
            close: "e",
            date: "o",
            high: "n",
            low: undefined,
            open: "p",
            volume: undefined
          },
          {
            close: "t",
            date: "d",
            high: "e",
            low: undefined,
            open: "a",
            volume: undefined
          }
        ],
        usdeth: []
      });
    });
  });
});
