import * as util from "../util";

describe("getItemsToShow", () => {
  test("0 port height", () => {
    expect(util.getItemsToShow(0, 0, 0, 0, 0)).toEqual({ itemFrom: null, itemTo: null });
  });

  test("port taller than all items", () => {
    expect(util.getItemsToShow(195, 10, 10, 10, 0)).toEqual({ itemFrom: 0, itemTo: 9 });
  });

  test("overflowing items zero scroll", () => {
    expect(util.getItemsToShow(195, 10, 10, 100, 0)).toEqual({ itemFrom: 0, itemTo: 19 });
  });

  test("overflowing items some scroll", () => {
    expect(util.getItemsToShow(195, 10, 10, 100, 50)).toEqual({ itemFrom: 0, itemTo: 29 });
  });
});
