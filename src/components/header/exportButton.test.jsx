import React from "react";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "./../../store/configureStore";
import Theme from "../themes/theme";
import ExportButton from "./exportButton";

afterEach(cleanup);

describe("ExportButton", () => {
  it("renders correctly", () => {
    const store = configureStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Theme>
            <ExportButton />
          </Theme>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
